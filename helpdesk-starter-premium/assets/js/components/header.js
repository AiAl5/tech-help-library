function renderHeader(activePage = "") {
  const el = document.getElementById("site-header");
  if (!el) return;
  const items = SITE_CONFIG.nav.filter(item => !item.premiumOnly || SITE_CONFIG.edition === "premium");
  const navLinks = items.map(item => {
    const isActive = activePage && item.href.startsWith(activePage);
    return `<li><a href="${item.href}" ${isActive ? 'aria-current="page"' : ''}>${item.label}</a></li>`;
  }).join("");
  el.innerHTML = `
    <div class="container">
      <a class="site-logo" href="index.html">
        <span class="site-logo__mark" aria-hidden="true">${SITE_CONFIG.logoIcon}</span>
        <span>${SITE_CONFIG.siteName}</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mainNav" aria-label="Open menu">
        <span class="nav-toggle__bar"></span>
      </button>
      <nav class="main-nav" id="mainNav" aria-label="Primary">
        <ul>${navLinks}</ul>
        <a class="btn btn-primary" href="${SITE_CONFIG.contact.buttonHref}">${SITE_CONFIG.contact.buttonLabel}</a>
      </nav>
    </div>`;
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
