import { getAllTransactions } from "@/api/api";
import { transformArrayForBarChart } from "@/lib/mergeTransactionsArrays";
import { FormatedBarChartData } from "@/types/charts";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useBarChart() {
    const [data, setBarData] = useState<FormatedBarChartData[]>([]);
    const transactions = useQuery({
        queryKey: ['transactions'],
        queryFn: getAllTransactions
    });

    useEffect(() => {
        if(transactions.data) {
            const barChartData = transformArrayForBarChart(transactions.data)
            setBarData(barChartData);
        }
    }, [transactions.data]);

    return {
        data,
        isLoading: transactions.isLoading,
        isError: transactions.isError,
    }
}