import MetricGroupOne from "../../components/(dashboard)/MetricGroupOne";
import ChartOne from "../../components/(dashboard)/ChartOne";
import ChartTwo from "../../components/(dashboard)/ChartTwo";
import ChartThree from "../../components/(dashboard)/ChartThree";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <MetricGroupOne />
        <ChartOne />
      </div>
      <div className="col-span-12 xl:col-span-5">
        <ChartTwo />
      </div>
      <div className="col-span-12">
        <ChartThree />
      </div>
    </div>
  );
}