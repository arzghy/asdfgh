import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
   const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
   };

   return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
               <Link href={`/blogs/${blog.id}`} className="block">
                  <Image 
                     src={blog.thumbnail || "/images/blog/blog-placeholder.jpg"} 
                     alt={blog.title}
                     className="w-full transition group-hover:rotate-6 group-hover:scale-125" 
                     width={370}
                     height={250}
                  />
               </Link>
            </div>
            <div>
               <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                  {formatDate(blog.publishedAt)}
               </span>
               {blog.category && (
                  <span className="inline-block px-4 py-0.5 mb-6 ml-2 text-xs font-medium leading-loose text-center text-primary rounded-[5px] bg-primary/10">
                     {blog.category.name}
                  </span>
               )}
               <h3>
                  <Link 
                     href={`/blogs/${blog.id}`}
                     className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                     {blog.title}
                  </Link>
               </h3>
               <p className="max-w-[370px] text-base text-body-color dark:text-dark-6 line-clamp-3">
                  {blog.content?.replace(/<[^>]*>/g, '').substring(0, 150)}...
               </p>
            </div>
         </div>
      </div>
   );
}

export default BlogCard;