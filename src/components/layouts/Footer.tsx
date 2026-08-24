"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Italianno } from "next/font/google";

import { useState, useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";

const navigation = [
     { name: "About", href: "#about" },
     { name: "Gallery", href: "#gallery" },
     { name: "Pricing", href: "#pricing" },
     { name: "Contact Us", href: "/contact" },
];

const services = [
     { name: "Travel", href: "#services" },
     { name: "Commercial", href: "#services" },
     { name: "Portrait", href: "#services" },
     { name: "Wedding", href: "#services" },
];

const socials = [
     { name: "Facebook", icon: BsFacebook, href: "#" },
     { name: "Twitter", icon: BsTwitterX, href: "#" },
     { name: "Instagram", icon: BsInstagram, href: "#" },
     { name: "Youtube", icon: BsYoutube, href: "#" },
];

const italianno = Italianno({
     weight: "400",
     subsets: ["latin"],
});

export default function Footer() {
     const [isSent, setIsSent] = useState<boolean>(false);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();

         setIsSent(true);
    };


     useEffect(() => {
          if (!isSent) return;

          const timer = setTimeout(() => {
               setIsSent(false);
          }, 5000);

          return () => {
               clearTimeout(timer);
          };
     }, [isSent]);


     return (
          <footer className="w-full bg-primary3 px-5 pt-16 text-white md:px-12 md:pt-20 lg:px-20 xl:px-40">
               <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                         <Link
                              href="/"
                              className={`${italianno.className} font-dm text-4xl font-bold tracking-tight`}
                         >
                              The Moment Studio
                         </Link>

                         <p className="mt-6 max-w-xs font-body text-sm leading-6 text-text">
                              Turning fleeting moments into timeless photographs
                              that tell stories, preserve emotions, and create
                              memories for a lifetime.
                         </p>
                    </div>

                    <div>
                         <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                              Navigation
                         </h3>

                         <ul className="space-y-3">
                              {navigation.map((item) => (
                                   <li key={item.name}>
                                        <Link
                                             href={item.href}
                                             className="font-body text-sm text-text transition-colors duration-300 hover:text-white"
                                        >
                                             {item.name}
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    <div>
                         <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                              Services
                         </h3>

                         <ul className="space-y-3">
                              {services.map((item) => (
                                   <li key={item.name}>
                                        <Link
                                             href={item.href}
                                             className="font-body text-sm text-text transition-colors duration-300 hover:text-white"
                                        >
                                             {item.name}
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    <div>
                         <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                              Subscribe
                         </h3>

                         <p className="mb-5 font-body text-sm leading-6 text-text">
                              Subscribe our newsletter & get notified about our
                              latest work.
                         </p>

                         <form
                              className="flex border-b border-white/20 pb-2"
                              onSubmit={handleSubmit}
                         >
                              <input
                                   type="email"
                                   placeholder="Email address..."
                                   className="w-full bg-transparent font-body text-sm text-white outline-none placeholder:text-text"
                                   required
                              />

                              <button
                                   type="submit"
                                   className="cursor-pointer text-sm font-bold text-accent transition-colors hover:text-white"
                              >
                                   {isSent ? <MdCheckCircle /> : "submit"}
                              </button>
                         </form>
                    </div>
               </div>

               <div className="flex flex-col gap-8 border-b border-white/10 py-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                         <div>
                              <p className="mb-1 text-xs uppercase tracking-widest text-accent">
                                   Email
                              </p>
                              <a
                                   href="mailto:info@fotovibe.com"
                                   className="font-body text-sm text-text hover:text-white"
                              >
                                   sonowalu73@gmail.com
                              </a>
                         </div>

                         <div>
                              <p className="mb-1 text-xs uppercase tracking-widest text-accent">
                                   Location
                              </p>
                              <p className="font-body text-sm text-text">
                                   Guwahati, Assam
                              </p>
                         </div>
                    </div>

                    <div>
                         <p className="mb-4 text-xs uppercase tracking-widest text-accent">
                              Social
                         </p>

                         <div className="flex items-center gap-5">
                              {socials.map((social) => {
                                   const Icon = social.icon;

                                   return (
                                        <a
                                             key={social.name}
                                             href={social.href}
                                             aria-label={social.name}
                                             className="text-text transition-colors duration-300 hover:text-accent"
                                        >
                                             <Icon size={17} />
                                        </a>
                                   );
                              })}
                         </div>
                    </div>
               </div>

               {/* Bottom */}
               <div className="flex flex-col gap-3 py-6 text-center text-xs text-text md:flex-row md:items-center md:justify-between md:text-left">
                    <p>
                         © {new Date().getFullYear()} The Moment Studio. All
                         rights reserved.
                    </p>

                    <p>
                         Crafted with passion for{" "}
                         <span className="text-accent">visual stories.</span>
                    </p>
               </div>
          </footer>
     );
}
