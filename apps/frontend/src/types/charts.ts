import { Categories } from "@/types/db";

export type FormatedTransactions = {
    date: string;
    [key: string]: string | number;
}

export type LineChartData = {
    transactions: FormatedTransactions[]
    categories: Categories[];
}

export type PieData = {
    name: string,
    value: number,
    color?: string,
}

export type FormatedAreaChartData = {
    date: string;
    [key: string]: number | string;
    
}

export type FormatedBarChartData = {
    month: string;
    income: number;
    expense: number;
}