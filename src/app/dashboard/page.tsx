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

export default function DashboardPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSave = () => {
    console.log("Saving booking...");
    setIsSheetOpen(false);
  };

  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>

      <ReusableDataTable
        data={bookings}
        columns={columns}
        addLabel="New Booking"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => console.log("Edit", row)}
        onDelete={(row) => console.log("Delete", row)}
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
