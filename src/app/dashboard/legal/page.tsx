"use client";

import { useState } from "react";
import { ILegalDocument } from "@/types/legal-d-t";
import { legalColumns } from "@/features/columns/legal.columns";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { LegalForm } from "./LegalForm";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { useRouter } from "next/navigation";
import { legalDocuments } from "@/data/legal.data";

export default function LegalPage() {
  const [docs, setDocs] = useState<ILegalDocument[]>(legalDocuments);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editDoc, setEditDoc] = useState<ILegalDocument | null>(null);
  const router = useRouter();

  const { handleDelete } = useDeleteHandler<ILegalDocument>(docs);

  const handleSave = (doc: ILegalDocument) => {
    if (editDoc) {
      setDocs((prev) => prev.map((d) => (d.id === doc.id ? doc : d)));
      setEditDoc(null);
    } else {
      setDocs((prev) => [...prev, doc]);
    }
    setIsSheetOpen(false);
  };

  return (
    <>
      <ReusableDataTable
        data={docs}
        columns={legalColumns}
        addLabel="Add Legal Document"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditDoc(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => router.push(`/dashboard/legal/${row.id}`)}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditDoc(null);
        }}
        title={editDoc ? "Edit Document" : "Add Document"}
        description="Manage your site's legal documents and policies"
      >
        <LegalForm defaultValue={editDoc || undefined} onSave={handleSave} />
      </ReusableSheet>
    </>
  );
}
