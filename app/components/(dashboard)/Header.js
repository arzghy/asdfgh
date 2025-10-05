import Link from "next/link";
import Image from "next/image";

export default function Header({
  sidebarToggle,
  setSidebarToggle,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-gray-800 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className="z-99999 block rounded-sm border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:hidden"
          >
            {/* Hamburger Icon */}
          </button>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/icon.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden sm:block">{/* Search Form */}</div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggler */}
            <li className="relative">
              <button onClick={() => setDarkMode(!darkMode)}>
                {/* Dark Mode Icon */}
              </button>
            </li>
            {/* Notification Menu Area */}
            {/* Chat Notification Area */}
          </ul>
          {/* User Area */}
        </div>
      </div>
    </header>
  );
}