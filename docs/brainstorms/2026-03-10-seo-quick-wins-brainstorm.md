---
date: 2026-03-10
topic: seo-quick-wins
---

# SEO Quick Wins for michaellorz.com

## What We're Building

Three targeted on-page SEO additions to ensure michaellorz.com ranks #1 when anyone searches "Michael Lorz":

1. **JSON-LD Person structured data** on `index.html` — tells Google this is the authoritative page for the person "Michael Lorz", a voiceover actor
2. **Open Graph + Twitter Card meta tags** on all pages — enables rich previews when shared on social media, which drives backlinks and discovery
3. **`<link rel="canonical">`** on all pages — signals to Google the definitive URL for each page, preventing duplicate content issues

## Why This Approach

Three approaches were considered:
- **A (chosen): Quick wins** — meta tags + structured data only
- B: Full technical SEO — also adds sitemap.xml, robots.txt, rel=me links
- C: Technical + content — also tweaks headings and image filenames

Approach A was chosen because it delivers the highest SEO impact for a name-based search ("Michael Lorz") with the fewest changes and zero content risk. For a personal brand name with low search competition, structured data + Open Graph alone provide strong enough signals.

## Key Decisions

- **JSON-LD schema type:** `Person` (not `WebPage`) — Google surfaces Person schemas in Knowledge Panels and rich results
- **Canonical domain:** `https://michaellorz.com` (no trailing slash, no www)
- **All pages get canonical + OG tags:** `index.html`, `contact.html`, `reels-gallery.html`
- **Structured data only on homepage:** The homepage is the canonical identity page; other pages don't need a Person schema

## Structured Data Fields to Include

```json
{
  "@type": "Person",
  "name": "Michael Lorz",
  "url": "https://michaellorz.com",
  "jobTitle": "Voiceover Actor",
  "description": "Actor, voiceover artist, and performance capture specialist...",
  "image": "https://michaellorz.com/images/headshot.jpg",
  "sameAs": [
    "https://www.imdb.com/name/nm7118039/",
    "https://www.instagram.com/michaellorz13/",
    "https://www.tiktok.com/@michaellorz",
    "https://www.youtube.com/@michaellorz13",
    "https://www.twitch.tv/michaellorz"
  ]
}
```

The `sameAs` array is especially powerful — it links this page to Michael's verified profiles on IMDB, social media, etc., which Google uses to build an entity graph.

## Open Questions

- Should `reels-gallery.html` be checked before implementation to ensure it follows the same pattern?
- Does Michael want a specific `og:image` (a high-res version of the headshot), or should we use the existing `images/headshot.jpg`?

## Next Steps

→ Implement directly (changes are small and well-defined) or run `/workflows:plan` for a step-by-step implementation checklist
