function scoreGuideMatch(guide, query) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  let score = 0;
  const haystacks = [
    { text: guide.title, weight: 5 }, { text: guide.description, weight: 3 },
    { text: (guide.symptoms || []).join(" "), weight: 2 }, { text: guide.category, weight: 1 }
  ];
  q.split(/\s+/).forEach(word => {
    if (word.length < 2) return;
    haystacks.forEach(h => { if (h.text && h.text.toLowerCase().includes(word)) score += h.weight; });
  });
  return score;
}
function searchGuides(query, limit = 6, filters = {}) {
  let results = GUIDES.map(g => ({ guide: g, score: scoreGuideMatch(g, query) }));
  if (!query) results = results.map(r => ({ ...r, score: 1 }));
  results = results.filter(r => r.score > 0);
  if (filters.category && filters.category !== "all") results = results.filter(r => r.guide.category === filters.category);
  if (filters.difficulty && filters.difficulty !== "all") results = results.filter(r => r.guide.difficulty === filters.difficulty);
  return results.sort((a, b) => b.score - a.score).slice(0, limit).map(r => r.guide);
}
function initSearchWidget(inputId, resultsId, { redirectOnEnter = true } = {}) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  if (!input || !results) return;
  function renderSuggestions() {
    const q = input.value.trim();
    if (!q) { results.innerHTML = ""; results.hidden = true; return; }
    const matches = searchGuides(q, 6);
    results.hidden = false;
    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">No guides found for "${escapeHtml(q)}" yet. Try different words, or <a href="mailto:${SITE_CONFIG.contact.email}">ask us directly</a>.</div>`;
      return;
    }
    results.innerHTML = `<ul>${matches.map(g => `
      <li><a href="guide.html?id=${g.id}">
        <strong>${g.title}</strong><br>
        <span style="color:var(--color-text-muted);font-size:var(--fs-sm);">${categoryName(g.category)} \u00b7 ${difficultyLabel(g.difficulty)}</span>
      </a></li>`).join("")}</ul>`;
  }
  input.addEventListener("input", renderSuggestions);
  input.addEventListener("focus", renderSuggestions);
  document.addEventListener("click", (e) => { if (!input.contains(e.target) && !results.contains(e.target)) results.hidden = true; });
  if (redirectOnEnter) {
    input.closest("form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    });
  }
}
