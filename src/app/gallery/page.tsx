"use client";

import FAQ from "@/components/layouts/Faq";
import Footer from "@/components/layouts/Footer";
import GetInTouch from "@/components/layouts/GIT";
import NavBar from "@/components/layouts/Navbar";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = Array.from({ length: 20 }, (_, index) => ({
     id: index + 1,
     src: `https://picsum.photos/seed/gallery-${index + 1}/800/1000`,
}));

export default function ContactPage() {
     const [selectedImage, setSelectedImage] = useState<number | null>(null);

     const closeLightbox = () => {
          setSelectedImage(null);
     };

     const showPrevious = () => {
          if (selectedImage === null) return;

          setSelectedImage(
               selectedImage === 0 ? images.length - 1 : selectedImage - 1,
          );
     };

     const showNext = () => {
          if (selectedImage === null) return;

          setSelectedImage(
               selectedImage === images.length - 1 ? 0 : selectedImage + 1,
          );
     };

     useEffect(() => {
          if (selectedImage === null) return;

          const handleKeyDown = (e: KeyboardEvent) => {
               if (e.key === "Escape") closeLightbox();
               if (e.key === "ArrowLeft") showPrevious();
               if (e.key === "ArrowRight") showNext();
          };

          document.addEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "hidden";

          return () => {
               document.removeEventListener("keydown", handleKeyDown);
               document.body.style.overflow = "";
          };
     }, [selectedImage]);

     return (
          <>
               <NavBar />

               <main>
                    <section
                         id="gallery"
                         className="w-full bg-primary px-4 py-16 md:px-8 md:py-24"
                    >
                         {/* Heading */}
                         <div className="mx-auto mb-14 max-w-3xl text-center">
                              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
                                   Moments
                              </p>

                              <h2 className="font-heading text-4xl font-bold tracking-tight text-secondary md:text-6xl">
                                   Our Gallery
                              </h2>

                              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-text md:text-base">
                                   A collection of moments, experiences and
                                   memories captured along the way.
                              </p>
                         </div>

                         {/* Gallery */}
                         <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              {images.map((image, index) => {
                                   const heightClasses = [
                                        "h-[420px] lg:h-[560px]",
                                        "h-[350px] lg:h-[440px]",
                                        "h-[470px] lg:h-[620px]",
                                        "h-[380px] lg:h-[480px]",
                                   ];

                                   return (
                                        <button
                                             key={image.id}
                                             type="button"
                                             onClick={() =>
                                                  setSelectedImage(index)
                                             }
                                             className={`
                                                  group relative w-full
                                                  ${heightClasses[index % 4]}
                                                  cursor-pointer overflow-hidden
                                                  bg-white/5
                                                  outline-none
                                                  transition-all duration-500
                                                  hover:z-10
                                                  focus-visible:ring-2
                                                  focus-visible:ring-accent
                                             `}
                                        >
                                             {/* Image */}
                                             <Image
                                                  src={image.src}
                                                  alt={`Gallery image ${image.id}`}
                                                  fill
                                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                  className="
                                                       object-cover
                                                       transition-transform
                                                       duration-700
                                                       ease-[cubic-bezier(0.22,1,0.36,1)]
                                                       group-hover:scale-110
                                                  "
                                             />

                                             {/* Dark gradient */}
                                             <div
                                                  className="
                                                       absolute inset-0
                                                       bg-gradient-to-t
                                                       from-black/70
                                                       via-black/10
                                                       to-transparent
                                                       opacity-70
                                                       transition-opacity
                                                       duration-500
                                                       group-hover:opacity-100
                                                  "
                                             />

                                             {/* Hover overlay */}
                                             <div
                                                  className="
                                                       absolute inset-0
                                                       bg-black/10
                                                       opacity-0
                                                       transition-opacity
                                                       duration-500
                                                       group-hover:opacity-100
                                                  "
                                             />

                                             {/* Image number */}
                                             <span
                                                  className="
                                                       absolute bottom-5 left-5
                                                       text-xs font-medium
                                                       tracking-[0.2em]
                                                       text-white/80
                                                       opacity-0
                                                       translate-y-3
                                                       transition-all
                                                       duration-500
                                                       group-hover:translate-y-0
                                                       group-hover:opacity-100
                                                  "
                                             >
                                                  {String(image.id).padStart(
                                                       2,
                                                       "0",
                                                  )}
                                             </span>

                                             {/* Search button */}
                                             <span
                                                  className="
                                                       absolute left-1/2 top-1/2
                                                       flex h-16 w-16
                                                       -translate-x-1/2
                                                       -translate-y-1/2
                                                       scale-75
                                                       items-center
                                                       justify-center
                                                       rounded-full
                                                       border border-white/20
                                                       bg-black/30
                                                       backdrop-blur-md
                                                       opacity-0
                                                       transition-all
                                                       duration-500
                                                       group-hover:scale-100
                                                       group-hover:opacity-100
                                                  "
                                             >
                                                  <Search
                                                       size={24}
                                                       strokeWidth={1.5}
                                                       className="text-white"
                                                  />
                                             </span>
                                        </button>
                                   );
                              })}
                         </div>
                    </section>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                         <div
                              className="
                                   fixed inset-0 z-[9999]
                                   flex items-center justify-center
                                   bg-black/95
                                   px-4 py-8
                                   backdrop-blur-sm
                              "
                              onClick={closeLightbox}
                         >
                              {/* Close */}
                              <button
                                   type="button"
                                   onClick={closeLightbox}
                                   className="
                                        absolute right-5 top-5 z-30
                                        flex h-11 w-11
                                        cursor-pointer
                                        items-center justify-center
                                        rounded-full
                                        border border-white/10
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        hover:bg-white/20
                                   "
                                   aria-label="Close gallery"
                              >
                                   <X size={22} />
                              </button>

                              {/* Counter */}
                              <div
                                   className="
                                        absolute left-5 top-6 z-30
                                        text-sm font-medium
                                        tracking-widest
                                        text-white/60
                                   "
                              >
                                   {String(selectedImage + 1).padStart(2, "0")}
                                   {" / "}
                                   {String(images.length).padStart(2, "0")}
                              </div>

                              {/* Previous */}
                              <button
                                   type="button"
                                   onClick={(e) => {
                                        e.stopPropagation();
                                        showPrevious();
                                   }}
                                   className="
                                        absolute left-4 top-1/2 z-30
                                        flex h-12 w-12
                                        -translate-y-1/2
                                        cursor-pointer
                                        items-center justify-center
                                        rounded-full
                                        border border-white/10
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        hover:bg-white/20
                                        md:left-8
                                   "
                                   aria-label="Previous image"
                              >
                                   <ChevronLeft size={24} />
                              </button>

                              {/* Image */}
                              <div
                                   className="
                                        relative
                                        h-[80vh]
                                        w-[85vw]
                                        max-w-6xl
                                   "
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <Image
                                        src={images[selectedImage].src}
                                        alt={`Gallery image ${
                                             selectedImage + 1
                                        }`}
                                        fill
                                        priority
                                        sizes="90vw"
                                        className="
                                             object-contain
                                             animate-in
                                             fade-in
                                             duration-300
                                        "
                                   />
                              </div>

                              {/* Next */}
                              <button
                                   type="button"
                                   onClick={(e) => {
                                        e.stopPropagation();
                                        showNext();
                                   }}
                                   className="
                                        absolute right-4 top-1/2 z-30
                                        flex h-12 w-12
                                        -translate-y-1/2
                                        cursor-pointer
                                        items-center justify-center
                                        rounded-full
                                        border border-white/10
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        hover:bg-white/20
                                        md:right-8
                                   "
                                   aria-label="Next image"
                              >
                                   <ChevronRight size={24} />
                              </button>
                         </div>
                    )}

                    <FAQ />
                    <GetInTouch />
               </main>

               <Footer />
          </>
     );
}
