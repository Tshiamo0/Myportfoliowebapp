# My Portfolio Web App

A personal portfolio built with React. This repository contains the source code for a responsive, single-page portfolio site that showcases projects, skills, and contact information. It was created with Create React App and includes a production-ready build in the `build/` folder.

## Features

- Responsive layout and mobile-friendly styles
- Project gallery with links to live sites and source code
- Easy to customize sections: About, Projects, Skills, Contact

## Tech Stack

- React
- Create React App (build tooling)
- CSS (static files in `public/` and `build/static/css`)

## Quick Start

Prerequisites: Node.js (v16+) and npm installed.

1. Install dependencies:

```
npm install
```

2. Run the development server:

```
npm start
```

Open http://localhost:3000 in your browser. The app supports hot reloading while you develop.

3. Create a production build:

```
npm run build
```

The optimized output is placed in the `build/` folder and is ready for deployment.

## Project Scripts

- `npm start` — Start the development server
- `npm test` — Run tests
- `npm run build` — Create a production build
- `npm run eject` — Eject CRA configuration (irreversible)

## Project Structure (key files)

- `public/` — static HTML and assets used at runtime
- `src/` — React source files
	- `App.js` — main app component
	- `index.js` — entry point
- `build/` — production build output (auto-generated)

## Deployment

Deploy the contents of the `build/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.). Below are common deployment options.

GitHub Pages

- Ensure `homepage` in `package.json` is set (already configured for this repo).
- Install `gh-pages` and add deploy scripts:

```
npm install --save-dev gh-pages
```

Add to `package.json` scripts:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Then run:

```
npm run deploy
```

Netlify

- Drag-and-drop the `build/` folder in Netlify's site deploy dashboard, or connect your Git repo and set the build command to `npm run build` and the publish directory to `build`.

Vercel

- Install the Vercel CLI or connect your Git repo in the Vercel dashboard. Use `npm run build` as the build command; Vercel will detect a Create React App and publish the `build` output automatically.

If you'd like, I can add `gh-pages` scripts to `package.json` and install the dependency for you, or create a `netlify.toml` for Netlify—which would you prefer?

## Customization

Edit `src/App.js`, `src/App.css`, and the components in `src/components/` to customize content and styling. Replace images in `public/images/` and update links in the projects section.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with changes.

## License

This project is provided under the MIT License (or choose another license).

---

If you'd like, I can update the `package.json` `homepage` for GitHub Pages or add deployment instructions for a specific host.
