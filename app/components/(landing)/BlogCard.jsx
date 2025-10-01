import Image from "next/image";
import Link from "next/link";

function BlogCard() {
   return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
               <Link href="/blog/detail-blog" className="block">
                  <Image src="/images/blog/blog-02.jpg" alt="image" className="w-full transition group-hover:rotate-6 group-hover:scale-125" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
               </Link>
            </div>
            <div>
               <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">Dec 22, 2023</span>
               <h3>
                  <Link href="/blog/detail-blog" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                     Meet AutoManage, the best AI management tools
                  </Link>
               </h3>
               <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
         </div>
      </div>
   );
}

export default BlogCard;
