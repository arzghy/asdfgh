"use client";

import "./dashboard.css";
import { useState, useEffect, createContext } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Preloader from "../components/dashboard/Preloader";
import Overlay from "../components/dashboard/Overlay";

export const SidebarContext = createContext(null);

export default function DashboardLayout({ children }) {
   const [sidebarToggle, setSidebarToggle] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
   }, []);

   if (loading) {
      return <Preloader />;
   }

   return (
      <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
         <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
               <Overlay />
               <Header />
               <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
               </main>
            </div>
         </div>
      </SidebarContext.Provider>
   );
}
