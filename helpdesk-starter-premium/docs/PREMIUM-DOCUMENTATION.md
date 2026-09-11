# HelpDesk Starter — Premium Edition Documentation

## What's new in the premium edition

| Addition | File(s) |
|---|---|
| All 12 categories filled with guides (24 total, up from 10/5) | `assets/js/data/guides.js` |
| Services / pricing page | `services.html`, `data/services.js`, `render-services.js` |
| FAQ page with accessible accordion | `faq.html`, `data/faq.js`, `components/accordion.js`, `render-faq.js` |
| Contact page with business info, hours, and a front-end form | `contact.html`, `render-contact.js` |
| Testimonials component | `data/testimonials.js`, `testimonialCardHtml()` in `common.js` |
| Homepage stats strip + testimonials section | `index.html`, `render-home.js` |
| Search with category + difficulty filters | `search.html`, `render-search.js` |
| Free vs. premium nav/footer switch | `SITE_CONFIG.edition` in `config.js` |

Nothing in the free edition was removed to make room for these — the premium
pages are additive files a free build simply doesn't load.

## Switching between free and premium mode

In `assets/js/config.js`:

```js
edition: "premium", // or "free"
```

Setting `"free"` hides nav items marked `premiumOnly: true` (Services, FAQ,
Contact) and swaps the footer credit line. To ship a true free build, also
skip uploading `services.html`, `faq.html`, and `contact.html`.

## Adding FAQs, services, and testimonials

- **FAQs**: add `{ q, a }` objects to `data/faq.js`.
- **Services**: add `{ name, price, period, description, features[], featured }` to `data/services.js`.
- **Testimonials**: add `{ name, role, quote }` to `data/testimonials.js`.

No markup changes are needed — each page reads its data file automatically.

## The contact form

`contact.html` has a working front-end form that currently only shows a
status message. Connect it to Formspree, Netlify Forms, or your own backend
before going live.

## Business info

Edit `SITE_CONFIG.business` (name, address, hours) in `config.js` — it feeds
the contact page automatically.

## Licensing

- Free edition: full layout, responsive design, working search, solid guide set.
- Premium edition: adds business-facing pages, deeper content, and a
  commercial-use license — depth and business-readiness, not artificial
  restriction. Edit `footer.creditFree` / `creditPremium` in `config.js` to
  match your actual license terms.

## Still planned (not built yet)

- Full WordPress theme conversion (PHP templates, custom post type, taxonomy)
- Additional homepage layout variants
- A real backend for the contact form and search
