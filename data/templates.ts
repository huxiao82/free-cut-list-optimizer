/**
 * src/data/templates.ts
 * Commercial-grade SEO template library: 40 high-traffic, real-world woodworking project dimensions
 * Version: v6.1 "Truth-Value Regression & Algorithm Decoupling (Final Gold Standard)"
 *
 * ─── Version History ───
 * v4.0  25 templates, no kerf awareness
 * v5.0  34 templates, introduced "physical corrections" but baked algorithmic flaws into part dimensions
 * v6.1  34 templates, rolled back all physical corrections to design truth values; kerf handled entirely by the engine
 *
 * ─── Governance Rules ───
 * 🚨 Tier 0 dimensions (the first 7 HTML landing pages already live) may only be updated in sync
 *    after the HTML merge flow has been formally revised.
 *    (v6.1 note: drawer box d2 has been split into d2a/d2b per the latest HTML;
 *     d3 bottom panel has been rolled back to the true value 23.25)
 *
 * ─── Kerf Declaration & Worker Wiring Guide ───
 * ⚙️ Architect directive: part width/height are absolute design truth values (finished dimensions).
 *    The layout engine (Guillotine Packer Worker) must dynamically compensate for GLOBAL_KERF at compute time.
 *
 *    // Worker pseudocode example:
 *    import { GLOBAL_KERF } from '../data/templates';
 *    const paddedParts = parts.map(p => ({
 *       ...p,
 *       width: p.width + GLOBAL_KERF,
 *       height: p.height + GLOBAL_KERF
 *    }));
 */

import { StockSheet, Part } from '../types';

export interface TemplateData {
  title: string;
  seoDescription: string;
  stock: StockSheet[];
  parts: Part[];
}

/**
 * Global saw blade kerf width (inches).
 * The layout engine MUST use this value when computing part spacing.
 */
export const GLOBAL_KERF = 0.125;

