"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Sidebar({ sidebarToggle, setSidebarToggle }) {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard")
  const [openDropdowns, setOpenDropdowns] = useState({
    Dashboard: false,
    Forms: false,
    Tables: false,
    Pages: false,
    Charts: false,
    UIElements: false,
    Authentication: false,
  })
  const pathname = usePathname()

  const toggleDropdown = (menuId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }))
  }

  const menuItems = [
    {
      id: "Dashboard",
      label: "Dashboard",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 14.25 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z"
        />
      ),
      href: "/dashboard",
      hasDropdown: true,
    },
    {
      id: "Calendar",
      label: "Calendar",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z"
        />
      ),
      href: "/calendar",
      hasDropdown: false,
    },
    {
      id: "Profile",
      label: "User Profile",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
        />
      ),
      href: "/profile",
      hasDropdown: false,
    },
    {
      id: "Forms",
      label: "Forms",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H18.5C19.7426 20.75 20.75 19.7426 20.75 18.5V5.5C20.75 4.25736 19.7426 3.25 18.5 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H18.5C18.9142 4.75 19.25 5.08579 19.25 5.5V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V5.5ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z"
        />
      ),
      href: "/forms",
      hasDropdown: true,
    },
    {
      id: "Tables",
      label: "Tables",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.25 5.5C3.25 4.25736 4.25736 3.25 5.5 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5ZM18.5 4.75H5.5C5.08579 4.75 4.75 5.08579 4.75 5.5V8.25H19.25V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75ZM19.25 9.75H4.75V12.25H19.25V9.75ZM19.25 13.75H4.75V18.5C4.75 18.9142 5.08579 19.25 5.5 19.25H18.5C18.9142 19.25 19.25 18.9142 19.25 18.5V13.75Z"
        />
      ),
      href: "/tables",
      hasDropdown: true,
    },
    {
      id: "Pages",
      label: "Pages",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 3.25C5.25736 3.25 4.25 4.25736 4.25 5.5V18.5C4.25 19.7426 5.25736 20.75 6.5 20.75H17.5C18.7426 20.75 19.75 19.7426 19.75 18.5V8.5C19.75 8.36739 19.6973 8.24021 19.6036 8.14645L14.8536 3.39645C14.7598 3.30268 14.6326 3.25 14.5 3.25H6.5ZM5.75 5.5C5.75 5.08579 6.08579 4.75 6.5 4.75H13.75V8.5C13.75 9.19036 14.3096 9.75 15 9.75H18.25V18.5C18.25 18.9142 17.9142 19.25 17.5 19.25H6.5C6.08579 19.25 5.75 18.9142 5.75 18.5V5.5ZM15.25 5.81066L17.1893 7.75H15.25V5.81066Z"
        />
      ),
      href: "/pages",
      hasDropdown: true,
    },
  ]

  const othersMenuItems = [
    {
      id: "Charts",
      label: "Charts",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C13.8638 4.75 15.5615 5.48915 16.8107 6.68934L6.68934 16.8107C5.48915 15.5615 4.75 13.8638 4.75 12ZM8.31066 18.4321C9.56049 19.2607 11.0362 19.75 12.625 19.75C16.6291 19.75 19.875 16.5041 19.875 12.5C19.875 10.9112 19.3857 9.43551 18.5571 8.18568L8.31066 18.4321Z"
        />
      ),
      href: "/charts",
      hasDropdown: true,
    },
    {
      id: "UIElements",
      label: "UI Elements",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.25 6.5C3.25 5.25736 4.25736 4.25 5.5 4.25H9C10.2426 4.25 11.25 5.25736 11.25 6.5V9C11.25 10.2426 10.2426 11.25 9 11.25H5.5C4.25736 11.25 3.25 10.2426 3.25 9V6.5ZM5.5 5.75C5.08579 5.75 4.75 6.08579 4.75 6.5V9C4.75 9.41421 5.08579 9.75 5.5 9.75H9C9.41421 9.75 9.75 9.41421 9.75 9V6.5C9.75 6.08579 9.41421 5.75 9 5.75H5.5ZM12.75 6.5C12.75 5.25736 13.7574 4.25 15 4.25H18.5C19.7426 4.25 20.75 5.25736 20.75 6.5V9C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 9V6.5ZM15 5.75C14.5858 5.75 14.25 6.08579 14.25 6.5V9C14.25 9.41421 14.5858 9.75 15 9.75H18.5C18.9142 9.75 19.25 9.41421 19.25 9V6.5C19.25 6.08579 18.9142 5.75 18.5 5.75H15ZM3.25 15C3.25 13.7574 4.25736 12.75 5.5 12.75H9C10.2426 12.75 11.25 13.7574 11.25 15V18.5C11.25 19.7426 10.2426 20.75 9 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V15ZM5.5 14.25C5.08579 14.25 4.75 14.5858 4.75 15V18.5C4.75 18.9142 5.08579 19.25 5.5 19.25H9C9.41421 19.25 9.75 18.9142 9.75 18.5V15C9.75 14.5858 9.41421 14.25 9 14.25H5.5ZM12.75 15C12.75 13.7574 13.7574 12.75 15 12.75H18.5C19.7426 12.75 20.75 13.7574 20.75 15V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H15C13.7574 20.75 12.75 19.7426 12.75 18.5V15ZM15 14.25C14.5858 14.25 14.25 14.5858 14.25 15V18.5C14.25 18.9142 14.5858 19.25 15 19.25H18.5C18.9142 19.25 19.25 18.9142 19.25 18.5V15C19.25 14.5858 18.9142 14.25 18.5 14.25H15Z"
        />
      ),
      href: "/ui-elements",
      hasDropdown: true,
    },
    {
      id: "Authentication",
      label: "Authentication",
      icon: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.25 7C8.25 5.20507 9.70507 3.75 11.5 3.75H12.5C14.2949 3.75 15.75 5.20507 15.75 7V8.25H17C18.2426 8.25 19.25 9.25736 19.25 10.5V18.5C19.25 19.7426 18.2426 20.75 17 20.75H7C5.75736 20.75 4.75 19.7426 4.75 18.5V10.5C4.75 9.25736 5.75736 8.25 7 8.25H8.25V7ZM9.75 8.25H14.25V7C14.25 6.0335 13.4665 5.25 12.5 5.25H11.5C10.5335 5.25 9.75 6.0335 9.75 7V8.25ZM7 9.75C6.58579 9.75 6.25 10.0858 6.25 10.5V18.5C6.25 18.9142 6.58579 19.25 7 19.25H17C17.4142 19.25 17.75 18.9142 17.75 18.5V10.5C17.75 10.0858 17.4142 9.75 17 9.75H7Z"
        />
      ),
      href: "/authentication",
      hasDropdown: true,
      submenu: [
        {
          id: "SignIn",
          label: "Sign In",
          href: "/authentication/signin",
        },
      ],
    },
  ]

  const isActive = (href) => pathname === href

  return (
    <aside
      className={`fixed left-0 top-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-hidden border-r border-gray-200 bg-white px-5 transition-transform duration-300 ease-linear dark:border-gray-800 dark:bg-black lg:static lg:translate-x-0 ${
        sidebarToggle ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 pb-7 pt-8">
        <Link href="/dashboard">
          <Image
            width={176}
            height={32}
            src="/images/logo/logo-white.jpg"
            alt="Logo"
            className="hidden dark:block"
            priority
          />
          <Image
            width={176}
            height={32}
            src="/images/logo/logo-black.jpg"
            alt="Logo"
            className="dark:hidden"
            priority
          />
        </Link>

        <button onClick={() => setSidebarToggle(false)} className="block lg:hidden">
          <svg
            className="fill-current"
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
      </div>

      {/* Sidebar Menu */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav>
          <div>
            <h3 className="mb-4 text-xs uppercase leading-5 text-gray-400">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`menu-item group w-full ${
                          isActive(item.href) ? "menu-item-active" : "menu-item-inactive"
                        }`}
                      >
                        <svg
                          className={`${isActive(item.href) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {item.icon}
                        </svg>

                        <span className="flex-1 text-left">{item.label}</span>

                        <svg
                          className={`menu-item-arrow ${
                            openDropdowns[item.id] ? "menu-item-arrow-active" : "menu-item-arrow-inactive"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setSelectedMenu(item.id)}
                      className={`menu-item group ${isActive(item.href) ? "menu-item-active" : "menu-item-inactive"}`}
                    >
                      <svg
                        className={`${isActive(item.href) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {item.icon}
                      </svg>

                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* OTHERS section */}
            <h3 className="mb-4 text-xs uppercase leading-5 text-gray-400">OTHERS</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {othersMenuItems.map((item) => (
                <li key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`menu-item group w-full ${
                          isActive(item.href) ? "menu-item-active" : "menu-item-inactive"
                        }`}
                      >
                        <svg
                          className={`${isActive(item.href) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {item.icon}
                        </svg>

                        <span className="flex-1 text-left">{item.label}</span>

                        <svg
                          className={`menu-item-arrow ${
                            openDropdowns[item.id] ? "menu-item-arrow-active" : "menu-item-arrow-inactive"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                          />
                        </svg>
                      </button>

                      {item.submenu && openDropdowns[item.id] && (
                        <ul className="mt-1.5 flex flex-col gap-1.5 pl-11">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setSelectedMenu(item.id)}
                      className={`menu-item group ${isActive(item.href) ? "menu-item-active" : "menu-item-inactive"}`}
                    >
                      <svg
                        className={`${isActive(item.href) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {item.icon}
                      </svg>

                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}