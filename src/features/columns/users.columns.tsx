import { ColumnDef, Row } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IUser } from "@/types/users";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }: { row: Row<IUser> }) => (
      <span className="capitalize">{row.original.role}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<IUser> }) => {
      const status = row.original.status;
      const variant =
        status === "approve"
          ? "default"
          : status === "suspend"
          ? "secondary"
          : "destructive";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
];
