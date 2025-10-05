import React from 'react';

const MetricGroupOne = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {/* Card 1 */}
      <div className="rounded-sm border border-gray-200 bg-white py-6 px-7.5 shadow-default dark:border-gray-700 dark:bg-gray-800">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/[0.12]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19.25C15.5523 19.25 19.25 15.5523 19.25 11C19.25 6.44772 15.5523 2.75 11 2.75C6.44772 2.75 2.75 6.44772 2.75 11C2.75 15.5523 6.44772 19.25 11 19.25Z" stroke="#465FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.75 11.9167C13.75 12.4108 13.5568 12.8841 13.2106 13.2303C12.8644 13.5765 12.391 13.77 11.9 13.77C11.409 13.77 10.9356 13.5765 10.5894 13.2303C10.2432 12.8841 10.05 12.4108 10.05 11.9167C10.05 11.4226 10.2432 10.9493 10.5894 10.6031C10.9356 10.2569 11.409 10.0633 11.9 10.0633H13.75V11.9167Z" stroke="#465FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.05 10.0633L8.25 8.25" stroke="#465FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        <div className="mt-4 flex items-end justify-between">
            <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">$3.456K</h4>
                <span className="text-sm font-medium">Total Revenue</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-success-500">
                0.43%
                <svg className="fill-current" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737V10.0849H4.35716V2.47737Z" fill=""/>
                </svg>
            </span>
        </div>
      </div>

      {/* ... (Tambahkan 3 card lainnya dengan struktur serupa dari template) ... */}
    </div>
  );
};

export default MetricGroupOne;