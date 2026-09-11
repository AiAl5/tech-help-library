const SITE_CONFIG = {
  edition: "premium",
  siteName: "HelpDesk Starter",
  tagline: "Technology doesn't have to be complicated.",
  shortTagline: "Friendly, plain-English tech help",
  logoIcon: "\ud83d\udee0\ufe0f",
  description: "Step-by-step troubleshooting guides for computers, phones, Wi-Fi, printers, and everyday tech problems \u2014 written for real people, not IT experts.",
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Categories", href: "index.html#categories" },
    { label: "All Guides", href: "search.html" },
    { label: "Services", href: "services.html", premiumOnly: true },
    { label: "FAQ", href: "faq.html", premiumOnly: true },
    { label: "Contact", href: "contact.html", premiumOnly: true }
  ],
  business: {
    name: "HelpDesk Starter Support Co.",
    address: "123 Main Street, Suite 200, Edmonton, AB",
    hours: [
      { day: "Monday \u2013 Friday", time: "9:00 AM \u2013 6:00 PM" },
      { day: "Saturday", time: "10:00 AM \u2013 2:00 PM" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  contact: {
    heading: "Still stuck? We can help.",
    text: "Can't find the fix you need or your problem is more complex? Reach out and a real person will help you sort it out.",
    email: "help@example.com",
    phone: "(555) 010-1234",
    buttonLabel: "Get in touch",
    buttonHref: "contact.html"
  },
  social: [
    { label: "Facebook", href: "#", icon: "f" },
    { label: "YouTube", href: "#", icon: "\u25b6" },
    { label: "X / Twitter", href: "#", icon: "X" }
  ],
  footer: {
    about: "This site provides free, easy-to-follow troubleshooting guides so anyone can fix common tech problems without the jargon.",
    columns: [
      { heading: "Guides", links: [
        { label: "Windows / PC", href: "category.html?cat=windows" },
        { label: "Internet & Wi-Fi", href: "category.html?cat=wifi" },
        { label: "Printers", href: "category.html?cat=printers" },
        { label: "Accounts & Passwords", href: "category.html?cat=accounts" }
      ]},
      { heading: "Company", links: [
        { label: "Services", href: "services.html" },
        { label: "FAQ", href: "faq.html" },
        { label: "Contact", href: "contact.html" }
      ]},
      { heading: "Legal", links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" }
      ]}
    ],
    copyright: "\u00a9 {year} HelpDesk Starter. All rights reserved.",
    creditFree: "Free edition \u2014 template by Your Company. Commercial use requires the licensed version.",
    creditPremium: "Licensed to Your Company \u2014 commercial use permitted under your template license."
  },
  features: {
    showTrustStrip: true, showCtaBand: true, liveSearchSuggestions: true,
    maxRelatedGuides: 3, showCategoryFilterOnSearch: true, showStatsOnHome: true
  }
};
