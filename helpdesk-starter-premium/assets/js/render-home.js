document.addEventListener("DOMContentLoaded", () => {
  renderHeader("index.html");
  renderFooter();
  document.getElementById("heroTagline").textContent = SITE_CONFIG.tagline;
  document.getElementById("heroDesc").textContent = SITE_CONFIG.description;
  document.getElementById("categoryGrid").innerHTML = CATEGORIES.map(categoryCardHtml).join("");
  document.getElementById("popularGuides").innerHTML = GUIDES.slice(0, 6).map(guideCardHtml).join("");
  initSearchWidget("heroSearchInput", "heroSearchResults");
  const statEl = document.getElementById("statStrip");
  if (statEl) {
    const stats = [
      { num: GUIDES.length + "+", label: "Troubleshooting guides" },
      { num: CATEGORIES.length, label: "Categories covered" },
      { num: "100%", label: "Free to read" }
    ];
    statEl.innerHTML = stats.map(s => `<div><div class="stat-strip__num">${s.num}</div><div class="stat-strip__label">${s.label}</div></div>`).join("");
  }
  const testimonialEl = document.getElementById("testimonialGrid");
  if (testimonialEl && typeof TESTIMONIALS !== "undefined") testimonialEl.innerHTML = TESTIMONIALS.map(testimonialCardHtml).join("");
  const contact = SITE_CONFIG.contact;
  document.getElementById("contactHeading").textContent = contact.heading;
  document.getElementById("contactText").textContent = contact.text;
  const ctaBtn = document.getElementById("contactBtn");
  ctaBtn.textContent = contact.buttonLabel;
  ctaBtn.href = contact.buttonHref;
});
