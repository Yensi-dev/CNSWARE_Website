class SiteFooter extends HTMLElement {
  static links = [];

  connectedCallback() {
    const logoSrc = this.getAttribute("logo-src") || "img/CNSWARElogo.png";
    const year = this.getAttribute("year") || new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img class="footer-logo" src="${logoSrc}" alt="CNSWARE">
          </div>
          <div class="footer-copyright">
            <span>&copy; ${year} CNSWARE. All rights reserved.</span>
          </div>
          <a class="footer-social" href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
          </a>
        </div>
      </footer>
    `.trim();
  }
}

customElements.define("site-footer", SiteFooter);