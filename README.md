# Kai Qiao's personal website

A static academic website adapted from [Jon Barron’s template](https://jonbarron.info/).

## Preview

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000. No dependencies or build step are required.

## Hosting

Publish `index.html`, `stylesheet.css`, and the `images/` directory with any static host. For GitHub Pages, select the intended branch and `/ (root)` under Settings → Pages.

For a custom domain such as `kqiao.me`, configure the domain in your hosting provider and its DNS records. This repository currently ignores `CNAME`; if your host requires a committed `CNAME`, remove that ignore rule and add the domain file.

## Updating

Edit biography, publication details, and links in `index.html`; keep image paths in sync with `images/`. Miscellanea is commented out until needed. Appearance and responsive image sizing are controlled by `stylesheet.css`.
