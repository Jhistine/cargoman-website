(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header compact state
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      // Hysteresis (separate enter/exit thresholds) stops the class from
      // flapping on/off when scrollY hovers near a single cutoff, which
      // was making the header (and content below it) visibly jitter.
      if (window.scrollY > 40) header.classList.add("compact");
      else if (window.scrollY < 16) header.classList.remove("compact");
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

  // Scroll reveal: sections fade/slide in once as they enter the
  // viewport. The data-reveal hook and hiding class are both applied
  // here in JS (never in the HTML), so a page with JS disabled or
  // blocked never has its content hidden in the first place.
  var revealTargets = document.querySelectorAll(
    "main > section, main > .manifest, main > .strip"
  );
  if (revealTargets.length && "IntersectionObserver" in window) {
    var toReveal = [];
    revealTargets.forEach(function (el, i) {
      if (i < 2) return; // leave the hero and the strip right below it visible immediately
      el.classList.add("reveal-hidden");
      toReveal.push(el);
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    toReveal.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
