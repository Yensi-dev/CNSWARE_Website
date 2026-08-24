/**
 * Navbar.js
 * Reusable navigation bar for the CNSWARE static site.
 *
 * Usage (in any page's <body>):
 *   <site-navbar current="who-we-are.html" logo-src="assets/logo.png"></site-navbar>
 *   <script src="components/Navbar.js" defer></script>
 *
 * Attributes:
 *   - logo-src : path to the logo image (defaults to "assets/logo.png")
 *   - current  : filename of the active page, used to highlight the
 *                matching link (optional — if omitted, it is detected
 *                automatically from the current URL)
 *
 * Notes:
 *   - This renders into the *light DOM* (no Shadow DOM) on purpose, so it
 *     keeps using the existing global classes/styles already defined in
 *     your site stylesheet (.site-header, .nav, .brand, .brand-logo,
 *     .nav-links, .active). No extra CSS is needed for this file to work —
 *     just make sure every page links the same stylesheet that has those
 *     rules (see the folder structure notes).
 */

class SiteNavbar extends HTMLElement {
  static links = [
    { href: "who-we-are.html", label: "Who We Are" },
    { href: "what-we-do.html", label: "What We Do" },
    { href: "get-in-touch.html", label: "Get in Touch" },
  ];

  connectedCallback() {
    const logoSrc = this.getAttribute("logo-src") || "assets/logo.png";
    const current =
      this.getAttribute("current") ||
      window.location.pathname.split("/").pop() ||
      "who-we-are.html";

    const linksHTML = SiteNavbar.links
      .map((link) => {
        const isActive = link.href === current;
        return `<a href="${link.href}"${isActive ? ' class="active"' : ""}>${link.label}</a>`;
      })
      .join("\n        ");

    this.innerHTML = `
      <header class="site-header">
        <div class="container nav">
          <a class="brand" href="who-we-are.html">
            <img class="brand-logo" src="${logoSrc}" alt="CNSWARE">
          </a>
          <nav class="nav-links">
            ${linksHTML}
          </nav>
        </div>
      </header>
    `.trim();
  }
}

customElements.define("site-navbar", SiteNavbar);