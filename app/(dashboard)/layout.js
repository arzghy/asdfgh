"use client";
import "./dashboard.css";
import React, { useState } from "react";
import Preloader from "../components/(dashboard)/Preloader";
import Sidebar from "../components/(dashboard)/Sidebar";
import Header from "../components/(dashboard)/Header";
import Overlay from "../components/(dashboard)/Overlay";

export default function DashboardLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);

  // Logika untuk menyimpan state darkMode bisa ditambahkan di sini dengan localStorage

  return (
    <div className={darkMode ? "dark" : ""}>
      <Preloader />
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Overlay
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
          <Header
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}