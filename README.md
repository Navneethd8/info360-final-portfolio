# StudyHub | INFO 360 Final Portfolio

Design case study portfolio for INFO 360. Static site deployed via GitHub Pages.

**Live site:** [https://navneethd8.github.io/info360-final-portfolio/](https://navneethd8.github.io/info360-final-portfolio/)

## Local preview

```bash
cd info360-final-portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Adding images

Drop files into `assets/images/` and replace `<div class="figure__placeholder">` blocks with:

```html
<img src="assets/images/your-file.png" alt="Description">
```

### Suggested folders

```
assets/images/
  problem/       # funnel, survey tables, competitive analysis
  rationale/     # affinity map
  solution/      # flows, mockups, storyboard, wireframes, lo-fi
  evaluation/    # testing photos, results tables, journey map
  team/          # headshots
```

## Deployment

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml` (GitHub Actions → Pages).

## Structure

| Page | Path | Assignment section |
|------|------|-------------------|
| Landing | `index.html` | Problem, Rationale, Reflection, Limitations, References |
| Solution | `solution/` | Design Solution |
| Evaluation | `evaluation/` | Evaluation |
