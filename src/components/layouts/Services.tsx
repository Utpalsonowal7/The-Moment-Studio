import React from "react";

const services = [
     {
          title: "Travel Photography",
          description:
               "Exploring the World Through the Lens: Capturing Moments and Memories in Travel.",
     },
     {
          title: "Wedding Photography",
          description:
               "Capturing Your Special Day with Elegance: Timeless Wedding Photography for Lasting Memories.",
     },
     {
          title: "Commercial Photography",
          description:
               "Professional visuals that elevate your brand and captivate your audience instantly.",
     },
     {
          title: "Portrait Photography",
          description:
               "Capturing Unique Personalities Through Artful and Authentic Portrait Photography.",
     },
];


function Services() {
     return (
          <section className="bg-primary w-full  px-5 py-8 md:px-12 lg:px-20 xl:px-40 md:py-8">
               <div className="flex flex-col gap-10">
                    <div className="py-14 border-b border-[#2b1c18]">
                         <h2 className="font-heading font-bold text-4xl md:text-6xl ">
                              Photography <br />
                              Services Tailored for You
                         </h2>
                    </div>

                    <div className="flex flex-col">
                         {services.map((data, index) => (
                              <div
                                   key={data.title}
                                   className="grid grid-cols-1 items-center gap-6 border-b border-[#2b1c18] py-8 md:grid-cols-[100px_450px_1fr] md:gap-12"
                              >
                                   
                                   <div className="flex items-center gap-2">
                                        <span className="text-xl font-extrabold italic">
                                             #
                                        </span>

                                        <span className="text-xl font-bold">
                                             0{index + 1}
                                        </span>
                                   </div>

                                   
                                   <div className="text-xl font-bold text-foreground md:text-4xl">
                                        {data.title}
                                   </div>

                                  
                                   <div className="text-text">
                                        {data.description}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}

export default Services;
