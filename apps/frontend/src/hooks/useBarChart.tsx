import { mergeTransactionsByType, transformArrayForBarChart } from "@/lib/mergeTransactionsArrays";
import { FormatedAreaChartData, FormatedBarChartData, LineChartData } from "@/types/charts";
import { Transactions } from "@/types/db";
import { useEffect, useState } from "react";

export default function useBarChart() {
    const [data, setData] = useState<FormatedBarChartData[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const transactionsRes = await fetch(`http://localhost:8080/transactions/all`)

                const transactionsData: Transactions[] = await transactionsRes.json();
                
                const transactions = transformArrayForBarChart(transactionsData)

                setData(transactions);
            } catch (error) {
                console.log(error)
                setError('Что-то пошло не так...')
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    return {data, isLoading, error}
}