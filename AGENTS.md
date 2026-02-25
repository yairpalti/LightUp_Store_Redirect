# AGENTS.md

## Cursor Cloud specific instructions

This is a **zero-dependency static HTML/CSS website** (LightUp Crowd landing site) hosted on GitHub Pages. There are no package managers, build tools, frameworks, test suites, or linting configurations.

### Running the dev server

Serve the site locally with any static HTTP server from the repo root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` for the home page and `http://localhost:8080/download/` for the download page.

### Key pages

| Path | File | Purpose |
|------|------|---------|
| `/` | `index.html` | Marketing landing page |
| `/download/` | `download/index.html` | App download page (UA-based redirect to App Store / Google Play) |

### Notes

- No build step, no linting, no automated tests exist in this repo.
- CSS is in `css/site.css` (shared) plus inline `<style>` blocks in each HTML file.
- The `CNAME` file configures the GitHub Pages custom domain (`lightupcrowd.com`).
- The download page contains inline JavaScript that auto-redirects mobile users to the appropriate app store after 1.5 seconds.
