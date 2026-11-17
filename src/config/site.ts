/**
 * Single source for Tigris business info.
 * Replace `url` and `email` before launch.
 * Package prices are intentionally unfinished: "Starting at $___".
 */

export type IconName =
  | "calendar-check"
  | "calendar"
  | "refresh"
  | "book-check"
  | "landmark"
  | "scale"
  | "receipt"
  | "hard-hat"
  | "chart"
  | "layers"
  | "lock"
  | "file-pen"
  | "users"
  | "banknote"
  | "house"
  | "utensils"
  | "store"
  | "truck"
  | "briefcase"
  | "bag"
  | "stethoscope"
  | "building"
  | "map-pin"
  | "spreadsheet";

export type Photo = {
  src: string;
  alt: string;
};

const photo = (id: string): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;

export const images = {
  plans: {
    src: photo("photo-1503387762-592deb58ef4e"),
    alt: "Contractor reviewing architectural drawings at a work table",
  },
  siteCrew: {
    src: photo("photo-1541888946425-d81bb19240f5"),
    alt: "Construction crew standing together on an active building site",
  },
  rebar: {
    src: photo("photo-1504307651254-35680f356dfd"),
    alt: "Construction workers installing rebar on a concrete deck",
  },
  laptopNotes: {
    src: photo("photo-1454165804606-c3d57bc86b40"),
    alt: "People reviewing handwritten notes beside open laptops",
  },
  floorLaptop: {
    src: photo("photo-1581091226825-a6a2a5aee158"),
    alt: "Professional working on a laptop on an industrial floor",
  },
  spreadsheets: {
    src: photo("photo-1664575602276-acd073f104c1"),
    alt: "Person reconciling a spreadsheet, calculator, and paper receipts",
  },
  charts: {
    src: photo("photo-1460925895917-afdab827c52f"),
    alt: "Laptop screen showing financial charts and summary figures",
  },
  meeting: {
    src: photo("photo-1551836022-d5d88e9218df"),
    alt: "Two colleagues reviewing notes and a laptop in a meeting",
  },
  reportsTable: {
    src: photo("photo-1600880292203-757bb62b4baf"),
    alt: "Two colleagues at a desk of reports, with a chart board behind them",
  },
  smallBusiness: {
    src: photo("photo-1556740758-90de374c12ad"),
    alt: "Small business owner helping a customer at the front desk",
  },
  atlanta: {
    src: photo("photo-1606416357029-8cc2e025682e"),
    alt: "Night aerial of the Atlanta skyline, including Bank of America Plaza",
  },
  detroit: {
    src: photo("photo-1598038748999-1174fb7d2562"),
    alt: "The Spirit of Detroit statue in downtown Detroit, Michigan",
  },
} satisfies Record<string, Photo>;

export const site = {
  name: "Tigris LLC",
  shortName: "Tigris",
  tagline: "Clean Books. Clear Profits.",
  heroTitle:
    "Clean Books. Clear Profits. Built for Construction & Every Business.",
  description:
    "Weekly bookkeeping, receipt organization, and messy-books cleanup. Tigris LLC is at 444 Manget St SE, Marietta, GA 30060, serving Atlanta, Detroit, and remote clients.",
  /** Placeholder domain for metadata. Replace before launch. */
  url: "https://example.com",
  phone: "(248) 550-1440",
  phoneHref: "tel:+12485501440",
  street: "444 Manget St SE",
  city: "Marietta",
  region: "GA",
  postalCode: "30060",
  country: "USA",
  addressLine: "444 Manget St SE, Marietta, GA 30060, USA",
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=444+Manget+St+SE,+Marietta,+GA+30060",
  /** Placeholder email. Replace before launch. */
  email: "hello@example.com",
  emailHref: "mailto:hello@example.com",
  hours: "Monday–Friday, 9:00 a.m.–5:00 p.m. ET",
  copyrightYear: 2026,
  responseTime: "We'll contact you within 1 business day.",
  remoteNote: "Remote clients are welcome.",
};

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/construction-bookkeeping", label: "Construction" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const trustItems = [
  {
    title: "QuickBooks Online & Desktop",
    detail: "We work inside the file you already use.",
    icon: "book-check" as const,
  },
  {
    title: "Weekly Updates",
    detail: "A steady close, not a once-a-year scramble.",
    icon: "calendar-check" as const,
  },
  {
    title: "Construction Job Costing",
    detail: "Costs tied to the job that earned them.",
    icon: "hard-hat" as const,
  },
  {
    title: "Atlanta & Detroit",
    detail: "Both metros, plus remote clients.",
    icon: "map-pin" as const,
  },
];

