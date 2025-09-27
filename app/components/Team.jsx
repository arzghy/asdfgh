import Image from "next/image";

const Team = () => {
   return (
      <section id="team" className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
         <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                     <span className="block mb-2 text-lg font-semibold text-primary">Our Team</span>
                     <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">Tim di Balik SAKUIN</h2>
                     <p className="text-base text-body-color dark:text-dark-6">Kami adalah tim dengan misi membantu UMKM bertumbuh.</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
               <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                  <div className="px-5 pt-12 pb-10 mb-8 bg-white group rounded-xl shadow-testimonial dark:bg-dark dark:shadow-none">
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/images/team/badzlan.jpg" alt="team image" className="h-[120px] w-[120px] rounded-full" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                     </div>
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Badzlan Nur Dhabith</h4>
                        <p className="text-sm text-body-color dark:text-dark-6">Project Manager</p>
                     </div>
                  </div>
               </div>
               <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                  <div className="px-5 pt-12 pb-10 mb-8 bg-white group rounded-xl shadow-testimonial dark:bg-dark dark:shadow-none">
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/images/team/faza.jpg" alt="team image" className="h-[120px] w-[120px] rounded-full" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                     </div>
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Faza Izzaturrafi</h4>
                        <p className="text-sm text-body-color dark:text-dark-6">Front-end Developer</p>
                     </div>
                  </div>
               </div>
               <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                  <div className="px-5 pt-12 pb-10 mb-8 bg-white group rounded-xl shadow-testimonial dark:bg-dark dark:shadow-none">
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/images/team/putra.jpg" alt="team image" className="h-[120px] w-[120px] rounded-full" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                     </div>
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Putra Setyonugroho</h4>
                        <p className="text-sm text-body-color dark:text-dark-6">Back-end Developer</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Team;
