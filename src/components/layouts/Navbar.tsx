"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
     ArrowRight,
     ChevronDown,
     X,
     Sparkles,
     Images,
     Mail,
} from "lucide-react";
import { Italianno } from "next/font/google";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const NAV_LINKS = [
     { label: "Home", href: "/" },
     { label: "About", href: "#about" },
];

const PAGE_LINKS = [
     {
          label: "Services",
          href: "#services",
          description: "Explore what we offer",
          icon: Sparkles,
     },
     {
          label: "Gallery",
          href: "/gallery",
          description: "See our latest work",
          icon: Images,
     },
     {
          label: "Contact",
          href: "/contact",
          description: "Let's create something",
          icon: Mail,
     },
];

const italianno = Italianno({
     weight: "400",
     subsets: ["latin"],
});

export default function NavBar() {
     const pathname = usePathname();

     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isPagesOpen, setIsPagesOpen] = useState(false);

     const closeMenu = () => {
          setIsMenuOpen(false);
     };

     return (
          <>
               <header className="relative z-50 w-full px-5 py-4 md:px-12 md:py-7 lg:px-20 xl:px-40">
                    <div className="flex w-full items-center justify-between">
                         <Link
                              href="/"
                              onClick={closeMenu}
                              className={`${italianno.className} text-4xl font-bold tracking-tight`}
                         >
                              The Moment Studio
                         </Link>

                         <nav className="hidden items-center gap-10 md:flex">
                              {NAV_LINKS.map((link) => {
                                   const isActive = pathname === link.href;

                                   return (
                                        <Link
                                             key={link.href}
                                             href={link.href}
                                             className={`
                                                  relative py-2
                                                  text-[17px]
                                                  transition-colors
                                                  duration-300
                                                  ${
                                                       isActive
                                                            ? "text-accent"
                                                            : "hover:text-accent"
                                                  }
                                             `}
                                        >
                                             {link.label}

                                             {/* Active line */}
                                             <span
                                                  className={`
                                                       absolute bottom-0 left-0
                                                       h-[1px] bg-accent
                                                       transition-all duration-300
                                                       ${
                                                            isActive
                                                                 ? "w-full"
                                                                 : "w-0"
                                                       }
                                                  `}
                                             />
                                        </Link>
                                   );
                              })}

                              {/* Pages dropdown */}
                              <div
                                   className="relative"
                                   onMouseEnter={() => setIsPagesOpen(true)}
                                   onMouseLeave={() => setIsPagesOpen(false)}
                              >
                                   <button
                                        type="button"
                                        onClick={() =>
                                             setIsPagesOpen((prev) => !prev)
                                        }
                                        className={`
                                             flex cursor-pointer
                                             items-center gap-2
                                             py-2 text-[17px]
                                             transition-colors duration-300
                                             ${
                                                  isPagesOpen
                                                       ? "text-accent"
                                                       : "hover:text-accent"
                                             }
                                        `}
                                   >
                                        Pages
                                        <span
                                             className={`
                                                  flex h-8 w-8
                                                  items-center justify-center
                                                  rounded-full
                                                  border
                                                  transition-all duration-300
                                                  ${
                                                       isPagesOpen
                                                            ? "rotate-180 border-accent bg-accent text-white"
                                                            : "border-white/30"
                                                  }
                                             `}
                                        >
                                             <ChevronDown
                                                  size={16}
                                                  strokeWidth={1.5}
                                             />
                                        </span>
                                   </button>

                                   {/* Dropdown */}
                                   <div
                                        className={`
                                             absolute right-0 top-full
                                             pt-4
                                             transition-all duration-300
                                             ${
                                                  isPagesOpen
                                                       ? "visible translate-y-0 opacity-100"
                                                       : "invisible translate-y-2 opacity-0"
                                             }
                                        `}
                                   >
                                        <div
                                             className="
                                                  w-[280px]
                                                  overflow-hidden
                                                  border border-white/10
                                                  bg-primary
                                                  p-2
                                                  shadow-2xl
                                             "
                                        >
                                             {PAGE_LINKS.map((page) => {
                                                  const Icon = page.icon;
                                                  const isActive =
                                                       pathname === page.href;

                                                  return (
                                                       <Link
                                                            key={page.href}
                                                            href={page.href}
                                                            onClick={() =>
                                                                 setIsPagesOpen(
                                                                      false,
                                                                 )
                                                            }
                                                            className={`
                                                                 group flex
                                                                 items-center gap-4
                                                                 px-4 py-4
                                                                 transition-all
                                                                 duration-300
                                                                 ${
                                                                      isActive
                                                                           ? "bg-white/5"
                                                                           : "hover:bg-white/5"
                                                                 }
                                                            `}
                                                       >
                                                            <span
                                                                 className="
                                                                      flex h-10 w-10
                                                                      shrink-0
                                                                      items-center
                                                                      justify-center
                                                                      rounded-full
                                                                      border
                                                                      border-white/10
                                                                      transition-all
                                                                      duration-300
                                                                      group-hover:border-accent
                                                                      group-hover:bg-accent
                                                                 "
                                                            >
                                                                 <Icon
                                                                      size={18}
                                                                      strokeWidth={
                                                                           1.5
                                                                      }
                                                                      className="
                                                                           transition-colors
                                                                           group-hover:text-white
                                                                      "
                                                                 />
                                                            </span>

                                                            <span className="flex flex-col">
                                                                 <span
                                                                      className={`
                                                                           text-[15px]
                                                                           font-medium
                                                                           ${
                                                                                isActive
                                                                                     ? "text-accent"
                                                                                     : ""
                                                                           }
                                                                      `}
                                                                 >
                                                                      {
                                                                           page.label
                                                                      }
                                                                 </span>

                                                                 <span className="mt-0.5 text-xs text-text">
                                                                      {
                                                                           page.description
                                                                      }
                                                                 </span>
                                                            </span>

                                                            <ArrowRight
                                                                 size={16}
                                                                 className="
                                                                      ml-auto
                                                                      -translate-x-2
                                                                      opacity-0
                                                                      transition-all
                                                                      duration-300
                                                                      group-hover:translate-x-0
                                                                      group-hover:opacity-100
                                                                      group-hover:text-accent
                                                                 "
                                                            />
                                                       </Link>
                                                  );
                                             })}
                                        </div>
                                   </div>
                              </div>

                              <Link
                                   href="/contact"
                                   className="
                                        group relative
                                        flex items-center gap-2
                                        border border-transparent
                                        bg-[#ff3b0a]
                                        px-7 py-3
                                        text-[15px]
                                        font-bold text-white
                                        transition-all duration-300
                                        hover:border-accent
                                        hover:bg-primary
                                        hover:text-accent
                                   "
                              >
                                   <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white transition-opacity duration-300 group-hover:opacity-0" />

                                   <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white transition-opacity duration-300 group-hover:opacity-0" />

                                   <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white transition-opacity duration-300 group-hover:opacity-0" />

                                   <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white transition-opacity duration-300 group-hover:opacity-0" />

                                   <span>Book Now</span>

                                   <ArrowRight
                                        size={19}
                                        strokeWidth={2}
                                        className="
                                             transition-transform
                                             duration-500
                                             group-hover:translate-x-1
                                        "
                                   />
                              </Link>
                         </nav>

                         <button
                              type="button"
                              aria-label={
                                   isMenuOpen
                                        ? "Close navigation"
                                        : "Open navigation"
                              }
                              aria-expanded={isMenuOpen}
                              onClick={() => setIsMenuOpen((prev) => !prev)}
                              className="
                                   relative z-[70]
                                   flex h-11 w-11
                                   cursor-pointer
                                   items-center justify-center
                                   rounded-full
                                   border border-white/10
                                   transition-all duration-300
                                   hover:border-accent
                                   hover:bg-white/5
                                   md:hidden
                              "
                         >
                              {isMenuOpen ? (
                                   <X size={22} strokeWidth={1.5} />
                              ) : (
                                   <CiMenuFries size={22} />
                              )}
                         </button>
                    </div>
               </header>

               <div
                    className={`
                         fixed inset-0 z-[60]
                         md:hidden
                         transition-all duration-500
                         ${
                              isMenuOpen
                                   ? "visible opacity-100"
                                   : "invisible opacity-0"
                         }
                    `}
               >
                    <div
                         className={`
                              absolute inset-0
                              bg-black/60 backdrop-blur-sm
                              transition-opacity duration-500
                         `}
                         onClick={closeMenu}
                    />

                    <div>
                         <X
                              size={22}
                              strokeWidth={1.5}
                              className="absolute"
                              onClick={() => setIsMenuOpen(false)}
                         />
                    </div>

                    <div
                         className={`
                              absolute right-0 top-0
                              flex h-full w-[88%] max-w-[420px]
                              flex-col
                              bg-primary
                              px-7 pb-8 pt-2
                              shadow-2xl
                              transition-transform duration-500
                              ease-[cubic-bezier(0.22,1,0.36,1)]
                              ${
                                   isMenuOpen
                                        ? "translate-x-0"
                                        : "translate-x-full"
                              }
                         `}
                    >
                         <nav className="flex flex-col">
                              {NAV_LINKS.map((link, index) => {
                                   const isActive = pathname === link.href;

                                   return (
                                        <Link
                                             key={link.href}
                                             href={link.href}
                                             onClick={closeMenu}
                                             className="
                                                  group
                                                  flex items-center
                                                  justify-between
                                                  border-b border-white/10
                                                  py-5
                                             "
                                        >
                                             <div className="flex items-center gap-4">
                                                  <span className="text-xs text-text/50">
                                                       0{index + 1}
                                                  </span>

                                                  <span
                                                       className={`
                                                            text-2xl
                                                            transition-colors
                                                            duration-300
                                                            ${
                                                                 isActive
                                                                      ? "text-accent"
                                                                      : "text-secondary group-hover:text-accent"
                                                            }
                                                       `}
                                                  >
                                                       {link.label}
                                                  </span>
                                             </div>

                                             <ArrowRight
                                                  size={20}
                                                  className="
                                                       -translate-x-2
                                                       opacity-0
                                                       transition-all
                                                       duration-300
                                                       group-hover:translate-x-0
                                                       group-hover:opacity-100
                                                       group-hover:text-accent
                                                  "
                                             />
                                        </Link>
                                   );
                              })}

                              <div className="border-b border-white/10">
                                   <div className="py-5">
                                        <span className="text-xs uppercase tracking-[0.25em] text-text/50">
                                             Explore
                                        </span>
                                   </div>

                                   <div className="pb-4">
                                        {PAGE_LINKS.map((page, index) => {
                                             const Icon = page.icon;
                                             const isActive =
                                                  pathname === page.href;

                                             return (
                                                  <Link
                                                       key={page.href}
                                                       href={page.href}
                                                       onClick={closeMenu}
                                                       className="
                                                            group flex
                                                            items-center gap-4
                                                            rounded-lg px-2 py-3
                                                            transition-colors
                                                            hover:bg-white/5
                                                       "
                                                  >
                                                       <span
                                                            className={`
                                                                 flex h-9 w-9
                                                                 items-center
                                                                 justify-center
                                                                 rounded-full
                                                                 border
                                                                 ${
                                                                      isActive
                                                                           ? "border-accent bg-accent text-white"
                                                                           : "border-white/10 text-text group-hover:border-accent group-hover:text-accent"
                                                                 }
                                                            `}
                                                       >
                                                            <Icon
                                                                 size={16}
                                                                 strokeWidth={
                                                                      1.5
                                                                 }
                                                            />
                                                       </span>

                                                       <span className="flex flex-col">
                                                            <span
                                                                 className={`
                                                                      text-sm
                                                                      ${
                                                                           isActive
                                                                                ? "text-accent"
                                                                                : "text-secondary"
                                                                      }
                                                                 `}
                                                            >
                                                                 {page.label}
                                                            </span>

                                                            <span className="text-[11px] text-text/60">
                                                                 {
                                                                      page.description
                                                                 }
                                                            </span>
                                                       </span>

                                                       <ArrowRight
                                                            size={15}
                                                            className="
                                                                 ml-auto
                                                                 text-text/40
                                                                 transition-all
                                                                 group-hover:translate-x-1
                                                                 group-hover:text-accent
                                                            "
                                                       />
                                                  </Link>
                                             );
                                        })}
                                   </div>
                              </div>
                         </nav>

                         <div className="mt-auto">
                              <p className="mb-4 text-sm leading-6 text-text">
                                   Ready to capture your next moment?
                              </p>

                              <Link
                                   href="/contact"
                                   onClick={closeMenu}
                                   className="
                                        group flex w-full
                                        items-center justify-between
                                        bg-[#ff3b0a]
                                        px-5 py-4
                                        font-bold text-white
                                        transition-all duration-300
                                        hover:bg-white
                                        hover:text-primary
                                   "
                              >
                                   <span>Book Now</span>

                                   <ArrowRight
                                        size={20}
                                        className="
                                             transition-transform
                                             duration-300
                                             group-hover:translate-x-1
                                        "
                                   />
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
}
