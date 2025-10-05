// app/(auth)/layout.js
import Image from 'next/image';
import "./auth.css";

export default function AuthLayout({ children }) {
  return (
    // Container utama dengan tinggi layar penuh dan overflow tersembunyi
    <div className="flex w-full h-screen overflow-hidden">
      
      {/* Kolom Form (Kiri) - Dibuat Scrollable */}
      <div className="flex-1 w-full lg:w-1/2 overflow-y-auto">
        <div className="flex flex-col justify-center min-h-full px-6 py-12">
          <div className="w-full max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>

      {/* Kolom Latar Hijau (Kanan) - Tetap (Fixed) */}
      <div className="relative items-center hidden w-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
        <div className="flex items-center justify-center z-1">
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