export const TEMPLATES: Record<string, TemplateData> = {

  // ══════════════════════════════════════════
  //  Tier 0: Live SEO Landing Pages (7)
  //  Modification rule: follow the HTML merge flow only
  // ══════════════════════════════════════════

  '36-inch-base-cabinet': {
    title: 'Standard 36" Base Cabinet (Frameless)',
    seoDescription: 'Every panel dimension for a 36-inch Euro-style base cabinet. 3/4" plywood box, 1/4" back.',
    stock: [
      { id: 's-ply34', name: '3/4" Plywood', width: 48, height: 96, quantity: 2, material: '3/4 Plywood', priority: 1 },
      { id: 's-ply14', name: '1/4" Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 2 }
    ],
    parts: [
      { id: 'p1', name: 'Side Panels', width: 24, height: 34.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'p2', name: 'Bottom Panel', width: 34.5, height: 24, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'p3', name: 'Top Stretchers', width: 34.5, height: 4, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'p4', name: 'Toe Kick Board', width: 34.5, height: 4, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'p5', name: 'Doors', width: 17.875, height: 29.875, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical', edgeBanding: { top: 1, bottom: 1, left: 1, right: 1 } },
      { id: 'p6', name: 'Back Panel', width: 35.0, height: 30.5, quantity: 1, material: '1/4 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'garage-storage-shelves': {
    title: 'Heavy Duty Garage Shelves (OSB Decking)',
    seoDescription: 'Cut list for 8ft wide garage storage shelves decking using 1/2" OSB.',
    stock: [
      { id: 'g1', name: '1/2" OSB Sheet', width: 48, height: 96, quantity: 2, material: 'OSB', priority: 1 }
    ],
    parts: [
      { id: 'gs1', name: 'Shelf Deck', width: 24, height: 96, quantity: 4, material: 'OSB', allowRotation: false, grainDirection: 'none' }
    ]
  },

  'ikea-billy-style-bookshelf': {
    title: 'IKEA Billy Style Bookshelf (DIY)',
    seoDescription: 'Build your own sturdy 30" wide bookcase with this free 3/4" plywood cut list.',
    stock: [
      { id: 'bk1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 2, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'b1', name: 'Left & Right Sides', width: 11, height: 79.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical', edgeBanding: { top: 0, bottom: 0, left: 1, right: 0 } },
      { id: 'b2', name: 'Top & Bottom (Fixed)', width: 11, height: 28.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal', edgeBanding: { top: 1, bottom: 0, left: 0, right: 0 } },
      { id: 'b3', name: 'Adjustable Shelves', width: 10.75, height: 28.375, quantity: 5, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal', edgeBanding: { top: 1, bottom: 0, left: 0, right: 0 } }
    ]
  },

  'mdf-speaker-subwoofer-box': {
    title: '12" MDF Subwoofer Enclosure (2.0 Cu Ft)',
    seoDescription: 'Exact panel dimensions to build a resonance-free sealed box.',
    stock: [
      { id: 'mdf1', name: '3/4" MDF', width: 48, height: 96, quantity: 1, material: '3/4 MDF', priority: 1 }
    ],
    parts: [
      { id: 'sp1', name: 'Top & Bottom', width: 19.5, height: 17.5, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'sp2', name: 'Front Baffle / Back', width: 19.5, height: 13.5, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'sp3', name: 'Left & Right Sides', width: 16.0, height: 13.5, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'standard-drawer-box': {
    title: 'Standard Drawer Box (24"W x 21"D x 6"H)',
    seoDescription: 'Exact cut list using 5/8 inch material. This 24-inch wide box perfectly fits a 25-inch cabinet clear opening (with 1/2-inch slides).',
    stock: [
      { id: 'db1', name: '5/8" Baltic Birch', width: 48, height: 96, quantity: 1, material: '5/8 Plywood', priority: 1 },
      { id: 'db2', name: '1/4" MDF', width: 48, height: 96, quantity: 1, material: '1/4 MDF', priority: 2 }
    ],
    parts: [
      { id: 'd1', name: 'Left & Right Sides', width: 6, height: 21, quantity: 2, material: '5/8 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Front panel (full height)
      { id: 'd2a', name: 'Front Panel', width: 6, height: 22.75, quantity: 1, material: '5/8 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Back panel (short back: height reduced by 0.5" to expose the bottom-panel slide-in groove)
      { id: 'd2b', name: 'Back Panel (Short)', width: 5.5, height: 22.75, quantity: 1, material: '5/8 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // 🔧 v6.1 P0 fix: fully rolled back to design truth. 22.75 (inner clear) + 2x0.25 (grooves) = 23.25. Same logic applies to depth.
      { id: 'd3', name: 'Drawer Bottom', width: 23.25, height: 20.25, quantity: 1, material: '1/4 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'regulation-cornhole-boards': {
    title: 'ACA Regulation Cornhole Boards (Decks)',
    seoDescription: 'Exact 1/2-inch plywood cuts for regulation cornhole boards.',
    stock: [
      { id: 'c1', name: '1/2" Sanded Plywood', width: 48, height: 96, quantity: 1, material: '1/2 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'cb1', name: 'Playing Deck', width: 24, height: 48, quantity: 2, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'modern-floating-tv-stand': {
    title: 'Modern Floating TV Console (72")',
    seoDescription: 'Minimalist floating TV stand cut list from one sheet of Walnut plywood.',
    stock: [
      { id: 'tv1', name: '3/4" Walnut Veneer', width: 48, height: 96, quantity: 1, material: 'Walnut Plywood', priority: 1 }
    ],
    parts: [
      { id: 't1', name: 'Top & Bottom', width: 14, height: 72, quantity: 2, material: 'Walnut Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 't2', name: 'Sides & Dividers', width: 14, height: 10.5, quantity: 4, material: 'Walnut Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 't3', name: 'Doors (Full Overlay)', width: 23.75, height: 11.75, quantity: 3, material: 'Walnut Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  },

  // ══════════════════════════════════════════
  //  Tier 1: High-Priority Landing Pages Pending Build (5)
  //  Kids / Pets / Workshop
  // ══════════════════════════════════════════

  'kitchen-helper-learning-tower': {
    title: 'Kitchen Helper Learning Tower',
    seoDescription: 'DIY Montessori kitchen stool cut list from a single sheet of plywood. 18-inch safe standing platform.',
    stock: [
      { id: 'lt1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'lt-a', name: 'Side Panels', width: 16, height: 35, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'lt-b', name: 'Platform (Adjustable)', width: 15.5, height: 13, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal', edgeBanding: { top: 1, bottom: 0, left: 0, right: 0 } },
      { id: 'lt-c', name: 'Safety Rails (Top F/B)', width: 15.5, height: 7, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'lt-d', name: 'Kick Rails (Bottom F/B)', width: 15.5, height: 5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'one-sheet-nightstand': {
    title: 'Modern One-Sheet Plywood Nightstand',
    seoDescription: 'Build a minimalist 18"W x 22"H nightstand from a single sheet of plywood.',
    stock: [
      { id: 'ns1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 },
      { id: 'ns2', name: '1/4" Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 2 }
    ],
    parts: [
      { id: 'ns-a', name: 'Top', width: 18, height: 16, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ns-b', name: 'Sides', width: 16, height: 21.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'ns-c', name: 'Bottom Shelf', width: 16.5, height: 15, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ns-d', name: 'Middle Shelf', width: 16.5, height: 14.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Back panel: inset mount, 0.5" clearance on each side, top flush with side panels, 0.25" dado allowance at the bottom
      { id: 'ns-e', name: 'Back Panel', width: 17, height: 21, quantity: 1, material: '1/4 Plywood', allowRotation: true, grainDirection: 'vertical' }
    ]
  },

  'cat-litter-cabinet': {
    title: 'Hidden Cat Litter Box Cabinet',
    seoDescription: 'DIY litter box furniture cut list using 3/4 melamine. 24" wide size fits most standard pans perfectly in one sheet.',
    stock: [
      { id: 'cl1', name: '3/4" Melamine', width: 49, height: 97, quantity: 1, material: 'Melamine', trimTop: 0.5, trimBottom: 0.5, trimLeft: 0.5, trimRight: 0.5, priority: 1 },
      { id: 'cl2', name: '1/4" MDF Backing', width: 48, height: 96, quantity: 1, material: '1/4 MDF', priority: 2 }
    ],
    parts: [
      { id: 'cl-a', name: 'Sides', width: 21, height: 25.25, quantity: 2, material: 'Melamine', allowRotation: false, grainDirection: 'vertical' },
      { id: 'cl-b', name: 'Top & Bottom', width: 22.5, height: 21, quantity: 2, material: 'Melamine', allowRotation: false, grainDirection: 'horizontal' },
      // Door: full overlay, carcass height 25.25 − 1/8" gap = 25.125
      { id: 'cl-c', name: 'Door (Full Overlay)', width: 23.875, height: 25.125, quantity: 1, material: 'Melamine', allowRotation: false, grainDirection: 'vertical', edgeBanding: { top: 1, bottom: 1, left: 1, right: 1 } },
      // Back panel: inner height 23.75 + 1/4" dado top and bottom = 24.25
      { id: 'cl-d', name: 'Back Panel', width: 23, height: 24.25, quantity: 1, material: '1/4 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'miter-saw-stand': {
    title: 'Mobile Miter Saw Station (48")',
    seoDescription: 'Rolling miter saw stand cut list with storage shelves. High-capacity shop furniture project.',
    stock: [
      { id: 'ms1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'ms-a', name: 'Top Deck', width: 24, height: 48, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ms-b', name: 'Lower Shelf', width: 22.5, height: 46.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ms-c', name: 'Sides', width: 22.5, height: 31.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'ms-d', name: 'Front/Back Rails', width: 46.5, height: 5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'window-seat-storage-bench': {
    title: 'Window Seat with Storage',
    seoDescription: '48-inch wide built-in style window seat bench cut list with interior storage cubbies.',
    stock: [
      { id: 'ws1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // Seat top: front edge overhangs by 1.5" (18.75 − 17.25), rear edge flush with the carcass
      { id: 'ws-a', name: 'Top Seat (Overhang)', width: 48, height: 18.75, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ws-b', name: 'Bottom Panel', width: 46.5, height: 17.25, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ws-c', name: 'Sides', width: 17.25, height: 17.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'ws-d', name: 'Front/Back Rails', width: 46.5, height: 6, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'ws-e', name: 'Center Divider', width: 17.25, height: 16.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  // ══════════════════════════════════════════
  //  Tier 2: Expansion Templates (9)
  //  Pets / Kids / Workshop Furniture
  // ══════════════════════════════════════════

  'dog-house': {
    title: 'Small Dog House (One-Sheet)',
    seoDescription: 'Free one-sheet dog house cut list for dogs up to 30 lbs. Exterior plywood with rough front and roof panels for easy jigsaw cuts.',
    stock: [
      { id: 'dh1', name: '3/4" Ext Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'dh-a', name: 'Floor', width: 24, height: 22, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'dh-b', name: 'Sides', width: 22, height: 18, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'none' },
      { id: 'dh-c', name: 'Front / Back (Rough)', width: 22.5, height: 18, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'none' },
      { id: 'dh-d', name: 'Roof Panels (Rough)', width: 24, height: 17, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'chicken-coop': {
    title: '2-3 Hen Chicken Coop (Shed Roof)',
    seoDescription: 'Backyard chicken coop cut list with 7.5 sq ft floor, shed roof and rough openings for door, nesting and ventilation.',
    stock: [
      { id: 'cc1', name: '3/4" Ext Plywood', width: 48, height: 96, quantity: 2, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'cc-a', name: 'Floor', width: 36, height: 30, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'cc-b', name: 'Sides', width: 30, height: 24, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'cc-c', name: 'Front / Back (Rough)', width: 34.5, height: 24, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'cc-d', name: 'Shed Roof Panel', width: 38, height: 32, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'montessori-floor-bed': {
    title: 'Montessori Floor Bed Frame (Twin)',
    seoDescription: 'Low-profile Montessori floor bed cut list for a twin mattress. 5-inch rails keep the sleep surface safely low.',
    stock: [
      { id: 'mb1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // 🔧 v6.1 note: 5"+5"+38" = 48". Once the engine compensates for kerf, a single row is guaranteed to overflow.
      // The engine's Guillotine/Bin-packing algorithm will automatically wrap some parts onto new rows (Y-axis layout), so there is no need to sacrifice true dimensions here.
      { id: 'mb-a', name: 'Side Rails', width: 5, height: 76, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'mb-b', name: 'Head / Foot Rails', width: 6, height: 38, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'mb-c', name: 'Mattress Slats', width: 3, height: 38, quantity: 12, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'front-facing-bookshelf': {
    title: 'Kids Front-Facing Bookshelf (30")',
    seoDescription: 'Montessori display bookshelf cut list from one half-inch plywood sheet. Shallow 4-inch profile with display lips.',
    stock: [
      { id: 'fb1', name: '1/2" Plywood', width: 48, height: 96, quantity: 1, material: '1/2 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'fb-a', name: 'Back Panel', width: 30, height: 36, quantity: 1, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'fb-b', name: 'Sides', width: 4, height: 36, quantity: 2, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'fb-c', name: 'Top & Bottom', width: 3.75, height: 28.5, quantity: 2, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'fb-d', name: 'Shelves', width: 3.75, height: 28.5, quantity: 2, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'fb-e', name: 'Display Lip Rails', width: 2, height: 28.5, quantity: 3, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'toy-chest': {
    title: 'Toy Chest with Safety Lid (30")',
    seoDescription: 'Classic plywood toy box cut list. Add a slow-close lid stay for an anti-slam, child-safe lid.',
    stock: [
      { id: 'tc1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'tc-a', name: 'Sides', width: 18, height: 17.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'tc-b', name: 'Front / Back', width: 28.5, height: 17.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'tc-c', name: 'Bottom', width: 28.5, height: 16.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Lid: carcass width 28.5 + 2×0.75 side panels = 30", with a 3/4" overhang on each side
      { id: 'tc-d', name: 'Lid', width: 30, height: 18, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  },

  'mobile-kitchen-island': {
    title: 'Mobile Kitchen Island (48")',
    seoDescription: 'Rolling kitchen island carcass cut list. Tops out at 36 inches with 4.5-inch casters and a 1.5-inch butcher block.',
    stock: [
      { id: 'ki1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 },
      { id: 'ki2', name: '1/4" Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 2 }
    ],
    parts: [
      { id: 'ki-a', name: 'Sides', width: 22.5, height: 30, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'ki-b', name: 'Top & Bottom', width: 22.5, height: 46.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ki-c', name: 'Front/Back Stretchers', width: 4, height: 46.5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'ki-d', name: 'Back Panel', width: 47, height: 30, quantity: 1, material: '1/4 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'router-table-cabinet': {
    title: 'One-Sheet Router Table Cabinet',
    seoDescription: 'Compact router table cabinet cut list from one sheet of plywood plus a flat MDF top. 34-inch working height.',
    stock: [
      { id: 'rt1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 },
      { id: 'rt2', name: '3/4" MDF', width: 48, height: 96, quantity: 1, material: '3/4 MDF', priority: 2 }
    ],
    parts: [
      { id: 'rt-a', name: 'Sides', width: 24, height: 33.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // 🔧 v6.1 P1 fix: side panels are 24, overall width 24. Inner clear is 22.5. Front/back and bottom must be 22.5.
      { id: 'rt-b', name: 'Front / Back', width: 22.5, height: 33.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'rt-c', name: 'Bottom Shelf', width: 22.5, height: 22.5, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'rt-d', name: 'Router Top (MDF)', width: 26, height: 26, quantity: 1, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'outfeed-assembly-table': {
    title: 'Table Saw Outfeed / Assembly Table',
    // 🔧 v6.1 P1 fix: rewrote the physical layout validation logic.
    // Total area 3326 sq.in < single sheet 4608 sq.in.
    // The engine can combine Sides (31.25) and Top (30) in vertical or horizontal cross-region layouts; no need to modify the true data.
    seoDescription: 'Outfeed and assembly table cut list. Matches standard table saw height on 4-inch casters.',
    stock: [
      { id: 'ot1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'ot-a', name: 'Top', width: 40, height: 30, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'ot-b', name: 'Sides', width: 28.5, height: 31.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'ot-c', name: 'Front/Back Rails', width: 34.5, height: 5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'french-cleat-storage-wall': {
    title: 'French Cleat Storage Wall (Starter Kit)',
    seoDescription: 'One-sheet french cleat wall starter kit: eight 45-degree cleats plus spacer strips for a 4x8 foot tool wall.',
    stock: [
      { id: 'fc1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'fc-a', name: 'Wall Cleats (Rip 45°)', width: 7.5, height: 48, quantity: 8, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'fc-b', name: 'Spacer Strips', width: 1.5, height: 48, quantity: 4, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  },

  // ══════════════════════════════════════════
  //  Legacy: Reserve Templates (13)
  // ══════════════════════════════════════════

  'raised-planter-box': {
    title: 'Exterior Plywood Raised Planter Box (4x2)',
    seoDescription: 'Cut list for outdoor raised garden bed using 3/4" exterior grade plywood. Includes drainage hole layout and soil volume math.',
    stock: [
      { id: 'pl1', name: '3/4" Ext Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'r1', name: 'Long Sides', width: 11, height: 48, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'r2', name: 'Short Sides', width: 11, height: 22.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'r3', name: 'Bottom Panel (Drill Drainage Holes)', width: 22.5, height: 46.5, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  '30-inch-wall-cabinet': {
    title: 'Standard 30" Wall Cabinet',
    seoDescription: 'Exact cut list for a 30W x 30H x 12D upper wall cabinet.',
    stock: [
      { id: 's1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 },
      { id: 's2', name: '1/4" Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 2 }
    ],
    parts: [
      { id: 'w1', name: 'Sides', width: 11.25, height: 30, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'w2', name: 'Top & Bottom', width: 28.5, height: 11.25, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'w3', name: 'Shelves', width: 28.375, height: 10.5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'w4', name: 'Doors', width: 14.875, height: 29.875, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical', edgeBanding: { top: 1, bottom: 1, left: 1, right: 1 } },
      { id: 'w5', name: 'Back Panel', width: 29.0, height: 29.0, quantity: 1, material: '1/4 Plywood', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'closet-organizer-tower': {
    title: '15-Inch Closet Organizer Tower',
    seoDescription: 'DIY closet tower cut list to build your own custom closet system.',
    stock: [
      { id: 'clo1', name: '3/4" Melamine', width: 49, height: 97, quantity: 2, material: 'Melamine', trimTop: 0.5, trimBottom: 0.5, trimLeft: 0.5, trimRight: 0.5, priority: 1 }
    ],
    parts: [
      { id: 'c1', name: 'Vertical Panels', width: 14, height: 84, quantity: 2, material: 'Melamine', allowRotation: false, grainDirection: 'vertical', edgeBanding: { left: 1, right: 0, top: 0, bottom: 0 } },
      { id: 'c2', name: 'Fixed Shelves', width: 14, height: 13.5, quantity: 3, material: 'Melamine', allowRotation: true, grainDirection: 'horizontal', edgeBanding: { top: 1, bottom: 0, left: 0, right: 0 } },
      { id: 'c3', name: 'Adjustable Shelves', width: 13.75, height: 13.375, quantity: 4, material: 'Melamine', allowRotation: true, grainDirection: 'horizontal', edgeBanding: { top: 1, bottom: 0, left: 0, right: 0 } }
    ]
  },

  'queen-platform-bed-frame': {
    title: 'Queen Size Platform Bed Frame',
    seoDescription: 'Simple DIY plywood queen platform bed cut list.',
    stock: [
      { id: 'qb1', name: '3/4" Plywood', width: 48, height: 96, quantity: 3, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'q1', name: 'Side Rails', width: 12, height: 80.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'q2', name: 'Foot / Head Rails', width: 12, height: 60.5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'q3', name: 'Mattress Support', width: 30.25, height: 80.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'simple-plywood-desk': {
    title: 'Simple Minimalist Plywood Desk (48")',
    seoDescription: 'Easy one-sheet plywood desk cut list for home office.',
    stock: [
      { id: 'dk1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'k1', name: 'Desktop', width: 24, height: 48, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'k2', name: 'Legs', width: 23.5, height: 28.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'k3', name: 'Modesty Panel', width: 12, height: 45, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  },

  'entryway-shoe-bench': {
    title: 'Entryway Shoe Cubby Bench',
    seoDescription: 'Cut list for a 48 inch wide shoe storage bench.',
    stock: [
      { id: 'sh1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'e1', name: 'Top / Bottom', width: 15, height: 48, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'e2', name: 'Sides / Dividers', width: 15, height: 16.5, quantity: 4, material: '3/4 Plywood', allowRotation: true, grainDirection: 'vertical' },
      { id: 'e3', name: 'Shelves', width: 14.5, height: 15, quantity: 6, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'vinyl-record-storage-cube': {
    title: 'Vinyl Record Storage Cube (2x2)',
    seoDescription: 'Perfect size record storage cubes layout. Holds 300+ LPs.',
    stock: [
      { id: 'rc1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'v1', name: 'Top / Bottom', width: 15, height: 30, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'v2', name: 'Sides', width: 15, height: 28.5, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'vertical' },
      { id: 'v3', name: 'Dividers / Shelves', width: 14.5, height: 13.875, quantity: 4, material: '3/4 Plywood', allowRotation: true, grainDirection: 'vertical' }
    ]
  },

  'bartop-arcade-cabinet': {
    title: 'Bartop Arcade Machine Cabinet',
    seoDescription: 'CNC/DIY bartop arcade cabinet side panels and control panel cut list.',
    stock: [
      { id: 'ar1', name: '1/2" MDF', width: 48, height: 96, quantity: 1, material: '1/2 MDF', priority: 1 }
    ],
    parts: [
      { id: 'a1', name: 'Side Panels (Rough)', width: 24, height: 28, quantity: 2, material: '1/2 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'a2', name: 'Control Panel', width: 9, height: 20, quantity: 1, material: '1/2 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'a3', name: 'Marquee / Screen Bezel', width: 6, height: 20, quantity: 2, material: '1/2 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'a4', name: 'Bottom / Back', width: 16, height: 20, quantity: 2, material: '1/2 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'bathroom-vanity-48': {
    title: '48" Bathroom Vanity Cabinet',
    seoDescription: 'Build a custom double-sink or large single sink bathroom vanity base.',
    stock: [
      { id: 'bv1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'va1', name: 'Sides', width: 21, height: 34.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'va2', name: 'Bottom', width: 21, height: 46.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'va3', name: 'Stretchers', width: 4, height: 46.5, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  },

  'mobile-shop-workbench': {
    title: 'Mobile Shop Workbench Top',
    seoDescription: 'Laminated MDF and plywood top cut list for heavy duty mobile workbench.',
    stock: [
      { id: 'mw1', name: '3/4" Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 },
      { id: 'mw2', name: '3/4" MDF', width: 48, height: 96, quantity: 1, material: '3/4 MDF', priority: 2 }
    ],
    parts: [
      { id: 'wb1', name: 'Plywood Core', width: 36, height: 72, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      { id: 'wb2', name: 'MDF Top', width: 36, height: 72, quantity: 1, material: '3/4 MDF', allowRotation: false, grainDirection: 'none' }
    ]
  },

  'pantry-pullout-drawers': {
    title: 'Pantry Pull-out Drawers (Set of 4)',
    seoDescription: 'Cut list for making 4 custom slide-out pantry shelves.',
    stock: [
      { id: 'pp1', name: '1/2" Baltic Birch', width: 48, height: 96, quantity: 1, material: '1/2 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'pd1', name: 'Fronts/Backs', width: 3, height: 28, quantity: 8, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'pd2', name: 'Sides', width: 3, height: 20, quantity: 8, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'pd3', name: 'Bottoms', width: 20, height: 27, quantity: 4, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'one-sheet-plywood-boat': {
    title: 'One-Sheet Plywood Boat / Canoe',
    seoDescription: 'Famous minimalist DIY project: build a small boat from a single sheet of plywood.',
    stock: [
      { id: 'bt1', name: '1/4" Exterior Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 1 }
    ],
    parts: [
      { id: 'bo1', name: 'Hull Bottom', width: 24, height: 96, quantity: 1, material: '1/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'bo2', name: 'Side Panels', width: 11, height: 96, quantity: 2, material: '1/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      { id: 'bo3', name: 'Transom', width: 11, height: 22, quantity: 1, material: '1/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'radiator-cover-cabinet': {
    title: 'Custom Radiator Cover Cabinet',
    seoDescription: 'MDF cut list to build a modern radiator cover for your home.',
    stock: [
      { id: 'rd1', name: '1/2" MDF', width: 48, height: 96, quantity: 1, material: '1/2 MDF', priority: 1 }
    ],
    parts: [
      { id: 'rc1', name: 'Top Shelf', width: 12, height: 48, quantity: 1, material: '1/2 MDF', allowRotation: false, grainDirection: 'none' },
      { id: 'rc2', name: 'Front Frame Stiles', width: 3, height: 35.5, quantity: 2, material: '1/2 MDF', allowRotation: false, grainDirection: 'none' },
      { id: 'rc3', name: 'Front Frame Rails', width: 3, height: 40, quantity: 2, material: '1/2 MDF', allowRotation: false, grainDirection: 'none' },
      { id: 'rc4', name: 'Side Panels', width: 10.5, height: 35.5, quantity: 2, material: '1/2 MDF', allowRotation: false, grainDirection: 'none' }
    ]
  },

  // ══════════════════════════════════════════
  //  Tier 3: Long-Tail Niche Templates (6)
  //  Low competition, high backlink value, targeted community traffic
  // ══════════════════════════════════════════

  'langstroth-beehive': {
    title: 'Langstroth 10-Frame Beehive (Deep + Medium)',
    seoDescription: 'Precise plywood cut list for a standard 10-frame Langstroth beehive. One deep brood box, one medium honey super, bottom board and covers.',
    stock: [
      { id: 'bh1', name: '3/4" Exterior Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // Deep Brood Box: 19 7/8" × 16 3/16" × 9 9/16" (standard Langstroth)
      { id: 'bh-a', name: 'Deep Front / Back', width: 19.875, height: 9.5625, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'bh-b', name: 'Deep Sides', width: 14.6875, height: 9.5625, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Medium Honey Super: 19 7/8" × 16 3/16" × 6 5/8"
      { id: 'bh-c', name: 'Medium Front / Back', width: 19.875, height: 6.625, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      { id: 'bh-d', name: 'Medium Sides', width: 14.6875, height: 6.625, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Bottom Board with entrance
      { id: 'bh-e', name: 'Bottom Board', width: 22, height: 16.1875, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Inner Cover
      { id: 'bh-f', name: 'Inner Cover', width: 19.875, height: 16.1875, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Outer Cover Top (overhangs body by ~3/4" per side)
      { id: 'bh-g', name: 'Outer Cover Top', width: 21.5, height: 17.5, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'sim-racing-cockpit': {
    title: 'DIY Sim Racing Cockpit (MDF)',
    seoDescription: 'One-sheet MDF sim racing rig cut list. Fits 52-inch wheelbase with monitor shelf. Rigid, vibration-dampening platform for sim racing setups.',
    stock: [
      { id: 'sr1', name: '3/4" MDF', width: 48, height: 96, quantity: 1, material: '3/4 MDF', priority: 1 }
    ],
    parts: [
      // Base platform: 20"W × 52"L (fits most adults, wheel-to-pedal distance)
      { id: 'sr-a', name: 'Base Platform', width: 20, height: 52, quantity: 1, material: '3/4 MDF', allowRotation: false, grainDirection: 'none' },
      // Side rails for rigidity (6" tall)
      { id: 'sr-b', name: 'Side Rails', width: 6, height: 52, quantity: 2, material: '3/4 MDF', allowRotation: false, grainDirection: 'none' },
      // Crossmembers connect rails (18.5 = 20 − 2×0.75)
      { id: 'sr-c', name: 'Seat Crossmembers', width: 18.5, height: 6, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'sr-d', name: 'Pedal Crossmembers', width: 18.5, height: 6, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' },
      // Monitor shelf + uprights
      { id: 'sr-e', name: 'Monitor Shelf', width: 20, height: 12, quantity: 1, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' },
      { id: 'sr-f', name: 'Monitor Uprights', width: 6, height: 12, quantity: 2, material: '3/4 MDF', allowRotation: true, grainDirection: 'none' }
    ]
  },

  'plywood-dollhouse': {
    title: 'Two-Story Plywood Dollhouse (24")',
    seoDescription: 'Adorable DIY dollhouse cut list from one sheet of half-inch plywood. Two floors, four rooms, solid back panel. Perfect beginner project.',
    stock: [
      { id: 'dol1', name: '1/2" Sanded Plywood', width: 48, height: 96, quantity: 1, material: '1/2 Plywood', priority: 1 },
      { id: 'dol2', name: '1/4" Plywood', width: 48, height: 96, quantity: 1, material: '1/4 Plywood', priority: 2 }
    ],
    parts: [
      // Structure: 24"W × 12"D × 24"H, two stories
      { id: 'dol-a', name: 'Left / Right Sides', width: 12, height: 24, quantity: 2, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // Floors: 24 − 2×0.5 = 23" wide (between 1/2" sides)
      { id: 'dol-b', name: 'Top / Bottom / Middle Floors', width: 23, height: 12, quantity: 3, material: '1/2 Plywood', allowRotation: true, grainDirection: 'horizontal' },
      // Center divider (full height, dadoed into floors or slot-assembled)
      { id: 'dol-c', name: 'Center Wall Divider', width: 12, height: 24, quantity: 1, material: '1/2 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // Back panel (1/4")
      { id: 'dol-d', name: 'Back Panel', width: 24, height: 24, quantity: 1, material: '1/4 Plywood', allowRotation: false, grainDirection: 'vertical' }
    ]
  },

  'sewing-craft-table': {
    title: 'Sewing & Craft Table (48")',
    seoDescription: 'Sturdy one-sheet plywood sewing table cut list. 30-inch ergonomic height with lower fabric storage shelf and knee clearance.',
    stock: [
      { id: 'sew1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // Top: 48"W × 24"D × 30"H total
      { id: 'sew-a', name: 'Desktop', width: 48, height: 24, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Sides: full depth, height = 30 − 0.75 (top) = 29.25
      { id: 'sew-b', name: 'Side Panels', width: 24, height: 29.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // Lower shelf: inset 1.5" from front for knee room
      { id: 'sew-c', name: 'Storage Shelf', width: 46.5, height: 22.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Structural rails (front & back)
      { id: 'sew-d', name: 'Front / Back Rails', width: 46.5, height: 4, quantity: 2, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'potting-bench': {
    title: 'Garden Potting Bench (48")',
    seoDescription: 'Outdoor potting bench cut list from exterior plywood. 36-inch standing height with backsplash and lower pot storage shelf.',
    stock: [
      { id: 'pb1', name: '3/4" Ext Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // Work surface: 48"W × 24"D × 36"H total
      { id: 'pb-a', name: 'Work Top', width: 48, height: 24, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // 🔧 Veteran physical correction: side panels run to the floor. Height = 36 (overall height) - 0.75 (top panel) = 35.25"
      { id: 'pb-b', name: 'Side Panels', width: 24, height: 35.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // Lower shelf for pots and soil bags
      { id: 'pb-c', name: 'Lower Shelf', width: 46.5, height: 22.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Backsplash (keeps soil on the bench)
      { id: 'pb-d', name: 'Backsplash', width: 48, height: 6, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // Front rail (structural)
      { id: 'pb-e', name: 'Front Rail', width: 46.5, height: 4, quantity: 1, material: '3/4 Plywood', allowRotation: true, grainDirection: 'horizontal' }
    ]
  },

  'modern-coffee-table': {
    title: 'Modern Plywood Coffee Table (48")',
    seoDescription: 'Minimalist one-sheet coffee table cut list. 16-inch height with hidden lower shelf. Clean Scandinavian style from birch plywood.',
    stock: [
      { id: 'cf1', name: '3/4" Birch Plywood', width: 48, height: 96, quantity: 1, material: '3/4 Plywood', priority: 1 }
    ],
    parts: [
      // Top: 48"W × 24"D × 16"H total
      { id: 'cf-a', name: 'Table Top', width: 48, height: 24, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' },
      // 🔧 Veteran physical correction: side panels run to the floor. Height = 16 (overall height) - 0.75 (top panel) = 15.25"
      { id: 'cf-b', name: 'Side Panels', width: 24, height: 15.25, quantity: 2, material: '3/4 Plywood', allowRotation: false, grainDirection: 'vertical' },
      // Lower shelf (between sides, inset from front edge)
      { id: 'cf-c', name: 'Lower Shelf', width: 46.5, height: 22.5, quantity: 1, material: '3/4 Plywood', allowRotation: false, grainDirection: 'horizontal' }
    ]
  }
};
