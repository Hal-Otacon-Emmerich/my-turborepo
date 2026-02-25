import { getAllTransactions } from "@/api/api";
import { mergeTransactionsByType } from "@/lib/mergeTransactionsArrays";
import { FormatedAreaChartData } from "@/types/charts";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useLineChart() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['transactions'],
        queryFn: getAllTransactions
    });
    const [LineData, setData] = useState<FormatedAreaChartData[]>();

    useEffect(() => {
        if(data) {
            const mergedTransactions = mergeTransactionsByType(data)
            setData(mergedTransactions)
        }

    }, [data])

    return { data: LineData, isLoading, isError }
}