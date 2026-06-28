(function () {
  "use strict";

  /* ---- Header trasparente: diventa solido allo scroll ---- */
  var header = document.getElementById("site-header");
  if (header && header.classList.contains("is-transparent")) {
    var onScroll = function () {
      if (window.scrollY > 60) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- Frecce della striscia orizzontale ---- */
  var strip = document.getElementById("strip");
  if (strip) {
    var step = function () { return Math.max(strip.clientWidth * 0.8, 320); };
    document.querySelectorAll("[data-strip-prev]").forEach(function (b) {
      b.addEventListener("click", function () { strip.scrollBy({ left: -step(), behavior: "smooth" }); });
    });
    document.querySelectorAll("[data-strip-next]").forEach(function (b) {
      b.addEventListener("click", function () { strip.scrollBy({ left: step(), behavior: "smooth" }); });
    });
  }

  /* ---- Lightbox ---- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-caption");
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-full]"));
  if (!lb || !items.length) return;

  var current = -1;
  var group = [];

  function show(i) {
    if (i < 0) i = group.length - 1;
    if (i >= group.length) i = 0;
    current = i;
    var el = group[i];
    lbImg.src = el.getAttribute("data-full");
    lbImg.alt = el.getAttribute("data-title") || "";
    var title = el.getAttribute("data-title") || "";
    var meta = el.getAttribute("data-meta") || "";
    lbCap.innerHTML =
      '<span class="lb-cap-title">' + title + "</span>" +
      (meta ? '<span class="lb-cap-meta">' + meta + "</span>" : "");
  }

  function open(el) {
    var g = el.getAttribute("data-gallery") || "all";
    group = items.filter(function (it) { return (it.getAttribute("data-gallery") || "all") === g; });
    show(group.indexOf(el));
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  items.forEach(function (el) {
    el.addEventListener("click", function () { open(el); });
  });

  document.getElementById("lb-close").addEventListener("click", close);
  document.getElementById("lb-prev").addEventListener("click", function (e) { e.stopPropagation(); show(current - 1); });
  document.getElementById("lb-next").addEventListener("click", function (e) { e.stopPropagation(); show(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  });
})();