export const snapshot = [
  { value: 2, label: "Metro areas", detail: "Atlanta and Detroit" },
  { value: 10, label: "Bookkeeping services", detail: "Weekly books, receipts, and cleanup" },
  { value: 8, label: "Industries welcome", detail: "Construction first, not construction only" },
];

export type Service = {
  id: string;
  name: string;
  summary: string;
  detail: string;
  icon: IconName;
  home: boolean;
};

export const services: Service[] = [
  {
    id: "weekly-bookkeeping",
    name: "Weekly Bookkeeping",
    summary: "Numbers updated every week, so job decisions are not based on last month's guess.",
    detail:
      "We categorize, reconcile, and send a short written update each week. Built for active jobs and higher transaction volume.",
    icon: "calendar-check",
    home: true,
  },
  {
    id: "receipts",
    name: "Receipt Organization",
    summary: "Paper and digital receipts sorted, matched, and ready before the weekly close.",
    detail:
      "We collect, label, and file receipts so charges are not a pile at month-end. Each receipt is matched to the bank or card line and coded to the right account — and to the job, when the work is construction.",
    icon: "receipt",
    home: true,
  },
  {
    id: "monthly-bookkeeping",
    name: "Monthly Bookkeeping",
    summary: "A dependable monthly close when your volume does not need a weekly rhythm.",
    detail:
      "Bank and card activity coded, accounts reconciled, and a monthly set of reports you can hand to your CPA.",
    icon: "calendar",
    home: true,
  },
  {
    id: "cleanup",
    name: "Messy Books Cleanup & Catch-Up",
    summary: "We rebuild the months — or years — that slipped, then hand you a file you can trust.",
    detail:
      "A scoped catch-up through an agreed date. Uncategorized transactions, old reconciliations, and duplicate accounts get sorted before ongoing work starts.",
    icon: "refresh",
    home: true,
  },
  {
    id: "quickbooks",
    name: "QuickBooks Setup, Migration & Cleanup",
    summary: "A clean QuickBooks file, Online or Desktop, set up for how your work actually runs.",
    detail:
      "New company files, moves between Online and Desktop, and tidy-ups of charts of accounts that grew sideways. We name the software because we work in it — this is not a certification badge.",
    icon: "book-check",
    home: true,
  },
  {
    id: "reconciliations",
    name: "Bank, Credit Card & Loan Reconciliations",
    summary: "Every account tied out, so the balance on screen matches the statement.",
    detail:
      "Checking, cards, and loans reconciled to the statement. Differences get identified instead of plugged.",
    icon: "landmark",
    home: false,
  },
  {
    id: "ap-ar",
    name: "AP & AR Reconciliation",
    summary: "Know who you owe, who owes you, and which invoices are still open.",
    detail:
      "Bills and invoices matched to payments so accounts payable and accounts receivable are not a mystery balance.",
    icon: "scale",
    home: false,
  },
  {
    id: "invoicing",
    name: "Invoicing & Payment Tracking",
    summary: "Invoices go out, payments get matched, and nothing sits in limbo.",
    detail:
      "We track what was billed and what was collected so open invoices stay visible between closes.",
    icon: "receipt",
    home: false,
  },
  {
    id: "job-costing",
    name: "Job Costing Reports",
    summary: "See labor, materials, and subs against each job before the margin disappears.",
    detail:
      "Income and costs coded to jobs, with reports that show how a project is tracking. Layout follows how your jobs are set up in QuickBooks.",
    icon: "hard-hat",
    home: true,
  },
  {
    id: "tax-ready",
    name: "Financial Reports & Tax-Ready Books",
    summary: "Profit and loss, balance sheet, and a file your CPA can actually use.",
    detail:
      "Standard financial reports at each close, organized for your CPA. Tigris prepares books. We do not prepare or file tax returns.",
    icon: "chart",
    home: true,
  },
];

export const homeServices = services.filter((service) => service.home);

export type StorySlide = {
  id: string;
  kind: "Problem" | "Service" | "Who we serve";
  title: string;
  body: string;
  href: string;
  cta: string;
  image: Photo;
};

