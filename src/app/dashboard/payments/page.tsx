"use client";

import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { payments } from "@/data/payment-data";
import { columns } from "@/features/columns/payment.columns";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { IPaymentTransaction } from "@/types/payment";

export default function PaymentPage() {
  const { handleDelete } = useDeleteHandler<IPaymentTransaction>(payments);

  return (
    <ReusableDataTable
      data={payments}
      columns={columns}
      onView={(row) => console.log("View", row)}
      onDelete={handleDelete}
    />
  );
}
