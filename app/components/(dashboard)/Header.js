import Link from "next/link";
import Image from "next/image";

export default function Header({
  sidebarToggle,
  setSidebarToggle,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex w-full flex-col items-center justify-between px-4 py-3 sm:px-6 lg:flex-row lg:py-4">
        {/* Left Side - Hamburger & Logo */}
        <div className="flex w-full items-center justify-between gap-2 sm:gap-4 lg:w-auto lg:justify-normal">
          {/* Hamburger Toggle Button */}
          <button
            onClick={() => setSidebarToggle(!sidebarToggle)}
            className={`z-99999 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white lg:h-11 lg:w-11 ${
              sidebarToggle ? "bg-gray-100 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent" : ""
            }`}
          >
            {/* Desktop Icon */}
            <svg
              className="hidden fill-current lg:block"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                fill=""
              />
            </svg>

            {/* Mobile Icon - Menu */}
            <svg
              className={`fill-current lg:hidden ${sidebarToggle ? "hidden" : "block"}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25L20 5.25C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75L4 6.75C3.58579 6.75 3.25 6.41422 3.25 6ZM3.25 18C3.25 17.5858 3.58579 17.25 4 17.25L20 17.25C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75L4 18.75C3.58579 18.75 3.25 18.4142 3.25 18ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25L4 11.25Z"
                fill=""
              />
            </svg>

            {/* Mobile Icon - Close */}
            <svg
              className={`fill-current ${sidebarToggle ? "block lg:hidden" : "hidden"}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill=""
              />
            </svg>
          </button>

          {/* Logo - Mobile Only */}
          <Link href="/dashboard" className="block lg:hidden">
            <Image
              width={32}
              height={32}
              src="/images/logo/icon.png"
              alt="Logo"
              priority
            />
          </Link>
        </div>

        {/* Right Side - User Area */}
        <div className="flex w-full items-center justify-end gap-3 px-0 sm:gap-4">
          {/* User Dropdown */}
          <div className="relative">
            <Link
              href="/profile"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-400"
            >
              <span className="hidden sm:block">
                <span className="block text-right text-sm font-medium text-gray-800 dark:text-white/90">
                  Musharof
                </span>
                <span className="block text-right text-xs text-gray-500 dark:text-gray-400">
                  UX Designer
                </span>
              </span>

              <span className="h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="/images/user/owner.jpg"
                  alt="User"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}