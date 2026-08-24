class SiteFooter extends HTMLElement {
  static links = [
    { href: "who-we-are.html", label: "Who We Are" },
    { href: "what-we-do.html", label: "What We Do" },
    { href: "get-in-touch.html", label: "Get in Touch" },
  ];

  connectedCallback() {
    const logoSrc = this.getAttribute("logo-src") || "img/CNSWARElogo.png";
    const year = this.getAttribute("year") || new Date().getFullYear();

    const linksHTML = SiteFooter.links
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join("\n        ");

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img class="footer-logo" src="${logoSrc}" alt="CNSWARE">
            <p>Connecting the systems behind the work. We help organizations align business and technology for sustainable growth.</p>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            ${linksHTML}
          </div>
        </div>
        <div class="container footer-bottom">
          <span>&copy; ${year} CNSWARE. All rights reserved.</span>
        </div>
      </footer>
    `.trim();
  }
}

customElements.define("site-footer", SiteFooter);