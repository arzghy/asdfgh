export const metadata = {
   title: {
      default: "Sakuin - Solusi Cerdas Keuangan UMKM",
      template: "%s | Sakuin",
   },
   description: "Kelola cashflow bisnis UMKM Anda lebih mudah dengan Sakuin. Catat transaksi, analisis arus kas, dan dapatkan rekomendasi AI untuk pertumbuhan usaha.",
   keywords: ["Sakuin", "UMKM", "keuangan", "cashflow", "aplikasi UMKM", "dashboard keuangan", "AI bisnis", "manajemen keuangan"],
   authors: [{ name: "Sakuin Team" }],
   openGraph: {
      title: "Sakuin - Solusi Cerdas Keuangan UMKM",
      description: "Catat, analisis, dan kembangkan bisnis UMKM dengan bantuan AI. Coba Sakuin sekarang!",
      url: "https://sakuin-fe.vercel.app",
      siteName: "Sakuin",
      images: [
         {
            url: "https://sakuin-fe.vercel.app/images/logo/icon.png",
            width: 1200,
            height: 630,
            alt: "Sakuin Dashboard",
         },
      ],
      locale: "id_ID",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Sakuin - Solusi Cerdas Keuangan UMKM",
      description: "Kelola keuangan UMKM lebih mudah dengan Sakuin. Dashboard analitik, prediksi cashflow, dan rekomendasi AI.",
      images: ["https://sakuin-fe.vercel.app/images/logo/icon.png"],
      creator: "@lightyearss__",
   },
   icons: {
      icon: "/icon.png",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="id">
         <body>{children}</body>
      </html>
   );
}
