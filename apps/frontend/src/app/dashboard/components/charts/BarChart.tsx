"use client";

import useBarChart from "@/hooks/useBarChart";
import { Bar, BarChart as BarRechart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChart() {    
    const {data, isLoading, isError} = useBarChart();

    if(isLoading) return "Loading...";
    if(isError) return "Error..." 

    return (
        <ResponsiveContainer width="100%" maxHeight={500} aspect={1.618}>
            <BarRechart
            style={{ fontSize: '14px' }}
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
            <Bar dataKey="expense" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
            </BarRechart>

        </ResponsiveContainer>
  );
};