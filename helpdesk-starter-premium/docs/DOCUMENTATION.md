# HelpDesk Starter — Template Documentation (Free Edition Base)

See PREMIUM-DOCUMENTATION.md for what's added in the premium build. This
file covers the core structure shared by both editions.

## File structure

```
index.html / category.html / guide.html / search.html   Core pages
faq.html / services.html / contact.html                  Premium-only pages
assets/css/  variables.css (brand tokens), base.css, components.css, layout.css, premium.css
assets/js/   config.js (branding), common.js (helpers)
assets/js/data/  categories.js, guides.js, faq.js, services.js, testimonials.js
assets/js/components/  header.js, footer.js, search-widget.js, accordion.js
assets/js/render-*.js   Per-page wiring
```

## Quick customization map

- **Brand name/tagline/contact/nav/footer** -> `assets/js/config.js`
- **Colors/fonts/spacing** -> `assets/css/variables.css`
- **Categories** -> `assets/js/data/categories.js`
- **Guides** -> `assets/js/data/guides.js` (copy an existing object, edit fields)
- **FAQ/Services/Testimonials** -> matching files in `assets/js/data/`

## Deployment

Upload all files keeping the folder structure, with `index.html` as the entry
point. No build step, server, or database required.

## WordPress conversion map

| File | WordPress target |
|---|---|
| `components/header.js` output | `header.php` |
| `components/footer.js` output | `footer.php` |
| `index.html` | `front-page.php` |
| `category.html` | `taxonomy-guide-category.php` |
| `guide.html` | `single-guide.php` |
| `search.html` | `search.php` |
| `faq.html` | `page-faq.php` |
| `services.html` | `page-services.php` |
| `contact.html` | `page-contact.php` |
| `data/guides.js` entries | "Guide" custom post type |
| `data/categories.js` entries | "Guide Category" taxonomy |
