/* ============================================================
   CargoMan client locations — "Our Clients. Nationwide Impact."
   ============================================================
   Central data source for the homepage clients map + list
   (assets/clients-map.js renders both from this file). To add,
   move, or rename a site, edit only this file.

   Deliberately no client/company names here - only the site
   location is shown, on the map and in the list (client
   confidentiality). If a name is ever needed again, prior versions
   are in git history.

   x/y are coordinates in the clients-map SVG's own space
   (viewBox="0 0 860 750" in index.html), NOT real map
   projections — they're placed by eye against that outline to
   land in roughly the right part of the country. Where we don't
   have a confirmed town for a site, it's placed near the general
   province centre rather than guessed at a specific place (see
   the Northern Cape entries below).
   ============================================================ */
var CARGOMAN_CLIENTS = [
  {
    province: "Northern Cape",
    clients: [
      { location: "Kathu", x: 349, y: 327 },
      { location: "Postmasburg", x: 349, y: 362 },
      { location: "Postmasburg / Kathu area", x: 368, y: 348 },
      // No confirmed town for these three — placed near the general
      // Northern Cape centre (Kimberley area) rather than guessed.
      { location: "Northern Cape", x: 420, y: 378 },
      { location: "Northern Cape", x: 445, y: 402 },
      { location: "Northern Cape", x: 400, y: 412 }
    ]
  },
  {
    province: "Gauteng",
    clients: [
      { location: "City Deep, Johannesburg", x: 600, y: 246 },
      { location: "Midrand", x: 618, y: 222 }
    ]
  },
  {
    province: "KwaZulu-Natal",
    clients: [
      { location: "Richards Bay", x: 805, y: 391 },
      { location: "Durban", x: 750, y: 448 },
      { location: "Durban", x: 745, y: 458 },
      { location: "Durban", x: 745, y: 470 }
    ]
  },
  {
    province: "Western Cape",
    clients: [
      { location: "Saldanha Bay", x: 102, y: 635 },
      { location: "Cape Town", x: 110, y: 693 }
    ]
  },
  {
    province: "Eastern Cape",
    clients: [
      { location: "Gqeberha (Port Elizabeth)", x: 480, y: 695 },
      { location: "Markman, Gqeberha", x: 494, y: 680 }
    ]
  }
];
