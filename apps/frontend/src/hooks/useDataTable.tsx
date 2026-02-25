import { getAllAccounts, getAllCategories, getAllTransactions } from "@/api/api";
import { mergeTableData } from "@/lib/tableData";
import { Accounts, Categories, Transactions } from "@/types/db";
import { TableExpanse } from "@/types/table";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useDataTable() {
    const [data, setData] = useState<TableExpanse[]>([]);
    const transactions = useQuery({
        queryKey: ['transactions'],
        queryFn: getAllTransactions
    });
    const categories = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    })
    const accounts = useQuery({
        queryKey: ['accounts'],
        queryFn: getAllAccounts
    })
    
    useEffect(() => {
        if(transactions.data && categories.data && accounts.data) {
            const tableData = mergeTableData(transactions.data, categories.data, accounts.data)
            setData(tableData)
        }
        
    }, [transactions.data, categories.data, accounts.data])

    return {
        data, 
        isLoading: transactions.isLoading && categories.isLoading && accounts.isLoading, 
        isError: transactions.isError && categories.isError && accounts.isError, 
    }
}