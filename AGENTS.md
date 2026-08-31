# AGENTS.md

## Repository Overview

`bendiuguid.com` is the repository for Ben Diuguid's personal single-page website, hosted at [https://bendiuguid.com](https://bendiuguid.com).

## Architecture & Tech Stack

- **Framework**: React 18.3.1 bundled with Vite 6.
- **Package Manager**: `pnpm` (v11).
- **Node Runtime**: Node.js >=22.13 (configured via `.node-version: 22` for `fnm` and Netlify, and `"engines"` in `package.json`).
- **Styling**: Inline CSS styles with minimal global styles in `src/index.css`.
- **Icons**: FontAwesome v6 (`@fortawesome/react-fontawesome`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/fontawesome-svg-core`).
- **Typography**: Google Fonts ("Ubuntu") loaded via preconnected `<link>` in `index.html`.
- **Analytics & Performance**: Google Analytics (GA4 tag `G-YJM6EJ94YT`) loaded via `index.html` and reporting metrics via `web-vitals` v4 (`src/analytics.js`).
- **Testing**: Vitest + `@testing-library/react` + `@testing-library/jest-dom` in `jsdom` environment.

## Deployment & Hosting

- **Platform**: Netlify (continuous deployment connected to Git repo).
- **Trigger**: Push to `master` branch.
- **Build Command**: `npm run build` or `pnpm build` (Netlify auto-detects `pnpm-lock.yaml`).
- **Publish Directory**: `build` (configured in `vite.config.js` via `build.outDir: 'build'`).
- **Functions Directory**: `netlify/functions` (configured default).

## Project Structure

```
.
├── .gitignore
├── .node-version         # Node version target (22) for fnm and Netlify
├── index.html            # Vite HTML entry point with GA4 script & Google Fonts
├── package.json          # Project metadata, scripts, and dependencies
├── pnpm-lock.yaml        # pnpm lockfile
├── pnpm-workspace.yaml   # pnpm approved build scripts
├── public/               # Public assets served as static files
│   ├── drums.jpg         # Hero background image
│   ├── favicon.ico
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
├── src/                  # Application source code
│   ├── App.jsx           # Main landing component
│   ├── App.test.jsx      # Unit test
│   ├── analytics.js      # Web vitals to GA4 sender
│   ├── index.css         # Base reset styles
│   ├── index.jsx         # React 18 DOM render root (createRoot)
│   ├── reportWebVitals.js
│   └── setupTests.js
├── vite.config.js        # Vite & Vitest configuration
└── README.md
```

## Available Scripts

- `pnpm dev` (or `pnpm start`): Starts the Vite development server.
- `pnpm build`: Bundles the application for production output into the `build/` directory.
- `pnpm preview`: Locally previews the production build.
- `pnpm test`: Runs the Vitest test suite.
