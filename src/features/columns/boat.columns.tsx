import { ColumnDef } from "@tanstack/react-table";
import { IBoatRental } from "@/types/boat-d-t";

export const boatColumns: ColumnDef<IBoatRental>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imageUrl}
        alt="Boat"
        width={60}
        height={40}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Boat Name",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "passengerCapacity",
    header: "Capacity",
    cell: ({ row }) => `${row.original.passengerCapacity} pax`,
  },
  {
    accessorKey: "pricePerDay",
    header: "Price/Day",
    cell: ({ row }) => `₦${row.original.pricePerDay.toLocaleString()}`,
  },
];
