# American Dream | Interactive Sales Deck

A high-end, cinematic sales presentation built for the American Dream mall in East Rutherford, NJ. This is a slide-based interactive deck designed for retail leasing, sponsorships, and event booking.

## Live Demo
[https://premium-ui-website.vercel.app/](https://premium-ui-website.vercel.app/)

## Tech Stack
- **React 18** (UI Framework)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations & Transitions)
- **Lucide React** (Icons)

## Installation & Development
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the local development server
4. Run `npm run build` to create a production-ready bundle

## Design Decisions
1. **Full-Screen Architecture**: Enforced a strict 100vh layout with `overflow: hidden` to simulate a professional presentation deck (e.g., DigiDeck).
2. **Luxury Aesthetic**: Utilized a curated palette of Black (#080808), Gold (#C9A84C), and White, avoiding all rounded corners to maintain a premium, sharp brand identity.
3. **Non-Linear Navigation**: Implemented a fixed sidebar for instant jumping between slides, supplemented by keyboard shortcuts and directional arrows.
4. **Cinematic Motion**: Every slide entry and internal element (stats, cards, bars) is choreographed with Framer Motion for a "living" presentation feel.
5. **Interactive Modals**: A centralized modal system handles all calls-to-action (Leasing, Booking, Partnerships) with a consistent, professional form flow.

## AI Integration & Fluency
This project showcases high AI fluency through:
- **Generative Design**: 4x High-fidelity, architectural-style images were generated using AI to visualize the Luxury Corridor, Grand Entrance, Performing Arts Center, and Exposition Hall where real-world assets were limited or low-resolution.
- **Content Engineering**: AI was used to synthesize verified statistics into compelling narrative "story beats" that move the prospect closer to a business action.
- **Code Acceleration**: The entire React architecture, custom hooks for counting and navigation, and complex animation states were orchestrated with AI assistance to ensure rapid delivery without sacrificing quality.

## Expandable Architecture (Phase 2)
The project is built with modularity at its core:
- **Sub-Module Support**: Slide 08 (Events) features a working "Deep Dive" overlay that demonstrates how the deck can expand into detailed case studies or technical specs without leaving the slide context.
- **Dynamic Component Library**: All UI elements (Buttons, Cards, Modals) are decoupled, allowing the sales team to spin up new slides or deeper modules (e.g., specific venue floor plans) with minimal effort.
- **State-Driven Experience**: The deck's state management is centralized, making it easy to add features like "Share specific slide" or "Auto-play mode" for trade show displays.

## Narrative Flow (Story Beats)
The deck is structured into four curated chapters to ensure a compelling sales narrative:
- **01. The Destination**: Establishing scale, location, and the "North America's Most Extraordinary Destination" value prop.
- **02. The Marketplace**: Highlighting the commercial engine—Retail, Luxury, and Dining.
- **03. The Experience**: Showcasing the "Differentiators"—Theme Parks, Water Parks, and Big SNOW.
- **04. The Partnership**: Driving business action through Sponsorship tiers, Venue booking, and CTAs.

## Technical Audit & Brief Compliance
| Requirement | Status | Implementation Detail |
| :--- | :--- | :--- |
| **Interactive Navigation** | ✅ | Non-linear sidebar navigator + Keyboard shortcuts (`Arrows`, `F`, `Home`). |
| **Video-First** | ✅ | Full-screen cinematic video backgrounds + Video-centric Case Study module. |
| **Phase 2 Expansion** | ✅ | Working "Deep Dive" sub-module for Events (Slide 08) with case study content. |
| **Luxury UI/UX** | ✅ | Gold/Black/White palette, Sharp Corners (no radius), Playfair Display typography. |
| **High Performance** | ✅ | **Vite Asset Optimization** & **Code Splitting** for 90+ Lighthouse score goal. |
| **AI Integration** | ✅ | 4x High-fidelity architectural visualizations generated specifically for this deck. |
| **Business Objective** | ✅ | Clear conversion paths for Leasing, Sponsorship, and Event Bookings. |

## AI Tools Used
- **Antigravity**: Used for architectural scaffolding, custom hook logic, and state management.
- **Generative AI (DALL-E 3/Midjourney)**: Used to generate high-end architectural renders for luxury corridors and event spaces.

## Setup & Deployment
1. `npm install`
2. `npm run dev` (Local development)
3. `npm run build` (Production build)
4. Deployed via Vercel/Netlify for the live URL.
