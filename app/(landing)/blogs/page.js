import { Suspense } from "react";
import Banner from "../../components/(landing)/Banner";
import BlogList from "../../components/(landing)/BlogList";
import Footer from "../../components/(landing)/Footer";
import Navbar from "../../components/(landing)/Navbar";
import { API_BASE_URL, API_ENDPOINTS, REVALIDATE_TIME } from "../../../lib/config";

// Metadata
export const metadata = {
   title: "Blog - Artikel Edukasi Keuangan UMKM",
   description: "Pelajari tips mengelola keuangan UMKM, strategi bisnis, dan insight terbaru dari SAKUIN.",
};

// Server Component dengan ISR
async function getBlogs() {
   try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}`, {
         next: { 
            revalidate: REVALIDATE_TIME.BLOGS, // ISR: Revalidate setiap 5 menit
         }
      });
      
      if (!response.ok) {
         throw new Error('Failed to fetch blogs');
      }
      
      return response.json();
   } catch (error) {
      console.error('Error fetching blogs:', error);
      return { data: [] };
   }
}

export default async function BlogsPage() {
   const blogs = await getBlogs();

   return (
      <>
         <Navbar />
         <Banner title="Blog" subtitle="Artikel Edukasi Keuangan UMKM" />
         <Suspense fallback={<BlogListSkeleton />}>
            <BlogList initialBlogs={blogs} />
         </Suspense>
         <Footer />
      </>
   );
}

// Loading skeleton
function BlogListSkeleton() {
   return (
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-center min-h-[400px]">
               <div className="flex flex-col items-center gap-4">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                  <p className="text-body-color dark:text-dark-6">Memuat artikel...</p>
               </div>
            </div>
         </div>
      </section>
   );
}
