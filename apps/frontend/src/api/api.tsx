import { Accounts, Categories, Transactions } from "@/types/db";
import { Message } from "@/types/formState";

const BASE_URL = 'http://localhost:8080';

export const getAllTransactions = async (): Promise<Transactions[]> => {
    const res = await fetch(`${BASE_URL}/transactions/all`);
    if(!res.ok) throw new Error('Something goes wrong...')
    return res.json()
}

export const getAllCategories = async (): Promise<Categories[]> => {
    const res = await fetch(`${BASE_URL}/categories/all`);
    if(!res.ok) throw new Error('Something goes wrong...')
    return res.json()
}

export const getAllAccounts = async (): Promise<Accounts[]> => {
    const res = await fetch(`${BASE_URL}/account/all`);
    if(!res.ok) throw new Error('Something goes wrong...')
    return res.json()
}

export const patchUpdateCategory = async (id: number, name: string, color: string): Promise<Message> => {
 
        const res = await fetch(`${BASE_URL}/categories/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name,
                color
            })
        });
        if(!res.ok) throw new Error('Что-то пошло не так!')
        return await res.json()

}