"use client";

import { AccessorKeyColumnDef, ColumnFiltersState,
  createColumnHelper, 
  flexRender, 
  getCoreRowModel, 
  getFilteredRowModel, 
  getPaginationRowModel, 
  getSortedRowModel, 
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";

type Props = {
  columns: AccessorKeyColumnDef<any, string>[];
  data: unknown[];
}

export default function Table({columns, data}: Props) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    [],
  );
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({ 
      data,
      columns,
      state: {
        columnFilters,
        pagination,
      },
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className="p-2">
      <table className="w-full">
        <thead className="text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
              <th className=" px-4 text-gray-800 dark:text-gray-50" key={header.id}>
                {header.isPlaceholder ? null : (
                    <>
                    <div
                        className={header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''}
                        onClick={header.column.getToggleSortingHandler()}
                    >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                            asc: ' ↑',
                            desc: ' ↓',
                        }[header.column.getIsSorted() as string] ?? null}
                    </div>
                    {header.column.getCanFilter() ? (
                        <div>
                        </div>
                    ) : null}
                    </>
                )}
              </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="mb-3">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-indigo-500">
              {row.getVisibleCells().map((cell) => (
                <td className="text-gray-800 dark:text-gray-50 p-4 border-b-1 border-indigo-500" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center gap-1 text-gray-800 dark:text-gray-50">
          <div>Страница</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} из{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <div className="flex justify-end align-center gap-5">
            <div>
                <button
                    className="text-xs disabled:cursor-not-allowed disabled:bg-gray-600 bg-indigo-500 hover:bg-indigo-700 rounded-md cursor-pointer box-border size-6 text-gray-800 dark:text-gray-50 mx-2"
                    onClick={table.firstPage}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="text-xs disabled:cursor-not-allowed disabled:bg-gray-600 bg-indigo-500 hover:bg-indigo-700 bg-gray-900 rounded-md cursor-pointer box-border size-6 text-gray-800 dark:text-gray-50"
                    onClick={table.previousPage}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
            </div>
            <div>
                <button
                    className="text-xs disabled:cursor-not-allowed disabled:bg-gray-600 bg-indigo-500 hover:bg-indigo-700 rounded-md cursor-pointer box-border size-6 text-gray-800 dark:text-gray-50 mx-2"
                    onClick={table.nextPage}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="text-xs disabled:cursor-not-allowed disabled:bg-gray-600 bg-indigo-500 hover:bg-indigo-700 rounded-md cursor-pointer box-border size-6 text-gray-800 dark:text-gray-50"
                    onClick={table.lastPage}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}