import { PieData } from "@/types/charts";
import { Categories, Transactions } from "@/types/db";
import { useEffect, useState } from "react";

export default function usePieChart() {
    const [data, setData] = useState<PieData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [transactionsRes, categoriesRes] = await Promise.all([
                    fetch(`http://localhost:8080/transactions/all`),
                    fetch(`http://localhost:8080/categories/all`)
                ])
                const transactions: Transactions[] = await transactionsRes.json();
                if(transactions.length !== 0) {
                    const categories: Categories[] = await categoriesRes.json();
                    const mappedCategories = categories.map((categorie) => {
                        const value = transactions
                        .filter(data => data.categoryId === categorie.id)
                        .reduce((current, next) => current + Math.abs(+next.amount) , 0)
                        return {
                            id: categorie.id,
                            name: categorie.name,
                            value,
                            fill: categorie.color
                        }
                    })
                    
                    setData(mappedCategories)
                } else {
                    setData([{ name: "Нет транзакций", value: 1 }])
                }
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, [])

    return {data, isLoading, error}
}