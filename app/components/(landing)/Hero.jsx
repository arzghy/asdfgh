import Image from "next/image";
import Link from "next/link";

const Hero = () => {
   return (
      <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
               <div className="w-full px-4">
                  <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s">
                     <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                        Bingung ngurus cashflow bisnis UMKM? <b>SAKUIN</b> aja!
                     </h1>
                     <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">Kelola keuangan bisnis lebih mudah dengan pencatatan otomatis, analitik cerdas, dan rekomendasi berbasis AI.</p>
                     <ul className="flex flex-wrap items-center justify-center gap-5">
                        <li>
                           <a
                              href="/dashboard"
                              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                           >
                              Coba Sekarang
                           </a>
                        </li>
                        <li>
                           <Link
                              href="https://github.com/bismillah-rekognisi/sakuin-fe"
                              target="_blank"
                              className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:opacity-70"
                           >
                              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M19.4357 13.9174C20.8659 13.0392 20.8659 10.9608 19.4357 10.0826L9.55234 4.01389C8.05317 3.09335 6.125 4.17205 6.125 5.93128L6.125 18.0688C6.125 19.828 8.05317 20.9067 9.55234 19.9861L19.4357 13.9174Z"
                                    fill="white"
                                 />
                              </svg>
                              Lihat Video Demo
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="w-full px-4">
                  <div className="wow fadeInUp relative z-10 mx-auto max-w-[845px]" data-wow-delay=".25s">
                     <div className="mt-16">
                        <Image src="/images/hero/hero-image.jpg" alt="hero" className="max-w-full mx-auto rounded-t-xl rounded-tr-xl" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                     </div>
                     <div className="absolute -left-9 bottom-0 z-[-1]">
                        <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
                        </svg>
                     </div>
                     <div className="absolute -right-6 -top-6 z-[-1]">
                        <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
