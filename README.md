# Fabian Mejia Professional Portfolio

A dependency-free, bilingual GitHub Pages portfolio. The site is implemented with plain HTML, CSS, and JavaScript.

## Local verification

From the repository root, run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

Alternatively, open `index.html` directly in a browser. A local server is recommended to exercise the same asset-loading path used by GitHub Pages.

## Content

The portfolio is bilingual (Spanish and English). Use the language selector in the header to switch languages; the selected language is remembered in the browser.

Professional content is defined in `index.html` and mirrored in the `translations` object in `script.js`. Update both locations together when changing a role, accomplishment, qualification, or contact detail.

## GitHub Pages

In the repository settings, enable GitHub Pages from the branch containing these files and select the repository root as the publishing source.