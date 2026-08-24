import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
     return (
          <section className="w-full bg-primary2 px-5 py-20 text-center md:py-28 lg:py-32">
               <p className="mb-5 font-body text-sm uppercase tracking-[0.3em] text-accent">
                    Get in Touch
               </p>

               <h2 className="font-heading text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
                    Don&apos;t Wait!
               </h2>

               <p className="mx-auto mt-6 max-w-3xl font-heading text-3xl font-semibold leading-tight md:text-5xl">
                    Schedule Your Photography
                    <br />
                    Experience Today!
               </p>

               <Link
                    href="/contact"
                    className="group relative mx-auto mt-10 flex w-fit items-center gap-3 bg-accent px-8 py-4 font-body text-base font-bold text-white transition-all duration-500 hover:bg-white hover:text-primary"
               >
                    <span>Contact Us</span>

                    <ArrowRight
                         size={20}
                         strokeWidth={2}
                         className="transition-transform duration-500 group-hover:translate-x-2"
                    />

                    <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white" />
                    <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white" />
                    <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white" />
               </Link>
          </section>
     );
}
