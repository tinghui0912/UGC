/**
 * ============================================================================
 *  PORTFOLIO CONFIG  —  the single source of truth for creator-specific content
 * ============================================================================
 *
 *  To customize this template, edit the values below. That's it.
 *  You can also ask the Base44 AI to "update my portfolio config" and describe
 *  the change — every section reads from this file.
 *
 *  RULES
 *  - Text supports lightweight emphasis:  *word* = italic,  **word** = emphasis.
 *  - Anything left empty ("" or []) is hidden automatically — no empty placeholders.
 *  - Media fields accept an image URL, or set `mediaType: "video"` and use a
 *    video URL (mp4/webm) instead.
 *  - Optional fields (results, price, booking link, socials, logos, location,
 *    availability, whole sections like testimonials / case studies) only appear
 *    when you provide them.
 *
 *  INQUIRY FORM
 *  - Submissions are saved to the Inquiries entity. Admins review them at
 *    /inquiries (sign in with an admin account).
 *  - To receive an email alert on each new inquiry, set the INQUIRY_NOTIFY_EMAIL
 *    secret in the dashboard (Settings → Secrets).
 * ============================================================================
 */

export const portfolio = {
  // ---- Creator identity -----------------------------------------------------
  creator: {
    name: "Mara Vesper", // used in nav, footer, SEO
    firstName: "Mara", // hero first line
    lastName: "Vesper", // hero second line (rendered italic)
    title: "UGC Creator + Strategic Content Partner",
    positioning:
      "I craft scroll-stopping vertical content — and the strategy behind it — helping beauty, fashion and lifestyle brands turn attention into revenue.",
    location: "Los Angeles, CA", // optional — shown in the hero eyebrow
    availability: "Available for Q4", // optional — badge on the hero portrait
    email: "hello@maravesper.com", // contact + footer mailto link
    bookingUrl: "https://calendly.com/mara-vesper/intro-30", // optional — "Book a Call" button

    // Hero portrait (image or video)
    heroMedia:
      "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/c922211b5_generated_076a78b9.jpg",
    heroMediaType: "image", // "image" | "video"

    niches: ["Beauty", "Fashion", "Lifestyle", "Wellness", "Tech"], // optional tags

    // Social profiles. `platform` picks the footer icon. `inHero` shows it in the hero.
    socials: [
      { label: "Instagram", href: "https://instagram.com/yourhandle", platform: "instagram", inHero: true },
      { label: "TikTok", href: "https://tiktok.com/@yourhandle", platform: "tiktok", inHero: true },
      { label: "LinkedIn", href: "https://linkedin.com", platform: "linkedin", inHero: false },
    ],
  },

  // ---- Hero ----------------------------------------------------------------
  hero: {
    eyebrow: "Portfolio · Est. 2026",
    primaryCta: { label: "View My Work", href: "#work" },
    secondaryCta: { label: "Work With Me", href: "#contact" },
  },

  // ---- About ---------------------------------------------------------------
  about: {
    heading: "The person behind *the lens* — and the spreadsheet.",
    bio: [
      "I'm Mara — a UGC creator who fell in love with the craft of making brands feel human. For six years I've been the on-camera voice and the off-camera strategist for beauty, fashion and lifestyle labels who want content that performs without losing its soul.",
      "Every project starts with the question brands forget to ask: **what should this make people do?** Then I build the creative around the answer.",
    ],
    media:
      "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/3c29ed0c0_generated_696d25ae.jpg",
    mediaType: "image", // "image" | "video"
    interestsHeading: "Beyond the Camera",
    interests: [
      { title: "Visual Storyteller", desc: "I treat every clip like a 15-second film." },
      { title: "Strategy-Obsessed", desc: "Pretty is the price of entry — I optimize for outcomes." },
      { title: "Eternal Student", desc: "Always decoding the next platform shift." },
      { title: "Slow-Morning Coffee", desc: "Best ideas arrive with the second pour-over." },
    ],
  },

  // ---- Brand trust bar -----------------------------------------------------
  trust: {
    heading: "Trusted by brands who care about the details",
    // `logo` is optional — leave "" to show the brand name as a wordmark.
    brands: [
      { name: "AURELIA", logo: "" },
      { name: "LUMEN", logo: "" },
      { name: "MAISON K.", logo: "" },
      { name: "VERDE", logo: "" },
      { name: "HALO", logo: "" },
      { name: "NORTH&CO", logo: "" },
    ],
    stats: [
      { value: "120+", label: "Brands partnered" },
      { value: "48M", label: "Total views" },
      { value: "6 yrs", label: "Creating content" },
      { value: "4.2x", label: "Avg. campaign ROAS" },
    ],
  },

  // ---- Selected work (portfolio videos) ------------------------------------
  work: {
    eyebrow: "Selected Work",
    heading: "Vertical content, built to be *felt*.",
    intro:
      "A sample of recent 9:16 deliverables across beauty, fashion, food, travel, wellness and tech. Tap any clip to play.",
    items: [
      {
        title: "Glass Skin Ritual",
        category: "Beauty",
        contentType: "Unboxing + Demo",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/d31c56ef1_generated_02fb19a8.jpg",
        video:
          "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
        description:
          "A native-style product demonstration built around texture, application and the finished skin result, using an educational hook to introduce the product naturally.",
        results: "42K Organic Views · 8.2% Engagement",
      },
      {
        title: "Autumn Capsule",
        category: "Fashion",
        contentType: "OOTD Haul",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/5956c6ef0_generated_e89f8ee9.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description:
          "A five-look styling series anchored by one versatile coat, ending each clip on a question to drive saves and comments.",
        results: "1.9M Views · 4.4x ROAS",
      },
      {
        title: "Morning Pour-Over",
        category: "Food",
        contentType: "ASMR",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/1e45c9b6c_generated_b62aaba4.jpg",
        video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        description:
          "An ASMR-led morning ritual cut to platform-native pacing, letting the sound design carry the product story.",
        results: "",
      },
      {
        title: "Coastal Escape",
        category: "Travel",
        contentType: "Vlog Edit",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/9339138f3_generated_9fe83e3e.jpg",
        video:
          "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
        description:
          "A travel vlog edit balancing aspirational scenery with practical itinerary beats for a DTC travel brand.",
        results: "310K Views · 6.1% Save Rate",
      },
      {
        title: "Studio Flow",
        category: "Wellness",
        contentType: "Tutorial",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/1a9915da5_generated_ae3d4e29.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description:
          "A movement tutorial shot in soft natural light, breaking a wellness routine into three repeatable steps.",
        results: "",
      },
      {
        title: "Sound, Unboxed",
        category: "Tech",
        contentType: "Review",
        poster:
          "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/fd770f7e8_generated_c2f3dad0.jpg",
        video: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        description:
          "A review-style unboxing focused on tactile detail and first-listen reaction, cut for retention on Reels.",
        results: "88K Views · 7.4% CTR",
      },
    ],
  },

  // ---- Case studies (optional — hide the section by emptying `items`) ------
  caseStudies: {
    eyebrow: "Case Studies",
    heading: "Where the creative meets *the numbers*.",
    items: [
      {
        brand: "Aurelia Skincare",
        logo: "", // optional — leave "" to show the brand initial
        objective: "Launch a hero serum to Gen-Z on TikTok & Reels",
        content: [
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/d31c56ef1_generated_02fb19a8.jpg", type: "image" },
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/5956c6ef0_generated_e89f8ee9.jpg", type: "image" },
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/1e45c9b6c_generated_b62aaba4.jpg", type: "image" },
        ],
        strategy:
          "A three-asset hook-test: an ASMR unboxing, a 'one-week results' diary, and a founder Q&A. We led with tension in the first 1.5s and let the formula do the talking — then retargeted viewers who watched past 50%.",
        metrics: [
          { value: "8.4M", label: "Views" },
          { value: "5.1x", label: "ROAS" },
          { value: "9.3%", label: "CTR" },
          { value: "$1.2M", label: "Revenue" },
        ],
        chart: [3, 5, 4, 7, 9, 8, 11, 14],
      },
      {
        brand: "Maison K. Apparel",
        logo: "",
        objective: "Sell through a seasonal capsule with limited ad spend",
        content: [
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/5956c6ef0_generated_e89f8ee9.jpg", type: "image" },
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/9339138f3_generated_9fe83e3e.jpg", type: "image" },
          { src: "https://media.base44.com/images/public/6ac6bb2fe33e6d82db7de6b1/d31c56ef1_generated_02fb19a8.jpg", type: "image" },
        ],
        strategy:
          "Built a 'capsule in five looks' series around one versatile coat. Each clip ended on a styling question to drive saves and comments, feeding a lookalike audience that converted at half the usual CPA.",
        metrics: [
          { value: "3.2M", label: "Views" },
          { value: "4.4x", label: "ROAS" },
          { value: "6.8%", label: "CTR" },
          { value: "11k", label: "Units sold" },
        ],
        chart: [2, 4, 6, 5, 8, 10, 9, 12],
      },
    ],
  },

  // ---- Services ------------------------------------------------------------
  services: {
    eyebrow: "Services",
    heading: "Three ways we can *work together*.",
    footnote: "Pricing tailored to scope & usage — let's talk about your goals.",
    items: [
      {
        tag: "01",
        title: "UGC Content",
        desc: "Scroll-stopping vertical assets, delivered ready to run as ads or organic.",
        includes: [
          "3–6 vertical deliverables per brief",
          "Hook development & scripting",
          "Raw + edited versions",
          "48–72hr turnaround",
        ],
        price: "", // optional — e.g. "From $1,200" — hidden when empty
        featured: false,
      },
      {
        tag: "02",
        title: "Monthly Content Partnerships",
        desc: "An ongoing creative partnership — I become an extension of your brand team.",
        includes: [
          "Monthly content retainer",
          "Platform-native variations",
          "Performance review & iteration",
          "Usage rights included",
        ],
        price: "",
        featured: true,
      },
      {
        tag: "03",
        title: "Face of Brand",
        desc: "Long-term representation across campaigns, ads and brand storytelling.",
        includes: [
          "Campaign & ad usage",
          "Photo + video assets",
          "Brand ambassador terms",
          "Quarterly creative direction",
        ],
        price: "",
        featured: false,
      },
    ],
  },

  // ---- Testimonials (optional — hide the section by emptying `items`) ------
  testimonials: {
    eyebrow: "Testimonials",
    heading: "What partners *say*.",
    items: [
      {
        quote:
          "Mara doesn't just deliver content — she delivers a point of view. Our serum launch outperformed every paid asset we'd run that year.",
        name: "Elena Park",
        role: "Head of Growth, Aurelia Skincare",
      },
      {
        quote:
          "The rare creator who thinks like a marketer. She came with a hook strategy, then optimized it mid-flight. Our CPA dropped by half.",
        name: "Daniel Cho",
        role: "Brand Director, Maison K.",
      },
      {
        quote:
          "We've worked with dozens of UGC creators. Mara is the one we keep on retainer. The work performs and it looks like a campaign, not an ad.",
        name: "Priya Nair",
        role: "CMO, Verde Wellness",
      },
    ],
  },

  // ---- Contact -------------------------------------------------------------
  contact: {
    eyebrow: "Let's collaborate",
    heading: "Have a project in mind? Let's create something *worth watching*.",
    body:
      "Tell me about your brand and goals — or grab a time on my calendar and we'll take it from there.",
    projectTypes: ["UGC Content", "Monthly Partnership", "Face of Brand", "Campaign / Other"],
  },

  // ---- Navigation ----------------------------------------------------------
  nav: {
    links: [
      { label: "Work", href: "#work", section: "work" },
      { label: "Case Studies", href: "#case-studies", section: "caseStudies" },
      { label: "Services", href: "#services", section: "services" },
      { label: "About", href: "#about", section: "about" },
    ],
    cta: { label: "Work With Me", href: "#contact" },
  },

  // ---- Footer --------------------------------------------------------------
  footer: {
    tagline: "UGC Creator + Strategic Content Partner. Building content worth watching.",
    legal: "Designed for brands who notice the details.",
    adminLink: { label: "Inquiries", href: "/inquiries" },
  },

  // ---- SEO -----------------------------------------------------------------
  seo: {
    title: "Mara Vesper — UGC Creator & Strategic Content Partner",
    description:
      "Premium portfolio of UGC creator and strategic content partner Mara Vesper — scroll-stopping vertical content and the strategy behind it.",
  },
};

/**
 * Which sections have content to show. Used by Nav to drop dead links and by
 * sections to hide themselves entirely when emptied.
 */
export function sectionIsVisible(section) {
  if (section === "about") return true;
  const group = portfolio[section];
  return Array.isArray(group?.items) ? group.items.length > 0 : true;
}