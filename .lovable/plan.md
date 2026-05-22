## Goal

Let you update ingredients and publish blog articles by editing files in GitHub. Every edit on GitHub auto-syncs to Lovable and goes live — no CMS account, no code knowledge required beyond editing simple text files.

## Approach

Keep all content as plain files in the repo:

```text
src/content/
├── ingredients.json       ← edit to add/update ingredients
└── posts/
    ├── 2026-05-niacinamide.md
    └── 2026-06-retinol-guide.md
```

You connect GitHub once (Plus menu → GitHub → Connect). After that, editing those files on github.com (pencil icon → commit) updates the live site within seconds.

## What I'll build

1. **Extract ingredient data** from `IngredientLibrary.tsx` into `src/content/ingredients.json`. The component reads from the JSON, so editing the file updates the library.

2. **Blog system** — new `/blog` route + `/blog/:slug` page. Articles are Markdown files with frontmatter:
   ```md
   ---
   title: "Why Niacinamide Belongs in Your Routine"
   date: 2026-05-22
   excerpt: "The quiet workhorse of modern skincare."
   cover: /covers/niacinamide.jpg
   ---

   Article body in Markdown...
   ```
   Loaded at build time via Vite's `import.meta.glob`, parsed with `gray-matter` + `react-markdown`. Styled to match the Cormorant/Assistant aesthetic.

3. **Add a Blog link** to the Navbar.

4. **README guide** — short `CONTENT.md` at the repo root explaining how to add an ingredient or post from GitHub's web editor (with screenshots-style step list).

## Technical details

- Deps: `react-markdown`, `gray-matter`, `remark-gfm`.
- Markdown parsed at build/runtime in the browser; no backend needed.
- `import.meta.glob('/src/content/posts/*.md', { as: 'raw', eager: true })` for the post index.
- Routes added in `App.tsx`: `/blog` (list) and `/blog/:slug` (detail).
- Two seed posts included as templates.

## What you'll do after

1. Connect GitHub (one-time, ~30 sec).
2. To add an ingredient: edit `src/content/ingredients.json` on GitHub → commit.
3. To publish an article: create a new `.md` file in `src/content/posts/` on GitHub → commit.

Want me to proceed?