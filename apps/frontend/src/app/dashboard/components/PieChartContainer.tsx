import Card from "@/components/Card";
import PieChart from "./charts/PieChart";

export default function PieChartContainer() {
    return (
        <Card>
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-50">Общий график расходов</h3>
            <PieChart />
        </Card>
    )
}