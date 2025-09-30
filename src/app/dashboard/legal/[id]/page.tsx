"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ILegalDocument } from "@/types/legal-d-t";
import { legalDocuments } from "@/data/legal.data";

export default function LegalDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const doc: ILegalDocument | undefined = legalDocuments.find(
    (item) => item.id === parseInt(params.id)
  );

  if (!doc) return notFound();

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <div>
        <Link href="/dashboard/legal">
          <Button variant="outline">← Back to Legal Documents</Button>
        </Link>
      </div>

      {/* Title and Metadata */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-sm text-muted-foreground">
          Category: {doc.category} · Last updated: {doc.lastUpdated}
        </p>
      </div>

      {/* Content */}
      <div
        className="prose max-w-none text-sm"
        dangerouslySetInnerHTML={{ __html: doc.content }}
      />
    </div>
  );
}
