"use client";

import { flexRender, Row } from "@tanstack/react-table";

type Props = {
    row: Row<any>
}

export default function TableRow({row}: Props) {
    return (
        <tr key={row.id} className="hover:bg-indigo-500">
            {row.getVisibleCells().map((cell) => (
            <td className="text-gray-800 dark:text-gray-50 p-4 border-b-1 border-indigo-500" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
            ))}
        </tr>
    )
}