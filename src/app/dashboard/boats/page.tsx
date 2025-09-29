"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionCards } from "@/components/section-cards";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { boatData } from "@/data/boat-data";
import { boatColumns } from "@/features/columns/boat.columns";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { IBoatRental } from "@/types/boat-d-t";
import { BoatForm } from "./BoatForm";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { boatCards } from "@/data/boatcards";

export default function BoatPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [boats, setBoats] = useState<IBoatRental[]>(boatData);
  const [editBoat, setEditBoat] = useState<IBoatRental | null>(null);
  const router = useRouter();

  const handleSaveBoat = (boat: IBoatRental) => {
    if (editBoat) {
      setBoats((prev) => prev.map((b) => (b.id === boat.id ? boat : b)));
      setEditBoat(null);
    } else {
      setBoats((prev) => [...prev, boat]);
    }

    setIsSheetOpen(false);
  };

  const { handleDelete } = useDeleteHandler<IBoatRental>(boatData);

  return (
    <>
      <SectionCards cards={boatCards} />

      <ReusableDataTable
        data={boats}
        columns={boatColumns}
        addLabel="Add Boat"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditBoat(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => router.push(`/dashboard/boats/${row.id}`)}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditBoat(null);
        }}
        title={editBoat ? "Edit Boat" : "Add Boat"}
        description={
          editBoat
            ? "Modify the fields to update the boat."
            : "Fill out the form to add a new boat."
        }
      >
        <BoatForm
          onSave={handleSaveBoat}
          defaultValue={editBoat || undefined}
        />
      </ReusableSheet>
    </>
  );
}
