import Link from 'next/link';

export default function NotFound() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-dark">
         <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
               Artikel Tidak Ditemukan
            </h2>
            <p className="mb-8 text-body-color dark:text-dark-6">
               Maaf, artikel yang Anda cari tidak dapat ditemukan.
            </p>
            <Link
               href="/blogs"
               className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-blue-dark"
            >
               Kembali ke Daftar Artikel
            </Link>
         </div>
      </div>
   );
}