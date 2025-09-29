"use client";

import { useState } from "react";
import { SectionCards } from "@/components/section-cards";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { ApartmentForm } from "./ApartmentForm";
import { hotelData } from "@/data/hotel-data";
import { apartmentColumns } from "@/features/columns/apartment.columns";
import { useRouter } from "next/navigation";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { IHotelRoom } from "@/types/hotel-d-t";
import { apartmentCards } from "@/data/apartmentcards";

export default function ApartmentPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();

  const handleSaveApartment = (apartment: IHotelRoom) => {
    if (editApartment) {
      // Edition
      setApartments((prev) =>
        prev.map((apt) => (apt.id === apartment.id ? apartment : apt))
      );
      setEditApartment(null);
    } else {
      // Ajout
      setApartments((prev) => [...prev, apartment]);
    }

    setIsSheetOpen(false);
  };

  const { handleDelete } = useDeleteHandler<IHotelRoom>(hotelData);
  const [apartments, setApartments] = useState<IHotelRoom[]>(hotelData);
  const [editApartment, setEditApartment] = useState<IHotelRoom | null>(null);

  return (
    <>
      <SectionCards cards={apartmentCards} />

      <ReusableDataTable
        data={apartments}
        columns={apartmentColumns}
        addLabel="Add Apartment"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditApartment(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => router.push(`/dashboard/apartments/${row.id}`)}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditApartment(null);
        }}
        title={editApartment ? "Edit Apartment" : "Add Apartment"}
        description={
          editApartment
            ? "Modify the fields to update the apartment."
            : "Fill out the form to create a new apartment."
        }
      >
        <ApartmentForm
          onSave={handleSaveApartment}
          defaultValue={editApartment || undefined}
        />
      </ReusableSheet>
    </>
  );
}
