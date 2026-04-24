# Mall of America Commercial Sales Deck

A world-class, fully interactive, browser-based sales deck designed for the Mall of America commercial leasing and sponsorship team. 

This tool is built to replace static PDFs and fragmented presentations, offering a cinematic, high-energy, and interactive experience that drives immediate emotional buy-in from prospective tenants, sponsors, and event partners.

## Features

- **Cinematic Experience**: Video-first (simulated via high-quality imagery and CSS parallax/animations), Apple-inspired luxury aesthetic.
- **Scroll-Triggered Storytelling**: Elements reveal as the user scrolls, maintaining engagement and pacing the narrative.
- **Data-Driven**: Showcases scale and visitor demographics elegantly.
- **Modular Sections**: Covers Luxury Retail, Dining & Lifestyle, Attractions, and Events.
- **Performant**: Built with vanilla HTML, CSS, and JS. Lightweight, no heavy frameworks, lazy-load ready.
- **Responsive Design**: Works flawlessly on desktop and tablet for live sales calls or standalone links.

## Project Architecture (Expandable)

The project is structured with expandability in mind (Phase 2 ready). 

```text
/
├── index.html            # Main entry point and core layout
├── css/
│   ├── style.css         # Core styles, variables, typography, and grid
│   └── animations.css    # Keyframes, hover states, scroll reveal utilities
├── js/
│   └── main.js           # Intersection observers, parallax, smooth scroll
├── assets/
│   └── images/           # High-resolution, optimized imagery (AI-generated for this demo)
└── README.md
```

To expand this into sub-modules (e.g., an Events Module or Sponsorship Module), you can simply create new HTML files (e.g., `events.html`) that utilize the existing CSS architecture and link them from the main landing page, or implement an SPA router.

## Setup Instructions

Since this is a vanilla web application, no build tools are strictly required. 

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd moa-sales-deck
   ```

2. **Serve the files:**
   You can use any local web server. If you have Node.js installed, you can use `npx serve`:
   ```bash
   npx serve .
   ```
   Or using Python 3:
   ```bash
   python -m http.server 8000
   ```

3. **View the application:**
   Open `http://localhost:8000` (or the port provided by your server) in your browser.

## Deployment

This application is ready to be deployed to any static hosting provider.

### Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Leave the "Build Command" empty.
3. Set the "Publish directory" to the root (`.`).
4. Deploy.

### GitHub Pages
1. Go to your repository settings.
2. Navigate to "Pages".
3. Select the `main` branch as the source and `/root` directory.
4. Save to deploy.

## Design Inspiration
- **Aesthetic**: Luxury UI (Apple, Tesla, Hermès)
- **Format**: Interactive Digideck
- **Tone**: Modern, Confident, High-energy

## AI Integration
Assets within this project (cinematic hero shot, luxury retail wing, dining atrium, entertainment park, and event space) were generated using state-of-the-art AI image generation to achieve a premium, hyper-realistic architectural look where official high-resolution assets were unavailable.
