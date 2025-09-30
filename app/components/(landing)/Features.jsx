const Features = () => {
   return (
      <section id="features" className="bg-gray-1 pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                     <span className="block mb-2 text-lg font-semibold text-primary">Features</span>
                     <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Fitur Utama SAKUIN</h2>
                     <p className="text-base text-body-color dark:text-dark-6">Satu aplikasi untuk mencatat, menganalisis, dan mengembangkan bisnis UMKM Anda.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-12 wow fadeInUp group" data-wow-delay=".1s">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"></span>
                        <svg width="37" height="36" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.9104 6.27879C2.71011 6.60041 1.99779 7.83416 2.31941 9.03446L4.75231 18.1016V18.4998C4.75231 19.7424 5.75967 20.7498 7.00231 20.7498H20.0023C21.2449 20.7498 22.2523 19.7424 22.2523 18.4998V9.82408C22.2523 8.59588 21.2682 7.59753 20.0455 7.57448L19.2231 4.50513C18.9015 3.30483 17.6677 2.59252 16.4674 2.91414L3.9104 6.27879ZM20.7523 10.8172V9.82408C20.7523 9.40986 20.4165 9.07408 20.0023 9.07408H7.00231C6.58809 9.07408 6.25231 9.40986 6.25231 9.82408V10.8172H20.7523ZM4.75231 12.3186V9.82408C4.75231 8.58143 5.75967 7.57408 7.00231 7.57408H18.4925L17.7742 4.89336C17.667 4.49326 17.2558 4.25582 16.8557 4.36303L4.29863 7.72768C3.89853 7.83488 3.6611 8.24613 3.7683 8.64623L4.75231 12.3186ZM6.25231 13.6145H20.7523V18.4998C20.7523 18.914 20.4165 19.2498 20.0023 19.2498H7.00231C6.5881 19.2498 6.25231 18.914 6.25231 18.4998V13.6145Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Pencatatan Uang Otomatis</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Catat pemasukan & pengeluaran harian tanpa ribet. Cukup upload struk, semua transaksi langsung terbaca oleh AI dan tersimpan aman.</p>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-12 wow fadeInUp group" data-wow-delay=".15s">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"></span>
                        <svg width="37" height="36" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.60352 3.25C4.36088 3.25 3.35352 4.25736 3.35352 5.5V8.99998C3.35352 10.2426 4.36087 11.25 5.60352 11.25H9.10352C10.3462 11.25 11.3535 10.2426 11.3535 8.99998V5.5C11.3535 4.25736 10.3462 3.25 9.10352 3.25H5.60352ZM4.85352 5.5C4.85352 5.08579 5.1893 4.75 5.60352 4.75H9.10352C9.51773 4.75 9.85352 5.08579 9.85352 5.5V8.99998C9.85352 9.41419 9.51773 9.74998 9.10352 9.74998H5.60352C5.1893 9.74998 4.85352 9.41419 4.85352 8.99998V5.5Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.60352 12.75C4.36088 12.75 3.35352 13.7574 3.35352 15V18.5C3.35352 19.7426 4.36087 20.75 5.60352 20.75H9.10352C10.3462 20.75 11.3535 19.7426 11.3535 18.5V15C11.3535 13.7574 10.3462 12.75 9.10352 12.75H5.60352ZM4.85352 15C4.85352 14.5858 5.1893 14.25 5.60352 14.25H9.10352C9.51773 14.25 9.85352 14.5858 9.85352 15V18.5C9.85352 18.9142 9.51773 19.25 9.10352 19.25H5.60352C5.1893 19.25 4.85352 18.9142 4.85352 18.5V15Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.8535 5.5C12.8535 4.25736 13.8609 3.25 15.1035 3.25H18.6035C19.8462 3.25 20.8535 4.25736 20.8535 5.5V8.99998C20.8535 10.2426 19.8462 11.25 18.6035 11.25H15.1035C13.8609 11.25 12.8535 10.2426 12.8535 8.99998V5.5ZM15.1035 4.75C14.6893 4.75 14.3535 5.08579 14.3535 5.5V8.99998C14.3535 9.41419 14.6893 9.74998 15.1035 9.74998H18.6035C19.0177 9.74998 19.3535 9.41419 19.3535 8.99998V5.5C19.3535 5.08579 19.0177 4.75 18.6035 4.75H15.1035Z"
                              fill="white"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.1035 12.75C13.8609 12.75 12.8535 13.7574 12.8535 15V18.5C12.8535 19.7426 13.8609 20.75 15.1035 20.75H18.6035C19.8462 20.75 20.8535 19.7426 20.8535 18.5V15C20.8535 13.7574 19.8462 12.75 18.6035 12.75H15.1035ZM14.3535 15C14.3535 14.5858 14.6893 14.25 15.1035 14.25H18.6035C19.0177 14.25 19.3535 14.5858 19.3535 15V18.5C19.3535 18.9142 19.0177 19.25 18.6035 19.25H15.1035C14.6893 19.25 14.3535 18.9142 14.3535 18.5V15Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Dashboard Analitik Interaktif</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Lihat laba bersih, tren pemasukan, distribusi pengeluaran, dan insight visual dalam grafik yang jelas.</p>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-12 wow fadeInUp group" data-wow-delay=".2s">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"></span>
                        <svg width="37" height="36" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.77344 5.25C7.77344 4.00736 8.7808 3 10.0234 3H14.0234C15.2661 3 16.2734 4.00736 16.2734 5.25V6H19.2736C20.5163 6 21.5236 7.00736 21.5236 8.25V17.25C21.5236 18.4926 20.5163 19.5 19.2736 19.5H4.77344C3.5308 19.5 2.52344 18.4926 2.52344 17.25V8.25C2.52344 7.00736 3.5308 6 4.77344 6H7.77344V5.25ZM14.7734 5.25V6H9.27344V5.25C9.27344 4.83579 9.60922 4.5 10.0234 4.5H14.0234C14.4377 4.5 14.7734 4.83579 14.7734 5.25ZM4.77344 7.5H19.2736C19.6879 7.5 20.0236 7.83579 20.0236 8.25V10.5H14.605C14.3242 9.90876 13.7215 9.5 13.0234 9.5H11.0234C10.3253 9.5 9.72271 9.90876 9.44185 10.5H4.02344V8.25C4.02344 7.83579 4.35922 7.5 4.77344 7.5ZM9.44185 12H4.02344V17.25C4.02344 17.6642 4.35922 18 4.77344 18H19.2736C19.6879 18 20.0236 17.6642 20.0236 17.25V12H14.605C14.3242 12.5912 13.7215 13 13.0234 13H11.0234C10.3253 13 9.72271 12.5912 9.44185 12Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Target Pencapaian Bisnis</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Pasang target omzet laba lalu pantau progress bar & dapatkan strategi AI untuk mencapainya.</p>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-12 wow fadeInUp group" data-wow-delay=".25s">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45"></span>
                        <svg width="37" height="36" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M3.3777 10.4603C2.9776 10.3531 2.74017 9.94185 2.84737 9.54175C3.3886 7.52186 4.58121 5.737 6.24022 4.464C7.89924 3.19099 9.93195 2.50098 12.0231 2.50098C14.1142 2.50098 16.1469 3.19099 17.806 4.464C19.2116 5.54261 20.2825 6.98868 20.906 8.63384L21.6667 7.28259C21.8699 6.92165 22.3273 6.79378 22.6882 6.99699C23.0491 7.2002 23.177 7.65754 22.9738 8.01848L21.2392 11.0995C21.1416 11.2729 20.9791 11.4003 20.7875 11.4539C20.596 11.5074 20.391 11.4827 20.2176 11.3851L17.1369 9.65037C16.776 9.44713 16.6482 8.98979 16.8514 8.62886C17.0546 8.26794 17.512 8.1401 17.8729 8.34334L19.5481 9.28664C19.0305 7.8511 18.1109 6.58872 16.8928 5.65403C15.4958 4.58203 13.784 4.00098 12.0231 4.00098C10.2621 4.00098 8.55041 4.58203 7.15337 5.65403C5.75632 6.72602 4.75203 8.22904 4.29626 9.92998C4.18906 10.3301 3.7778 10.5675 3.3777 10.4603Z"
                              fill="white"
                           />
                           <path
                              d="M20.6712 13.5393C21.0713 13.6465 21.3087 14.0577 21.2015 14.4578C20.6603 16.4777 19.4677 18.2626 17.8087 19.5356C16.1497 20.8086 14.117 21.4986 12.0258 21.4986C9.93466 21.4986 7.90195 20.8086 6.24294 19.5356C4.83447 18.4548 3.76218 17.0051 3.13924 15.3559L2.37242 16.718C2.16921 17.0789 1.71188 17.2068 1.35094 17.0035C0.989997 16.8003 0.862131 16.343 1.06534 15.9821L2.79997 12.901C2.89756 12.7277 3.06001 12.6002 3.25158 12.5467C3.44316 12.4931 3.64817 12.5179 3.8215 12.6155L6.9022 14.3502C7.26313 14.5534 7.39097 15.0108 7.18773 15.3717C6.9845 15.7326 6.52715 15.8604 6.16623 15.6572L4.50371 14.7211C5.02192 16.1532 5.94026 17.4126 7.15608 18.3455C8.55313 19.4175 10.2649 19.9986 12.0258 19.9986C13.7868 19.9986 15.4985 19.4175 16.8955 18.3455C18.2926 17.2735 19.2969 15.7705 19.7526 14.0696C19.8598 13.6695 20.2711 13.432 20.6712 13.5393Z"
                              fill="white"
                           />
                           <path
                              d="M12.0244 7.80814C12.4386 7.80814 12.7744 8.14393 12.7744 8.55814V8.72712C13.5229 8.91629 14.0767 9.59415 14.0767 10.4014C14.0767 10.8156 13.741 11.1514 13.3267 11.1514C12.9125 11.1514 12.5767 10.8156 12.5767 10.4014C12.5767 10.2761 12.4752 10.1746 12.3499 10.1746H11.9549C11.6882 10.1746 11.4721 10.3907 11.4721 10.6574C11.4721 10.8586 11.5969 11.0387 11.7854 11.1094L12.7902 11.4862C13.5641 11.7765 14.0767 12.5163 14.0767 13.3428C14.0767 14.1988 13.5343 14.9281 12.7744 15.2057V15.4419C12.7744 15.8561 12.4386 16.1919 12.0244 16.1919C11.6102 16.1919 11.2744 15.8561 11.2744 15.4419V15.273C10.526 15.0838 9.97209 14.406 9.97209 13.5988C9.97209 13.1846 10.3079 12.8488 10.7221 12.8488C11.1363 12.8488 11.4721 13.1846 11.4721 13.5988C11.4721 13.724 11.5736 13.8256 11.6989 13.8256H12.0939C12.3606 13.8256 12.5767 13.6094 12.5767 13.3428C12.5767 13.1415 12.4519 12.9614 12.2635 12.8907L11.2586 12.5139C10.4848 12.2237 9.97209 11.4839 9.97209 10.6574C9.97209 9.80135 10.5145 9.07204 11.2744 8.7944V8.55814C11.2744 8.14393 11.6102 7.80814 12.0244 7.80814Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Prediksi Arus Kas</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">AI memprediksi cashflow Anda 1 sampai 3 bulan ke depan, lengkap dengan peringatan risiko keuangan.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
