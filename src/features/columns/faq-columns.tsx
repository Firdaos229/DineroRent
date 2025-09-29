import { IFaq } from "@/types/faq-d-t";
import { ColumnDef } from "@tanstack/react-table";

export const faqColumns: ColumnDef<IFaq & { category: string }>[] = [
  {
    accessorKey: "title",
    header: "Question",
  },
  {
    accessorKey: "content",
    header: "Answer",
    cell: ({ row }) => (
      <span className="line-clamp-2">{row.original.content}</span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