export const storySlides: StorySlide[] = [
  {
    id: "plans-slide",
    kind: "Problem",
    title: "The job moves faster than the books",
    body: "Drawings, change orders, and store runs pile up while the file stays a month behind.",
    href: "/construction-bookkeeping",
    cta: "Construction bookkeeping",
    image: images.plans,
  },
  {
    id: "unsorted",
    kind: "Problem",
    title: "Months of transactions, still uncategorized",
    body: "Receipts, card charges, and bank lines pile up until the file is too messy to trust.",
    href: "/services#cleanup",
    cta: "See cleanup & catch-up",
    image: images.spreadsheets,
  },
  {
    id: "unreconciled",
    kind: "Problem",
    title: "The bank balance and the books disagree",
    body: "Unreconciled accounts hide missing deposits, duplicate expenses, and loans that were never tied out.",
    href: "/services#reconciliations",
    cta: "See reconciliations",
    image: images.charts,
  },
  {
    id: "job-mix",
    kind: "Problem",
    title: "Job costs dumped into one bucket",
    body: "Labor, materials, and subcontractors that are not coded to the job turn the margin into a guess.",
    href: "/services#job-costing",
    cta: "See job costing",
    image: images.siteCrew,
  },
  {
    id: "weekly-slide",
    kind: "Service",
    title: "A weekly close you can run the work on",
    body: "We categorize, reconcile, and send a short written update every week so decisions are not waiting on last month.",
    href: "/services#weekly-bookkeeping",
    cta: "Weekly bookkeeping",
    image: images.laptopNotes,
  },
  {
    id: "receipts-slide",
    kind: "Service",
    title: "Receipts filed before they become a pile",
    body: "Paper and digital receipts get labeled, matched to the charge, and coded so the weekly books stay current.",
    href: "/services#receipts",
    cta: "Receipt organization",
    image: images.meeting,
  },
  {
    id: "quickbooks-slide",
    kind: "Service",
    title: "QuickBooks set up for how the work runs",
    body: "New company files, moves between Online and Desktop, and a chart of accounts that matches the business.",
    href: "/services#quickbooks",
    cta: "QuickBooks setup",
    image: images.floorLaptop,
  },
  {
    id: "reports-slide",
    kind: "Service",
    title: "Reports your CPA can use",
    body: "Profit and loss, balance sheet, and a file organized at each close. Tigris prepares the books. Tax filing stays with your CPA.",
    href: "/services#tax-ready",
    cta: "Tax-ready books",
    image: images.reportsTable,
  },
  {
    id: "industries-slide",
    kind: "Who we serve",
    title: "Construction first. Every business welcome.",
    body: "Contractors, restaurants, retail, trucking, real estate, professional firms, e-commerce, and healthcare practices.",
    href: "/industries",
    cta: "See industries",
    image: images.smallBusiness,
  },
  {
    id: "atlanta-slide",
    kind: "Who we serve",
    title: "Bookkeeping across metro Atlanta",
    body: "Marietta, Kennesaw, Alpharetta, Smyrna, Roswell, Sandy Springs, Decatur, and remote clients in Georgia.",
    href: "/service-areas/atlanta",
    cta: "Atlanta service area",
    image: images.atlanta,
  },
  {
    id: "detroit-slide",
    kind: "Who we serve",
    title: "Bookkeeping across metro Detroit",
    body: "Dearborn, Troy, Southfield, Warren, Livonia, Ann Arbor, and remote clients in Michigan.",
    href: "/service-areas/detroit",
    cta: "Detroit service area",
    image: images.detroit,
  },
];

export const constructionPoints = [
  {
    title: "Job costing",
    detail: "Labor, materials, and subcontractors coded to the job that incurred them.",
    icon: "layers" as const,
  },
  {
    title: "Retainage",
    detail: "Held amounts tracked until they are released, instead of vanishing into a clearing account.",
    icon: "lock" as const,
  },
  {
    title: "Change orders",
    detail: "Scope changes recorded when the work changes, so the job total stays current.",
    icon: "file-pen" as const,
  },
  {
    title: "Subcontractor 1099s",
    detail: "Vendor details and payments kept in order for your 1099 process. Filing stays with your CPA unless we agree otherwise in writing.",
    icon: "users" as const,
  },
  {
    title: "Draw tracking",
    detail: "Draws matched to what was billed so you can see what is still outstanding.",
    icon: "banknote" as const,
  },
  {
    title: "Home Depot & Lowe's receipts",
    detail: "Store receipts categorized to the right job and cost code, not dumped into one supplies bucket.",
    icon: "receipt" as const,
  },
];

