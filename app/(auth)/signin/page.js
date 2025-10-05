// app/(auth)/signin/page.jsx
"use client"; // Diperlukan untuk interaktivitas seperti state

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-5 sm:mb-8">
        <h1 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-3xl">
          Sign In
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Masukkan email dan password untuk masuk!
        </p>
      </div>

      {/* Tombol Social Media */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
        {/* ... (kode tombol Google & X.com dari HTML) ... */}
      </div>

      <div className="relative py-3 sm:py-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
            Or
          </span>
        </div>
      </div>

      {/* Form Sign In */}
      <form>
        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full h-11 rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full h-11 rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2 text-gray-500 dark:text-gray-400"
              >
                {/* ... (kode SVG untuk show/hide password) ... */}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* ... (kode checkbox "Keep me logged in") ... */}
            {/* <Link href="/reset-password" passHref>
              <a className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400">
                Lupa password?
              </a>
            </Link> */}
          </div>
          <div>
            <button type="submit" className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-sm hover:bg-brand-600">
              Sign In
            </button>
          </div>
        </div>
      </form>

      <div className="mt-5">
        <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
          Belum punya akun?{' '}
            <Link 
                href="/signup" 
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
                Sign Up
            </Link>
        </p>
      </div>
    </>
  );
}