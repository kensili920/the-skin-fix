# Updating content on The Skin Fix

All editable content lives in [`src/content`](./src/content). Edit files there on GitHub — every commit syncs to Lovable and goes live within seconds.

## Add or edit an ingredient

1. Open [`src/content/ingredients.json`](./src/content/ingredients.json) on GitHub.
2. Click the pencil icon (Edit).
3. Add a new entry (or modify an existing one), following the same shape:

```json
{
  "name": "Vitamin C",
  "whatItIs": "An antioxidant that brightens and protects.",
  "howItWorks": "Neutralizes free radicals and inhibits melanin production.",
  "whoBenefits": "Anyone with dullness, dark spots, or sun damage.",
  "evidence": "Supported by dermatological research from PubMed.",
  "evidenceUrl": "https://pubmed.ncbi.nlm.nih.gov"
}
```

4. Scroll down → **Commit changes**.

The new ingredient appears in the Ingredient Library tab automatically.

## Publish a new blog article

1. Go to [`src/content/posts/`](./src/content/posts/) on GitHub.
2. Click **Add file → Create new file**.
3. Name it like `2026-06-my-article.md` (date + slug).
4. Paste this template and edit:

```md
---
title: "Your Article Title"
date: "2026-06-01"
excerpt: "One-sentence summary shown on the blog list."
author: "The Skin Fix"
---

Your article body in **Markdown**.

## Subheading

- bullet
- bullet

> Pull-quote or pro tip.
```

5. **Commit new file**.

It appears on `/blog` immediately, sorted by date (newest first).

## Markdown cheatsheet

| Syntax | Result |
|---|---|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `## Heading` | section heading |
| `- item` | bullet list |
| `[text](url)` | link |
| `> quote` | blockquote |
