/*
 * AllanPisoWiFi Premium UI Add-on — experimental, original implementation.
 * UI-only: footer and wallpaper. No hooks into WiFi5Soft licensing, coin logic,
 * client time, IPTV, Local Anime TV, VLANs, or payment systems.
 *
 * TEST BRANCH ONLY. This file is NOT included automatically by the live portal.
 * Load after the free portal theme and pilot IPTV script when ready for testing.
 *
 * Background example:
 *   window.AllanPisoWiFiPremium.setBackground("ChristmasBG.jpg");
 * Remove wallpaper:
 *   window.AllanPisoWiFiPremium.setBackground("");
 */
(function (win, doc) {
  "use strict";

  var config = {
    brand: "ALLANPISOWIFI",
    tagline: "Fast Wi-Fi • Local Anime TV • Live IPTV",
    credit: "A MorsitHub custom experience",
    wallpaper: "", // Set to a URL or local file path to use an image.
    accent: "#20d5ce"
  };

  function make(tag, className, content) {
    var element = doc.createElement(tag);
    if (className) element.className = className;
    if (typeof content === "string") element.textContent = content;
    return element;
  }

  function insertStyles() {
    if (doc.getElementById("apw-premium-style")) return;
    var style = make("style");
    style.id = "apw-premium-style";
    style.textContent = [
      ":root { --apw-accent:#20d5ce; --apw-text:#e8f8ff; }",
      "body.apw-premium-active {",
      "  background-color:#08101c !important;",
      "  background-image:radial-gradient(circle at 12% 0%,#1b3848 0%,transparent 42%),linear-gradient(160deg,#0b182a,#060b14) !important;",
      "  background-repeat:no-repeat !important;",
      "  background-size:cover !important;",
      "  background-position:center center !important;",
      "  min-height:100vh;",
      "}",
      "body.apw-premium-active.apw-premium-wallpaper {",
      "  background-image:linear-gradient(180deg,rgba(4,13,25,.72),rgba(4,12,24,.87)),var(--apw-wallpaper) !important;",
      "}",
      "#apw-premium-footer {",
      "  box-sizing:border-box; width:calc(100% - 24px); max-width:560px;",
      "  margin:20px auto 24px; padding:15px 14px 14px;",
      "  border:1px solid rgba(32,213,206,.24); border-radius:16px;",
      "  background:linear-gradient(140deg,rgba(20,39,57,.90),rgba(9,19,34,.92));",
      "  box-shadow:0 12px 34px rgba(0,0,0,.26),inset 0 1px 0 rgba(255,255,255,.05);",
      "  color:var(--apw-text); text-align:center; font-family:Arial,system-ui,sans-serif;",
      "}",
      "#apw-premium-footer .apw-name {",
      "  font-size:13px; font-weight:800; letter-spacing:1.5px;",
      "  color:var(--apw-accent);",
      "}",
      "#apw-premium-footer .apw-tagline {",
      "  margin:6px 0; font-size:11px; line-height:1.6; color:#d5e5ef;",
      "}",
      "#apw-premium-footer .apw-meta {",
      "  margin-top:9px; padding-top:9px; border-top:1px solid rgba(255,255,255,.09);",
      "  font-size:10px; line-height:1.6; color:#91a8b9;",
      "}",
      "@media (max-width:480px) {",
      "  #apw-premium-footer {width:calc(100% - 16px);margin:12px auto 18px;padding:12px 10px;}",
      "}"
    ].join("\n");
    (doc.head || doc.documentElement).appendChild(style);
  }

  function renderFooter() {
    if (!doc.body || doc.getElementById("apw-premium-footer")) return;
    var footer = make("footer");
    footer.id = "apw-premium-footer";
    footer.setAttribute("aria-label", "AllanPisoWiFi portal footer");
    footer.appendChild(make("div", "apw-name", "◉ " + config.brand));
    footer.appendChild(make("p", "apw-tagline", config.tagline));
    footer.appendChild(make("div", "apw-meta",
      "© " + (new Date()).getFullYear() + " " + config.brand + " • " + config.credit));
    doc.body.appendChild(footer);
  }

  function setBackground(url) {
    config.wallpaper = typeof url === "string" ? url.trim() : "";
    if (!doc.body) return;
    if (!config.wallpaper) {
      doc.body.classList.remove("apw-premium-wallpaper");
      doc.body.style.removeProperty("--apw-wallpaper");
      return;
    }
    // CSS string escaping for manually configured file/URL paths.
    var safeUrl = config.wallpaper.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    doc.body.style.setProperty("--apw-wallpaper", 'url("' + safeUrl + '")');
    doc.body.classList.add("apw-premium-wallpaper");
  }

  function mount() {
    if (!doc.body) return;
    insertStyles();
    doc.documentElement.style.setProperty("--apw-accent", config.accent);
    doc.body.classList.add("apw-premium-active");
    renderFooter();
    setBackground(config.wallpaper);
  }

  win.AllanPisoWiFiPremium = {
    mount: mount,
    setBackground: setBackground,
    setAccent: function (color) {
      if (typeof color !== "string" || !/^#[0-9a-f]{6}$/i.test(color)) return;
      config.accent = color;
      doc.documentElement.style.setProperty("--apw-accent", color);
    }
  };

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mount);
  else mount();
})(window, document);
