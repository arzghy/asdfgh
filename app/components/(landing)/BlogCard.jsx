function BlogCard() {
   return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
               <a href="blog-details.html" className="block">
                  <img src="/images/hero/hero-image.jpg" alt="image" className="w-full transition group-hover:rotate-6 group-hover:scale-125" />
               </a>
            </div>
            <div>
               <span className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">Dec 22, 2023</span>
               <h3>
                  <a href="blog-details.html" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                     Meet AutoManage, the best AI management tools
                  </a>
               </h3>
               <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
         </div>
      </div>
   );
}

export default BlogCard;
