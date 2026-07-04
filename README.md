# GBI Partners LLC — Website

> Financial Clarity for Growing Businesses.

A modern, multi-page business website for [GBI Partners LLC](https://www.gbipartnersllc.com/), built with React and Vite. The site positions GBI Partners as a business transformation firm that integrates accounting, website development, digital business systems, and process automation into one partner for growing businesses.

---

## Pages

| Route | Description |
|-------|-------------|
| Home | Hero, service overview, industries, and CTA |
| Accounting Services | Advisory, systems optimization, and bookkeeping |
| Website Development | Design, front-end customer experience, and operations features |
| Digital Business Systems | Connected-systems workflow diagram and consulting services |
| Process Optimization | Automation, cloud management, reporting, and AI planning |
| Resources | Downloadable checklists, guides, articles, and video placeholders |
| About | Company story, stats, and mission |
| New Clients | Interactive 6-step onboarding walkthrough |
| Contact | Full intake form with 12+ fields and contact info sidebar |

## Tech Stack

- **React 18** — component architecture
- **Vite 5** — build tooling and dev server
- **Lucide React** — icon library
- **Inline styles** — zero-config, no CSS framework dependency

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/gbi-partners-website.git
cd gbi-partners-website

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host.

## Deployment

Works out of the box with:

- **Vercel** — connect the repo; auto-detects Vite
- **Netlify** — set build command to `npm run build`, publish directory to `dist`
- **GitHub Pages** — update `base` in `vite.config.js` to `"/<repo-name>/"`, then deploy `dist/`

## Customization

### Brand Colors

All colors are defined in the `C` object at the top of `src/App.jsx`:

```js
const C = {
  green: "#1B6B4A",      // Primary
  gold: "#C49A2D",        // Accent
  charcoal: "#1C1C28",    // Text
  // ...
};
```

### Photography

Photo placeholders are marked with descriptive labels. Replace the `PhotoPlaceholder` components with `<img>` tags pointing to your actual photography. Recommended image specs:

- Hero: 1920×1080 minimum, landscape
- Section images: 800×600 minimum
- Format: WebP with JPEG fallback

### Fonts

The site uses the system font stack by default. To use Inter from Google Fonts, add to `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## License

Private — all rights reserved by GBI Partners LLC.
