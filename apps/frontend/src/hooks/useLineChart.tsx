import { mergeTransactionsByType } from "@/lib/mergeTransactionsArrays";
import { FormatedAreaChartData, LineChartData } from "@/types/charts";
import { Transactions } from "@/types/db";
import { useEffect, useState } from "react";

export default function useLineChart() {
    const [data, setData] = useState<FormatedAreaChartData[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const transactionsRes = await fetch(`http://localhost:8080/transactions/all`)

                const transactionsData: Transactions[] = await transactionsRes.json();
                
                const transactions = mergeTransactionsByType(transactionsData)


                setData(transactions);
            } catch (error) {
                setError('Что-то пошло не так...')
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    return {data, isLoading, error}
}