import { ColumnDef } from "@tanstack/react-table";
import { IOfferAd } from "@/types/ads-d-t";

export const adsColumns: ColumnDef<IOfferAd>[] = [
  {
    accessorKey: "imgSrc",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imgSrc}
        alt="Offer"
        className="w-16 h-12 rounded object-cover"
      />
    ),
  },
  {
    accessorKey: "preLabel",
    header: "Label",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span dangerouslySetInnerHTML={{ __html: row.original.title }} />
    ),
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
];
