"use client";

import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { bookings } from "@/data/booking-data";
import { columns } from "@/features/columns/booking.columns";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { Booking } from "@/types/booking";

export default function BookingPage() {
  const { handleDelete } = useDeleteHandler<Booking>(bookings);
  return (
    <>
      <ReusableDataTable
        data={bookings}
        columns={columns}
        onDelete={handleDelete}
      />
    </>
  );
}
