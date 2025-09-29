import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IPaymentTransaction } from "@/types/payment";

export const columns: ColumnDef<IPaymentTransaction>[] = [
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
  },
  {
    accessorKey: "nameOrNumber",
    header: "Client",
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ row }) => (
      <span className="capitalize">{row.original.method}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant =
        status === "success"
          ? "default"
          : status === "pending"
          ? "secondary"
          : "destructive";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
