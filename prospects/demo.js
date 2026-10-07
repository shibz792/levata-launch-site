/* ============================================================
   PROSPECT CONFIG
   Copy this file to prospects/<slug>.js, edit the values, then open
   /?p=<slug>. Capture screenshots with:
     node tools/capture.mjs <slug> site=https://their-site.co.nz competitor-a=https://...
   Boxes and focus areas are percentages of the desktop screenshot
   (x/y from the top-left, w/h as a share of the image).
   ============================================================ */
window.PROSPECT = {
  isDemo: true, // shows a "Demo data" badge. Remove for real prospects.

  companyName: 'Harbourline Plumbing',
  logo: 'assets/prospects/demo/logo.svg',     // light-on-dark version works best
  website: 'harbourlineplumbing.co.nz',
  preparedDate: '',                            // blank = this month

  screenshots: {
    desktop: 'assets/prospects/demo/site.jpg',
    mobile: 'assets/prospects/demo/site-mobile.jpg'
  },

  // Slide 2: the single strongest commercial insight.
  finding: {
    headline: 'Your business looks stronger than your website currently communicates.',
    detail: 'Twenty years of trusted local work. The site opens with “Welcome to Our Website.”',
    focus: { x: 11.8, y: 13.6, w: 76.4, h: 29 }
  },

  // Slide 3: three or four annotated problem areas.
  findings: [
    { title: 'The first message says nothing', detail: 'The most valuable space on the page is spent on “Welcome to Our Website.”', box: { x: 33, y: 23.5, w: 34, h: 9.5 } },
    { title: 'Twelve choices before one answer', detail: 'Visitors have to work out where to go before they know why to stay.', box: { x: 11.8, y: 9.6, w: 63.4, h: 4 } },
    { title: 'No clear next step', detail: 'The only call to action is a small text link, halfway down the page.', box: { x: 49.8, y: 71.6, w: 6.2, h: 3 } },
    { title: 'Your best proof is buried', detail: 'Twenty years, Master Plumbers membership and real reviews sit in small grey text.', box: { x: 13, y: 75.6, w: 16, h: 2.6 } }
  ],

  // Slide 4: one or two competitors, shown side by side with the prospect.
  youTags: ['Generic welcome', 'Twelve menu items', 'Next step hidden'],
  competitors: [
    {
      name: 'Apex Plumbing & Gas',
      website: 'apexplumbing.co.nz',
      screenshot: 'assets/prospects/demo/competitor-a.jpg',
      tags: ['Clear promise', 'Upfront pricing', 'Two obvious next steps']
    }
  ],
  opportunity: 'You have the stronger story. The opportunity is making it the first thing customers see.',

  // Slide 5: one line per transformation, specific to this business.
  recommendations: {
    clearer: 'Lead with what you do, where, and why you are trusted.',
    stronger: 'A visual standard that matches twenty years of quality work.',
    simpler: 'Four clear paths instead of twelve menu items.',
    persuasive: 'Membership, history and reviews placed where decisions happen.',
    modern: 'Fast and effortless on the phone a customer is holding.'
  },

  // Slide 5 concept mock. Use the prospect's real facts only.
  concept: {
    brand: 'Harbourline',
    accent: '#3b82f6',
    headline: 'Auckland plumbing, done properly since 2004.',
    sub: 'Family owned. Master Plumbers member. Residential and commercial.',
    nav: ['Services', 'About', 'Reviews', 'Contact'],
    cta: 'Book a plumber',
    cta2: 'Call 09 555 0142',
    trust: ['Est. 2004', 'Master Plumbers', 'Auckland-wide']
  },

  // Slide 13: optional link the CTA opens (SOW / payment / onboarding).
  ctaUrl: ''
};
