document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const guideId = getParam("id");
  const guide = guideById(guideId);
  const main = document.getElementById("guideMain");
  const sidebar = document.getElementById("guideSidebar");
  if (!guide) {
    main.innerHTML = `<p>We couldn't find that guide. <a href="index.html">Go back home</a> or use search.</p>`;
    sidebar.innerHTML = "";
    return;
  }
  document.title = `${guide.title} \u2014 ${SITE_CONFIG.siteName}`;
  const cat = categoryById(guide.category);
  const listHtml = (items) => items && items.length ? `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>` : "";
  const stepsHtml = guide.steps.map(s => `<li><strong>${s.title}.</strong> ${s.text}</li>`).join("");
  const warningsHtml = (guide.warnings || []).map(w => `<div class="alert alert-warning"><span class="alert__icon" aria-hidden="true">\u26a0\ufe0f</span><div class="alert__body"><p>${w}</p></div></div>`).join("");
  const tipsHtml = (guide.tips || []).map(t => `<div class="alert alert-tip"><span class="alert__icon" aria-hidden="true">\ud83d\udca1</span><div class="alert__body"><p>${t}</p></div></div>`).join("");
  main.innerHTML = `
    <p class="breadcrumbs"><a href="index.html">Home</a> / <a href="category.html?cat=${cat.id}">${cat.name}</a> / <span aria-current="page">${guide.title}</span></p>
    <h1>${guide.title}</h1><p>${guide.description}</p>
    <div class="guide-meta">
      <span class="guide-meta__item">\ud83d\udcc2 ${cat.name}</span>
      <span class="guide-meta__item">${difficultyLabel(guide.difficulty)}</span>
      <span class="guide-meta__item">\u23f1\ufe0f ${guide.time}</span>
    </div>
    ${guide.symptoms && guide.symptoms.length ? `<h2>What you might be experiencing</h2>${listHtml(guide.symptoms)}` : ""}
    ${guide.checkFirst && guide.checkFirst.length ? `<h2>Check this first</h2>${listHtml(guide.checkFirst)}` : ""}
    <h2>Step-by-step fix</h2><ol class="step-list">${stepsHtml}</ol>
    ${warningsHtml}${tipsHtml}
    ${guide.stillNotWorking ? `<h2>Still not working?</h2><p>${guide.stillNotWorking}</p><a class="btn btn-primary" href="${SITE_CONFIG.contact.buttonHref}">${SITE_CONFIG.contact.buttonLabel}</a>` : ""}`;
  const relatedIds = guide.related || [];
  const relatedGuides = relatedIds.map(guideById).filter(Boolean).slice(0, SITE_CONFIG.features.maxRelatedGuides);
  sidebar.innerHTML = `
    <div class="card"><h3>Need more help?</h3><p>${SITE_CONFIG.contact.text}</p><a class="btn btn-primary btn-block" href="${SITE_CONFIG.contact.buttonHref}">${SITE_CONFIG.contact.buttonLabel}</a></div>
    ${relatedGuides.length ? `<div class="card"><h3>Related guides</h3><div class="stack">${relatedGuides.map(g => `<a href="guide.html?id=${g.id}">${g.title}</a>`).join("")}</div></div>` : ""}`;
});
