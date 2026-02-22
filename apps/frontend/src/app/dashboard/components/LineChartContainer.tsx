import Card from "@/components/Card";
import LineChart from "./charts/LineChart";

export default function LineChartContainer() {
    return (
        <Card className="col-span-3">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-50">График доходов и расходов</h3>
            <LineChart />
        </Card>
    )
}