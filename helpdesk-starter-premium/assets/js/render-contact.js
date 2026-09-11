document.addEventListener("DOMContentLoaded", () => {
  renderHeader("contact.html");
  renderFooter();
  const biz = SITE_CONFIG.business;
  const contact = SITE_CONFIG.contact;
  document.getElementById("contactInfo").innerHTML = `
    <ul class="info-list">
      <li><span class="info-list__icon" aria-hidden="true">\ud83d\udccd</span><span>${biz.name}<br>${biz.address}</span></li>
      <li><span class="info-list__icon" aria-hidden="true">\ud83d\udce7</span><a href="mailto:${contact.email}">${contact.email}</a></li>
      <li><span class="info-list__icon" aria-hidden="true">\ud83d\udcde</span><a href="tel:${contact.phone}">${contact.phone}</a></li>
    </ul>`;
  document.getElementById("hoursTable").innerHTML = biz.hours.map(h => `<tr><td>${h.day}</td><td>${h.time}</td></tr>`).join("");
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formStatus").textContent = "This is a template demo form. Connect it to your email service or a form backend (e.g. Formspree, Netlify Forms) before going live.";
  });
});
