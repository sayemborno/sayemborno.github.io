# sayemborno.github.io

Personal website for **Abu Sayem Khan** — DevOps Engineer & CNCF Kubestronaut.

A single-page, dependency-free static site (HTML/CSS/JS) hosted on GitHub Pages.

## Structure

- `index.html` — page content
- `styles.css` — styling (dark/light theme)
- `script.js` — typing effect, animated metrics, theme toggle
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll build)

## Local preview

Open `index.html` in a browser, or run a local server:

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy

Pushed to the `main` branch of `sayemborno/sayemborno.github.io`, the site is live at
https://sayemborno.github.io (enable GitHub Pages → Source: `main` branch, `/root`).
