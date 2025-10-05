"use client"
import Link from "next/link"
import Image from "next/image"

const Header = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className="block rounded-sm border border-gray-200 bg-white p-1.5 shadow-xs dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          >
            <svg
              className="fill-gray-700 dark:fill-gray-300"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 5C2.5 4.58579 2.83579 4.25 3.25 4.25H16.75C17.1642 4.25 17.5 4.58579 17.5 5C17.5 5.41421 17.1642 5.75 16.75 5.75H3.25C2.83579 5.75 2.5 5.41421 2.5 5ZM2.5 10C2.5 9.58579 2.83579 9.25 3.25 9.25H16.75C17.1642 9.25 17.5 9.58579 17.5 10C17.5 10.4142 17.1642 10.75 16.75 10.75H3.25C2.83579 10.75 2.5 10.4142 2.5 10ZM2.5 15C2.5 14.5858 2.83579 14.25 3.25 14.25H16.75C17.1642 14.25 17.5 14.5858 17.5 15C17.5 15.4142 17.1642 15.75 16.75 15.75H3.25C2.83579 15.75 2.5 15.4142 2.5 15Z"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-4" href="#">
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-gray-900 dark:text-white">Musharof</span>
            </span>

            <span className="h-12 w-12 overflow-hidden rounded-full">
              <Image
                width={48}
                height={48}
                src="/images/user/user-01.jpg"
                alt="User"
                className="h-full w-full object-cover"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header