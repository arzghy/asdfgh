import { Inter } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "./client-wrapper";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

export const metadata = {
   title: {
      default: "SAKUIN | Solusi Cerdas Keuangan UMKM",
      template: "%s | SAKUIN",
   },
   description: "Kelola cashflow bisnis UMKM Anda lebih mudah dengan SAKUIN. Catat transaksi, analisis arus kas, dan dapatkan rekomendasi AI untuk pertumbuhan usaha.",
   keywords: ["SAKUIN", "UMKM", "keuangan", "cashflow", "aplikasi UMKM", "dashboard keuangan", "AI bisnis", "manajemen keuangan"],
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
