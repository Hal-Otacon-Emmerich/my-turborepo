import { Accounts, Categories, Transactions } from "@/types/db";
import { TableExpanse } from "@/types/table";

export function mergeTableData(transactions: Transactions[], categories: Categories[], accounts: Accounts[]): TableExpanse[] {
    const result: TableExpanse[] = [];

    transactions.forEach((transaction) => {
        const categorie = categories.find(categorie => categorie.id === transaction.categoryId);
        const account = accounts.find(account => account.id === transaction.accountId);

        result.push({
            account: account?.name || '',
            category: categorie?.name || '',
            amount: `${transaction.amount} ${transaction.currency}`,
            type: categorie?.type || '',
        })
    });

    return result;
};