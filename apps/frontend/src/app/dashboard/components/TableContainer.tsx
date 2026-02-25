"use client";

import Card from "@/components/Card";
import { createColumnHelper } from "@tanstack/react-table";
import { TableExpanse } from "@/types/table";
import useDataTable from "@/hooks/useDataTable";
import Table from "@/components/Table";

const columnTemplate = [
    {id: 'account', header: 'Аккаунт'},
    {id: 'category', header: 'Категория'},
    {id: 'amount', header: 'Сумма'},
    {id: 'type', header: 'Тип'},
] as const satisfies { id: keyof TableExpanse; header: string }[];

const columnHelper = createColumnHelper<TableExpanse>()

const columns = columnTemplate.map((column) => {
    return columnHelper.accessor(column.id, {
        header: column.header,
        size: 200,
        meta: {
          filterVariant: 'select',
        },
    })
});

export default function TableContainer() {
    const { data, isLoading, isError } = useDataTable();

    if(isLoading) return <Card className="col-span-3">Loading...</Card>
    if(isError) return <Card className="col-span-3">Error...</Card>

    return (
        <Card className="col-span-3">
            <Table data={data} columns={columns} />
        </Card>
    )
}