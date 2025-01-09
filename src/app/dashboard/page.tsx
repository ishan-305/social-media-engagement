import { AreaChartStacked } from "@/components/area-chart-stacked";
import { BarChartPost } from "@/components/bar-chart";
import StatCard from "@/components/stat-card";
import { Activity, DollarSign, LineChart, LineChartIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-stretch justify-center px-2 gap-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Likes"
          value="2,853"
          icon={LineChartIcon}
          description="+180 from last month"
          change={12}
          trend="up"
        />

        <StatCard
          title="Revenue"
          value="$45,231"
          icon={DollarSign}
          description="+20.1% from last month"
          change={20.1}
          trend="up"
        />

        <StatCard
          title="Total Engagements"
          value="1,274"
          icon={Activity}
          description="-5% from last hour"
          change={5}
          trend="down"
        />

        <StatCard
          title="Total Profile Visits"
          value="2.4%"
          icon={LineChart}
          description="+0.3% from last week"
          change={0.3}
          trend="up"
        />
      </div>
      <AreaChartStacked />
      <BarChartPost />
    </div>
  );
};
export default Dashboard;
