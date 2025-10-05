"use client"
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const options = {
  legend: {
    show: false,
  },
  colors: ["#465FFF", "#80CAEE"],
  chart: {
    fontFamily: "Outfit, sans-serif",
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "smooth",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 250,
    tickAmount: 5,
  },
  grid: {
    strokeDashArray: 4,
  },
}

const ChartThree = () => {
  const [activeTab, setActiveTab] = useState("Overview")
  const [state] = useState({
    series: [
      {
        name: "Series 1",
        data: [180, 190, 185, 165, 175, 170, 165, 180, 220, 230, 215, 240],
      },
      {
        name: "Series 2",
        data: [40, 30, 50, 45, 60, 55, 50, 70, 120, 140, 130, 150],
      },
    ],
  })

  return (
    <div className="col-span-12 rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 shadow-xs dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Statistics</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Target youve set for each month</p>
        </div>

        <div className="flex w-full items-start gap-3 sm:justify-end">
          <div className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            <button
              onClick={() => setActiveTab("Overview")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === "Overview"
                  ? "bg-white text-gray-900 shadow-xs dark:bg-gray-800 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("Sales")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === "Sales"
                  ? "bg-white text-gray-900 shadow-xs dark:bg-gray-800 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveTab("Revenue")}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === "Revenue"
                  ? "bg-white text-gray-900 shadow-xs dark:bg-gray-800 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Revenue
            </button>
          </div>

          <div className="relative w-fit">
            <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66667 2.5C7.08088 2.5 7.41667 2.83579 7.41667 3.25V4.16667H12.5833V3.25C12.5833 2.83579 12.9191 2.5 13.3333 2.5C13.7475 2.5 14.0833 2.83579 14.0833 3.25V4.16667H15.4167C16.5673 4.16667 17.5 5.09933 17.5 6.25V7.5V15.8333C17.5 16.9839 16.5673 17.9167 15.4167 17.9167H4.58333C3.43274 17.9167 2.5 16.9839 2.5 15.8333V7.5V6.25C2.5 5.09933 3.43274 4.16667 4.58333 4.16667H5.91667V3.25C5.91667 2.83579 6.25245 2.5 6.66667 2.5ZM6.66667 5.66667H4.58333C4.26117 5.66667 4 5.92783 4 6.25V7.08333H16V6.25C16 5.92783 15.7388 5.66667 15.4167 5.66667H13.3333H6.66667ZM16 8.58333H4V15.8333C4 16.1555 4.26117 16.4167 4.58333 16.4167H15.4167C15.7388 16.4167 16 16.1555 16 15.8333V8.58333Z"
                />
              </svg>
              <span className="hidden xl:inline">Sep 29, 2025 - Oct 5,</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-4 min-w-[700px] pl-2">
          <ReactApexChart options={options} series={state.series} type="area" height={350} />
        </div>
      </div>
    </div>
  )
}

export default ChartThree
