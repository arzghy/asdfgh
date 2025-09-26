import { Inter } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "./client-wrapper";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

export const metadata = {
   title: {
      default: "Sakuin | Solusi Cerdas Keuangan UMKM",
      template: "%s | Sakuin",
   },
   description: "Kelola cashflow bisnis UMKM Anda lebih mudah dengan Sakuin. Catat transaksi, analisis arus kas, dan dapatkan rekomendasi AI untuk pertumbuhan usaha.",
   keywords: ["Sakuin", "UMKM", "keuangan", "cashflow", "aplikasi UMKM", "dashboard keuangan", "AI bisnis", "manajemen keuangan"],
};

export default function RootLayout({ children }) {
   return (
      <html lang="id">
         <body className={`${inter.variable}`}>
            <ClientWrapper>{children}</ClientWrapper>
         </body>
      </html>
   );
}
