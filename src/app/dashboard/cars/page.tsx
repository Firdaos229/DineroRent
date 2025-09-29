"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionCards } from "@/components/section-cards";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { carData } from "@/data/car-data";
import { carColumns } from "@/features/columns/car.columns";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { ICarRental } from "@/types/car-d-t";
import { CarForm } from "./CarForm";
import { carCards } from "@/data/carcards";

export default function CarPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [cars, setCars] = useState<ICarRental[]>(carData);
  const [editCar, setEditCar] = useState<ICarRental | null>(null);
  const router = useRouter();

  const handleSaveCar = (car: ICarRental) => {
    if (editCar) {
      setCars((prev) => prev.map((c) => (c.id === car.id ? car : c)));
      setEditCar(null);
    } else {
      setCars((prev) => [...prev, car]);
    }

    setIsSheetOpen(false);
  };

  const { handleDelete } = useDeleteHandler<ICarRental>(carData);

  return (
    <>
      <SectionCards cards={carCards} />

      <ReusableDataTable
        data={cars}
        columns={carColumns}
        addLabel="Add Car"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditCar(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => router.push(`/dashboard/cars/${row.id}`)}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditCar(null);
        }}
        title={editCar ? "Edit Car" : "Add Car"}
        description={
          editCar
            ? "Modify the fields to update the car."
            : "Fill out the form to add a new car."
        }
      >
        <CarForm onSave={handleSaveCar} defaultValue={editCar || undefined} />
      </ReusableSheet>
    </>
  );
}
