// app/dashboard/faqs/page.tsx
"use client";

import { useState } from "react";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { FaqForm } from "./FaqForm";
import { flattenFaqData } from "@/utils/flattenFaqData";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { faqColumns } from "@/features/columns/faq-columns";
import { IFaq } from "@/types/faq-d-t";

export default function FaqPage() {
  const faqDataTwo = flattenFaqData();
  const [faqs, setFaqs] = useState<(IFaq & { category: string })[]>(faqDataTwo);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editFaq, setEditFaq] = useState<(IFaq & { category: string }) | null>(
    null
  );

  const handleSaveFaq = (faq: IFaq & { category: string }) => {
    if (editFaq) {
      setFaqs((prev) => prev.map((f) => (f.id === faq.id ? faq : f)));
      setEditFaq(null);
    } else {
      setFaqs((prev) => [...prev, faq]);
    }

    setIsSheetOpen(false);
  };

  const { handleDelete } = useDeleteHandler<IFaq & { category: string }>(
    faqDataTwo
  );

  return (
    <>
      <ReusableDataTable
        data={faqs}
        columns={faqColumns}
        addLabel="Add FAQ"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditFaq(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => {}}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditFaq(null);
        }}
        title={editFaq ? "Edit FAQ" : "Add FAQ"}
        description={
          editFaq
            ? "Update the FAQ question and answer."
            : "Fill the form to create a new FAQ."
        }
      >
        <FaqForm onSave={handleSaveFaq} defaultValue={editFaq || undefined} />
      </ReusableSheet>
    </>
  );
}
