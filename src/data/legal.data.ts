

import { ILegalDocument } from "@/types/legal-d-t";

export const legalDocuments: ILegalDocument[] = [
  {
    id: 1,
    title: "Privacy Policy",
    content: "<p>We comply with NDPR and GDPR...</p>",
    category: "Privacy",
    lastUpdated: "2025-09-10",
  },
  {
    id: 2,
    title: "Vendor Agreement",
    content: "<p>All vendors must comply with...</p>",
    category: "Vendor",
    lastUpdated: "2025-08-01",
  },
];
