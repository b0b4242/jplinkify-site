document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.setAttribute("aria-label", opened ? "Fermer le menu" : "Ouvrir le menu");
      toggle.textContent = opened ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
        toggle.textContent = "☰";
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const category = document.querySelector("#service");
  const otherWrap = document.querySelector("#other-service-wrap");
  const otherInput = document.querySelector("#other-service");

  function updateOtherField() {
    if (!category || !otherWrap) return;
    const show = category.value === "Autre";
    otherWrap.hidden = !show;
    if (otherInput) otherInput.required = show;
  }

  if (category) {
    category.addEventListener("change", updateOtherField);
    updateOtherField();
  }

  // Les formulaires de démonstration ne transmettent aucune donnée.
  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "Le formulaire est prêt visuellement, mais il n'est pas encore connecté. Aucune donnée n'a été envoyée ni enregistrée. Pour recevoir les réponses, il faudra le relier à un formulaire sécurisé.";
        status.classList.add("visible");
        status.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });
});
