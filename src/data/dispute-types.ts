export const DISPUTE_TYPES = [
  {
    slug: "breach-of-warranty",
    title: "Breach of Warranty Claims",
    shortTitle: "Breach of Warranty",
    description:
      "The seller warranted the accounts were accurate. They weren't. Quantifying the diminution in value caused by the breach.",
    href: "/dispute-types/breach-of-warranty",
  },
  {
    slug: "completion-accounts",
    title: "Completion Accounts Disputes",
    shortTitle: "Completion Accounts",
    description:
      "Buyer and seller cannot agree on the financial position at completion. Which accounting basis applies? Was it consistently applied?",
    href: "/dispute-types/completion-accounts",
  },
  {
    slug: "earn-out-disputes",
    title: "Earn-Out Disputes",
    shortTitle: "Earn-Out Disputes",
    description:
      "The earn-out targets were not met. Was that because of legitimate business performance, or the buyer's conduct?",
    href: "/dispute-types/earn-out-disputes",
  },
  {
    slug: "locked-box-disputes",
    title: "Locked Box Disputes",
    shortTitle: "Locked Box",
    description:
      "The price was fixed. But did the seller extract value between the locked box date and completion?",
    href: "/dispute-types/locked-box-disputes",
  },
] as const;
