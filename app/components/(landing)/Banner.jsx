import Link from "next/link";

function Banner({ title = "Blog Grid", subtitle = "There are many variations of passages of Lorem Ipsum available." }) {
   return (
      <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] bg-primary dark:bg-dark">
         <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0"></div>
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
               <div className="w-full px-4">
                  <div className="text-center">
                     <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        {title}
                     </h1>
                     <p className="mb-5 text-base text-white">{subtitle}</p>

                     <ul className="flex items-center justify-center gap-[10px]">
                        <li>
                           <Link href="/" className="flex items-center gap-[10px] text-base font-medium text-dark-6">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link href="/blogs" className="flex items-center gap-[10px] text-base font-medium text-white">
                              <span className="text-dark-6"> / </span>
                              {title}
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