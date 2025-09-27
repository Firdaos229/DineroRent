"use client";

import * as React from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  Badge,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type ReusableDataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  onAdd?: () => void;
  addLabel?: string;
  showActions?: boolean;
  onEdit?: (row: TData) => void;
  onDelete?: (row: TData) => void;
};

export function ReusableDataTable<TData extends { id: string }>({
  data,
  columns,
  onAdd,
  addLabel = "Add",
  showActions = true,
  onEdit,
  onDelete,
}: ReusableDataTableProps<TData>) {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [rowSelection, setRowSelection] = React.useState({});

  const selectionColumn: ColumnDef<TData> = {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };

  const actionColumn: ColumnDef<TData> = {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          {onEdit && (
            <DropdownMenuItem onClick={() => onEdit(row.original)}>
              Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>View details</DropdownMenuItem>
          {onDelete && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onDelete(row.original)}
                className="text-destructive"
              >
                Delete
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableSorting: false,
    enableHiding: false,
  };
  const finalColumns = showActions
    ? [selectionColumn, ...columns, actionColumn]
    : [selectionColumn, ...columns];

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      pagination,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
  });

  return (
    <Tabs defaultValue="outline" className="space-y-4">
      {/* Top Bar: View Selector + Add Button */}
      <div className="flex items-center justify-between px-4 lg:px-6">
        {/* Select View (responsive) */}
        <div className="flex items-center gap-4">
          <Label htmlFor="view-selector" className="sr-only">
            View
          </Label>
        </div>

        {/* Add Button */}
        {onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium hover:bg-muted"
          >
            <PlusIcon className="size-4" />
            <span className="hidden lg:inline">{addLabel}</span>
          </button>
        )}
        {/* {onAdd && (
          <button
            onClick={() => setIsSheetOpen(true)}
            className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium hover:bg-muted"
          >
            <PlusIcon className="size-4" />
            <span className="hidden lg:inline">{addLabel}</span>
          </button>
        )} */}
      </div>

      {/* OUTLINE VIEW */}
      <TabsContent value="outline" className="flex flex-col gap-4 px-4 lg:px-6">
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="rows-per-page" className="text-sm font-medium">
              Rows per page
            </Label>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="w-20" id="rows-per-page">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeftIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="size-8"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="size-8"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRightIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden size-8 lg:flex"
              size="icon"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </TabsContent>

      {/* OTHER TABS - EMPTY FOR NOW */}
      <TabsContent value="past-performance" className="px-4 lg:px-6">
        <div className="aspect-video w-full rounded-lg border border-dashed" />
      </TabsContent>

      <TabsContent value="key-personnel" className="px-4 lg:px-6">
        <div className="aspect-video w-full rounded-lg border border-dashed" />
      </TabsContent>

      <TabsContent value="focus-documents" className="px-4 lg:px-6">
        <div className="aspect-video w-full rounded-lg border border-dashed" />
      </TabsContent>
    </Tabs>
  );
}
