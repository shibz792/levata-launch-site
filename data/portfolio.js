/* ============================================================
   PORTFOLIO (reusable across every prospect)
   Slide 7 shows up to three entries with `featured: true`, in order.
   Recapture screenshots after a site changes:
     node tools/capture.mjs ../work hyped-holidays=https://hyped-tau.vercel.app/
   (writes assets/work/<name>.jpg and <name>-mobile.jpg)
   Never add metrics or results here unless they are real and approved.
   ============================================================ */
window.PORTFOLIO = [
  { name: 'Hyped Holidays',          sector: 'Luxury travel',             url: 'hyped-tau.vercel.app',         desktop: 'assets/work/hyped-holidays.jpg', mobile: 'assets/work/hyped-holidays-mobile.jpg', featured: true },
  { name: 'Knight’s Move Consulting', sector: 'Operations & AI consulting', url: 'knightsmoveconsulting.com', desktop: 'assets/work/knights-move.jpg',   mobile: 'assets/work/knights-move-mobile.jpg',   featured: true },
  { name: 'Topway',                  sector: 'Overseas recruitment',      url: 'topway.vercel.app',            desktop: 'assets/work/topway.jpg',         mobile: 'assets/work/topway-mobile.jpg',         featured: true },
  { name: 'AI Catalyst',             sector: 'AI consultancy',            url: 'aicatlyst.com',                desktop: 'assets/work/ai-catalyst.jpg',    mobile: 'assets/work/ai-catalyst-mobile.jpg' },
  { name: 'Levata',                  sector: 'AI systems & automation',   url: 'levatahq.com',                 desktop: 'assets/work/levata.jpg',         mobile: 'assets/work/levata-mobile.jpg' }
];
