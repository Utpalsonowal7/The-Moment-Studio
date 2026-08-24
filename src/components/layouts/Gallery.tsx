"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const images = Array.from({ length: 4 }, (_, index) => ({
     id: index + 1,
     src: `https://picsum.photos/seed/gallery-${index + 1}/800/1000`,
}));

export default function Gallery() {
     const [selectedImage, setSelectedImage] = useState<number | null>(null);

     return (
          <>
               <section className="w-full bg-primary  py-8  md:py-8 flex flex-col gap-10" id="gallery">
                    <h2 className="text-center font-heading text-4xl font-bold md:text-6xl">
                         Our Gallery
                    </h2>

                    <div className="group/gallery mt-12 grid w-full grid-cols-1 md:grid-cols-4">
                         {images.map((image, index) => (
                              <button
                                   key={image.id}
                                   type="button"
                                   onClick={() => setSelectedImage(index)}
                                   className="
                    group/image
                    relative
                    h-[350px]
                    cursor-pointer
                    overflow-hidden
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:z-10
                    md:h-[500px]
                    lg:h-[650px]
               "
                              >
                                   <Image
                                        src={image.src}
                                        alt={`Gallery image ${image.id}`}
                                        fill
                                        className="
                         object-cover
                         transition-transform
                         duration-700
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         group-hover/image:scale-110
                    "
                                   />

                                   <div
                                        className="
                         absolute
                         inset-0
                         bg-black/30
                         transition-all
                         duration-700
                         group-hover/image:bg-black/10
                    "
                                   />

                                   <div
                                        className="
                         absolute
                         inset-0
                         flex
                         items-center
                         justify-center
                         opacity-0
                         transition-all
                         duration-500
                         group-hover/image:opacity-100
                    "
                                   >
                                        <div
                                             className="
                              flex
                              h-16
                              w-16
                              items-center
                              justify-center
                              rounded-full
                              bg-black/40
                              backdrop-blur-sm
                              transition-transform
                              duration-500
                              group-hover/image:scale-100
                         "
                                        >
                                             <Search
                                                  size={26}
                                                  strokeWidth={1.5}
                                                  className="text-white"
                                             />
                                        </div>
                                   </div>
                              </button>
                         ))}
                    </div>

                    
                         <Link
                              href="/contact"
                              className="group max-w-50 mx-auto relative flex items-center gap-2 border border-transparent bg-[#ff3b0a] px-5 py-3 text-[16px] font-extrabold text-white hover:bg-primary hover:text-accent hover:border-accent"
                         >
                              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />

                              <span>See Full Galary</span>

                              <ArrowRight
                                   size={20}
                                   strokeWidth={2}
                                   className={` transition-transform duration-700 ease-out group-hover:rotate-180`}
                              />
                         </Link>
                   
               </section>

               {selectedImage !== null && (
                    <div
                         className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-5"
                         onClick={() => setSelectedImage(null)}
                    >
                         <button
                              type="button"
                              onClick={() => setSelectedImage(null)}
                              className="absolute right-5 top-5 z-20 text-white cursor-pointer"
                         >
                              <X size={32} />
                         </button>

                         <div
                              className="relative h-[85vh] w-[90vw] max-w-5xl"
                              onClick={(e) => e.stopPropagation()}
                         >
                              <Image
                                   src={images[selectedImage].src}
                                   alt={`Gallery image ${selectedImage + 1}`}
                                   fill
                                   className="object-contain"
                              />
                         </div>
                    </div>
               )}
          </>
     );
}
