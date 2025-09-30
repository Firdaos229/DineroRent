import { ColumnDef } from "@tanstack/react-table";
import { IBlog } from "@/types/blog-d-t";

export const blogColumns: ColumnDef<IBlog>[] = [
  {
    accessorKey: "imgSrc",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imgSrc}
        alt="Blog"
        width={60}
        height={40}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "authorName",
    header: "Author",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.authorImg}
          alt={row.original.authorName}
          className="w-6 h-6 rounded-full object-cover"
        />
        {row.original.authorName}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "readTime",
    header: "Read Time",
  },
];
