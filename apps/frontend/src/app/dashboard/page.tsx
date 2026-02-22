import BarChartContainer from "./components/BarChartContainer";
import LineChartContainer from "./components/LineChartContainer";
import PieChartContainer from "./components/PieChartContainer";
import TableContainer from "./components/TableContainer";

export default function DashboardPage() {
    return (
        <div className="p-4 dasboard-container basis-9/10">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 ">Dashboard</h1>
            <div className="mt-4 grid grid-cols-3 gap-4">
                <LineChartContainer />
                <PieChartContainer />
                <BarChartContainer />
                <TableContainer />
            </div>
        </div>
    )
}