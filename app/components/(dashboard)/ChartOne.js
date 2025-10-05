"use client";
import React from 'react';
// Anda perlu install dan setup library chart seperti ApexCharts
// import Chart from 'react-apexcharts';

const ChartOne = () => {
    // Data dan options untuk chart
    // const series = [...];
    // const options = {...};

  return (
    <div className="col-span-12 rounded-sm border border-gray-200 bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-gray-700 dark:bg-gray-800 sm:px-7.5">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                <div className="flex min-w-47.5">
                    <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-brand-500">
                        <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-brand-500"></span>
                    </span>
                    <div className="w-full">
                        <p className="font-semibold text-brand-500">Total Revenue</p>
                        <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                    </div>
                </div>
                 <div className="flex min-w-47.5">
                    <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-success-500">
                        <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-success-500"></span>
                    </span>
                    <div className="w-full">
                        <p className="font-semibold text-success-500">Total Sales</p>
                        <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                    </div>
                </div>
            </div>
            {/* ... (Dropdown) ... */}
        </div>
        <div>
            <div id="chartOne" className="-ml-5">
                {/* <Chart options={options} series={series} type="area" height={350} /> */}
                <p className="text-center p-8">Chart library (e.g., ApexCharts) needs to be configured here.</p>
            </div>
        </div>
    </div>
  );
};

export default ChartOne;