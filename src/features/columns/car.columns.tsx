import { ColumnDef } from "@tanstack/react-table";
import { ICarRental } from "@/types/car-d-t";

export const carColumns: ColumnDef<ICarRental>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imageUrl}
        alt="Car"
        width={60}
        height={40}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Car Name",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "pricePerDay",
    header: "Price/Day",
    cell: ({ row }) => `₦${row.original.pricePerDay.toLocaleString()}`,
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "transmission",
    header: "Transmission",
  },
  {
    accessorKey: "fuelType",
    header: "Fuel",
  },
];
