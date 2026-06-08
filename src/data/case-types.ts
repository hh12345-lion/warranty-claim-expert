export type CaseType = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  relatedDisputeType: string;
  relatedServices: string[];
  content: string[];
  faqs: { question: string; answer: string }[];
};

export const CASE_TYPES: CaseType[] = [
  {
    slug: "financial-warranty-breach",
    title: "Financial Warranty Breach",
    h1: "Financial Warranty Breach Expert Witness UK",
    description:
      "Expert witness services for financial warranty breach claims in UK M&A transactions.",
    metaTitle: "Financial Warranty Breach Expert Witness UK | M&A Claims",
    metaDescription:
      "Forensic accountant expert witness for financial warranty breach claims in UK M&A. Quantify diminution in value from undisclosed liabilities and accounts misstatements.",
    relatedDisputeType: "/dispute-types/breach-of-warranty",
    relatedServices: [
      "Breach of Warranty Loss Quantification",
      "Business Valuation (Warranted vs True Position)",
    ],
    content: [
      "Financial warranties in a sale and purchase agreement warrant the accuracy of the target company's financial position. The most commonly disputed financial warranties include the accounts warranty, the no undisclosed liabilities warranty, management accounts warranties, and material contracts warranties.",
      "A breach of the accounts warranty arises where financial statements did not give a true and fair view or were not prepared in accordance with applicable accounting standards. The no undisclosed liabilities warranty warrants that no material liabilities exist that are not reflected in the accounts.",
      "Management accounts warranties warrant the accuracy and completeness of monthly management information provided during due diligence. Where management accounts presented a significantly more favourable position than subsequent audited accounts revealed, a breach claim may arise.",
      "The expert witness establishes which warranty was breached, reconstructs the true financial position, and quantifies the diminution in value caused by the breach using appropriate valuation methodology.",
      "Material adverse change warranties may also give rise to expert evidence requirements, though these are typically more fact-intensive and require assessment of whether a MAC event occurred and its financial impact.",
    ],
    faqs: [
      {
        question:
          'What is the "no undisclosed liabilities" warranty and how is breach quantified?',
        answer:
          "The no undisclosed liabilities warranty warrants that no material liabilities exist that are not reflected in the accounts. Breach is quantified as the difference between the business value with the liability included (true position) and without (warranted position), or, more commonly, as the value of the liability itself if it falls squarely within the warranty scope.",
      },
      {
        question: "What is a management accounts warranty?",
        answer:
          "Management accounts warranties warrant the accuracy and completeness of monthly management information provided in due diligence, typically that they have been prepared on a consistent basis with prior periods and fairly present the financial position. Breach claims arise where the management accounts presented a significantly more favourable position than the audited accounts subsequently revealed.",
      },
    ],
  },
  {
    slug: "accounts-warranty-dispute",
    title: "Accounts Warranty Dispute",
    h1: "Accounts Warranty Expert Witness UK",
    description:
      "Expert evidence for accounts warranty disputes in UK M&A litigation.",
    metaTitle: "Accounts Warranty Expert Witness UK | True and Fair View Claims",
    metaDescription:
      "Forensic accountant expert witness for accounts warranty disputes. Assess true and fair view, accounting standards compliance, and quantify financial impact in UK M&A claims.",
    relatedDisputeType: "/dispute-types/breach-of-warranty",
    relatedServices: [
      "Accounting Standards Opinion",
      "Breach of Warranty Loss Quantification",
    ],
    content: [
      "The accounts warranty is typically the most fundamental financial warranty in an SPA. It warrants that the financial statements have been prepared in accordance with applicable accounting standards, give a true and fair view of the financial position, and were prepared consistently with prior periods.",
      "Disputes arise where specific items in the accounts were misstated: inadequate provisions, incorrect revenue recognition, failure to capitalise leases under IFRS 16, or incomplete disclosure of contingent liabilities.",
      "The expert reviews the financial statements against the applicable accounting standards (IFRS or FRS 102) and the specific policies stated in the notes. For each alleged breach, they identify the correct accounting treatment, compare it to the treatment adopted, and quantify the financial impact.",
      "Prior period consistency is a key area of dispute. Where accounting policies changed without adequate disclosure, or where the same item was treated differently across periods, the expert must assess whether this constitutes a breach of the accounts warranty.",
    ],
    faqs: [
      {
        question: "What does the accounts warranty cover?",
        answer:
          "The accounts warranty typically warrants that the financial statements have been prepared in accordance with applicable accounting standards (IFRS or UK GAAP), give a true and fair view of the financial position, and were prepared consistently with prior periods. Expert witnesses assess whether the treatment adopted met this standard, or whether specific items were misstated.",
      },
      {
        question:
          "How does the expert establish that the accounts warranty was breached?",
        answer:
          "The expert reviews the financial statements against the applicable accounting standards (IFRS or FRS 102) and the specific policies stated in the notes. For each alleged breach, they identify the correct accounting treatment, compare it to the treatment adopted, and quantify the financial impact on the reported position.",
      },
    ],
  },
  {
    slug: "tax-warranty-claim",
    title: "Tax Warranty Claim",
    h1: "Tax Warranty Expert Witness UK",
    description:
      "Expert witness support for tax warranty claims and tax deed of indemnity disputes.",
    metaTitle: "Tax Warranty Expert Witness UK | SPA Tax Claims",
    metaDescription:
      "Forensic accountant and tax expert witness support for tax warranty claims in UK M&A. Undisclosed tax liabilities, HMRC investigations, and tax deed quantification.",
    relatedDisputeType: "/dispute-types/breach-of-warranty",
    relatedServices: [
      "Accounting Standards Opinion",
      "Breach of Warranty Loss Quantification",
    ],
    content: [
      "Tax warranties in an SPA warrant the tax position of the target company: that all tax returns have been filed and are accurate, that no undisclosed HMRC investigations exist, and that tax computations are correct.",
      "Tax warranty claims require both a forensic accountant to assess the accounting treatment underlying the tax position and a tax technical expert to assess the correct tax analysis. Combined instruction is standard in material tax warranty disputes.",
      "A tax deed of indemnity (or tax covenant) provides pound-for-pound recovery for pre-completion tax liabilities. Unlike a warranty claim which requires proof of diminution in value, the tax deed provides direct recovery of the tax liability itself.",
      "Expert evidence establishes the quantum of the tax liability that triggers the deed, including interest and penalties where applicable. HMRC investigation risk must also be assessed and quantified where a warranty covers undisclosed investigations.",
    ],
    faqs: [
      {
        question: "How do tax warranties differ from financial warranties?",
        answer:
          "Tax warranties specifically warrant the tax position of the target company: that all tax returns have been filed and are accurate, that no undisclosed HMRC investigations exist, and that the tax computations are correct. Tax warranty claims require both a forensic accountant and a tax technical expert.",
      },
      {
        question: "What is a tax deed of indemnity?",
        answer:
          "A tax deed of indemnity provides pound-for-pound recovery for pre-completion tax liabilities. Unlike a warranty claim which requires proof of diminution in value, the tax deed provides direct recovery of the tax liability itself. Expert evidence establishes the quantum of the tax liability that triggers the deed.",
      },
    ],
  },
  {
    slug: "completion-accounts-expert",
    title: "Completion Accounts Expert",
    h1: "Completion Accounts Expert Witness UK",
    description:
      "Expert witness and determination support for completion accounts disputes.",
    metaTitle: "Completion Accounts Expert Witness UK | ICAEW Determination",
    metaDescription:
      "Completion accounts expert witness UK. Apply agreed accounting basis, analyse disputed items, and support ICAEW expert determination in M&A disputes.",
    relatedDisputeType: "/dispute-types/completion-accounts",
    relatedServices: [
      "Completion Accounts Review & Expert Determination Support",
      "SPA Expert Determination (Acting as Determiner)",
    ],
    content: [
      "In a completion accounts mechanism, the purchase price is adjusted after completion based on the actual financial position at the completion date, typically working capital, net debt, and/or net assets compared to an agreed target.",
      "Disputes arise when buyer and seller disagree on which accounting policies should apply, specific items such as provisioning and revenue recognition, whether reference accounts policies were consistently applied, and the correct treatment of specific transaction items.",
      "Most SPAs contain an expert determination clause for completion accounts disputes, providing for an independent accountant (often appointed by ICAEW) to make a binding determination.",
      "The forensic accountant supports one party's position through the determination process, analysing disputed items and producing written submissions for the expert determiner.",
    ],
    faqs: [
      {
        question:
          'What is the "agreed accounting basis" in completion accounts?',
        answer:
          'The agreed accounting basis is the accounting framework specified in the SPA for preparing the completion accounts, typically "in accordance with the accounting policies of the target company as applied in the reference accounts." The expert must assess whether each item was prepared consistently with those specific policies.',
      },
      {
        question:
          "How does ICAEW expert determination work for completion accounts?",
        answer:
          "The ICAEW appoints an independent accountant as expert determiner when the parties cannot agree. Each party submits written representations addressing the disputed items. The expert determiner reviews both positions, may ask questions, and issues a binding determination.",
      },
    ],
  },
  {
    slug: "earn-out-accounting-dispute",
    title: "Earn-Out Accounting Dispute",
    h1: "Earn-Out Accounting Dispute Expert Witness UK",
    description:
      "Expert evidence for earn-out accounting disputes and buyer conduct claims.",
    metaTitle: "Earn-Out Accounting Dispute Expert Witness UK",
    metaDescription:
      "Forensic accountant expert witness for earn-out accounting disputes. But-for modelling, policy continuity analysis, and buyer conduct claims in UK M&A.",
    relatedDisputeType: "/dispute-types/earn-out-disputes",
    relatedServices: ["Earn-Out Dispute Analysis"],
    content: [
      "An earn-out is a mechanism where part of the purchase price depends on the future financial performance of the acquired business, typically measured over one to three years post-completion.",
      "Common disputes include whether the earn-out was not achieved due to genuine underperformance or buyer conduct, whether the earn-out was calculated incorrectly, whether the buyer changed the business model in a way that made achieving the earn-out impossible, and whether revenue or costs were manipulated during the earn-out period.",
      "The expert constructs a but-for model showing what the earn-out metrics would have been absent the alleged misconduct or accounting error, and compares it to the actual outcome.",
      "SPA earn-out provisions typically require the buyer to maintain consistent accounting policies during the earn-out period. Where the buyer changes policies to reduce reported earn-out metrics, the expert must restate the metrics on a consistent basis.",
    ],
    faqs: [
      {
        question:
          "How does an expert witness establish that the buyer's conduct prevented the earn-out?",
        answer:
          "The expert analyses the earn-out metrics during the earn-out period against the pre-acquisition trajectory of the business, the plan agreed at completion, and any changes in strategy, resources, or policy made by the buyer. A but-for model is constructed showing what the metrics would have been under continuation of the pre-acquisition trajectory.",
      },
      {
        question: "Can earn-out disputes go to expert determination?",
        answer:
          "If the SPA earn-out clause specifies expert determination for accounting disputes, the earn-out calculation issues may be referred to an independent accountant. However, disputes about the buyer's conduct typically proceed to litigation or arbitration.",
      },
    ],
  },
  {
    slug: "locked-box-leakage",
    title: "Locked Box Leakage",
    h1: "Locked Box Leakage Expert Witness UK",
    description:
      "Expert evidence for locked box leakage claims in UK M&A transactions.",
    metaTitle: "Locked Box Leakage Expert Witness UK | SPA Disputes",
    metaDescription:
      "Locked box leakage expert witness UK. Identify and quantify permitted and non-permitted value extraction between locked box date and completion.",
    relatedDisputeType: "/dispute-types/locked-box-disputes",
    relatedServices: ["Locked Box Leakage Analysis"],
    content: [
      "In a locked box deal, the purchase price is fixed by reference to a historical balance sheet (the locked box date) rather than the completion date. The seller warrants that no leakage has occurred after the locked box date.",
      "Leakage is value extracted from the target by the seller or related parties between the locked box date and completion, contrary to the leakage provisions in the SPA. It can include dividends, management fees, payments to related parties, and asset transfers.",
      "The expert identifies all transactions between the locked box date and completion, applies the SPA leakage definition to each transaction, distinguishes permitted from non-permitted leakage, and quantifies total non-permitted leakage recoverable from the seller.",
      "Locked box was introduced partly to reduce completion accounts disputes, but it generates its own disputes around leakage. Expert witnesses focus on transaction analysis rather than accounting methodology.",
    ],
    faqs: [
      {
        question: "What transactions constitute leakage in a locked box deal?",
        answer:
          "Leakage definitions vary by SPA, but typically include any payment from the target to the seller or related parties not in the ordinary course of business: dividends declared, management fees paid, bonuses paid above ordinary course levels, assets transferred, and any other value extraction not specifically permitted under the SPA.",
      },
      {
        question: "How does the expert identify all leakage transactions?",
        answer:
          "The expert reviews the target company's bank statements, management accounts, board minutes, and payment records for the locked box period, identifying all payments and transfers involving the seller or related parties and testing each against the SPA leakage definition.",
      },
    ],
  },
  {
    slug: "wi-insurance-claim",
    title: "W&I Insurance Claim",
    h1: "W&I Insurance Claim Expert Witness UK",
    description:
      "Expert evidence for warranty and indemnity insurance claims in UK M&A.",
    metaTitle: "W&I Insurance Claim Expert Witness UK | W&I Claims",
    metaDescription:
      "Expert witness for W&I insurance claims in UK M&A. Support buyer and insurer claims, subrogation analysis, and quantum assessment for warranty breaches.",
    relatedDisputeType: "/wi-insurance",
    relatedServices: ["W&I Insurance Claim Support"],
    content: [
      "Warranty and indemnity insurance allows M&A buyers to claim under an insurance policy for financial warranty breaches rather than directly against the seller. W&I has become standard in UK M&A for transactions above a certain size threshold.",
      "In a W&I claim, the insurer pays the buyer under the policy and then pursues subrogation rights against the seller, or the buyer pursues the insurer directly if the insurer refuses to pay.",
      "The forensic accountant's role is the same in W&I claims: establishing the true financial position at completion and quantifying the diminution in value. However, W&I insurers typically conduct more rigorous expert evidence scrutiny.",
      "W&I policies typically exclude fundamental warranties, fraud, and matters known to the buyer at signing. The expert must address whether the claimed loss falls within covered warranty categories and the policy period.",
    ],
    faqs: [
      {
        question: "Does the W&I insurer use its own expert witness?",
        answer:
          "Yes. W&I insurers typically appoint their own forensic accountant expert witnesses to assess the quantum of warranty claims before deciding whether to pay and to manage litigation if the claim is disputed. Buyers with W&I coverage should also instruct their own expert.",
      },
      {
        question: "How does subrogation work in W&I claims?",
        answer:
          "After paying a W&I claim, the insurer acquires subrogation rights against the seller, the right to pursue the seller for the amount paid. This typically requires proving the warranty was indeed breached. Forensic accountants provide expert evidence in both the claim against the insurer and any subsequent subrogation action.",
      },
    ],
  },
  {
    slug: "business-sale-fraud",
    title: "Business Sale Fraud",
    h1: "Business Sale Fraud Expert Witness UK",
    description:
      "Expert evidence for fraudulent misrepresentation and deceit claims in business sales.",
    metaTitle: "Business Sale Fraud Expert Witness UK | Deceit Claims",
    metaDescription:
      "Forensic accountant expert witness for business sale fraud and deceit claims in UK M&A. Doyle v Olby damages, W&I fraud exclusions, and civil fraud analysis.",
    relatedDisputeType: "/dispute-types/breach-of-warranty",
    relatedServices: [
      "Breach of Warranty Loss Quantification",
      "Accounting Standards Opinion",
    ],
    content: [
      "Where warranty breach was deliberate (the seller knew the warranty was untrue), the buyer may bring a deceit claim alongside or instead of a warranty claim. The deceit measure of loss (Doyle v Olby: all actual direct losses) is wider than the warranty diminution in value measure.",
      "W&I policies typically exclude fraud, so fraud claims run against the seller directly rather than through the insurer. This makes expert evidence on the seller's knowledge and the true financial position particularly important.",
      "A buyer typically pleads both warranty breach and fraud in the alternative. If fraud is established, the wider Doyle v Olby loss measure applies. If fraud is not established but warranty breach is, the diminution in value measure applies.",
      "The expert witnesses in each scenario may be the same or different depending on the accounting and valuation issues involved. Fraud claims require additional evidence of the seller's knowledge and intent.",
    ],
    faqs: [
      {
        question: "How does fraud change the warranty claim analysis?",
        answer:
          "Where warranty breach was deliberate, the buyer may bring a deceit claim alongside or instead of a warranty claim. The deceit measure of loss (Doyle v Olby: all actual direct losses) is wider than the warranty diminution in value measure. W&I policies typically exclude fraud.",
      },
      {
        question: "Can a buyer bring both a warranty claim and a fraud claim?",
        answer:
          "Yes. A buyer typically pleads both in the alternative. If fraud is established, the wider Doyle v Olby loss measure applies. If fraud is not established but warranty breach is, the warranty diminution in value measure applies.",
      },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return CASE_TYPES.find((c) => c.slug === slug);
}
