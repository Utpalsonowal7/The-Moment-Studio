import ContactForm from "@/components/layouts/ContactForm";
import FAQ from "@/components/layouts/Faq";
import Footer from "@/components/layouts/Footer";
import GetInTouch from "@/components/layouts/GIT";
import NavBar from "@/components/layouts/Navbar";


export default function ContactPage() {
     return (
          <>
               <NavBar />

               <main>
                    <ContactForm />
                    <FAQ />
                    <GetInTouch />
               </main>

               <Footer />
          </>
     );
}
