"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const columns = [
  {
    accessorKey: "serialNo",
    header: () => {
      return <div className="text-left">Serial No</div>;
    },
    cell: ({ row }) => {
      return <div className="text-left">{Number(row.id) + 1}</div>;
    },
  },
  {
    accessorKey: "orgName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-fit"
        >
          Organisation Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left px-5 w-fit">{row.getValue("orgName")}</div>
      );
    },
  },
  {
    accessorKey: "address",
    header: () => {
      return <div className="text-left">Address</div>;
    },
    cell: ({ row }) => {
      return <div className="text-left">{row.getValue("address")}</div>;
    },
  },
  {
    accessorKey: "contact",
    header: () => <div className="text-left">Contact</div>,
    cell: ({ row }) => {
      return <div className="text-left">{row.getValue("contact")}</div>;
    },
  },
  {
    accessorKey: "type",
    header: () => <div className="text-center">Type</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("type")}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center ">Actions</div>,
    cell: () => {
      return (
        <div className="w-full flex justify-center  text-center">
          <Button className="flex text-center items-center justify-center gap-3">
            Edit
            <FaRegEdit />
          </Button>
        </div>
      );
    },
  },
];

const OrgTable = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full h-full flex flex-col items-center sm:items-end pt-4">
      <div className="flex justify-end items-center py-4">
        <Input
          placeholder="Filter organisation name..."
          value={table.getColumn("orgName")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("orgName")?.setFilterValue(event.target.value)
          }
          className=" w-[300px] sm:w-[400px]"
        />
      </div>
      <ScrollArea className="rounded-md border w-[300px] sm:w-full h-full">
        <ScrollArea className=" w-[300px] sm:w-full  h-full">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className=""
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className={`py-2`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ScrollArea>
      <div className="flex items-center justify-end gap-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <Pagination className={`space-x-2`}>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default OrgTable;
