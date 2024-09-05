import DashboardCard from "./card/DashboardCard";
import BarChart from "./chart/BarChart";

const Dashboard = () => {
  return (
    <div className=" w-full h-full px-5 bg-white rounded-lg">
      <div className="py-5 flex flex-wrap  gap-y-5 gap-x-5 w-full justify-between items-center">
        <DashboardCard label="Total organisation registered" count="100" />
        <DashboardCard label="Number of active organisation" count="100" />
        <DashboardCard label="Number of expired organisation" count="100" />
        <DashboardCard label="Number of inactive organisation" count="100" />
      </div>
      <hr />
      <div className="  h-full flex items-center justify-center border border-slate-200 w-full">
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
