import { getAllCategories, getAllTransactions } from "@/api/api";
import { PieData } from "@/types/charts";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function usePieChart() {
    const [ data, setData ] = useState<PieData[]>([])
    const transactions = useQuery({
        queryKey: ['transactions'],
        queryFn: getAllTransactions
    });
    const categories = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    });

    useEffect(() => {    
        if(transactions.data && categories.data) {
            const mappedData = categories.data.map((categorie) => {
                const value = transactions.data
                .filter(data => data.categoryId === categorie.id)
                .reduce((current, next) => current + Math.abs(+next.amount) , 0)
                    return {
                        id: categorie.id,
                        name: categorie.name,
                        value,
                        fill: categorie.color
                    }
            })
            setData(mappedData)

        }
    }, [transactions.data, categories.data])

    return {data, transactions, categories}
}