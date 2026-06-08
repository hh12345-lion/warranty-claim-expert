export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  methodology: string[];
  content: string[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "breach-of-warranty-loss-quantification",
    title: "Breach of Warranty Loss Quantification",
    shortTitle: "Breach of Warranty Quantification",
    description:
      "Establish the true and warranted financial positions, value the business under each scenario, and calculate diminution in value.",
    metaTitle:
      "Breach of Warranty Loss Quantification Expert UK | Diminution in Value",
    metaDescription:
      "Forensic accountant expert witness for breach of warranty loss quantification. Establish true and warranted positions and calculate diminution in value in UK M&A claims.",
    methodology: [
      "Review SPA warranties and limitation provisions",
      "Reconstruct true financial position at completion",
      "Apply agreed accounting basis and standards",
      "But-for valuation and quantum analysis",
    ],
    content: [
      "Breach of warranty loss quantification is the core forensic accounting deliverable in most M&A warranty claims. The expert establishes what the accounts showed (the warranted position), what they should have shown (the true position), and the financial impact of the difference.",
      "The primary measure of loss is diminution in value: the difference between what the buyer paid based on the warranted financial position and what the business was actually worth at completion based on the true position.",
      "Instructions must be consistent with standard market value definitions. Inspired Education v Crombie [2025] demonstrates that improper instructions fatally undermine expert evidence regardless of technical quality.",
    ],
    faqs: [
      {
        question: "How is diminution in value calculated in a warranty claim?",
        answer:
          "The expert establishes the warranted financial position from the accounts at completion, reconstructs the true position by correcting misstatements, values the business under each scenario using appropriate methodology, and calculates the difference as the diminution in value.",
      },
      {
        question: "What documents does the expert need for quantification?",
        answer:
          "The SPA (including warranty schedules), reference and completion accounts, due diligence materials, management accounts, correspondence between parties, and any prior expert reports. Documents unfavourable to the instructing party should also be provided.",
      },
      {
        question: "How long does a warranty quantification report take?",
        answer:
          "A standard warranty quantification report typically takes four to eight weeks depending on complexity, document volume, and the number of alleged breaches. Urgent instructions with impending court deadlines can be accommodated with prior agreement on scope.",
      },
    ],
  },
  {
    slug: "completion-accounts-review",
    title: "Completion Accounts Review & Expert Determination Support",
    shortTitle: "Completion Accounts Review",
    description:
      "Analyse disputed completion accounts items and support party submissions through ICAEW expert determination.",
    metaTitle:
      "Completion Accounts Review Expert UK | ICAEW Determination Support",
    metaDescription:
      "Completion accounts review and ICAEW expert determination support. Apply agreed accounting basis, analyse disputed items, and prepare party submissions in UK M&A disputes.",
    methodology: [
      "Apply agreed accounting basis from SPA",
      "Identify and analyse disputed line items",
      "Assess policy consistency with reference accounts",
      "Prepare written submissions for determiner",
    ],
    content: [
      "Completion accounts disputes arise when buyer and seller cannot agree on the financial position at completion. The purchase price is adjusted based on working capital, net debt, or net assets compared to an agreed target.",
      "Most SPAs provide for ICAEW expert determination when parties cannot agree. The forensic accountant supports one party through the determination process by analysing disputed items and preparing written submissions.",
      "The agreed accounting basis in the SPA is the relevant test, not general GAAP compliance in the abstract. The expert assesses whether each item was prepared consistently with the target company's accounting policies as applied in the reference accounts.",
    ],
    faqs: [
      {
        question: 'What is the "agreed accounting basis" in completion accounts?',
        answer:
          'The agreed accounting basis is the accounting framework specified in the SPA, typically "in accordance with the accounting policies of the target company as applied in the reference accounts." The expert tests each disputed item against those specific policies.',
      },
      {
        question: "What items are most commonly disputed in completion accounts?",
        answer:
          "Working capital definitions, revenue recognition timing, provision adequacy, IFRS 16 lease capitalisation, deferred revenue calculations, and net debt definitions are the most frequent sources of disagreement.",
      },
      {
        question: "How does ICAEW expert determination work?",
        answer:
          "When parties cannot agree, the ICAEW appoints an independent accountant as expert determiner. Each party submits written representations on disputed items. The determiner reviews both positions and issues a binding determination.",
      },
    ],
  },
  {
    slug: "earn-out-dispute-analysis",
    title: "Earn-Out Dispute Analysis",
    shortTitle: "Earn-Out Dispute Analysis",
    description:
      "Construct but-for earn-out models and assess whether buyer conduct or accounting changes affected earn-out achievement.",
    metaTitle: "Earn-Out Dispute Analysis Expert UK | But-For Modelling",
    metaDescription:
      "Forensic accountant expert witness for earn-out dispute analysis. But-for modelling, accounting policy continuity, and buyer conduct claims in UK M&A.",
    methodology: [
      "Review earn-out clause and accounting basis",
      "Model but-for performance scenarios",
      "Assess policy continuity during earn-out period",
      "Quantify impact of alleged buyer conduct",
    ],
    content: [
      "Earn-out disputes arise when performance targets are not met or earn-out calculations are contested. Disputes commonly involve whether underperformance was genuine or caused by buyer conduct, and whether the agreed accounting basis was correctly applied.",
      "The but-for analysis is the core forensic tool. The expert constructs a model showing what earn-out metrics would have been absent alleged misconduct or accounting errors, and compares it to the actual outcome.",
      "SPA earn-out provisions typically require consistent accounting policies during the earn-out period. Where the buyer changes policies to reduce reported metrics, the expert must restate on a consistent basis.",
    ],
    faqs: [
      {
        question: "How does an expert establish buyer conduct prevented the earn-out?",
        answer:
          "The expert analyses earn-out metrics against the pre-acquisition business trajectory, the plan agreed at completion, and changes in strategy, resources, or policy made by the buyer. A but-for model shows what metrics would have been under fair conditions.",
      },
      {
        question: "Can earn-out accounting disputes go to expert determination?",
        answer:
          "If the SPA earn-out clause specifies expert determination for accounting disputes, calculation issues may be referred to an independent accountant. Conduct disputes typically proceed to litigation or arbitration.",
      },
      {
        question: "What earn-out metrics are most commonly disputed?",
        answer:
          "EBITDA, revenue, and gross profit are the most common earn-out metrics. Disputes arise over revenue recognition, cost allocation, capitalisation policies, and normalisation adjustments applied during the earn-out period.",
      },
    ],
  },
  {
    slug: "locked-box-leakage-analysis",
    title: "Locked Box Leakage Analysis",
    shortTitle: "Locked Box Leakage Analysis",
    description:
      "Identify transactions between locked box date and completion and quantify non-permitted leakage.",
    metaTitle: "Locked Box Leakage Analysis Expert UK | SPA Disputes",
    metaDescription:
      "Locked box leakage analysis expert witness UK. Identify and quantify permitted and non-permitted value extraction between locked box date and completion.",
    methodology: [
      "Review bank statements and payment records",
      "Apply SPA leakage definition to each transaction",
      "Distinguish permitted from non-permitted leakage",
      "Quantify total recoverable leakage",
    ],
    content: [
      "In a locked box deal, the purchase price is fixed by reference to a historical balance sheet. The seller warrants that no leakage occurred between the locked box date and completion.",
      "Leakage is value extracted by the seller or related parties contrary to the SPA leakage provisions. The expert identifies all transactions in the locked box period and tests each against the SPA definition.",
      "Locked box disputes focus on transaction analysis rather than accounting methodology. The expert reviews bank statements, management accounts, board minutes, and payment records.",
    ],
    faqs: [
      {
        question: "What transactions constitute leakage in a locked box deal?",
        answer:
          "Typically any payment from the target to the seller or related parties not in the ordinary course: dividends, management fees, bonuses above ordinary course levels, asset transfers, and other value extraction not permitted under the SPA.",
      },
      {
        question: "How does the expert identify all leakage transactions?",
        answer:
          "The expert reviews bank statements, management accounts, board minutes, and payment records for the locked box period, identifying all payments involving the seller or related parties and testing each against the SPA leakage definition.",
      },
      {
        question: "What is permitted leakage?",
        answer:
          "Permitted leakage is value extraction expressly allowed under the SPA, such as ordinary course management fees or agreed dividend payments. The expert distinguishes permitted from non-permitted leakage before quantifying the recoverable amount.",
      },
    ],
  },
  {
    slug: "wi-insurance-claim-support",
    title: "W&I Insurance Claim Support",
    shortTitle: "W&I Insurance Claim Support",
    description:
      "Expert evidence for warranty claims brought under W&I policies, including insurer scrutiny and subrogation support.",
    metaTitle: "W&I Insurance Claim Expert Witness UK | W&I Claims Support",
    metaDescription:
      "Expert witness support for W&I insurance warranty claims. Quantify diminution in value, address insurer scrutiny, and support subrogation in UK M&A disputes.",
    methodology: [
      "Assess policy coverage and exclusions",
      "Quantify diminution in value for covered warranties",
      "Support buyer or insurer claim preparation",
      "Address insurer expert scrutiny standards",
    ],
    content: [
      "Warranty and indemnity insurance has become market standard in UK M&A. Insurers often fund and drive warranty claim litigation through subrogation rights against the seller.",
      "The forensic accountant's role in W&I claims is the same as in direct warranty claims: establishing the true financial position and quantifying diminution in value. However, W&I insurers typically conduct more rigorous expert evidence scrutiny.",
      "W&I policies typically exclude fundamental warranties, fraud, and matters known to the buyer at signing. The expert must address whether the claimed loss falls within covered warranty categories.",
    ],
    faqs: [
      {
        question: "Does the W&I insurer appoint its own expert witness?",
        answer:
          "Yes. W&I insurers typically appoint their own forensic accountant experts to assess quantum before deciding whether to pay and to manage litigation if disputed. Buyers should also instruct their own expert.",
      },
      {
        question: "How does subrogation work in W&I claims?",
        answer:
          "After paying a claim, the insurer acquires subrogation rights against the seller, requiring proof the warranty was breached. Forensic accountants provide expert evidence in both the claim against the insurer and subsequent subrogation action.",
      },
      {
        question: "What evidence do W&I insurers require?",
        answer:
          "Notification within the policy period, a detailed statement of the warranty breached, quantification of loss, and cooperation in pursuing subrogation. Forensic accountant expert evidence is central to establishing quantum.",
      },
    ],
  },
  {
    slug: "accounting-standards-opinion",
    title: "Accounting Standards Opinion",
    shortTitle: "Accounting Standards Opinion",
    description:
      "Opinion on whether financial statements complied with IFRS or UK GAAP and the agreed accounting basis in the SPA.",
    metaTitle: "Accounting Standards Opinion Expert UK | IFRS & UK GAAP",
    metaDescription:
      "Forensic accountant opinion on accounting standards compliance in M&A warranty claims. IFRS, UK GAAP, and agreed accounting basis analysis for UK disputes.",
    methodology: [
      "Identify applicable accounting standards",
      "Review treatment of disputed items",
      "Assess compliance with SPA accounting basis",
      "Document correct accounting treatment",
    ],
    content: [
      "Accounting standards opinions are central to accounts warranty breach claims and completion accounts disputes. The expert determines which standards governed the financial statements and whether treatment complied.",
      "Common disputed areas include IAS 37 provisions, IFRS 15 revenue recognition, IFRS 16 leases, deferred revenue, and net debt definitions. The SPA agreed accounting basis may impose additional requirements beyond general GAAP.",
      "The expert documents the correct accounting treatment for each disputed item, compares it to the treatment adopted, and quantifies the financial impact on the reported position.",
    ],
    faqs: [
      {
        question: "What accounting standards apply in M&A warranty claims?",
        answer:
          "Typically IFRS or UK GAAP (FRS 102) as specified in the SPA and the target company's stated accounting policies. The agreed accounting basis in the SPA is the primary test, not abstract GAAP compliance.",
      },
      {
        question: "How does the expert establish an accounts warranty breach?",
        answer:
          "The expert reviews financial statements against applicable standards and SPA policies, identifies the correct treatment for each alleged misstatement, compares it to the treatment adopted, and quantifies the impact.",
      },
      {
        question: "Are accounting standards opinions used in expert determination?",
        answer:
          "Yes. Completion accounts expert determination frequently turns on whether items were prepared consistently with the agreed accounting basis. Written submissions address the correct accounting treatment for each disputed line item.",
      },
    ],
  },
  {
    slug: "business-valuation",
    title: "Business Valuation (Warranted vs True Position)",
    shortTitle: "Business Valuation",
    description:
      "Independent valuation of the business under warranted and true financial positions for warranty claim quantum.",
    metaTitle:
      "Business Valuation Expert Witness UK | Warranted vs True Position",
    metaDescription:
      "Independent business valuation expert witness for warranty claims. Value the business under warranted and true financial positions and calculate diminution in value.",
    methodology: [
      "Select appropriate valuation methodology",
      "Apply market value definitions consistently",
      "Value under warranted and true scenarios",
      "Calculate diminution in value",
    ],
    content: [
      "Business valuation is the final step in warranty claim quantification. The expert values the target under the warranted financial position and the true financial position, with the difference representing diminution in value.",
      "Valuation methodology depends on the nature of the business and available data. Common approaches include earnings multiples, discounted cash flow, and transaction comparables. Instructions must use standard market value definitions.",
      "Inspired Education v Crombie [2025] is a critical warning: valuation expert evidence was fatally undermined where instructions were inconsistent with commonly used definitions of market value.",
    ],
    faqs: [
      {
        question: "What valuation methodology is used in warranty claims?",
        answer:
          "The appropriate methodology depends on the business and available data. Earnings multiples, DCF, and transaction comparables are common. The expert must apply the same methodology consistently to both warranted and true position scenarios.",
      },
      {
        question: "Why do valuation instructions matter so much?",
        answer:
          "Inspired Education v Crombie [2025] shows that instructions inconsistent with standard market value definitions fatally undermine valuation evidence. Instructions must align with how courts and opposing experts understand valuation concepts.",
      },
      {
        question: "Can the same expert value and quantify accounting adjustments?",
        answer:
          "Yes. Forensic accountants commonly perform both the accounting analysis (establishing true vs warranted position) and the valuation (quantifying diminution in value) in a single expert report.",
      },
    ],
  },
  {
    slug: "spa-expert-determination",
    title: "SPA Expert Determination (Acting as Determiner)",
    shortTitle: "SPA Expert Determination",
    description:
      "Act as independent expert determiner for completion accounts disputes under SPA expert determination clauses.",
    metaTitle:
      "SPA Expert Determination UK | Independent Accountant Determiner",
    metaDescription:
      "Acting as independent expert determiner for SPA completion accounts disputes. ICAEW expert determination, binding decisions, and impartial accounting analysis.",
    methodology: [
      "Review party submissions on disputed items",
      "Apply agreed accounting basis impartially",
      "Issue binding determination on each item",
      "Maintain independence throughout process",
    ],
    content: [
      "SPA expert determination clauses appoint an independent accountant to make binding decisions on completion accounts disputes. The determiner reviews party submissions, may ask questions, and issues a binding determination on each disputed item.",
      "Acting as expert determiner requires complete independence and impartial application of the agreed accounting basis. The determiner is not an advocate for either party.",
      "ICAEW is the most common appointing body for completion accounts expert determination in UK SPAs. Our team includes accountants who have acted as expert determiner on multiple occasions.",
    ],
    faqs: [
      {
        question: "What is the difference between an expert witness and an expert determiner?",
        answer:
          "An expert witness supports one party's position in litigation or determination submissions. An expert determiner is appointed independently to make a binding decision on disputed items, acting impartially and not advocating for either party.",
      },
      {
        question: "Is expert determination binding?",
        answer:
          "Yes. Expert determination under an SPA clause is contractually binding on both parties. The determination can only be challenged on very limited grounds, such as fraud or manifest error.",
      },
      {
        question: "How long does expert determination take?",
        answer:
          "Typically three to six months from appointment, depending on the number of disputed items, complexity, and responsiveness of the parties. This is generally faster and less costly than court proceedings.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceHref(slug: string): string {
  return `/services/${slug}`;
}
