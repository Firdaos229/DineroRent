"use client";

import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { users } from "@/data/user-data";
import { columns } from "@/features/columns/users.columns";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { IUser } from "@/types/users";

export default function AdminUsersPage() {
  const { handleDelete } = useDeleteHandler<IUser>(users);

  return (
    <ReusableDataTable
      data={users}
      columns={columns}
      onDelete={handleDelete}
      onView={(row) => console.log("View user", row)}
    />
  );
}
