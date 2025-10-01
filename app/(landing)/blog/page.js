import Banner from "@/app/components/(landing)/Banner";
import BlogList from "@/app/components/(landing)/BlogList";
import Footer from "@/app/components/(landing)/Footer";
import Navbar from "@/app/components/(landing)/Navbar";

export default function page() {
   return (
      <>
         <Navbar />
         <Banner />
         <BlogList />
         <Footer />
      </>
   );
}
