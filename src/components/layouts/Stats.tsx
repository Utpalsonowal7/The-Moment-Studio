import React from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Counter from "@/utils/Counter";

const STATS = [
     {
          number: 10,
          suffix: "+",
          label: "Years of Experience",
     },
     {
          number: 100,
          suffix: "k+",
          label: "Across 15+ Countries",
     },
     {
          number: 500,
          suffix: "+",
          label: "Projects Completed",
     },
     {
          number: 300,
          suffix: "+",
          label: "Testimonials from Clients",
     },
];

function Stats() {
     return (
          <section className="bg-primary2 w-full  px-5 py-8 md:px-12 lg:px-20 xl:px-40 md:py-8" id="about">
               <div className="flex flex-col md:flex-row items-center justify-between gap-13">
                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                         <Image
                              src="/hero2.webp"
                              alt="hero2"
                              width={150}
                              height={150}
                              className="w-[120px] md:w-[500px]"
                         />

                         <Image
                              src="/hero1.webp"
                              alt="hero1"
                              width={250}
                              height={200}
                              className="w-[300px] md:w-[800px]"
                         />
                    </div>
                    <div className="flex flex-col gap-9">
                         <div>
                              <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-[1.5px]">
                                   Where Art Meets Emotion in Every Shot
                              </h2>
                         </div>
                         <div>
                              <h4 className="text-text font-body md:text-[18px]">
                                   At our photography studio, we believe in the
                                   transformative power of images. Where art
                                   meets emotion, we capture the essence of
                                   every moment, creating lasting memories that
                                   resonate deeply.
                                   <br></br>
                                   <br></br>
                                   At our photography studio, we believe in the
                                   transformative power of images. Where art
                                   meets emotion, we capture the essence of
                                   every moment, creating lasting memories that
                                   resonate deeply.
                              </h4>
                         </div>
                         <div>
                              <Link
                                   href="/contact"
                                   className="group max-w-[200px] relative flex items-center gap-2 border border-transparent bg-[#ff3b0a] px-8 py-3 text-[16px] font-extrabold text-white hover:bg-primary hover:text-accent hover:border-accent"
                              >
                                   <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                                   <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                                   <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                                   <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />

                                   <span>Book Us Now</span>

                                   <ArrowRight
                                        size={20}
                                        strokeWidth={2}
                                        className={` transition-transform duration-700 ease-out group-hover:rotate-180`}
                                   />
                              </Link>
                         </div>
                    </div>
               </div>

               <div className="flex flex-col md:flex-row gap-5 mt-20 md:mt-30 items-center justify-center">
                    {STATS.map((data) => (
                         <div key={data.label}>
                              <div className="w-80 h-30 md:h-40 rounded-full bg-[#060606] flex flex-col gap-3 items-center justify-center text-[#fefefe]">
                                   <h4 className="text-3xl font-extrabold md:text-4xl">
                                        <Counter value={data.number} suffix={data.suffix} />
                                   </h4>
                                   <p className="text-[#9c9c9c]">
                                        {data.label}
                                   </p>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
}

export default Stats;
