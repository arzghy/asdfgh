"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
   const [isSticky, setIsSticky] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const closeAllMenus = () => {
      setIsMenuOpen(false);
   };

   return (
      <header className={`ud-header absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ${isSticky ? "sticky bg-white shadow-md" : ""}`}>
         <div className="container px-4 mx-auto">
            <div className="relative flex items-center justify-between -mx-4">
               <div className="max-w-full px-4 w-60">
                  <Link href="/" className="block w-full py-5 navbar-logo">
                     <Image src={isSticky ? "/images/logo/logo-black.png" : "/images/logo/logo-white.png"} alt="logo" className="w-full header-logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </Link>
               </div>
               <div className="flex items-center justify-between w-full px-4">
                  <div>
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        id="navbarToggler"
                        className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isMenuOpen ? "navbarTogglerActive" : ""}`}
                     >
                        <span className={`relative my-[6px] block h-[2px] w-[30px] transition-all duration-300 ${isSticky ? "bg-dark" : "bg-white"}`}></span>
                        <span className={`relative my-[6px] block h-[2px] w-[30px] transition-all duration-300 ${isSticky ? "bg-dark" : "bg-white"}`}></span>
                        <span className={`relative my-[6px] block h-[2px] w-[30px] transition-all duration-300 ${isSticky ? "bg-dark" : "bg-white"}`}></span>
                     </button>
                     <nav
                        id="navbarCollapse"
                        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6 ${
                           isMenuOpen ? "" : "hidden"
                        }`}
                     >
                        <ul className="blcok lg:flex 2xl:ml-20">
                           <li className="relative group">
                              <Link
                                 href="#home"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Home
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="#problem"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Problem
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="#features"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Features
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="#pricing"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Pricing
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="#faq"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 FAQ
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="#team"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Team
                              </Link>
                           </li>
                           <li className="relative group">
                              <Link
                                 href="/blog"
                                 onClick={closeAllMenus}
                                 className={`flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70 xl:ml-10 ${
                                    isSticky ? "text-dark hover:text-primary" : "lg:text-white lg:group-hover:text-white text-dark hover:primary"
                                 }`}
                              >
                                 Blog
                              </Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                     <div className="hidden sm:flex">
                        <Link href="/signin" className={`loginBtn px-[22px] py-2 text-base font-medium hover:opacity-70 ${isSticky ? "text-dark" : "text-white"}`}>
                           Sign In
                        </Link>
                        <Link
                           href="/signup"
                           className={`px-6 py-2 text-base font-medium rounded-md duration-300 ease-in-out signUpBtn ${
                              isSticky ? "text-primary bg-stroke hover:bg-primary hover:text-white" : "text-white bg-white/20 hover:bg-white hover:text-dark"
                           }`}
                        >
                           Sign Up
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
