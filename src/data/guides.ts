export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; content: string[] }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "inspired-education-crombie-2025",
    title: "Inspired Education v Crombie [2025]",
    h1: "Inspired Education v Crombie [2025]: Lessons for Warranty Claim Expert Evidence",
    description:
      "Full case analysis of the landmark 2025 SPA dispute and its implications for expert witness quality.",
    metaTitle:
      "Inspired Education v Crombie [2025] | Warranty Claim Expert Evidence Lessons",
    metaDescription:
      "Analysis of Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch). Three expert evidence failures that fatally undermined the claimant's valuation evidence in SPA litigation.",
    sections: [
      {
        heading: "The Case",
        content: [
          "Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch) was a significant SPA dispute heard before Mrs Justice Joanna Smith in the High Court (Chancery Division). The case concerned a warranty claim arising from an acquisition where the claimant alleged that financial warranties given by the seller were untrue.",
          "Central to the dispute was the claimant's valuation expert evidence. The court found that this evidence was fatally undermined by three distinct failures in the expert's approach, instructions, and independence.",
        ],
      },
      {
        heading: "Failure 1: Instructions Inconsistent with Market Value Definitions",
        content: [
          "The claimant's expert was instructed on a basis that was not consistent with commonly used definitions of market value. Where instructions set up an improper analytical framework, the entire expert analysis is undermined regardless of the quality of the underlying technical work.",
          "For instructing solicitors, this means reviewing the letter of instruction against standard market value definitions before the expert begins work. Instructions must align with how the court and the opposing expert will understand and apply valuation concepts.",
        ],
      },
      {
        heading: "Failure 2: Lack of Rigour in Approach to Evidence",
        content: [
          "The court identified a lack of rigour in the expert's approach to the evidence. This included insufficient analysis of contradictory materials and failure to address evidence that undermined the expert's conclusions.",
          "Warranty claim experts must approach all available evidence systematically, not selectively citing only materials that support the instructing party's position. CPR Part 35 requires experts to consider all material facts, including those that might detract from their opinion.",
        ],
      },
      {
        heading: 'Failure 3: A "Somewhat Partial Approach"',
        content: [
          'The court characterised the expert\'s approach as "somewhat partial", particularly in relation to sources relied on in the report. An expert who appears to advocate for the instructing party rather than provide independent analysis will have their evidence discounted or rejected entirely.',
          "Genuine independence is not optional in warranty claim litigation. The Ikarian Reefer principles require experts to provide objective, unbiased opinions. A partial approach, as identified in Inspired Education v Crombie, is fatal to expert evidence.",
        ],
      },
      {
        heading: "Implications for Instructing Solicitors",
        content: [
          "Solicitors instructing warranty claim experts should: draft instructions consistent with standard market value definitions; ensure the expert has access to all relevant documents, including those unfavourable to the client's position; resist pressure to frame instructions in a way that predetermines the outcome; and select experts with demonstrated independence and prior court acceptance in M&A disputes.",
          "The Inspired Education v Crombie decision is the clearest recent judicial statement on what warranty claim experts must avoid. Expert quality is not a secondary consideration in M&A litigation. It is decisive.",
        ],
      },
    ],
  },
  {
    slug: "completion-accounts-guide",
    title: "Completion Accounts Guide",
    h1: "Completion Accounts Disputes: Expert Evidence Guide for M&A Lawyers",
    description:
      "Comprehensive guide to completion accounts disputes and expert evidence requirements.",
    metaTitle:
      "Completion Accounts Disputes Guide | Expert Evidence for M&A Lawyers",
    metaDescription:
      "Guide to completion accounts disputes in UK M&A. Agreed accounting basis, disputed items, ICAEW expert determination, and forensic accounting evidence.",
    sections: [
      {
        heading: "The Completion Accounts Mechanism",
        content: [
          "In a completion accounts deal, the purchase price is adjusted after completion based on the actual financial position at the completion date. The SPA specifies a target (typically for working capital, net debt, or net assets) and the price is adjusted pound-for-pound for any difference.",
          "The mechanism requires preparation of completion accounts by one party (usually the buyer), review by the other party, and agreement within a specified period. If the parties cannot agree, the SPA typically provides for expert determination.",
        ],
      },
      {
        heading: "The Agreed Accounting Basis",
        content: [
          'The agreed accounting basis is the accounting framework specified in the SPA. It is typically defined as "in accordance with the accounting policies of the target company as applied in the reference accounts." This is not the same as general GAAP compliance.',
          "The expert must assess whether each disputed item was prepared consistently with the specific policies applied in the reference accounts, not simply whether the treatment complies with IFRS or UK GAAP in the abstract.",
        ],
      },
      {
        heading: "Common Disputed Items",
        content: [
          "Working capital disputes focus on the definition of current assets and liabilities and whether normalisation adjustments are appropriate. Revenue recognition disputes arise where revenue was recorded in the wrong period. Provisioning disputes concern whether provisions were adequate and consistently applied.",
          "IFRS 16 lease capitalisation, deferred revenue calculations, and net debt definitions (what counts as debt versus cash) are frequent sources of disagreement in completion accounts disputes.",
        ],
      },
      {
        heading: "ICAEW Expert Determination Process",
        content: [
          "When parties cannot agree on completion accounts, the ICAEW (or another appointing body specified in the SPA) appoints an independent accountant as expert determiner. Each party submits written representations addressing the disputed items.",
          "The forensic accountant prepares the party's submissions, analyses the opposing position, and provides analytical support throughout the determination process. The determiner's decision is binding on both parties.",
        ],
      },
    ],
  },
  {
    slug: "earn-out-dispute-guide",
    title: "Earn-Out Dispute Guide",
    h1: "Earn-Out Disputes: Forensic Accounting Evidence Guide",
    description:
      "Guide to earn-out dispute analysis and expert evidence in UK M&A.",
    metaTitle: "Earn-Out Disputes Guide | Forensic Accounting Evidence",
    metaDescription:
      "Guide to earn-out disputes in UK M&A. But-for methodology, accounting policy continuity, buyer conduct claims, and expert report structure.",
    sections: [
      {
        heading: "Earn-Out Mechanics",
        content: [
          "An earn-out ties part of the purchase price to the future financial performance of the acquired business. The SPA specifies the earn-out metrics (typically EBITDA, revenue, or gross profit), the measurement period (usually one to three years), and the payment formula.",
          "Earn-outs are common where the seller and buyer disagree on the target's future performance, or where the seller wishes to participate in upside growth post-completion.",
        ],
      },
      {
        heading: "But-For Methodology",
        content: [
          "The but-for analysis is the core forensic accounting tool in earn-out disputes. The expert constructs a model showing what the earn-out metrics would have been absent the alleged misconduct or accounting error, and compares it to the actual outcome.",
          "This may require modelling multiple scenarios reflecting different assumptions about what would have happened under fair conditions, including continuation of the pre-acquisition business trajectory.",
        ],
      },
      {
        heading: "Accounting Policy Continuity",
        content: [
          "SPA earn-out provisions typically require the buyer to maintain consistent accounting policies during the earn-out period. Where the buyer changes policies to reduce reported earn-out metrics, the expert must restate the metrics on a consistent basis and quantify the impact.",
          "Changes in revenue recognition, cost allocation, or capitalisation policies during the earn-out period are common triggers for disputes.",
        ],
      },
      {
        heading: "Expert Report Structure",
        content: [
          "An earn-out dispute expert report should address: the earn-out clause and agreed accounting basis; the actual earn-out metrics achieved; the but-for metrics under alternative scenarios; the impact of any alleged buyer conduct on earn-out achievement; and the quantum of additional earn-out consideration due.",
          "Reports must comply with CPR Part 35 and follow the Ikarian Reefer principles of independence and rigour.",
        ],
      },
    ],
  },
  {
    slug: "locked-box-leakage-guide",
    title: "Locked Box Leakage Guide",
    h1: "Locked Box Leakage: Identifying and Quantifying Permitted and Non-Permitted Value",
    description:
      "Guide to locked box leakage analysis and expert evidence.",
    metaTitle: "Locked Box Leakage Guide | Expert Evidence UK",
    metaDescription:
      "Guide to locked box leakage in UK M&A. Leakage definition, permitted leakage, investigation methodology, and expert evidence requirements.",
    sections: [
      {
        heading: "Locked Box Mechanics",
        content: [
          "In a locked box deal, the purchase price is fixed by reference to a historical balance sheet (the locked box date). The seller receives a daily accrual (interest on the locked box price) between the locked box date and completion.",
          "In exchange, the seller warrants that no leakage has occurred after the locked box date. The buyer takes the economic risk of the business from the locked box date, not from completion.",
        ],
      },
      {
        heading: "Leakage Definition",
        content: [
          "Leakage is value extracted from the target by the seller or related parties between the locked box date and completion, contrary to the leakage provisions in the SPA. The SPA defines both leakage (prohibited) and permitted leakage (allowed).",
          "Typical leakage includes dividends, management fees to the seller, bonuses above ordinary course levels, asset transfers to related parties, and any payment not in the ordinary course of business.",
        ],
      },
      {
        heading: "Investigation Methodology",
        content: [
          "The expert reviews bank statements, management accounts, board minutes, and payment records for the locked box period. Every payment and transfer involving the seller or related parties is identified and tested against the SPA leakage definition.",
          "The expert distinguishes permitted leakage (expressly allowed under the SPA) from non-permitted leakage and quantifies the total recoverable amount.",
        ],
      },
    ],
  },
  {
    slug: "wi-insurance-warranty-claims",
    title: "W&I Insurance and Warranty Claims",
    h1: "W&I Insurance and Warranty Claims: What M&A Lawyers Need to Know",
    description:
      "Guide to how W&I insurance has changed the warranty claim landscape.",
    metaTitle: "W&I Insurance and Warranty Claims Guide | UK M&A",
    metaDescription:
      "Guide to W&I insurance and warranty claims in UK M&A. Subrogation, insurer as claimant, policy exclusions, and expert evidence requirements.",
    sections: [
      {
        heading: "W&I Insurance Mechanics",
        content: [
          "Warranty and indemnity insurance allows the buyer to claim under an insurance policy for financial warranty breaches. The insurer pays the buyer and then pursues subrogation rights against the seller.",
          "W&I has become market standard in UK M&A transactions above approximately £5M deal value. It has not reduced warranty claim disputes. It has changed who brings them.",
        ],
      },
      {
        heading: "Subrogation",
        content: [
          "After paying a W&I claim, the insurer acquires the buyer's rights against the seller. The insurer can pursue the seller for the amount paid, requiring proof that the warranty was indeed breached.",
          "Forensic accountants provide expert evidence in both the initial claim against the insurer and any subsequent subrogation action against the seller.",
        ],
      },
      {
        heading: "Policy Exclusions",
        content: [
          "W&I policies typically exclude fundamental warranties (title, capacity), fraud, and matters known to the buyer at signing. The expert must address whether the claimed loss falls within covered warranty categories.",
          "Policy limits are fixed, unlike SPA limitation periods which are negotiated. Early notification within the policy period is essential.",
        ],
      },
    ],
  },
  {
    slug: "instructing-warranty-expert",
    title: "Instructing a Warranty Expert",
    h1: "Instructing a Warranty Claim Expert Witness: Avoiding the Inspired Education Pitfalls",
    description:
      "Practical guide to instructing forensic accountants in warranty claims.",
    metaTitle:
      "Instructing a Warranty Claim Expert Witness | Avoiding Pitfalls",
    metaDescription:
      "How to instruct a warranty claim expert witness. Draft instructions, market value definitions, documents to provide, SPA review, and CPR Part 35 requirements.",
    sections: [
      {
        heading: "Drafting the Letter of Instruction",
        content: [
          "The letter of instruction must be consistent with standard market value definitions. Inspired Education v Crombie [2025] demonstrates that improper instructions fatally undermine expert evidence regardless of technical quality.",
          "Instructions should identify the specific warranties alleged to be breached, the agreed accounting basis, the relevant accounting standards, and the valuation methodology to be applied.",
        ],
      },
      {
        heading: "Documents to Provide",
        content: [
          "Provide the SPA (including all schedules and disclosure letters), reference accounts, completion accounts (if applicable), earn-out calculations, due diligence reports, management accounts, correspondence between the parties, and any prior expert reports.",
          "Include documents unfavourable to your client's position. An expert who only sees one side of the evidence will produce a partial report.",
        ],
      },
      {
        heading: "SPA Review Before Instruction",
        content: [
          "Review the SPA limitation periods, warranty definitions, accounting basis clauses, and dispute resolution mechanisms before instructing the expert. The expert's analysis must be framed within the contractual framework of the SPA.",
          "Identify whether the dispute is subject to expert determination or litigation, as this affects the expert's role and deliverables.",
        ],
      },
      {
        heading: "CPR Part 35 Requirements",
        content: [
          "Expert reports for court proceedings must comply with CPR Part 35 and Practice Direction 35. The expert must state the substance of all material instructions, identify sources relied upon, and confirm their duty to the court.",
          "The expert must be genuinely independent. Instructions that predetermine the outcome or pressure the expert toward a partial approach will be exposed at trial.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
