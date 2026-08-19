/* ============================================================
   CargoMan client locations — "Our Clients. Nationwide Impact."
   ============================================================
   Central data source for the homepage clients map + list
   (assets/clients-map.js renders both from this file). To add,
   move, or rename a client, edit only this file.

   x/y are coordinates in the clients-map SVG's own space
   (viewBox="0 0 860 750" in index.html), NOT real map
   projections — they're placed by eye against that outline to
   land in roughly the right part of the country. Where we don't
   have a confirmed town for a client, it's placed near the
   general province centre rather than guessed at a specific
   place (see the Northern Cape entries below).
   ============================================================ */
var CARGOMAN_CLIENTS = [
  {
    province: "Northern Cape",
    clients: [
      { name: "Tshipi", location: "Kathu (Tshipi Borwa Mine)", x: 349, y: 327 },
      { name: "Glossam", location: "Postmasburg", x: 349, y: 362 },
      { name: "TKS Mine (Toekomste Skyn)", location: "Postmasburg / Kathu area", x: 368, y: 348 },
      // No confirmed town for these three — placed near the general
      // Northern Cape centre (Kimberley area) rather than guessed.
      { name: "Intsimbi", location: "Northern Cape", x: 420, y: 378 },
      { name: "Minmet Mining", location: "Northern Cape", x: 445, y: 402 },
      { name: "Tradekor", location: "Northern Cape", x: 400, y: 412 }
    ]
  },
  {
    province: "Gauteng",
    clients: [
      { name: "MSC Logistics", location: "City Deep, Johannesburg", x: 600, y: 246 },
      { name: "Tradeport", location: "Midrand", x: 618, y: 222 }
    ]
  },
  {
    province: "KwaZulu-Natal",
    clients: [
      { name: "PSC Logistics & Services", location: "Richards Bay", x: 805, y: 391 },
      { name: "Corsair Logistics", location: "Durban", x: 750, y: 448 },
      { name: "Cabanabooiz", location: "Durban", x: 745, y: 458 },
      { name: "FPT", location: "Durban", x: 745, y: 470 }
    ]
  },
  {
    province: "Western Cape",
    clients: [
      { name: "Saldanha Dry Bulk Terminal", location: "Saldanha Bay", x: 102, y: 635 },
      { name: "FPT", location: "Cape Town", x: 110, y: 693 }
    ]
  },
  {
    province: "Eastern Cape",
    clients: [
      { name: "FPT", location: "Gqeberha (Port Elizabeth)", x: 480, y: 695 },
      { name: "Tradekor", location: "Markman, Gqeberha", x: 494, y: 680 }
    ]
  }
];
