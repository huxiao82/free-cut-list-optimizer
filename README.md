# 🪚 Free Cut List Optimizer

> **Stop guessing, start cutting.** A free, professional, no-sign-up 2D bin
> packing calculator that generates precise cutting diagrams for plywood,
> lumber, and sheet goods — 100% in your browser.

[![Live App](https://img.shields.io/badge/⚡_Live_App-freecutlist.app-2ea44f?style=for-the-badge)](https://www.freecutlist.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built With](https://img.shields.io/badge/React_+_Vite-TypeScript-61dafb.svg?logo=react)](https://react.dev)

---

<p align="center">
  <img width="1200" height="630" alt="FreeCutList.app optimized plywood panel layout with diagonal waste hatching and fractional labels" src="https://github.com/user-attachments/assets/95d5509e-efb3-4071-837b-e92eb48fd431" />
</p>

---

## 📐 What Is This?

**FreeCutList.app** is a high-performance **cut list calculator** and
**panel cutting layout optimizer** built specifically for woodworkers,
cabinet makers, and DIY enthusiasts.

It bridges the gap between expensive legacy desktop software (like CutList
Plus) and the need for a modern, private, zero-registration web-based
solution. Feed it your part dimensions, pick your stock sheets, and it
generates an optimized **cutting diagram** that minimizes waste while
respecting physical constraints like grain direction and saw blade kerf.

No account. No sign-up. No cloud. Every calculation runs **100% locally**
in your browser via a dedicated Web Worker thread.

**[→ Open FreeCutList Optimizer (Official Web App)](https://www.freecutlist.app)**

---

## ✨ Key Features (Built for the Woodshop)

Unlike generic rectangle-packing tools, every feature is calibrated for
real-world woodworking projects:

| Feature | Detail |
|---|---|
| **Fractional Precision** | Native imperial fraction input/display from 1/2″ down to 1/64″ with intelligent snap-to-nearest logic. Full metric support included. |
| **Kerf Compensation** | Automatically deducts saw blade thickness (default 1/8″) between every cut so your physical parts actually fit. |
| **Grain & Rotation Control** | Lock grain direction for visible panels (cabinet doors, table tops) or allow free rotation for maximum yield. |
| **Edge Banding Deduction** | Per-edge independent banding allowance subtracted before nesting — zero hand-math required. |
| **15 Packing Heuristics** | The engine cross-iterates 15 guillotine-cut strategies with Lazy Merge optimization, packing hundreds of parts in under a second. |
| **Vector Visualization** | High-fidelity SVG rendering with diagonal-hatch waste patterns for instant identification of offcuts on the shop floor. |
| **Print-Perfect Output** | Precision-tuned `@media print` CSS with page-break constraints. Zero phantom blank pages, zero truncated diagrams. |

---

## 🚀 Technical Architecture

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript + Vite |
| **Compute Engine** | Custom Guillotine Packer in a **Web Worker** (off-main-thread, zero UI jank) |
| **Math Core** | Proprietary fraction-snapping engine — hard-snaps to 1/2″–1/64″ denominators, eliminating IEEE-754 float drift on imperial dimensions |
| **Rendering** | Direct SVG with `<pattern>`-based waste hatching; zero canvas dependency |
| **State** | `useLocalStorage` custom hook — fully offline-first, no server round-trips |
| **Styling** | Tailwind CSS (app shell) + hand-tuned native CSS (print output & static SEO pages) |

---

## 📦 What's Included in This Repository

This repository publishes the core template data and utility modules that
power the application. The production packing engine and application shell
remain proprietary.

```text
├── data/
│   └── templates.ts          # 40+ curated project cut lists (real-world dimensions)
├── src/
│   └── utils/
│       └── fractionUtils.ts  # Precision fraction ↔ float conversion logic
└── public/
    └── templates/            # 41 static HTML files (40 project pages + gallery hub)
        ├── index.html        # Template gallery hub
        ├── 36-inch-base-cabinet.html
        ├── garage-storage-shelves.html
        └── … (38 more)

```

---

## 🗂️ Woodworking Template Library

Browse our library of **40 pre-loaded project templates**. Each includes a
verified cut list, an SVG exploded-view diagram, and an optimized layout.

### 🔥 Most Popular Projects

| Template | Stock Material | Parts | Link |
|---|---|---|---|
| **36″ Frameless Base Cabinet** | 3/4″ Plywood | 12 | [View Cut List](https://www.freecutlist.app/templates/36-inch-base-cabinet.html) |
| **Kitchen Helper Learning Tower** | 3/4″ Plywood | 14 | [View Cut List](https://www.freecutlist.app/templates/kitchen-helper-learning-tower.html) |
| **Garage Storage Shelves** | 3/4″ OSB / Ply | 18 | [View Cut List](https://www.freecutlist.app/templates/garage-storage-shelves.html) |
| **12″ MDF Subwoofer Box** | 3/4″ MDF | 6 | [View Cut List](https://www.freecutlist.app/templates/mdf-speaker-subwoofer-box.html) |
| **Miter Saw Rolling Station** | 3/4″ Plywood | 16 | [View Cut List](https://www.freecutlist.app/templates/miter-saw-stand.html) |

### 📋 Full Template Index

<details>
<summary><b>Expand the template index</b></summary>

**Cabinets & Storage**
- [36″ Base Cabinet (Frameless)](https://www.freecutlist.app/templates/36-inch-base-cabinet.html)
- [30″ Wall Cabinet (Upper)](https://www.freecutlist.app/templates/30-inch-wall-cabinet.html)
- [48″ Bathroom Vanity Base](https://www.freecutlist.app/templates/bathroom-vanity-48.html)
- [Closet Organizer Tower](https://www.freecutlist.app/templates/closet-organizer-tower.html)
- [Pantry Pull-Out Trays](https://www.freecutlist.app/templates/pantry-pullout-drawers.html)
- [Hidden Cat Litter Cabinet](https://www.freecutlist.app/templates/cat-litter-cabinet.html)
- [Mobile Kitchen Island](https://www.freecutlist.app/templates/mobile-kitchen-island.html)
- [72″ Floating TV Stand](https://www.freecutlist.app/templates/modern-floating-tv-stand.html)

**Shelves & Bookcases**
- [Heavy Duty Garage Shelves](https://www.freecutlist.app/templates/garage-storage-shelves.html)
- [IKEA Billy-Style Bookshelf](https://www.freecutlist.app/templates/ikea-billy-style-bookshelf.html)
- [Vinyl Record Storage Cube](https://www.freecutlist.app/templates/vinyl-record-storage-cube.html)
- [Front-Facing Kids Bookshelf](https://www.freecutlist.app/templates/front-facing-bookshelf.html)

**Tables & Desks**
- [Minimalist Plywood Desk](https://www.freecutlist.app/templates/simple-plywood-desk.html)
- [Outfeed & Assembly Table](https://www.freecutlist.app/templates/outfeed-assembly-table.html)
- [Sewing & Craft Table](https://www.freecutlist.app/templates/sewing-craft-table.html)
- [Outdoor Potting Bench](https://www.freecutlist.app/templates/potting-bench.html)
- [Mobile Shop Workbench](https://www.freecutlist.app/templates/mobile-shop-workbench.html)
- [Router Table Cabinet](https://www.freecutlist.app/templates/router-table-cabinet.html)

**Beds & Seating**
- [Queen Platform Bed Frame](https://www.freecutlist.app/templates/queen-platform-bed-frame.html)
- [Montessori Floor Bed (Twin)](https://www.freecutlist.app/templates/montessori-floor-bed.html)
- [Window Seat Storage Bench](https://www.freecutlist.app/templates/window-seat-storage-bench.html)
- [Entryway Shoe Bench](https://www.freecutlist.app/templates/entryway-shoe-bench.html)
- [Modern Plywood Coffee Table](https://www.freecutlist.app/templates/modern-coffee-table.html)
- [One-Sheet Nightstand](https://www.freecutlist.app/templates/one-sheet-nightstand.html)

**Kids & Pets**
- [Montessori Learning Tower](https://www.freecutlist.app/templates/kitchen-helper-learning-tower.html)
- [Anti-Pinch Toy Chest](https://www.freecutlist.app/templates/toy-chest.html)
- [Two-Story Dollhouse](https://www.freecutlist.app/templates/plywood-dollhouse.html)
- [Outdoor Plywood Dog House](https://www.freecutlist.app/templates/dog-house.html)
- [Backyard Chicken Coop](https://www.freecutlist.app/templates/chicken-coop.html)

**Specialty & Workshop**
- [Miter Saw Rolling Station](https://www.freecutlist.app/templates/miter-saw-stand.html)
- [MDF 12″ Subwoofer Box](https://www.freecutlist.app/templates/mdf-speaker-subwoofer-box.html)
- [French Cleat Tool Wall](https://www.freecutlist.app/templates/french-cleat-storage-wall.html)
- [Bartop Arcade Cabinet](https://www.freecutlist.app/templates/bartop-arcade-cabinet.html)
- [Regulation Cornhole Boards](https://www.freecutlist.app/templates/regulation-cornhole-boards.html)
- [Raised Planter Box (4x2)](https://www.freecutlist.app/templates/raised-planter-box.html)
- [One-Sheet Plywood Boat](https://www.freecutlist.app/templates/one-sheet-plywood-boat.html)
- [Radiator Cover Cabinet](https://www.freecutlist.app/templates/radiator-cover-cabinet.html)
- [Sim Racing Cockpit (MDF)](https://www.freecutlist.app/templates/sim-racing-cockpit.html)
- [Langstroth 10-Frame Beehive](https://www.freecutlist.app/templates/langstroth-beehive.html)

➕ **New templates ship monthly** — the live [Template Gallery](https://www.freecutlist.app/templates/) always lists the complete, up-to-date set of 40.

</details>

---

## 🔒 Privacy & Data Sovereignty

**FreeCutList.app** is a privacy-first application.

- **No Account Required:** Start optimizing immediately.
- **Local Computing:** Your data never leaves your browser.
- **Offline Persistence:** Uses `localStorage` to save your work automatically. Close the tab, walk to the shop, and pick up right where you left off.

---

## 📜 License

The **woodworking template data** (`/data/`) and **fractional utility
modules** (`/src/utils/`) are released under the
[MIT License](https://opensource.org/licenses/MIT).

The core packing engine and application shell are proprietary. You are free
to use the project dimensions and utilities in your own projects, including
commercial use.

---

## 🤝 Contributing

Spotted a wrong dimension? Have a new project template to share?

1. Open an **Issue** with the project name.
2. Submit a **Pull Request** following the format in `data/templates.ts`.

---

## 📬 Links

- 🌐 **Web App**: [https://www.freecutlist.app](https://www.freecutlist.app)
- 🗂️ **Project Gallery**: [https://www.freecutlist.app/templates/](https://www.freecutlist.app/templates/)

<p align="center"><sub>Built for woodworkers, by woodworkers.<br/>
Stop guessing, start cutting.</sub></p>
