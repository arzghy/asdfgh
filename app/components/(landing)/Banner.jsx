import Link from "next/link";

function Banner() {
   return (
      <div class="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] bg-primary dark:bg-dark">
         <div class="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0"></div>
         <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center -mx-4">
               <div class="w-full px-4">
                  <div class="text-center">
                     <h1 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Blog Grid</h1>
                     <p class="mb-5 text-base text-white">There are many variations of passages of Lorem Ipsum available.</p>

                     <ul class="flex items-center justify-center gap-[10px]">
                        <li>
                           <Link href="/" class="flex items-center gap-[10px] text-base font-medium text-dark-6">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog" class="flex items-center gap-[10px] text-base font-medium text-white">
                              <span class="text-dark-6"> / </span>
                              Blog Grid
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Banner;
