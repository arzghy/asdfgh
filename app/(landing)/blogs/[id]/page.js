import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/(landing)/Navbar";
import Footer from "../../../components/(landing)/Footer";
import { API_BASE_URL, API_ENDPOINTS, REVALIDATE_TIME } from "../../../../lib/config";
import { notFound } from "next/navigation";

// Generate static params untuk ISR
export async function generateStaticParams() {
   try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}`);
      
      if (!response.ok) {
         return [];
      }
      
      const blogs = await response.json();
      
      return blogs.data?.map((blog) => ({
         id: blog.id.toString(),
      })) || [];
   } catch (error) {
      console.error('Error generating static params:', error);
      return [];
   }
}

// Fetch blog detail
async function getBlogDetail(id) {
   try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}/${id}`, {
         next: { 
            revalidate: REVALIDATE_TIME.BLOG_DETAIL, // ISR: Revalidate setiap 5 menit
         }
      });
      
      if (!response.ok) {
         return null;
      }
      
      return response.json();
   } catch (error) {
      console.error('Error fetching blog detail:', error);
      return null;
   }
}

// Generate metadata dinamis
export async function generateMetadata({ params }) {
   const blog = await getBlogDetail(params.id);
   
   if (!blog?.data) {
      return {
         title: 'Blog Not Found',
      };
   }
   
   return {
      title: `${blog.data.title} | SAKUIN`,
      description: blog.data.content?.replace(/<[^>]*>/g, '').substring(0, 160),
      openGraph: {
         title: blog.data.title,
         description: blog.data.content?.replace(/<[^>]*>/g, '').substring(0, 160),
         images: blog.data.thumbnail ? [blog.data.thumbnail] : [],
      },
   };
}

export default async function BlogDetailPage({ params }) {
   const blog = await getBlogDetail(params.id);

   if (!blog?.data) {
      notFound();
   }

   const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
   };

   return (
      <>
         <Navbar />
         
         {/* Banner */}
         <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] bg-primary dark:bg-dark">
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0"></div>
            <div className="container mx-auto px-4">
               <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4">
                     <div className="text-center">
                        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                           Detail Artikel
                        </h1>
                        <ul className="flex items-center justify-center gap-[10px]">
                           <li>
                              <Link href="/" className="flex items-center gap-[10px] text-base font-medium text-dark-6">
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link href="/blogs" className="flex items-center gap-[10px] text-base font-medium text-dark-6">
                                 <span className="text-dark-6"> / </span>
                                 Blogs
                              </Link>
                           </li>
                           <li>
                              <span className="flex items-center gap-[10px] text-base font-medium text-white">
                                 <span className="text-dark-6"> / </span>
                                 Detail
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Content */}
         <Suspense fallback={<BlogDetailSkeleton />}>
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
               <div className="container mx-auto px-4">
                  <article className="max-w-4xl mx-auto">
                     {/* Thumbnail */}
                     {blog.data.thumbnail && (
                        <div className="mb-8 overflow-hidden rounded-xl">
                           <Image
                              src={blog.data.thumbnail}
                              alt={blog.data.title}
                              width={800}
                              height={450}
                              className="w-full object-cover"
                              priority
                           />
                        </div>
                     )}

                     {/* Meta Info */}
                     <div className="mb-6 flex flex-wrap items-center gap-4">
                        <span className="inline-block px-4 py-1 text-sm font-medium text-white rounded-full bg-primary">
                           {formatDate(blog.data.publishedAt)}
                        </span>
                        {blog.data.category && (
                           <span className="inline-block px-4 py-1 text-sm font-medium text-primary rounded-full bg-primary/10">
                              {blog.data.category.name}
                           </span>
                        )}
                        <span className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${
                           blog.data.status === 'published' ? 'bg-success-50 text-success-700' :
                           blog.data.status === 'draft' ? 'bg-warning-50 text-warning-700' :
                           'bg-gray-100 text-gray-700'
                        }`}>
                           {blog.data.status}
                        </span>
                     </div>

                     {/* Title */}
                     <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
                        {blog.data.title}
                     </h1>

                     {/* Content */}
                     <div 
                        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-dark dark:prose-headings:text-white prose-p:text-body-color dark:prose-p:text-dark-6"
                        dangerouslySetInnerHTML={{ __html: blog.data.content }}
                     />

                     {/* Back Button */}
                     <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-3">
                        <Link 
                           href="/blogs"
                           className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           Kembali ke daftar artikel
                        </Link>
                     </div>
                  </article>
               </div>
            </section>
         </Suspense>

         <Footer />
      </>
   );
}

// Loading skeleton
function BlogDetailSkeleton() {
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