function getParam(name) { return new URLSearchParams(window.location.search).get(name); }
function escapeHtml(str = "") { return str.replace(/[&<>"']/g, s => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[s])); }
function categoryById(id) { return CATEGORIES.find(c => c.id === id); }
function categoryName(id) { const c = categoryById(id); return c ? c.name : id; }
function guideById(id) { return GUIDES.find(g => g.id === id); }
function guidesByCategory(catId) { return GUIDES.filter(g => g.category === catId); }
function difficultyLabel(level) { const map = { easy: "\ud83d\udfe2 Easy", medium: "\ud83d\udfe1 Medium", hard: "\ud83d\udd34 Advanced" }; return map[level] || level; }
function difficultyBadgeClass(level) { return { easy: "badge-easy", medium: "badge-medium", hard: "badge-hard" }[level] || "badge-easy"; }
function guideCardHtml(guide) {
  return `
    <a class="card guide-card" href="guide.html?id=${guide.id}">
      <span class="badge badge-category">${categoryName(guide.category)}</span>
      <h3 class="guide-card__title">${guide.title}</h3>
      <p class="guide-card__desc">${guide.description}</p>
      <div class="guide-card__meta">
        <span class="badge ${difficultyBadgeClass(guide.difficulty)}">${difficultyLabel(guide.difficulty)}</span>
        <span>\u23f1\ufe0f ${guide.time}</span>
      </div>
    </a>`;
}
function categoryCardHtml(cat) {
  const count = guidesByCategory(cat.id).length;
  return `
    <a class="card category-card" href="category.html?cat=${cat.id}">
      <span class="category-card__icon" aria-hidden="true">${cat.icon}</span>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <p class="category-card__count">${count} guide${count === 1 ? "" : "s"}</p>
    </a>`;
}
function testimonialCardHtml(t) {
  const initials = t.name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return `
    <div class="card testimonial-card">
      <p class="testimonial-card__quote">\u201c${t.quote}\u201d</p>
      <div class="testimonial-card__author">
        <span class="testimonial-card__avatar" aria-hidden="true">${initials}</span>
        <div><p class="testimonial-card__name">${t.name}</p><p class="testimonial-card__role">${t.role}</p></div>
      </div>
    </div>`;
}
function pricingCardHtml(s) {
  return `
    <div class="card pricing-card ${s.featured ? "pricing-card--featured" : ""}">
      <h3>${s.name}</h3>
      <p class="pricing-card__price">${s.price} <span>${s.period}</span></p>
      <p>${s.description}</p>
      <ul>${s.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <a class="btn ${s.featured ? "btn-primary" : "btn-secondary"} btn-block" href="contact.html">Book this</a>
    </div>`;
}
