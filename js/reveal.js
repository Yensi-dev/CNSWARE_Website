/* ===== CNSWARE — Smooth page-load fade + scroll-reveal =====
   Include this script (with `defer`) as the LAST <script> tag on every page,
   after components/Navbar.js and components/Footer.js, so it runs once the
   navbar/footer markup those components inject already exists in the DOM.
   Pair with css/animations.css. */

(function () {
  "use strict";

  /* ---- 1) Smooth fade-in once the page has loaded ---- */
  function markLoaded() {
    requestAnimationFrame(function () {
      document.body.classList.add("is-loaded");
    });
  }

  /* ---- 2) Fade + slide up elements as they scroll into view ---- */
  var REVEAL_SELECTORS = [
    ".hero-inner",
    ".built-head",
    ".icon-grid .icon-item",
    ".global-inner",
    ".global-cta .global-brand",
    ".global-cta .global-actions",
    ".card",
    ".step",
    ".outcome",
    ".cta",
    ".form-col",
    ".contact-card",
    ".office",
    ".footer-brand",
    ".footer-col",
    "[data-reveal]", // add data-reveal="" to any element on future pages to opt it in
  ].join(", ");

  function initReveal() {
    var elements = document.querySelectorAll(REVEAL_SELECTORS);
    if (!elements.length) return;

    elements.forEach(function (el, i) {
      el.classList.add("reveal");
      // small stagger for items that share a parent (e.g. icon grid cards)
      var parent = el.parentElement;
      var index = parent ? Array.prototype.indexOf.call(parent.children, el) : i;
      el.style.setProperty("--reveal-delay", Math.min(index, 6) * 0.08 + "s");
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  function init() {
    markLoaded();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();