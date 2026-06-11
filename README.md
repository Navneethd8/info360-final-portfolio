# StudyMatch — INFO 360 Final Portfolio

Design case study portfolio for INFO 360. Static site deployed via GitHub Pages.

## Local preview

```bash
cd info360-final-portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Adding content

1. **Text** — edit `content.md`, then ask to sync into the site (or edit HTML directly)
2. **Images** — drop files into `assets/images/` and replace placeholder `<div class="figure__placeholder">` blocks with `<img src="assets/images/your-file.png" alt="...">`

### Image folders (suggested)

```
assets/images/
  problem/       # funnel, survey tables, competitive analysis
  rationale/     # affinity map
  solution/      # flows, mockups, storyboard, wireframes
  evaluation/    # testing photos, results tables
  team/          # headshots
```

## GitHub Pages setup

1. Create a repo on GitHub (e.g. `info360-final-portfolio`)
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Scaffold INFO 360 portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/info360-final-portfolio.git
   git push -u origin main
   ```
3. **Settings → Pages → Build and deployment**
   - Source: **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` deploys on every push to `main`
5. Site URL: `https://YOUR_USERNAME.github.io/info360-final-portfolio/`

Update the GitHub link in `index.html` footer once you know your username.

## Structure

| Page | Path | Assignment section |
|------|------|-------------------|
| Landing | `index.html` | Problem, Rationale, Reflection, Limitations, References |
| Solution | `solution/` | Design Solution |
| Evaluation | `evaluation/` | Evaluation |
