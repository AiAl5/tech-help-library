function renderAccordion(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((item, i) => `
    <div class="accordion-item">
      <h3><button class="accordion-trigger" aria-expanded="false" aria-controls="panel-${i}" id="trigger-${i}">
        <span>${item.q}</span><span class="accordion-trigger__icon" aria-hidden="true">+</span>
      </button></h3>
      <div class="accordion-panel" id="panel-${i}" role="region" aria-labelledby="trigger-${i}"><p>${item.a}</p></div>
    </div>`).join("");
  el.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) { panel.classList.remove("is-open"); panel.style.maxHeight = null; }
      else { panel.classList.add("is-open"); panel.style.maxHeight = panel.scrollHeight + 40 + "px"; }
    });
  });
}
