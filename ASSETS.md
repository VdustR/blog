# Static asset policy

All VDUSTR-owned images, audio, video, downloadable files, and brand media use one canonical GitHub repository per calendar year:

```text
assets-<year>
```

Examples: `assets-2026`, `assets-2027`.

## Repository layout

```text
assets-2026/
├── vdustr/
│   ├── brand/
│       ├── mark-master.png
│       ├── favicon-32.png
│       ├── logo-mark-64.png
│       ├── app-icon-180.png
│       ├── app-icon-512.png
│       └── mark-master.png.json
│   └── site/
│       ├── hero-botanical.webp
│       └── og-image.png
└── blog/
    └── <yyyy-mm-dd>-<article-slug>/
        ├── cover.webp
        └── <asset-name>.<ext>
```

Use lowercase kebab-case names. Keep editable sources beside exported files when redistribution rights allow it. Add attribution or license files when an asset requires them.

## URLs

Published assets use stable GitHub Pages URLs:

```text
https://vdustr.github.io/assets-<year>/<product>/<path>
```

Never use branch, commit, raw GitHub, issue-upload, temporary CDN, or local development URLs in published content.

## Lifecycle

- The current year's repository accepts new files.
- Previous yearly repositories are immutable except for security, licensing, or broken-file corrections.
- Archive a yearly repository after the final annual integrity check and after every public URL has been verified.
- Archiving must not remove GitHub Pages output or rewrite published paths.
- Never move old media into a newer repository; stable article URLs remain valid.

The files under `public/assets-2026/` in this repository are the deployment mirror for the current site identity. The canonical source moves to `VDUSTR/assets-2026` when that repository is created. The HTML wordmark is live text paired with the transparent PNG mark, so it inherits the website font and remains accessible. Brand graphics are generated as high-resolution raster masters; published variants may only be background-removed, cropped, proportionally resized, and converted. Do not trace, redraw, or convert them to SVG. Do not create, publish, or archive the GitHub repository without explicit authorization.
