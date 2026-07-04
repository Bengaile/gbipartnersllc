# Image Assets Guide

Every `PhotoPlaceholder` component in the site maps to an image listed below. Replace placeholders by importing the image and swapping the component for an `<img>` tag.

## Recommended Specs

| Use | Min Size | Aspect | Format |
|-----|----------|--------|--------|
| Hero | 1920×1440 | 4:3 | WebP + JPEG fallback |
| Section photos | 800×640 | 5:4 | WebP |
| Industry icons | 120×120 | 1:1 | SVG or PNG |
| Resource thumbnails | 600×400 | 3:2 | WebP |
| Team / About photos | 800×600 | 4:3 | WebP |
| Logo | — | — | SVG |
| Favicon | 512×512 | 1:1 | SVG + PNG |

---

## Required Images

### `images/hero/`

| Filename | Page | Description |
|----------|------|-------------|
| `hero-dashboard.webp` | Home | Business owner reviewing a financial dashboard on a laptop. Warm lighting, modern desk, natural setting. |
| `hero-accounting.webp` | Accounting | Clean workspace with monitor showing charts and financial data. No cliché handshake photos. |
| `hero-websites.webp` | Websites | Laptop and phone showing a polished small business website. Coffee shop or retail context. |
| `hero-systems.webp` | Digital Systems | Multiple screens or devices showing connected software — CRM, POS, dashboard. |
| `hero-automation.webp` | Automation | Streamlined workspace implying efficiency — clean desk, single monitor, organized environment. |

### `images/sections/`

| Filename | Page | Description |
|----------|------|-------------|
| `workspace-dual-monitors.webp` | Home — Why GBI | Modern workspace with dual monitors showing financial dashboards. |
| `kpi-dashboard.webp` | Accounting — Advisory | Close-up of a dashboard showing KPIs, cash flow trends, and charts. |
| `accountant-workspace.webp` | Accounting — Bookkeeping | Person reviewing financials at a clean, modern desk. |
| `team-meeting.webp` | About | Professional team meeting in a modern office or conference room. |

### `images/industries/`

Optional lifestyle photos for the "Who We Work With" grid on the Home page. Can also stay as icon-only cards.

| Filename | Description |
|----------|-------------|
| `coffee-shop.webp` | Interior of a welcoming coffee shop. |
| `retail-store.webp` | Small retail storefront or interior. |
| `restaurant.webp` | Restaurant dining or kitchen scene. |
| `professional-office.webp` | Clean professional office or coworking space. |
| `contractor.webp` | Contractor on a job site or reviewing plans. |
| `small-business.webp` | General small business owner at work. |

### `images/team/`

| Filename | Description |
|----------|-------------|
| `headshot-founder.webp` | Professional headshot for the About page (if desired). |

### `images/resources/`

Optional cover images for downloadable resource cards.

| Filename | Description |
|----------|-------------|
| `checklist-thumbnail.webp` | Generic checklist / document visual. |
| `guide-thumbnail.webp` | Generic guide / ebook visual. |

---

## `logos/`

| Filename | Description |
|----------|-------------|
| `gbi-logo-full.svg` | Full GBI Partners logo (horizontal). |
| `gbi-logo-mark.svg` | Logo mark only (icon / square version). |
| `gbi-logo-white.svg` | White version for dark backgrounds (footer). |

---

## `icons/`

The site uses [Lucide React](https://lucide.dev/) for all icons. This folder is reserved for any custom icons or SVG illustrations not available in Lucide, such as:

- Custom workflow/process illustrations
- Industry-specific icons
- Partner or integration logos (QuickBooks, Google Workspace, etc.)

---

## How to Replace a Placeholder

In `src/App.jsx`, find the `PhotoPlaceholder` component and swap it:

```jsx
// Before
<PhotoPlaceholder label="Business owner reviewing financial dashboard" aspect="75%" />

// After
import heroDashboard from "../assets/images/hero/hero-dashboard.webp";
// ...
<img
  src={heroDashboard}
  alt="Business owner reviewing financial dashboard on laptop"
  style={{ width: "100%", borderRadius: 16, objectFit: "cover", aspectRatio: "4/3" }}
/>
```

## Photography Style Notes

- Natural lighting preferred over studio setups
- Diverse, real-looking people — not overly posed stock photos
- Modern, clean environments — avoid visual clutter
- Warm but professional color grading
- No cliché business imagery (handshakes, thumbs up, pointing at screens)
- Consider local Northern Kentucky / Cincinnati photography for authenticity
