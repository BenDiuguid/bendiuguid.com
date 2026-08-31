# AGENTS.md

## Repository Overview

`bendiuguid.com` is the repository for Ben Diuguid's personal single-page website, hosted at [https://bendiuguid.com](https://bendiuguid.com).

## Current Architecture & Tech Stack

- **Framework**: React 17.0.2 bootstrapped with Create React App (`react-scripts` 5.0.1).
- **Styling**: Inline CSS styles with minimal global styles in `src/index.css`.
- **Icons**: FontAwesome (`@fortawesome/react-fontawesome`, `@fortawesome/fontawesome-free-brands`, `@fortawesome/fontawesome-svg-core`).
- **Typography**: Google Fonts ("Ubuntu") loaded dynamically via `webfontloader`.
- **Analytics & Performance**: Google Analytics (GA4 tag `G-YJM6EJ94YT`) loaded via `public/index.html` and reporting metrics via `web-vitals` (`src/analytics.js`).
- **Testing**: Jest + `@testing-library/react` configured by `react-scripts`.

## Deployment & Hosting

- **Platform**: Netlify (continuous deployment connected to Git repo).
- **Trigger**: Push to `master` branch.
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Functions Directory**: `netlify/functions` (configured default)

## Project Structure

```
.
├── .gitignore
├── .nvmrc               # Node version target (historically 14)
├── package.json         # Project metadata and dependencies
├── package-lock.json
├── public/              # Static HTML template and public assets
│   ├── drums.jpg        # Hero background image
│   ├── favicon.ico
│   ├── index.html       # HTML entry point with GA4 script
│   ├── logo192.png
│   ├── manifest.json
│   └── robots.txt
├── src/                 # Application source code
│   ├── App.js           # Main landing component
│   ├── App.test.js      # Unit test
│   ├── analytics.js     # Web vitals to GA4 sender
│   ├── index.css        # Base reset styles
│   ├── index.js         # React DOM render root
│   ├── reportWebVitals.js
│   └── setupTests.js
└── README.md
```

## Available Scripts

- `npm start`: Runs the development server.
- `npm run build`: Bundles the application for production output into the `build/` directory.
- `npm test`: Runs the test suite in interactive watch mode.
