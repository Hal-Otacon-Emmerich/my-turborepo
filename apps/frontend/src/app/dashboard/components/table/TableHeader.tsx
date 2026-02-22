"use client";

import { flexRender, Table } from "@tanstack/react-table"

type Props = {
    table: Table<any>;
}

export default function TableHeader({table}: Props) {
    return (
        <>
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
                                <span>
                                </span>
                            ) : null}
                            </>
                        )}
                    </th>
                    ))}
                </tr>
            ))}
        </>
    )
}