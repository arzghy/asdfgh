import About from "./components/About";
import Blog from "./components/Blog";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Team from "./components/Team";

export default function Home() {
   return (
      <>
         <Navbar />
         <Hero />
         <Features />
         <About />
         <Cta />
         <Pricing />
         <Faq />
         <Team />
         <Blog />
         {/* <Contact /> */}
         {/* <Brands /> */}
         <Footer />
      </>
   );
}
