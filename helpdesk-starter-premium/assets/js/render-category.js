document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const catId = getParam("cat") || CATEGORIES[0].id;
  const cat = categoryById(catId);
  if (!cat) {
    document.getElementById("pageHeader").innerHTML = `<div class="container"><p>We couldn't find that category. <a href="index.html">Go back home</a>.</p></div>`;
    return;
  }
  document.title = `${cat.name} Troubleshooting Guides \u2014 ${SITE_CONFIG.siteName}`;
  document.getElementById("pageHeader").innerHTML = `
    <div class="container">
      <p class="breadcrumbs"><a href="index.html">Home</a> / <span aria-current="page">${cat.name}</span></p>
      <span class="page-header__icon" aria-hidden="true">${cat.icon}</span>
      <h1>${cat.name}</h1><p>${cat.description}</p>
    </div>`;
  const guides = guidesByCategory(catId);
  const grid = document.getElementById("guideGrid");
  function renderGuides(list) {
    grid.innerHTML = list.length ? list.map(guideCardHtml).join("") : `<p>No guides in this category yet. Check back soon, or <a href="mailto:${SITE_CONFIG.contact.email}">ask us directly</a>.</p>`;
  }
  renderGuides(guides);
  const filterBar = document.getElementById("filterBar");
  const levels = ["all", "easy", "medium", "hard"];
  filterBar.innerHTML = levels.map(l => `<button class="filter-chip" data-level="${l}" aria-pressed="${l === 'all'}">${l === 'all' ? 'All levels' : difficultyLabel(l)}</button>`).join("");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-chip").forEach(b => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
    const level = btn.dataset.level;
    renderGuides(level === "all" ? guides : guides.filter(g => g.difficulty === level));
  });
});
