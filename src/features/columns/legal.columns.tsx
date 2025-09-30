import { ColumnDef } from "@tanstack/react-table";
import { ILegalDocument } from "@/types/legal-d-t";

export const legalColumns: ColumnDef<ILegalDocument>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
];
