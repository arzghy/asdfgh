// app/(auth)/layout.js
import Image from 'next/image';
import GridShape from "../components/(auth)/GridShape";
import "./auth.css";

export default function AuthLayout({ children }) {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      
      {/* Kolom Form (Kiri) */}
      <div className="flex-1 w-full lg:w-1/2 overflow-y-auto">
        <div className="flex flex-col justify-center min-h-full px-6 py-12">
          <div className="w-full max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Kolom Latar (Kanan) - Sesuai template asli */}
      <div className="relative items-center hidden w-full bg-brand-700 dark:bg-white/5 lg:grid lg:w-1/2">
        
        {/* Bentuk GridShape dengan warna dari tombol sign up (brand-600) */}
        <div className="absolute top-0 right-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
          <GridShape className="text-brand-600" />
        </div>
        <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
          <GridShape className="text-brand-600" />
        </div>
        
        {/* Logo */}
        <div className="flex items-center justify-center z-10">
          <div className="flex flex-col items-center max-w-xs text-center">
            <Image
                src="/images/logo/logo-white.png"
                alt="Logo"
                width={200}
                height={50}
              />
          </div>
        </div>
      </div>
    </div>
  );
}