export type Industry = {
  id: string;
  name: string;
  summary: string;
  icon: IconName;
  featured?: boolean;
};

export const industries: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    summary:
      "General contractors, builders, subcontractors, and remodelers who need job costs, draws, and subs kept straight.",
    icon: "hard-hat",
    featured: true,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    summary: "Rent, deposits, and property expenses separated so each property stays readable.",
    icon: "house",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    summary: "Daily sales, vendor bills, and payroll reports reconciled on a rhythm you can keep.",
    icon: "utensils",
  },
  {
    id: "retail",
    name: "Retail",
    summary: "Card deposits, inventory purchases, and sales tax collected — recorded, not guessed.",
    icon: "store",
  },
  {
    id: "trucking",
    name: "Trucking",
    summary: "Fuel, repairs, and settlements coded so a truck's costs are not mixed into overhead.",
    icon: "truck",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    summary: "Invoices, retainers, and operating costs closed cleanly for firms that bill their time.",
    icon: "briefcase",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    summary: "Payouts, fees, and refunds matched so the deposit is not treated as the sale.",
    icon: "bag",
  },
  {
    id: "healthcare",
    name: "Healthcare practices",
    summary: "Practice deposits and expenses organized for the owner and the CPA — bookkeeping, not billing codes.",
    icon: "stethoscope",
  },
];

export const steps = [
  {
    step: "01",
    title: "Tell us where the books stand",
    detail: "Business, software, and how far behind. Construction or any other industry.",
  },
  {
    step: "02",
    title: "We quote the work",
    detail: "Ongoing bookkeeping, a cleanup, or both. Scope and price confirmed before we start.",
  },
  {
    step: "03",
    title: "We clean up and reconcile",
    detail: "Categories, accounts, and job costs put in order through an agreed date.",
  },
  {
    step: "04",
    title: "You get a steady close",
    detail: "Weekly or monthly updates, plus reports you can share with your CPA.",
  },
];

export type Package = {
  id: string;
  name: string;
  price: string;
  audience: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "weekly",
    name: "Weekly Clean Books",
    price: "Starting at $___",
    audience: "Active job sites and higher volume",
    summary: "A weekly close so costs and cash do not wait until month-end.",
    features: [
      "Weekly categorization and reconciliations",
      "Job-cost friendly coding for contractors",
      "Short written update each week",
      "Monthly financial reports",
    ],
    featured: true,
  },
  {
    id: "monthly",
    name: "Monthly Essentials",
    price: "Starting at $___",
    audience: "Steadier, lower-volume businesses",
    summary: "A monthly close with the reports you and your CPA expect.",
    features: [
      "Monthly categorization and close",
      "Bank and card reconciliations",
      "Profit & loss and balance sheet",
      "Email questions between closes",
    ],
  },
  {
    id: "cleanup",
    name: "Cleanup & Catch-Up",
    price: "Starting at $___",
    audience: "Books that are behind",
    summary: "A one-time project to bring the file current, then hand it off cleanly.",
    features: [
      "Historical cleanup through an agreed date",
      "Reconciliations caught up",
      "Chart of accounts tidy-up",
      "Handoff notes for you and your CPA",
    ],
  },
];

export const priceNote =
  "Prices show as “Starting at $___” until we quote your transaction volume, software, and any catch-up work. Nothing is billed from this demo site.";

export type Area = {
  slug: "atlanta" | "detroit";
  city: "Atlanta" | "Detroit";
  state: string;
  abbr: "GA" | "MI";
  title: string;
  description: string;
  lede: string;
  image: Photo;
  neighborhoods: string[];
};

