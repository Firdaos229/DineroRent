import { ColumnDef } from "@tanstack/react-table";
import { IHotelRoom } from "@/types/hotel-d-t";

export const apartmentColumns: ColumnDef<IHotelRoom>[] = [
  {
    accessorKey: "thumbNailUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.thumbNailUrl}
        alt="Apartment Thumbnail"
        width={60}
        height={40}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => `${row.original.city}, ${row.original.countryCode}`,
  },
  {
    accessorKey: "destination.name",
    header: "Destination",
    cell: ({ row }) => row.original.destination?.name || "-",
  },
  {
    accessorKey: "lowRate",
    header: "Price",
    cell: ({ row }) => {
      const low = row.original.lowRate;
      const high = row.original.highRate;
      return `₦${low.toLocaleString()} - ₦${high.toLocaleString()}`;
    },
  },
  {
    accessorKey: "beds",
    header: "Beds",
  },
  {
    accessorKey: "bathrooms",
    header: "Baths",
  },
];
