import NavBar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts/Hero";
import Stats from "@/components/layouts/Stats";
import Services from "@/components/layouts/Services";
import Gallery from "@/components/layouts/Gallery";
import Testimonials from "@/components/layouts/Testimonials";
import Pricing from "@/components/layouts/Pricing";
import FAQ from "@/components/layouts/Faq";
import GetInTouch from "@/components/layouts/GIT";
import Footer from "@/components/layouts/Footer";

export default function Home() {
     return (
          <>
               <NavBar />
               <main className="">
                    <Hero />
                    <Stats />
                    <Services />
                    <Gallery />
                    <Testimonials />
                    <Pricing />
                    <FAQ />
                    <GetInTouch />
                    <Footer/>
               </main>
               
          </>
     );
}
