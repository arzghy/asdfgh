import Link from "next/link";

const Pricing = () => {
   return (
      <section id="pricing" className="relative z-20 overflow-hidden pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                     <span className="block mb-2 text-lg font-semibold text-primary">Pricing</span>
                     <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Paket yang Fleksibel</h2>
                     <p className="text-base text-body-color dark:text-dark-6">Pilih paket sesuai kebutuhan bisnis Anda, dari UMKM baru hingga perusahaan berkembang.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
               <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white rounded-xl shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                     <span className="block mb-5 text-xl font-medium text-dark dark:text-white">Starter</span>
                     <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                        <span className="-ml-1 -tracking-[2px]">Gratis</span>
                        <div className="text-base font-normal text-body-color dark:text-dark-6">Cocok untuk UMKM yang baru mulai.</div>
                     </h2>
                     <div className="mb-[50px]">
                        <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Fitur</h5>
                        <div className="flex flex-col gap-[14px]">
                           <p className="text-base text-body-color dark:text-dark-6">✅ Catat transaksi harian</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Dashboard kas sederhana</p>
                           <p className="text-base text-body-color dark:text-dark-6">❌ Tidak ada prediksi AI</p>
                        </div>
                     </div>
                     <Link href="/dashboard" className="inline-block py-3 text-base font-medium text-center text-white transition rounded-md bg-primary px-7 hover:bg-blue-dark">
                        Mulai sekarang
                     </Link>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white rounded-xl shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                     <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">Recommended</p>
                     <span className="block mb-5 text-xl font-medium text-dark dark:text-white">Basic</span>
                     <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                        <span className="text-xl font-medium">Rp </span>
                        <span className="-ml-1 -tracking-[2px]">39.000</span>
                        <span className="text-base font-normal text-body-color dark:text-dark-6">/bulan</span>
                        <div className="text-base font-normal text-body-color dark:text-dark-6">Cocok untuk UMKM berkembang.</div>
                     </h2>
                     <div className="mb-[50px]">
                        <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Fitur</h5>
                        <div className="flex flex-col gap-[14px]">
                           <p className="text-base text-body-color dark:text-dark-6">✅ Semua fitur Starter</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Dashboard analitik interaktif</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Prediksi cashflow 1 bulan</p>
                        </div>
                     </div>
                     <Link href="/dashboard" className="inline-block py-3 text-base font-medium text-center text-white transition rounded-md bg-primary px-7 hover:bg-blue-dark">
                        Berlangganan sekarang
                     </Link>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white rounded-xl shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
                     <span className="block mb-5 text-xl font-medium text-dark dark:text-white">Premium</span>
                     <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                        <span className="text-xl font-medium">Rp </span>
                        <span className="-ml-1 -tracking-[2px]">99.000</span>
                        <span className="text-base font-normal text-body-color dark:text-dark-6">/bulan</span>
                        <div className="text-base font-normal text-body-color dark:text-dark-6">Cocok untuk UMKM yang butuh analitik.</div>
                     </h2>
                     <div className="mb-[50px]">
                        <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">Fitur</h5>
                        <div className="flex flex-col gap-[14px]">
                           <p className="text-base text-body-color dark:text-dark-6">✅ Semua fitur Basic</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Prediksi cashflow 3 bulan</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Rekomendasi AI harian</p>
                           <p className="text-base text-body-color dark:text-dark-6">✅ Laporan keuangan otomatis PDF</p>
                        </div>
                     </div>
                     <Link href="/dashboard" className="inline-block py-3 text-base font-medium text-center text-white transition rounded-md bg-primary px-7 hover:bg-blue-dark">
                        Berlangganan sekarang
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Pricing;
