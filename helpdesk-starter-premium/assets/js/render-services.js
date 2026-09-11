document.addEventListener("DOMContentLoaded", () => {
  renderHeader("services.html");
  renderFooter();
  document.getElementById("pricingGrid").innerHTML = SERVICES.map(pricingCardHtml).join("");
  const testimonialEl = document.getElementById("servicesTestimonials");
  if (testimonialEl) testimonialEl.innerHTML = TESTIMONIALS.map(testimonialCardHtml).join("");
});
