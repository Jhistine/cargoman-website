(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";
  var pinsLayer = document.getElementById("clients-pins");
  var tooltip = document.getElementById("client-tooltip");
  var wrapEl = document.getElementById("clients-map-wrap");

  if (!pinsLayer || !tooltip || !wrapEl || typeof CARGOMAN_CLIENTS === "undefined") return;

  var tLoc = tooltip.querySelector(".t-loc");
  var tProvince = tooltip.querySelector(".t-province");

  var pins = {}; // id -> { el, client, province }
  var activeId = null;

  function makeId(gi, ci) { return "c-" + gi + "-" + ci; }

  function showTooltip(pinEl, client, province) {
    tLoc.textContent = client.location;
    tProvince.textContent = province;
    var pinRect = pinEl.getBoundingClientRect();
    var wrapRect = wrapEl.getBoundingClientRect();
    var centerX = pinRect.left + pinRect.width / 2 - wrapRect.left;
    // Clamp so the tooltip never spills past the map edges (pins near
    // the coastline sit close to the container boundary).
    var half = tooltip.offsetWidth / 2;
    var pad = 8;
    var minX = half + pad;
    var maxX = wrapRect.width - half - pad;
    if (maxX < minX) { minX = maxX = wrapRect.width / 2; }
    centerX = Math.max(minX, Math.min(maxX, centerX));
    tooltip.style.left = centerX + "px";
    tooltip.style.top = (pinRect.top - wrapRect.top) + "px";
    tooltip.classList.add("is-visible");
  }

  function hideTooltip() {
    tooltip.classList.remove("is-visible");
  }

  function setActive(id) {
    if (activeId === id) {
      if (pins[activeId]) pins[activeId].el.classList.remove("is-active");
      activeId = null;
      hideTooltip();
      return;
    }
    if (activeId && pins[activeId]) pins[activeId].el.classList.remove("is-active");
    activeId = id;
    var pin = pins[id];
    pin.el.classList.add("is-active");
    pinsLayer.appendChild(pin.el); // paint on top of other pins
    showTooltip(pin.el, pin.client, pin.province);
  }

  // ---- Build the map pins ----
  CARGOMAN_CLIENTS.forEach(function (group, gi) {
    group.clients.forEach(function (client, ci) {
      var id = makeId(gi, ci);

      var g = document.createElementNS(SVG_NS, "g");
      g.setAttribute("class", "pin");
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", client.location + ", " + group.province);
      g.setAttribute("transform", "translate(" + client.x + "," + client.y + ")");

      var hit = document.createElementNS(SVG_NS, "circle");
      hit.setAttribute("class", "pin-hit");
      hit.setAttribute("r", "15");

      var halo = document.createElementNS(SVG_NS, "circle");
      halo.setAttribute("class", "pin-halo");
      halo.setAttribute("r", "9");

      var dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("class", "pin-dot");
      dot.setAttribute("r", "5");

      g.appendChild(hit);
      g.appendChild(halo);
      g.appendChild(dot);

      g.addEventListener("mouseenter", function () { showTooltip(g, client, group.province); });
      g.addEventListener("mouseleave", function () { if (activeId !== id) hideTooltip(); });
      g.addEventListener("focus", function () { showTooltip(g, client, group.province); });
      g.addEventListener("blur", function () { if (activeId !== id) hideTooltip(); });
      g.addEventListener("click", function () { setActive(id); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          setActive(id);
        }
      });

      pinsLayer.appendChild(g);
      pins[id] = { el: g, client: client, province: group.province };
    });
  });

  // Click outside the map, or Escape, clears the active selection.
  document.addEventListener("click", function (e) {
    if (!activeId) return;
    if (wrapEl.contains(e.target)) return;
    setActive(activeId);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && activeId) setActive(activeId);
  });
})();
