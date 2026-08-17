/**
 * src/utils/fractionUtils.ts
 * Commercial-grade refactor: tape-measure precision snapping + strict regex parsing + zero syntax bugs
 */

export type UnitType = 'metric' | 'imperial';

// Floating-point comparison tolerance
const EPSILON = 1e-9;
// Default maximum denominator (highest common woodworking precision: 1/64)
const DEFAULT_MAX_DENOMINATOR = 64;

export interface FractionResult {
  whole: number;
  numerator: number;
  denominator: number;
}

export interface FormatOptions {
  maxDenominator?: number;
  showUnit?: boolean;
  unitSymbol?: string;
  unitType?: UnitType;
}

/* ============================ 1. Core Math Engine ============================ */

/**
 * Strict greatest common divisor (GCD)
 */
function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  
  if (a === 0) return b;
  if (b === 0) return a;
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

/**
 * Simplify a fraction, ensuring the denominator is positive
 */
function simplifyFraction(numerator: number, denominator: number): { n: number; d: number } {
  if (denominator === 0) throw new Error('Denominator cannot be zero');
  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }
  const divisor = gcd(numerator, denominator);
  return {
    n: numerator / divisor,
    d: denominator / divisor
  };
}

/**
 * 🔑 Core business algorithm: Tape Measure Snapping
 * Forces the fractional part to snap onto real woodworking graduations of 2, 4, 8, 16, 32, and 64,
 * rejecting meaningless fractions like 1/3 or 1/5.
 */
function snapToTapeMeasure(value: number, maxDenom: number): { n: number; d: number } {
  if (value < EPSILON) return { n: 0, d: 1 };
  if (value > 1 - EPSILON) return { n: 1, d: 1 };

  // Strictly limited to graduations found on a tape measure
  const validDenominators = [2, 4, 8, 16, 32, 64].filter(d => d <= maxDenom);
  if (validDenominators.length === 0) validDenominators.push(1);

  let bestN = 0;
  let bestD = 1;
  let minError = Infinity;

  for (const d of validDenominators) {
    const n = Math.round(value * d);
    const error = Math.abs(value - n / d);
    
    // EPSILON accounts for tiny deviations from floating-point arithmetic
    if (error < minError - EPSILON) {
      minError = error;
      bestN = n;
      bestD = d;
    }
  }

  return simplifyFraction(bestN, bestD);
}

/* ============================ 2. Public API ============================ */

/**
 * Decimal to fraction object (full support for negative numbers)
 */
export function decimalToFraction(
  decimal: number,
  maxDenominator: number = DEFAULT_MAX_DENOMINATOR
): FractionResult {
  if (isNaN(decimal) || !isFinite(decimal)) {
    return { whole: 0, numerator: 0, denominator: 1 };
  }
  
  const isNegative = decimal < 0;
  const absDecimal = Math.abs(decimal);
  
  const whole = Math.floor(absDecimal + EPSILON);
  const fractionalPart = absDecimal - whole;
  
  const { n, d } = snapToTapeMeasure(fractionalPart, maxDenominator);
  
  // If the snapped fraction carried over (e.g., 64/64 became 1/1)
  if (n === d) {
    return {
      whole: isNegative ? -(whole + 1) : (whole + 1),
      numerator: 0,
      denominator: 1
    };
  }

  return {
    whole: isNegative ? -whole : whole,
    numerator: n,
    denominator: d
  };
}

/**
 * 🔑 Commercial-grade lenient parser (fixes the AI regex disaster)
 * Supports "1 3/4", "1-3/4", "7/4", "1.75", ".5", "-1/2", etc.
 */
export function fractionToDecimal(input: string | number | undefined | null): number {
  if (input === null || input === undefined) return NaN;
  if (typeof input === 'number') return isNaN(input) ? NaN : input;
  
  const cleaned = input.trim().replace(/["']/g, '');
  if (!cleaned) return NaN;
  
  // 1. Try pure decimal (e.g., 1.75, .5, -0.5)
  // Regex fix: added the escape character \
  if (/^-?\d*\.?\d+$/.test(cleaned) && !cleaned.includes('/')) {
    return parseFloat(cleaned);
  }
  
  // 2. Try improper fraction "7/4", "-7/4"
  const improperMatch = cleaned.match(/^(-?\d+)\/(\d+)$/);
  if (improperMatch) {
    const n = parseInt(improperMatch[1], 10);
    const d = parseInt(improperMatch[2], 10);
    return d === 0 ? NaN : n / d;
  }
  
  // 3. Try mixed number "1 3/4", "1-3/4", "-1 3/4"
  const mixedMatch = cleaned.match(/^(-?\d+)[\s-]+(\d+)\/(\d+)$/);
  if (mixedMatch) {
    const whole = parseInt(mixedMatch[1], 10);
    const n = parseInt(mixedMatch[2], 10);
    const d = parseInt(mixedMatch[3], 10);
    
    if (d === 0) return NaN;
    
    const fractionalValue = n / d;
    return whole >= 0 
      ? whole + fractionalValue 
      : whole - fractionalValue;
  }
  
  // 4. Try pure integer
  if (/^-?\d+$/.test(cleaned)) {
    return parseInt(cleaned, 10);
  }
  
  return NaN;
}

// Alias to maintain compatibility with legacy code
export const parseInputToNumber = fractionToDecimal;

/**
 * 🔑 Unified UI display-layer entry point (supports switching between imperial fractions and metric decimals)
 */
export const formatNumberToDisplay = (
  value: number, 
  unit: UnitType = 'imperial',
  precision: number = DEFAULT_MAX_DENOMINATOR
): string => {
  if (value === null || value === undefined || isNaN(value)) return '';

  if (unit === 'metric') {
    // Metric logic: keep 1 decimal place (mm), e.g., 18.5
    const fixed = value.toFixed(1);
    return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
  } else {
    // Imperial logic: convert to standard woodworking fractions
    const frac = decimalToFraction(value, precision);
    let result = '';
    
    if (frac.numerator === 0) {
      result = `${frac.whole}`;
    } else if (frac.whole === 0) {
      // Handle pure fractions that carry a negative sign (e.g., -0.5 -> -1/2)
      const isNegative = value < -EPSILON;
      result = isNegative ? `-${frac.numerator}/${frac.denominator}` : `${frac.numerator}/${frac.denominator}`;
    } else {
      result = `${frac.whole} ${frac.numerator}/${frac.denominator}`;
    }
    
    return result;
  }
};
