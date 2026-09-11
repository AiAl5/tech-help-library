function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const columns = SITE_CONFIG.footer.columns.map(col => `
    <div><h3>${col.heading}</h3><ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul></div>
  `).join("");
  const social = SITE_CONFIG.social.map(s => `<a href="${s.href}" aria-label="${s.label}">${s.icon}</a>`).join("");
  const year = new Date().getFullYear();
  const credit = SITE_CONFIG.edition === "premium" ? SITE_CONFIG.footer.creditPremium : SITE_CONFIG.footer.creditFree;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="site-logo" href="index.html" style="color:#fff;"><span aria-hidden="true">${SITE_CONFIG.logoIcon}</span><span>${SITE_CONFIG.siteName}</span></a>
          <p>${SITE_CONFIG.footer.about}</p>
          <div class="footer-social">${social}</div>
        </div>
        ${columns}
      </div>
      <div class="footer-bottom"><span>${SITE_CONFIG.footer.copyright.replace("{year}", year)}</span><span>${credit}</span></div>
    </div>`;
}
