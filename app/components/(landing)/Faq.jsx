const Faq = () => {
   return (
      <section id="faq" className="relative z-20 overflow-hidden bg-gray-1 pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                     <span className="block mb-2 text-lg font-semibold text-primary">FAQ</span>
                     <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">Ada yang kamu bingung?</h2>
                     <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">Pertanyaan yang Sering Ditanyain tentang SAKUIN.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4 lg:w-1/2">
                  <div className="mb-12 flex lg:mb-[70px]">
                     <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z"
                              fill="white"
                           />
                           <path
                              d="M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <div className="w-full">
                        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Apakah SAKUIN gratis digunakan?</h3>
                        <p className="text-base text-body-color dark:text-dark-6">Ya! Ada paket Starter gratis selamanya untuk mencatat transaksi sederhana.</p>
                     </div>
                  </div>
                  <div className="mb-12 flex lg:mb-[70px]">
                     <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z"
                              fill="white"
                           />
                           <path
                              d="M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <div className="w-full">
                        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Apakah data saya aman?</h3>
                        <p className="text-base text-body-color dark:text-dark-6">Sangat aman. Semua data keuangan UMKM Anda terenkripsi dan hanya Anda yang bisa mengaksesnya.</p>
                     </div>
                  </div>
               </div>
               <div className="w-full px-4 lg:w-1/2">
                  <div className="mb-12 flex lg:mb-[70px]">
                     <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z"
                              fill="white"
                           />
                           <path
                              d="M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <div className="w-full">
                        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Apakah saya bisa ekspor laporan?</h3>
                        <p className="text-base text-body-color dark:text-dark-6">Bisa. Dengan paket Basic & Premium, Anda bisa ekspor laporan ke PDF/Excel.</p>
                     </div>
                  </div>
                  <div className="mb-12 flex lg:mb-[70px]">
                     <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M10.9201 10.4379C10.9201 9.84143 11.4036 9.35792 12 9.35792C12.5965 9.35792 13.08 9.84143 13.08 10.4379C13.08 10.8035 12.8989 11.127 12.6182 11.3236C12.3475 11.5131 12.0204 11.7662 11.7572 12.0841C11.491 12.4055 11.25 12.8426 11.25 13.3841C11.25 13.7983 11.5858 14.1341 12 14.1341C12.4142 14.1341 12.75 13.7983 12.75 13.3841C12.75 13.3091 12.7807 13.1999 12.9125 13.0408C13.0471 12.8782 13.2442 12.7164 13.4785 12.5523C14.143 12.0871 14.58 11.3136 14.58 10.4379C14.58 9.01301 13.4249 7.85792 12 7.85792C10.5751 7.85792 9.42006 9.01301 9.42006 10.4379C9.42006 10.8521 9.75584 11.1879 10.1701 11.1879C10.5843 11.1879 10.9201 10.8521 10.9201 10.4379Z"
                              fill="white"
                           />
                           <path
                              d="M11.9993 14.6421C11.5851 14.6421 11.2493 14.9779 11.2493 15.3921C11.2493 15.8063 11.5851 16.1421 11.9993 16.1421C12.4135 16.1421 12.75 15.8063 12.75 15.3921C12.75 14.9779 12.4135 14.6421 11.9993 14.6421Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <div className="w-full">
                        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Apa bedanya Basic dan Premium?</h3>
                        <p className="text-base text-body-color dark:text-dark-6">Basic fokus ke dashboard dan prediksi singkat, sedangkan Premium menambahkan prediksi lebih panjang dan rekomendasi AI harian.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Faq;
