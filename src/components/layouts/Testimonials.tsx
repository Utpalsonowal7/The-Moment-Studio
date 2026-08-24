"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
     {
          name: "Sophia Williams",
          role: "Wedding Client",
          rating: 5,
          message: "The entire experience was incredible. Every photograph captured the emotion and beauty of our wedding day perfectly.",
     },
     {
          name: "Daniel Anderson",
          role: "Travel Client",
          rating: 5,
          message: "Absolutely stunning work. The photos captured the atmosphere and little details of our journey beautifully.",
     },
     {
          name: "Emily Johnson",
          role: "Portrait Client",
          rating: 5,
          message: "The team made me feel completely comfortable in front of the camera. The final portraits were beautiful.",
     },
     {
          name: "Michael Carter",
          role: "Commercial Client",
          rating: 5,
          message: "Professional from start to finish. The photographs elevated our brand and gave us exactly what we needed.",
     },
     {
          name: "Olivia Martinez",
          role: "Event Client",
          rating: 5,
          message: "They captured every important moment without making anything feel staged. Absolutely loved the results.",
     },
     {
          name: "James Wilson",
          role: "Wedding Client",
          rating: 4,
          message: "From our first meeting to the final gallery, everything was handled beautifully. The photographs are timeless.",
     },
     {
          name: "Isabella Brown",
          role: "Portrait Client",
          rating: 5,
          message: "I absolutely loved the results. The photographer understood exactly what I wanted and made the session special.",
     },
     {
          name: "Ethan Davis",
          role: "Commercial Client",
          rating: 5,
          message: "The quality and creativity were outstanding. Our new product images look professional and polished.",
     },
     {
          name: "Charlotte Miller",
          role: "Travel Client",
          rating: 5,
          message: "Every image tells a story. They captured the feeling of our trip so beautifully.",
     },
     {
          name: "Alexander Moore",
          role: "Event Client",
          rating: 5,
          message: "Amazing attention to detail and a very professional team. They captured moments we didn't even realize were happening.",
     },
];

function Testimonials() {
     const [current, setCurrent] = useState(0);
     const [text, setText] = useState("");

     const testimonial = testimonials[current];

    useEffect(() => {
         let index = 0;

         setText("");

         const typing = setInterval(() => {
              index++;

              setText(testimonial.message.slice(0, index));

              if (index >= testimonial.message.length) {
                   clearInterval(typing);
              }
         }, 35);

         return () => clearInterval(typing);
    }, [current, testimonial.message]);


     useEffect(() => {
          const timer = setTimeout(() => {
               setCurrent((prev) => (prev + 1) % testimonials.length);
          }, 7000);

          return () => clearTimeout(timer);
     }, [current]);

     return (
          <section className="w-full bg-primary2 px-5 py-16 text-white md:px-12 md:py-24 lg:px-20 xl:px-40">
               <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                   
                    <div>
                         <p className="mb-5 font-body text-sm uppercase tracking-[0.3em] text-accent">
                              Testimonials
                         </p>

                         <h2 className="font-heading text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
                              What Our
                              <br />
                              Clients Are Saying
                         </h2>
                    </div>

                   
                    <div className="min-h-[300px] border border-white/10 p-8 md:p-12">
                         {/* Stars */}
                         <div className="mb-8 flex gap-1">
                              {Array.from({ length: 5 }).map((_, index) => (
                                   <Star
                                        key={index}
                                        size={18}
                                        strokeWidth={1.5}
                                        className={
                                             index < testimonial.rating
                                                  ? "fill-accent text-accent"
                                                  : "text-white/20"
                                        }
                                   />
                              ))}
                         </div>

                         
                         <p className="min-h-[120px] font-body text-xl leading-8 text-text md:text-2xl">
                              “{text}
                              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent" />
                              ”
                         </p>

                
                         <div className="mt-10">
                              <h3 className="font-heading text-lg font-semibold">
                                   {testimonial.name}
                              </h3>

                              <p className="mt-1 text-sm text-text">
                                   {testimonial.role}
                              </p>
                         </div>

                         <div className="mt-8 flex gap-2">
                              {testimonials.map((_, index) => (
                                   <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`h-[2px] transition-all duration-500 ${
                                             index === current
                                                  ? "w-10 bg-accent"
                                                  : "w-4 bg-white/20"
                                        }`}
                                   />
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Testimonials;