export const areas: Record<Area["slug"], Area> = {
  atlanta: {
    slug: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    abbr: "GA",
    title: "Bookkeeping in Atlanta, Georgia",
    description:
      "Bookkeeping for construction companies and every business in metro Atlanta, including Marietta, Kennesaw, Alpharetta, Smyrna, Roswell, Sandy Springs, and Decatur. Remote clients welcome.",
    lede:
      "The office is at 444 Manget St SE in Marietta. Metro Atlanta contractors and other local businesses get the same offer: current books, receipt organization, job costs when you need them, and a file your CPA can use. Meetings can be remote.",
    image: images.atlanta,
    neighborhoods: [
      "Marietta",
      "Kennesaw",
      "Alpharetta",
      "Smyrna",
      "Roswell",
      "Sandy Springs",
      "Decatur",
    ],
  },
  detroit: {
    slug: "detroit",
    city: "Detroit",
    state: "Michigan",
    abbr: "MI",
    title: "Bookkeeping in Detroit, Michigan",
    description:
      "Bookkeeping for construction companies and every business in metro Detroit, including Dearborn, Troy, Southfield, Warren, Livonia, and Ann Arbor. Remote clients welcome.",
    lede:
      "Detroit-area builders and every other business we take on get a clear close — weekly or monthly — without mailing a shoebox of receipts across town.",
    image: images.detroit,
    neighborhoods: ["Dearborn", "Troy", "Southfield", "Warren", "Livonia", "Ann Arbor"],
  },
};

export const faqs = [
  {
    q: "Do you only work with construction companies?",
    a: "Construction is our primary niche: contractors, builders, subcontractors, and remodelers. We also keep books for other businesses, including real estate, restaurants, retail, trucking, professional services, e-commerce, and healthcare practices.",
  },
  {
    q: "Which areas do you serve?",
    a: "The office is at 444 Manget St SE, Marietta, GA 30060. We serve Atlanta, Georgia and Detroit, Michigan, including the nearby communities listed on our service-area pages. Remote clients are welcome anywhere we can meet by video and share files.",
  },
  {
    q: "Do I need to be local for you to take the work?",
    a: "No. Local clients in Atlanta and Detroit are a focus, and remote clients are part of the practice. The work happens in your accounting file and statements, not in our lobby.",
  },
  {
    q: "What software do you use?",
    a: "Most files are QuickBooks Online or QuickBooks Desktop. We also work with Xero, Excel, or a business that is not in software yet. Naming QuickBooks means we work in it. This site does not claim a software certification or partnership.",
  },
  {
    q: "How often will the books be updated?",
    a: "Weekly or monthly, based on the package we quote. You get a short update on that rhythm and standard financial reports.",
  },
  {
    q: "Can you fix books that are months or years behind?",
    a: "Yes. Cleanup and catch-up is a separate scoped project. Tell us how far behind you are and we will price that work before starting.",
  },
  {
    q: "What is included in construction job costing?",
    a: "We code income and costs to jobs so labor, materials, and subcontractors show against each project. The report layout follows how those jobs are set up in your file.",
  },
  {
    q: "Do you handle retainage, change orders, and draws?",
    a: "Yes, when they are part of your jobs. The point is to see what was billed, what is held, and what changed — not to bury those amounts in a single clearing account.",
  },
  {
    q: "Can you categorize Home Depot and Lowe's receipts?",
    a: "Yes. Store receipts get coded to the job and cost category they belong to, instead of landing in one generic supplies account.",
  },
  {
    q: "What about subcontractor 1099s?",
    a: "We keep vendor details and payment totals organized so the 1099 source data is clean. Preparing and filing tax forms stays with your CPA unless a written scope says otherwise.",
  },
  {
    q: "Will the books be ready for my CPA?",
    a: "That is the target of a tax-ready file: reconciled accounts, a usable chart of accounts, and reports your CPA can review. We do not replace your CPA.",
  },
  {
    q: "Do you prepare or file taxes?",
    a: "No. Tigris provides bookkeeping. Tax preparation and filing stay with your CPA or tax preparer.",
  },
  {
    q: "How is pricing set?",
    a: "The pricing page shows placeholder amounts — Starting at $___ — because the quote depends on transaction volume, software, and any catch-up. You receive a custom quote before ongoing work begins.",
  },
  {
    q: "How do we get started?",
    a: "Send a request with your business details, software, and how far behind the books are. We follow up within 1 business day to confirm scope.",
  },
];

export const softwareOptions = [
  "QuickBooks Online",
  "QuickBooks Desktop",
  "Xero",
  "Excel",
  "None",
  "Other",
] as const;

export const behindOptions = [
  "Current",
  "1–3 months",
  "3–12 months",
  "1+ year",
] as const;

export const transactionOptions = [
  "Under 50",
  "50–150",
  "150–400",
  "400+",
] as const;

export const revenueOptions = [
  "Under $250k",
  "$250k–$1M",
  "$1M–$5M",
  "$5M+",
] as const;

export const industryOptions = [
  ...industries.map((industry) => industry.name),
  "Other",
] as const;
