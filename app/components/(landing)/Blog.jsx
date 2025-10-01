import BlogCard from "./BlogCard";
import Link from "next/link";
import { API_BASE_URL, API_ENDPOINTS } from "../../../lib/config";

async function getLatestBlogs() {
   try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}`, {
         next: { revalidate: 300 }, // ISR: 5 menit
      });
      
      if (!response.ok) {
         return { data: [] };
      }
      
      const blogs = await response.json();
      return { data: blogs.data?.slice(0, 3) || [] }; // Ambil 3 terbaru
   } catch (error) {
      console.error('Error fetching latest blogs:', error);
      return { data: [] };
   }
}

const Blog = async () => {
   const blogs = await getLatestBlogs();
   const latestBlogs = blogs.data;

   return (
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                     <span className="block mb-2 text-lg font-semibold text-primary">Blogs</span>
                     <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        Artikel Edukasi Keuangan
                     </h2>
                     <p className="text-base text-body-color dark:text-dark-6">
                        Pelajari tips mengelola keuangan UMKM, strategi bisnis, dan insight terbaru dari SAKUIN.
                     </p>
                  </div>
               </div>
            </div>

            {latestBlogs.length === 0 ? (
               <div className="flex items-center justify-center min-h-[300px]">
                  <p className="text-body-color dark:text-dark-6">Belum ada artikel tersedia</p>
               </div>
            ) : (
               <>
                  <div className="flex flex-wrap -mx-4">
                     {latestBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                     ))}
                  </div>
                  
                  <div className="text-center mt-12">
                     <Link
                        href="/blogs"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-blue-dark"
                     >
                        Lihat Semua Artikel
                     </Link>
                  </div>
               </>
            )}
         </div>
      </section>
   );
};

export default Blog;