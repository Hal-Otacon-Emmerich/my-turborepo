export type Transactions = {
    id:	number
    userId:	number
    accountId: number
    categoryId: number
    amount: string
    currency: string
    date: string
    type: 'income' | 'expense'
}

export type Categories = {
    id: number
    userId: number
    name: string
    type: string
    parentId: number | null
    color: string
    icon: string
    isSystem: boolean
}

export type Accounts = {
    id: number;
    userId: number;
    name: string;
    type: string;
    balance: number;
    currency: string;
    isActive: boolean;
}