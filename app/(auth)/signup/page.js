// app/(auth)/signup/page.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-5 sm:mb-8">
        <h1 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-3xl">
          Sign Up
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Masukkan detail Anda untuk membuat akun!
        </p>
      </div>

      {/* ... (kode tombol Google & X.com dari HTML) ... */}

      <div className="relative py-3 sm:py-5">
        {/* ... (separator "Or") ... */}
      </div>

      <form>
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Nama Depan<span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Masukkan nama depan" className="w-full h-11 ..."/>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Nama Belakang<span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Masukkan nama belakang" className="w-full h-11 ..."/>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Email<span className="text-red-500">*</span>
            </label>
            <input type="email" placeholder="Masukkan email" className="w-full h-11 ..."/>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
               {/* ... (input password dengan show/hide toggle) ... */}
            </div>
          </div>
          <div>
            {/* ... (checkbox persetujuan) ... */}
          </div>
          <div>
            <button type="submit" className="flex items-center justify-center w-full px-4 py-3 ...">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <div className="mt-5">
        <p className="text-sm font-normal text-center text-gray-700 ...">
          Sudah punya akun?{' '}
            <Link 
                href="/signin" 
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
                Sign Up
            </Link>
        </p>
      </div>
    </>
  );
}