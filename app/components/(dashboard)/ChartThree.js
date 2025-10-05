"use client";
import React from "react";

const ChartThree = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Target youve set for each month
          </p>
        </div>

        <div className="flex w-full items-start gap-3 sm:justify-end">
          <div className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-xs dark:bg-gray-800 dark:text-white">
              Overview
            </button>
            <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Sales
            </button>
            <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Revenue
            </button>
          </div>

          <div className="relative w-fit">
            <input
              className="h-10 w-full max-w-11 rounded-lg border border-gray-200 bg-white py-2.5 pl-[34px] pr-4 text-sm font-medium text-gray-700 shadow-xs focus:outline-hidden focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 xl:max-w-fit xl:pl-11"
              placeholder="Select dates"
              readOnly
            />
            <div className="pointer-events-none absolute inset-0 right-auto left-4 flex items-center">
              <svg
                className="fill-gray-700 dark:fill-gray-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                  fill=""
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-4 min-w-[700px] pl-2">
          <div className="flex h-[350px] items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Chart library needs to be configured here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;