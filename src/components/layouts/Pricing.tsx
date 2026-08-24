import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


const packages = [
     {
          name: "Essential",
          price: "₹25,000",
          description:
               "Perfect for intimate celebrations and smaller photography sessions.",
          features: [
               "1 Professional Photographer",
               "Up to 4 Hours Coverage",
               "150+ Edited Photos",
               "Online Gallery",
               "Basic Color Correction",
          ],
     },
     {
          name: "Signature",
          price: "₹50,000",
          description:
               "Our most popular package for beautifully documenting your special moments.",
          features: [
               "2 Professional Photographers",
               "Up to 8 Hours Coverage",
               "400+ Edited Photos",
               "Premium Online Gallery",
               "Cinematic Highlights",
               "Pre-Wedding Consultation",
          ],
          popular: true,
     },
     {
          name: "Royal",
          price: "₹85,000",
          description:
               "A complete photography experience for grand celebrations and unforgettable stories.",
          features: [
               "2 Photographers + 1 Candid Photographer",
               "Full-Day Coverage",
               "800+ Edited Photos",
               "Premium Photo Album",
               "Cinematic Wedding Film",
               "Pre-Wedding Shoot",
               "Drone Photography",
          ],
     },
];

function Pricing() {
  return (
       <section className="w-full bg-primary2 px-5 py-20 md:px-12 lg:px-20 xl:px-40">
            <div className="mb-14 text-center">
                 <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-accent">
                      Our Packages
                 </p>

                 <h2 className="font-heading text-4xl font-bold md:text-6xl">
                      Choose Your Experience
                 </h2>

                 <p className="mx-auto mt-5 max-w-2xl font-body text-text">
                      Thoughtfully crafted photography packages designed to
                      preserve your most meaningful moments.
                 </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
                 {packages.map((pkg) => (
                      <div
                           key={pkg.name}
                           className={`group relative border p-7 transition-colors duration-500 md:p-9 ${
                                pkg.popular
                                     ? "border-accent bg-[#2a1008]"
                                     : "border-white/10 bg-primary2"
                           } hover:bg-text hover:transition-transform hover:translate-1`}
                      >
                           {pkg.popular && (
                                <span className="absolute right-6 top-6 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                     Most Popular
                                </span>
                           )}

                           <p className="text-sm uppercase tracking-[0.25em] text-accent transition-colors duration-500 group-hover:text-primary">
                                {pkg.name}
                           </p>

                           <h3 className="mt-6 font-heading text-4xl font-bold text-white transition-colors duration-500 group-hover:text-primary">
                                {pkg.price}
                           </h3>

                           <p className="mt-5 min-h-[70px] font-body leading-6 text-text transition-colors duration-500 group-hover:text-primary">
                                {pkg.description}
                           </p>

                           <div className="my-8 h-px bg-white/10 transition-colors duration-500 group-hover:bg-primary/20" />

                           <ul className="space-y-4">
                                {pkg.features.map((feature) => (
                                     <li
                                          key={feature}
                                          className="flex items-center gap-3 text-sm text-white/80 transition-colors duration-500 group-hover:text-primary"
                                     >
                                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                          {feature}
                                     </li>
                                ))}
                           </ul>

                           <Link
                                href="/contact"
                                className="group/button mt-10 flex w-full items-center justify-between border border-accent px-5 py-3 font-bold text-accent transition-all duration-500 hover:bg-accent hover:text-white"
                           >
                                <span>Book This Package</span>

                                <ArrowRight
                                     size={19}
                                     className="transition-transform duration-500 group-hover/button:translate-x-1"
                                />
                           </Link>
                      </div>
                 ))}
            </div>
       </section>
  );
}

export default Pricing