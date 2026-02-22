import { mergeTableData } from "@/lib/tableData";
import { Accounts, Categories, Transactions } from "@/types/db";
import { TableExpanse } from "@/types/table";
import { useEffect, useState } from "react";

export default function useDataTable() {
    const [data, setData] = useState<TableExpanse[]>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<unknown>('');
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const [transactionsRes, categoriesRes, accountsRes] = await Promise.all([
                        fetch(`http://localhost:8080/transactions/all`),
                        fetch(`http://localhost:8080/categories/all`),
                        fetch('http://localhost:8080/account/all')
                    ]);
    
                    const transactions: Transactions[] = await transactionsRes.json();
                    const categories: Categories[] = await categoriesRes.json();
                    const accounts: Accounts[] = await accountsRes.json();

                    const tableData = mergeTableData(transactions, categories, accounts)
    
                    setData(tableData);
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