/**
 * Quote Bank
 * Rules: Keep verbatim use short. Prefer paraphrase. Always display source attribution. Do not fabricate quotes.
 */

export interface ApprovedQuote {
  quote: string;
  attribution: string;
  sourceId: string;
  sourceUrl?: string;
}

export const approvedQuotes: ApprovedQuote[] = [
  {
    quote: "Every opportunity I get, we go for the big stuff!",
    attribution: "Alba Larsen / F1 Academy",
    sourceId: "S01",
  },
  {
    quote: "I want to inspire more girls to follow their passion and dreams — even in worlds dominated by boys.",
    attribution: "Alba Hurup Larsen / Athletics case study",
    sourceId: "S19",
  },
  {
    quote: "I just want to be really fast.",
    attribution: "Alba Larsen / Vogue Scandinavia video",
    sourceUrl: "https://www.voguescandinavia.com/articles/alba-hurup-larsen-video",
  },
];
