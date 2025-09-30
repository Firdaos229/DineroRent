// types/legal-d-t.ts

export interface ILegalDocument {
  id: number;
  title: string;
  content: string; // HTML or Markdown
  category: "Privacy" | "Terms" | "Refund" | "Vendor" | "Compliance" | "Disclaimer" | "Other";
  lastUpdated: string;
}
