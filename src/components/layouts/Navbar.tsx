"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Italianno } from "next/font/google";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const NAV_LINKS = [
     { label: "Home", href: "/" },
     { label: "About", href: "/about" },
];

const italianno = Italianno({
     weight: "400",
     subsets: ["latin"],
});

export default function NavBar() {
     const pathname = usePathname();

     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

     return (
          <header className="w-full flex justify-between  px-5 py-4 md:px-12 lg:px-20 xl:px-40 md:py-8">
               <div className="w-full flex items-center justify-between">
                    <Link
                         href="/"
                         className={`${italianno.className} font-dm text-4xl font-bold tracking-tight`}
                    >
                         The Moment Studio
                    </Link>

                    <nav className="hidden md:flex items-center gap-12 text-[18px]">
                         {NAV_LINKS.map((link) => {
                              const isActive = pathname === link.href;

                              return (
                                   <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`
                  font-dm
                  transition-all duration-200
                  ${isActive ? "font-normal" : "font-normal hover:font-thin"}
                `}
                                   >
                                        {link.label}
                                   </Link>
                              );
                         })}

                         <button
                              type="button"
                              className="
              flex items-center gap-2
              font-dm font-normal
              transition-all duration-200
              hover:font-thin
            "
                         >
                              Pages
                              <span
                                   className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/30
              "
                              >
                                   <ChevronDown size={18} strokeWidth={1.5} />
                              </span>
                         </button>
                    </nav>

                    <Link
                         href="/contact"
                         className="hidden group relative lg:flex items-center gap-2 border border-transparent bg-[#ff3b0a] px-8 py-3 text-[16px] font-extrabold text-white hover:bg-primary hover:text-accent hover:border-accent"
                    >
                         <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                         <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                         <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                         <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white opacity-100 transition-opacity duration-300 group-hover:opacity-0" />

                         <span>Book Now</span>

                         <ArrowRight
                              size={20}
                              strokeWidth={2}
                              className={`${italianno.className} transition-transform duration-700 ease-out group-hover:rotate-180`}
                         />
                    </Link>
               </div>

               <button
                    onClick={() => {
                         setIsMenuOpen((pre) => !pre);
                    }}
                    className="cursor-pointer lg:hidden text-foreground"
               >
                    {isMenuOpen ? (
                         <X strokeWidth={0.5} size={26} />
                    ) : (
                         <CiMenuFries size={26} />
                    )}
               </button>

               {isMenuOpen && (
                    <>
                         <div
                              className={`fixed inset-0 z-40 bg-[#251d1b]/30 lg:hidden}`}
                              onClick={() => setIsMenuOpen(false)}
                         />

                         
                         <div
                              className={`fixed left-0 top-0 z-50 h-full w-[70%] overflow-y-auto
    bg-primary p-6 shadow-xl lg:hidden`}
                         >
                              <div className="flex flex-col gap-5 font-semibold text-text">
                                   {NAV_LINKS.map((item) => (
                                        <a
                                             key={item.href}
                                             href={item.href}
                                             onClick={() =>
                                                  setIsMenuOpen(false)
                                             }
                                             className="border-l-2 border-transparent pl-3"
                                        >
                                             {item.label}
                                        </a>
                                   ))}
                              </div>
                         </div>
                    </>
               )}
          </header>
     );
}
