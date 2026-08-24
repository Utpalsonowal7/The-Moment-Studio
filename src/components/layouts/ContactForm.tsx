"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const socials = [
     { name: "Facebook", icon: BsFacebook, href: "#" },
     { name: "Instagram", icon: BsInstagram, href: "#" },
     { name: "Twitter", icon: BsTwitterX, href: "#" },
     { name: "Youtube", icon: BsYoutube, href: "#" },
];

const initialForm = {
     name: "",
     email: "",
     phone: "",
     service: "",
     message: "",
};

export default function ContactSection() {
     const [form, setForm] = useState(initialForm);
     const [status, setStatus] = useState<
          "idle" | "sending" | "success" | "error"
     >("idle");
     const [responseMessage, setResponseMessage] = useState("");

     const isSending = status === "sending";

     const handleChange = (
          e: React.ChangeEvent<
               HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          >,
     ) => {
          const { name, value } = e.target;

          setForm((prev) => ({
               ...prev,
               [name]: value,
          }));

          if (status !== "idle") {
               setStatus("idle");
               setResponseMessage("");
          }
     };

     useEffect(() => {
          if (!status) return;

          const timer = setTimeout(() => {
               setResponseMessage("");
          }, 3000);

          return () => clearTimeout(timer);
     }, [status]);

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          if (isSending) return;

          setStatus("sending");
          setResponseMessage("");

          try {
               const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
               });

               const data = await res.json().catch(() => null);

               if (!res.ok) {
                    throw new Error(
                         data?.message ||
                              "Failed to send message. Please try again.",
                    );
               }

               setStatus("success");
               setResponseMessage(
                    data?.message || "Message sent successfully!",
               );
               setForm(initialForm);
          } catch (err) {
               setStatus("error");
               setResponseMessage(
                    err instanceof Error
                         ? err.message
                         : "Something went wrong. Please try again.",
               );
          }
     };

     return (
          <section className="bg-primary px-5 py-20 md:px-12 lg:px-20 xl:px-40">
               <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
                    <div>
                         <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                              Get In Touch
                         </p>

                         <h2 className="font-heading text-4xl font-bold md:text-6xl">
                              Let&apos;s Create
                              <br />
                              Something{" "}
                              <span className="italic text-accent">
                                   Beautiful.
                              </span>
                         </h2>

                         <p className="mt-6 max-w-xl text-text">
                              Have a project in mind? Tell us about it and
                              let&apos;s create something memorable together.
                         </p>

                         <form
                              onSubmit={handleSubmit}
                              className="mt-12 grid gap-7 md:grid-cols-2"
                         >
                              <input
                                   name="name"
                                   type="text"
                                   placeholder="Your Name"
                                   required
                                   value={form.name}
                                   onChange={handleChange}
                                   disabled={isSending}
                                   className="border-b border-white/20 bg-transparent py-4 text-white outline-none placeholder:text-text focus:border-accent disabled:opacity-60"
                              />

                              <input
                                   name="email"
                                   type="email"
                                   placeholder="Email Address"
                                   required
                                   value={form.email}
                                   onChange={handleChange}
                                   disabled={isSending}
                                   className="border-b border-white/20 bg-transparent py-4 text-white outline-none placeholder:text-text focus:border-accent disabled:opacity-60"
                              />

                              <input
                                   name="phone"
                                   type="tel"
                                   placeholder="Phone Number"
                                   value={form.phone}
                                   onChange={handleChange}
                                   disabled={isSending}
                                   className="border-b border-white/20 bg-transparent py-4 text-white outline-none placeholder:text-text focus:border-accent disabled:opacity-60"
                              />

                              <select
                                   name="service"
                                   required
                                   value={form.service}
                                   onChange={handleChange}
                                   disabled={isSending}
                                   className="border-b border-white/20 bg-primary py-4 text-white outline-none focus:border-accent disabled:opacity-60"
                              >
                                   <option value="">Select Service</option>
                                   <option value="Wedding Photography">
                                        Wedding Photography
                                   </option>
                                   <option value="Travel Photography">
                                        Travel Photography
                                   </option>
                                   <option value="Commercial Photography">
                                        Commercial Photography
                                   </option>
                                   <option value="Portrait Photography">
                                        Portrait Photography
                                   </option>
                              </select>

                              <textarea
                                   name="message"
                                   rows={2}
                                   placeholder="Tell us about your project..."
                                   required
                                   value={form.message}
                                   onChange={handleChange}
                                   disabled={isSending}
                                   className="resize-none border-b border-white/20 bg-transparent text-white outline-none placeholder:text-text focus:border-accent disabled:opacity-60 md:col-span-2"
                              />

                              {responseMessage && (
                                   <p
                                        className={`md:col-span-2 ${
                                             status === "success"
                                                  ? "text-green-400"
                                                  : "text-red-400"
                                        }`}
                                   >
                                        {responseMessage}
                                   </p>
                              )}

                              <button
                                   type="submit"
                                   disabled={isSending}
                                   className="group flex w-fit cursor-pointer items-center gap-3 bg-accent px-8 py-4 font-bold text-white transition hover:bg-white hover:text-accent disabled:cursor-not-allowed disabled:opacity-70"
                              >
                                   <span>
                                        {isSending
                                             ? "Sending..."
                                             : status === "success"
                                               ? "Message Sent!"
                                               : "Send Message"}
                                   </span>

                                   {isSending ? (
                                        <Loader2
                                             size={20}
                                             className="animate-spin"
                                        />
                                   ) : (
                                        <ArrowRight
                                             size={20}
                                             className="transition-transform duration-500 group-hover:translate-x-1"
                                        />
                                   )}
                              </button>
                         </form>
                    </div>

                    <div className="flex flex-col justify-between">
                         <div>
                              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                                   Contact Information
                              </p>

                              <h3 className="font-heading text-3xl font-bold md:text-5xl">
                                   Let&apos;s Talk
                              </h3>

                              <p className="mt-5 max-w-lg leading-7 text-text">
                                   Whether it&apos;s your wedding, a creative
                                   project, or a special moment, we would love
                                   to hear from you.
                              </p>

                              <div className="mt-8 space-y-6">
                                   <div className="flex items-center gap-4">
                                        <Mail
                                             className="text-accent"
                                             size={20}
                                        />

                                        <div>
                                             <p className="text-xs uppercase tracking-widest text-accent">
                                                  Email
                                             </p>
                                             <a
                                                  href="mailto:sonowalu73@gmail.com"
                                                  className="text-text hover:text-white"
                                             >
                                                  sonowalu73@gmail.com
                                             </a>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4">
                                        <Phone
                                             className="text-accent"
                                             size={20}
                                        />

                                        <div>
                                             <p className="text-xs uppercase tracking-widest text-accent">
                                                  Phone
                                             </p>
                                             <a
                                                  href="tel:+919876543210"
                                                  className="text-text hover:text-white"
                                             >
                                                  +91 98765 43210
                                             </a>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4">
                                        <MapPin
                                             className="text-accent"
                                             size={20}
                                        />

                                        <div>
                                             <p className="text-xs uppercase tracking-widest text-accent">
                                                  Location
                                             </p>
                                             <p className="text-text">
                                                  Guwahati, Assam, India
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div className="mt-10">
                                   <p className="mb-4 text-xs uppercase tracking-widest text-accent">
                                        Follow Us
                                   </p>

                                   <div className="flex gap-4">
                                        {socials.map((social) => {
                                             const Icon = social.icon;

                                             return (
                                                  <a
                                                       key={social.name}
                                                       href={social.href}
                                                       aria-label={social.name}
                                                       className="flex h-11 w-11 items-center justify-center border border-white/10 text-text transition duration-300 hover:border-accent hover:bg-accent hover:text-white"
                                                  >
                                                       <Icon size={17} />
                                                  </a>
                                             );
                                        })}
                                   </div>
                              </div>
                         </div>

                         <div className="mt-12 h-[300px] overflow-hidden border border-white/10 lg:mt-8">
                              <iframe
                                   title="City Center, Guwahati"
                                   src="https://www.google.com/maps?q=City%20Center%2C%20Guwahati&output=embed"
                                   className="h-full w-full grayscale"
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
}
