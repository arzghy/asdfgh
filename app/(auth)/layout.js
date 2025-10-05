// app/(auth)/layout.jsx
import Image from 'next/image';
import "./auth.css";

export default function AuthLayout({ children }) {
  return (
    <div className="relative z-10 bg-white dark:bg-gray-900">
      <div className="flex flex-col justify-center w-full min-h-screen lg:flex-row">
        {/* Kolom Form */}
        <div className="flex flex-col justify-center flex-1 w-full lg:w-1/2">
          <div className="w-full max-w-md pt-10 mx-auto sm:py-10">
            {children}
          </div>
        </div>

        {/* Kolom Gambar Latar */}
        <div className="relative items-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
          <div className="flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-xs text-center">
              <Image
                  src="/images/logo/icon.png"
                  alt="Logo"
                  width={200}
                  height={50}
                />
              <p className="text-gray-400 dark:text-white/60">
                Solusi Cerdas Keuangan UMKM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}