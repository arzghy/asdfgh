import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";

const Blog = () => {
   return (
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                     <span className="block mb-2 text-lg font-semibold text-primary">Blogs</span>
                     <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Artikel Edukasi Keuangan</h2>
                     <p className="text-base text-body-color dark:text-dark-6">Pelajari tips mengelola keuangan UMKM, strategi bisnis, dan insight terbaru dari SAKUIN.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap -mx-4">
               <BlogCard />
               <BlogCard />
               <BlogCard />
            </div>
         </div>
      </section>
   );
};

export default Blog;
