import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Booking } from "@/types/booking";

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.original.type;
      return <span className="capitalize">{type}</span>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant =
        status === "Confirmed"
          ? "default"
          : status === "Pending"
          ? "secondary"
          : "destructive";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];
