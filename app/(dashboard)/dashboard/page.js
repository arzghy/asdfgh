import MetricGroupOne from "../../components/(dashboard)/MetricGroupOne"
import ChartOne from "../../components/(dashboard)/ChartOne"
import ChartTwo from "../../components/(dashboard)/ChartTwo"
import ChartThree from "../../components/(dashboard)/ChartThree"

const Dashboard = () => {
  return (
    <>
      <MetricGroupOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        {/* You can add more components here if needed, for example ChartFour */}
        {/* <ChartFour /> */}

        {/* The Map and Tables are excluded as per your request */}
        {/* <MapOne /> */}
        {/* <TableOne /> */}
        {/* <ChatCard /> */}
      </div>
    </>
  )
}

export default Dashboard