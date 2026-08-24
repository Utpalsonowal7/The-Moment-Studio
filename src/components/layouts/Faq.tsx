"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
     {
          question: "What photography services do you offer?",
          answer: "We offer wedding, travel, portrait, commercial, event, and lifestyle photography. We also provide customized photography packages based on your requirements.",
     },
     {
          question: "How far in advance should I book a session?",
          answer: "For weddings and large events, we recommend booking 2–6 months in advance. For portraits and smaller sessions, 1–3 weeks in advance is usually sufficient.",
     },
     {
          question: "What is included in your photography packages?",
          answer: "Our packages can include photography coverage, professionally edited images, online galleries, albums, cinematic films, pre-wedding sessions, and drone photography depending on the package you choose.",
     },
     {
          question: "Do you travel for photography assignments?",
          answer: "Yes. We love traveling for photography assignments and are available for destination weddings, travel shoots, events, and commercial projects across India and internationally.",
     },
     {
          question: "How long does it take to receive the final photos?",
          answer: "You can expect your edited photographs within 2–6 weeks depending on the type and size of the project. Wedding galleries may take a little longer due to the volume of images.",
     },
     {
          question: "Can I customize a photography package?",
          answer: "Absolutely. Every project is different, so we can customize the coverage, number of photographers, hours, albums, videos, and other services according to your needs.",
     },
     {
          question: "Do you provide both candid and traditional photography?",
          answer: "Yes. Our wedding photography services can combine candid storytelling with traditional photography to make sure both the emotions and important family moments are beautifully documented.",
     },
     {
          question: "How do I book a photography session?",
          answer: "Simply contact us with your date, location, and photography requirements. We'll discuss your needs, recommend the right package, and guide you through the booking process.",
     },
];

export default function FAQ() {
     const [openIndex, setOpenIndex] = useState<number | null>(0);

     return (
          <section className="w-full bg-primary3 px-5 py-20 md:px-12 md:py-24 lg:px-20 xl:px-40">
               <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    
                    <div>
                         <p className="mb-5 font-body text-sm uppercase tracking-[0.3em] text-accent">
                              FAQ
                         </p>

                         <h2 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
                              Frequently
                              <br />
                              Asked
                              <br />
                              Questions
                         </h2>

                         <p className="mt-6 max-w-md font-body leading-7 text-text">
                              Everything you need to know about our photography
                              services, packages, bookings, and the experience
                              we provide.
                         </p>
                    </div>

                    <div className="border-t border-white/10">
                         {faqs.map((faq, index) => {
                              const isOpen = openIndex === index;

                              return (
                                   <div
                                        key={faq.question}
                                        className="border-b border-white/10"
                                   >
                                        <button
                                             type="button"
                                             onClick={() =>
                                                  setOpenIndex(
                                                       isOpen ? null : index,
                                                  )
                                             }
                                             className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                                        >
                                             <span className="font-heading text-lg font-semibold md:text-xl">
                                                  {faq.question}
                                             </span>

                                             <Plus
                                                  size={22}
                                                  strokeWidth={1.5}
                                                  className={`shrink-0 text-accent transition-transform duration-500 ${
                                                       isOpen ? "rotate-45" : ""
                                                  }`}
                                             />
                                        </button>

                                        <div
                                             className={`grid transition-all duration-500 ${
                                                  isOpen
                                                       ? "grid-rows-[1fr] pb-6"
                                                       : "grid-rows-[0fr]"
                                             }`}
                                        >
                                             <div className="overflow-hidden">
                                                  <p className="max-w-2xl pr-10 font-body leading-7 text-text">
                                                       {faq.answer}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </section>
     );
}
