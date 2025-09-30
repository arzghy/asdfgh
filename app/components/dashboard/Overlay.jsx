"use client";

import { useContext } from "react";
import { SidebarContext } from "../../(dashboard)/layout";

const Overlay = () => {
   const { sidebarToggle, setSidebarToggle } = useContext(SidebarContext);

   return <div onClick={() => setSidebarToggle(false)} className={`fixed w-full h-screen z-999 bg-gray-900/50 ${sidebarToggle ? "block lg:hidden" : "hidden"}`}></div>;
};

export default Overlay;
