"use client";

import { useState } from "react";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { Button } from "@/components/ui/button";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { bookings } from "@/data/booking-data";
import { columns } from "@/features/columns/booking.columns";
import { BookingForm } from "./booking/BookingForm";
import { cardsData } from "@/data/cardsData";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { Booking } from "@/types/booking";

export default function DashboardPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { handleDelete } = useDeleteHandler<Booking>(bookings);

  const handleSave = () => {
    console.log("Saving booking...");
    setIsSheetOpen(false);
  };

  return (
    <>
      <SectionCards cards={cardsData} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>

      <ReusableDataTable
        data={bookings}
        columns={columns}
        onEdit={(row) => console.log("Edit", row)}
        onDelete={handleDelete}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        title="New Booking"
        description="Fill out the form to create a new booking."
        footer={<Button onClick={handleSave}>Save</Button>}
      >
        <BookingForm />
      </ReusableSheet>
    </>
  );
}
