"use client";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ sidebarToggle, setSidebarToggle }) {
  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-900 duration-300 ease-linear dark:bg-gray-800 lg:static lg:translate-x-0 ${
        sidebarToggle ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo-white.png"}
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setSidebarToggle(false)}
          className="block lg:hidden"
        >
          {/* Icon Close */}
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* Menu Group */}
        </nav>
      </div>
    </aside>
  );
}