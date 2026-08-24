import React from "react";

import Image from "next/image";
import {
     BsLinkedin,
     BsFacebook,
     BsTwitterX,
     BsInstagram,
     BsYoutube,
} from "react-icons/bs";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
     {
          value: "https://www.linkedin.com/in/utpal-sonowal/",
          icon: BsFacebook,
     },
     {
          value: "https://www.linkedin.com/in/utpal-sonowal/",
          icon: BsTwitterX,
     },
     {
          value: "https://www.linkedin.com/in/utpal-sonowal/",
          icon: BsInstagram,
     },
     {
          value: "https://www.linkedin.com/in/utpal-sonowal/",
          icon: BsYoutube,
     },
     {
          value: "https://www.linkedin.com/in/utpal-sonowal/",
          icon: BsLinkedin,
     },
];

export default function Hero() {
     return (
          <section className="overflow-hidden bg-primary text-foreground">
               <div className="inset-0 bg-[radial-gradient(ellipse_at_10%_35%,#561703_0%,#2b0a03_35%,#120403_70%)]" />

               <div className="relative flex flex-col justify-between px-5 py-4 md:flex-row md:px-22 md:py-8 lg:px-28 xl:px-40">
                    <div className="relative z-20 mb-12 md:pl-12  md:w-[60%]">
                         <div className="flex flex-col items-center gap-5 px-5 py-10 md:flex-row md:items-start md:gap-20">
                              <div className="flex items-center justify-center gap-5 md:mt-1.5">
                                   {SOCIAL_LINKS.map((items) => {
                                        const Icon = items.icon;

                                        return (
                                             <a
                                                  key={items.value}
                                                  href={items.value}
                                                  className="cursor-pointer"
                                             >
                                                  <Icon size={18} />
                                             </a>
                                        );
                                   })}
                              </div>

                              <div className=" text-center md:-mr-24 ">
                                   <p className="font-body text-[17px] md:text-[20px]">
                                        Preserving cherished memories through
                                        the lens, turning fleeting moments into
                                        timeless images that capture the beauty
                                        and essence of life.
                                   </p>
                              </div>
                         </div>

                         <div className="md:mt-20">
                              <h2
                                   className="
                                   font-body
                                   font-extrabold
                                   text-5xl
                                  
                                   text-center
                                   tracking-widest
                                   leading-19
                                   md:leading-30
                                   lg:text-8xl
                              "
                              >
                                   <span>Capturing</span>{" "}
                                   <span className="italic font-extrabold md:-mr-100">
                                        {" "}
                                        Life&apos;s Best{" "}
                                   </span>
                                   <span className="italic font-extrabold md:-mr-275">
                                        Moments
                                   </span>
                              </h2>
                         </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center md:w-[50%]">
                         <Image
                              src="/hero.webp"
                              alt="hero-image"
                              width={600}
                              height={700}
                              className="h-auto w-[300px] md:w-[450px] lg:w-[500px]"
                         />

                         <Link
                              href="#gallery"
                              className="absolute z-50 flex h-32 w-32 items-center justify-center md:right-[10%] md:top-[65%]"
                         >
                              <div className="pointer-events-none absolute inset-0 animate-slow-spin">
                                   <svg
                                        viewBox="0 0 100 100"
                                        className="h-full w-full"
                                   >
                                        <defs>
                                             <path
                                                  id="circlePath"
                                                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                             />
                                        </defs>

                                        <text
                                             fill="currentColor"
                                             className="text-[10px] uppercase"
                                        >
                                             <textPath
                                                  href="#circlePath"
                                                  className="tracking-widest"
                                             >
                                                  SEE OUR LATEST WORK • SEE OUR
                                                  LATEST WORK •
                                             </textPath>
                                        </text>
                                   </svg>
                              </div>

                              <ArrowDown
                                   className="relative z-10 h-6 w-6"
                                   strokeWidth={1}
                              />
                         </Link>
                    </div>
               </div>
          </section>
     );
}
