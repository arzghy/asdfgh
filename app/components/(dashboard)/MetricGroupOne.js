const Card = ({ title, total, rate, levelUp, levelDown, icon }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-xs dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center justify-center rounded-full bg-gray-100 p-3 w-fit dark:bg-gray-900">{icon}</div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-3xl font-semibold text-gray-900 dark:text-white">{total}</p>

          <span
            className={`flex items-center gap-1 text-sm font-medium ${
              levelUp ? "text-success-600 dark:text-success-500" : ""
            } ${levelDown ? "text-error-600 dark:text-error-500" : ""}`}
          >
            {levelUp && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {levelDown && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {rate}
          </span>
        </div>
      </div>
    </div>
  )
}

const MetricGroupOne = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:gap-7.5">
      <Card
        title="Customers"
        total="3,782"
        rate="11.01%"
        levelUp
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7ZM12 4.5C10.6193 4.5 9.5 5.61929 9.5 7C9.5 8.38071 10.6193 9.5 12 9.5C13.3807 9.5 14.5 8.38071 14.5 7C14.5 5.61929 13.3807 4.5 12 4.5ZM8 13.5C5.79086 13.5 4 15.2909 4 17.5V19.25C4 19.6642 3.66421 20 3.25 20C2.83579 20 2.5 19.6642 2.5 19.25V17.5C2.5 14.4624 4.96243 12 8 12H16C19.0376 12 21.5 14.4624 21.5 17.5V19.25C21.5 19.6642 21.1642 20 20.75 20C20.3358 20 20 19.6642 20 19.25V17.5C20 15.2909 18.2091 13.5 16 13.5H8Z"
              fill="#667085"
              className="dark:fill-gray-400"
            />
          </svg>
        }
      />
      <Card
        title="Orders"
        total="5,359"
        rate="9.05%"
        levelDown
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 4.5C6.67157 4.5 6 5.17157 6 6V7.5H18V6C18 5.17157 17.3284 4.5 16.5 4.5H7.5ZM19.5 7.5V6C19.5 4.34315 18.1569 3 16.5 3H7.5C5.84315 3 4.5 4.34315 4.5 6V7.5V9V18C4.5 19.6569 5.84315 21 7.5 21H16.5C18.1569 21 19.5 19.6569 19.5 18V9V7.5ZM18 9H6V18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18V9ZM9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12Z"
              fill="#667085"
              className="dark:fill-gray-400"
            />
          </svg>
        }
      />
    </div>
  )
}

export default MetricGroupOne