import Card from "@/components/Card";
import BarChart from "./charts/BarChart";

export default function BarChartContainer() {
    return <Card className="col-span-2">
                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-50">График доходов и расходов</h3>
                <BarChart />
            </Card>

}
