import About from "../components/(landing)/About";
import Blog from "../components/(landing)/Blog";
import Cta from "../components/(landing)/Cta";
import Faq from "../components/(landing)/Faq";
import Features from "../components/(landing)/Features";
import Footer from "../components/(landing)/Footer";
import Hero from "../components/(landing)/Hero";
import Navbar from "../components/(landing)/Navbar";
import Pricing from "../components/(landing)/Pricing";
import Team from "../components/(landing)/Team";

export default function Home() {
   return (
      <>
         <Navbar />
         <Hero />
         <About />
         <Features />
         <Pricing />
         <Faq />
         <Cta />
         <Team />
         <Blog />
         <Footer />
      </>
   );
}
