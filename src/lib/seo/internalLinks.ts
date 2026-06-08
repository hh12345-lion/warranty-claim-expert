export type InternalLink = { href: string; label: string };

/** Per SEO architecture section 6 — internal linking matrix */
export const HOMEPAGE_HUB_LINKS: InternalLink[] = [
  { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
  { href: "/dispute-types", label: "M&A Dispute Types" },
  { href: "/wi-insurance", label: "W&I Insurance and Expert Evidence" },
  { href: "/what-is-a-warranty-claim-expert", label: "What Is a Warranty Claim Expert Witness?" },
  { href: "/experts", label: "Our Expert Witnesses" },
  { href: "/qualifications", label: "Expert Qualifications" },
  { href: "/contact", label: "Instruct an Expert" },
];

export const PILLAR_DISPUTE_LINKS: InternalLink[] = [
  { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty Claims" },
  { href: "/dispute-types/completion-accounts", label: "Completion Accounts Disputes" },
  { href: "/dispute-types/earn-out-disputes", label: "Earn-Out Disputes" },
  { href: "/dispute-types/locked-box-disputes", label: "Locked Box Disputes" },
  { href: "/wi-insurance", label: "W&I Insurance and Expert Evidence" },
  { href: "/guides/inspired-education-crombie-2025", label: "Inspired Education v Crombie [2025]" },
];

export const DISPUTE_HUB_LINKS: InternalLink[] = [
  { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty" },
  { href: "/dispute-types/completion-accounts", label: "Completion Accounts" },
  { href: "/dispute-types/earn-out-disputes", label: "Earn-Out Disputes" },
  { href: "/dispute-types/locked-box-disputes", label: "Locked Box Disputes" },
  { href: "/how-to-instruct", label: "How to Instruct an Expert" },
];

const DISPUTE_PAGE_LINKS: Record<string, InternalLink[]> = {
  "breach-of-warranty": [
    { href: "/dispute-types", label: "All Dispute Types" },
    { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
    { href: "/guides/instructing-warranty-expert", label: "Instructing a Warranty Expert Guide" },
    { href: "/how-to-instruct", label: "How to Instruct" },
    { href: "/contact", label: "Contact" },
  ],
  "completion-accounts": [
    { href: "/dispute-types", label: "All Dispute Types" },
    { href: "/guides/completion-accounts-guide", label: "Completion Accounts Guide" },
    { href: "/how-to-instruct", label: "How to Instruct" },
    { href: "/contact", label: "Contact" },
  ],
  "earn-out-disputes": [
    { href: "/dispute-types", label: "All Dispute Types" },
    { href: "/guides/earn-out-dispute-guide", label: "Earn-Out Dispute Guide" },
    { href: "/how-to-instruct", label: "How to Instruct" },
    { href: "/contact", label: "Contact" },
  ],
  "locked-box-disputes": [
    { href: "/dispute-types", label: "All Dispute Types" },
    { href: "/guides/locked-box-leakage-guide", label: "Locked Box Leakage Guide" },
    { href: "/how-to-instruct", label: "How to Instruct" },
    { href: "/contact", label: "Contact" },
  ],
};

export function getDisputePageLinks(slug: string): InternalLink[] {
  return DISPUTE_PAGE_LINKS[slug] ?? [
    { href: "/dispute-types", label: "All Dispute Types" },
    { href: "/how-to-instruct", label: "How to Instruct" },
    { href: "/contact", label: "Contact" },
  ];
}

export const WI_INSURANCE_LINKS: InternalLink[] = [
  { href: "/guides/wi-insurance-warranty-claims", label: "W&I Insurance and Warranty Claims Guide" },
  { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty Claims" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/contact", label: "Contact" },
];

const GUIDE_RELATED_LINKS: Record<string, InternalLink[]> = {
  "inspired-education-crombie-2025": [
    { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty Claims" },
    { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
  "completion-accounts-guide": [
    { href: "/dispute-types/completion-accounts", label: "Completion Accounts Disputes" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
  "earn-out-dispute-guide": [
    { href: "/dispute-types/earn-out-disputes", label: "Earn-Out Disputes" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
  "locked-box-leakage-guide": [
    { href: "/dispute-types/locked-box-disputes", label: "Locked Box Disputes" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
  "wi-insurance-warranty-claims": [
    { href: "/wi-insurance", label: "W&I Insurance and Expert Evidence" },
    { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty Claims" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
  "instructing-warranty-expert": [
    { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty Claims" },
    { href: "/guides/inspired-education-crombie-2025", label: "Inspired Education v Crombie [2025]" },
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
  ],
};

export function getGuideRelatedLinks(slug: string): InternalLink[] {
  return GUIDE_RELATED_LINKS[slug] ?? [
    { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    { href: "/contact", label: "Contact" },
  ];
}

export const FAQ_CONTEXTUAL_LINKS: InternalLink[] = [
  { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
  { href: "/dispute-types/breach-of-warranty", label: "Breach of Warranty" },
  { href: "/dispute-types/completion-accounts", label: "Completion Accounts" },
  { href: "/dispute-types/earn-out-disputes", label: "Earn-Out Disputes" },
  { href: "/dispute-types/locked-box-disputes", label: "Locked Box" },
  { href: "/wi-insurance", label: "W&I Insurance" },
  { href: "/guides/inspired-education-crombie-2025", label: "Inspired Education v Crombie [2025]" },
  { href: "/guides/completion-accounts-guide", label: "Completion Accounts Guide" },
  { href: "/fees", label: "Expert Witness Fees" },
  { href: "/glossary", label: "Glossary" },
];

export const GLOSSARY_CONTEXTUAL_LINKS: InternalLink[] = [
  { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
  { href: "/dispute-types", label: "M&A Dispute Types" },
  { href: "/guides/inspired-education-crombie-2025", label: "Inspired Education v Crombie [2025]" },
  { href: "/guides/completion-accounts-guide", label: "Completion Accounts Guide" },
  { href: "/wi-insurance", label: "W&I Insurance" },
  { href: "/faq", label: "FAQ" },
];
