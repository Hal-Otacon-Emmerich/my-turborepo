import { FormatedAreaChartData, FormatedBarChartData, FormatedTransactions } from "@/types/charts";
import { MONTHS } from "@/types/const";
import { Categories, Transactions } from "@/types/db";

export function mergeTransactionsByDate(transactions: Transactions[], categories: Categories[]): FormatedTransactions[] {
  const result: Record<string, FormatedTransactions> = {};

  transactions.forEach(transaction => {
    const date = new Date(transaction.date).toLocaleDateString('ru-RU');

    if (!result[date]) {
      result[date] = { date };
    }

    categories.forEach((categorie) => {
      result[date][categorie.name] = 0;
      if(transaction.categoryId === categorie.id) {
        result[date][categorie.name] =  (result[date][categorie.name] as number) + Math.abs(Number(transaction.amount));
      }
    })
  });
  return Object.values(result);
}

export function mergeTransactionsByType(transactions: Transactions[]): FormatedAreaChartData[] {
  const result: Record<string, FormatedAreaChartData> = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date).toLocaleDateString('ru-RU');

    if (!result[date]) {
      result[date] = { date };
    }
    if(!result[date]['income'] && !result[date]['expense']) {
      result[date]['income'] = 0;
      result[date]['expense'] = 0;
    }

    result[date][transaction.type] = Number(result[date][transaction.type]) + Math.abs(Number(transaction.amount));

  });
  return Object.values(result);
}

export function transformArrayForBarChart(transactions: Transactions[]): FormatedBarChartData[] {
  const result: FormatedBarChartData[] = [];

  transactions.forEach(transaction => {
    const monthIndex = new Date(transaction.date).getMonth();
    const month = MONTHS[monthIndex]

    if(!result[monthIndex]) {
      result.push({
        month,
        expense: 0,
        income: 0
      })
    }
    

    result[monthIndex][transaction.type] 
      = Number(result[monthIndex][transaction.type]) + Math.abs(Number(transaction.amount));
    
  })
  console.log(result)
  return result;
}