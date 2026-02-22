"use client";

import { Table } from "@tanstack/react-table"

type Props = {
    table: Table<any>
}

export default function Pagination({table}: Props) {
    return (
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
    )
}