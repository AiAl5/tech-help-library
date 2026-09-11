document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const q = getParam("q") || "";
  const input = document.getElementById("searchPageInput");
  input.value = q;
  const catSelect = document.getElementById("searchCategoryFilter");
  const diffSelect = document.getElementById("searchDifficultyFilter");
  if (catSelect) catSelect.innerHTML = `<option value="all">All categories</option>` + CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  function currentFilters() { return { category: catSelect ? catSelect.value : "all", difficulty: diffSelect ? diffSelect.value : "all" }; }
  function runSearch(query) {
    const results = searchGuides(query, 40, currentFilters());
    const heading = document.getElementById("searchHeading");
    const grid = document.getElementById("searchGrid");
    heading.textContent = query ? `Results for "${query}"` : "All guides";
    grid.innerHTML = results.length ? results.map(guideCardHtml).join("") : `<p>No matching guides yet. Try simpler words (e.g. "wifi", "printer", "password"), or <a href="mailto:${SITE_CONFIG.contact.email}">ask us directly</a>.</p>`;
  }
  runSearch(q);
  document.getElementById("searchPageForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newQ = input.value.trim();
    history.replaceState(null, "", `search.html?q=${encodeURIComponent(newQ)}`);
    runSearch(newQ);
  });
  [catSelect, diffSelect].forEach(sel => { if (sel) sel.addEventListener("change", () => runSearch(input.value.trim())); });
});
