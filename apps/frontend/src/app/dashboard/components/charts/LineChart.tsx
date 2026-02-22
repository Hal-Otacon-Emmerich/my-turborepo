"use client";

import Card from "@/components/Card";
import useLineChart from "@/hooks/useLineChart";

import { Area, AreaChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function LineChart() {
 const {data, isLoading, error} = useLineChart();
 
     if(isLoading) return <Card>Loading</Card>
     if(error) return <div>Ошибка</div>

  return (
        <ResponsiveContainer width="100%" maxHeight={300} aspect={1.618}>
            <AreaChart 
                style={{fontSize: "14px"}}
                data={data}>
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <defs>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="expense"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorExpense)"
                />
                <Area
                    type="monotone"
                    dataKey="income"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                />
            </AreaChart>
        </ResponsiveContainer>
  )
}