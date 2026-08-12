(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header compact state
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) header.classList.add("compact");
      else header.classList.remove("compact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile navigation toggle
  var navToggle = document.getElementById("nav-toggle");
  var primaryNav = document.getElementById("primary-nav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Contact / demo form: client-side validation + placeholder submit.
  // NOTE: this currently has no backend destination wired up. Before launch,
  // replace the fetch() target below with a real, confirmed endpoint and
  // handle submissions server-side (see README brief section 15).
  var form = document.getElementById("demo-form");
  if (form) {
    var statusEl = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        field.setAttribute("data-touched", "true");
        var wrap = field.closest(".form-field");
        var ok = field.checkValidity();
        if (wrap) wrap.setAttribute("data-error", ok ? "false" : "true");
        if (!ok) valid = false;
      });

      if (!valid) {
        if (statusEl) {
          statusEl.textContent = "Please check the highlighted fields and try again.";
          statusEl.className = "form-status show error";
        }
        var firstInvalid = form.querySelector('[data-error="true"] input, [data-error="true"] textarea, [data-error="true"] select');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Placeholder success state — no data is actually sent anywhere yet.
      if (statusEl) {
        statusEl.textContent = "Thanks — this form is not yet connected to a live inbox. Please email info@rapiddev.co.za directly until it is.";
        statusEl.className = "form-status show error";
      }
    });

    form.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.addEventListener("blur", function () {
        field.setAttribute("data-touched", "true");
        var wrap = field.closest(".form-field");
        if (wrap) wrap.setAttribute("data-error", field.checkValidity() ? "false" : "true");
      });
    });
  }
})();
