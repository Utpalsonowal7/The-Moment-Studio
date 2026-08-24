import {
     Roboto,
     Roboto_Slab,
     Plus_Jakarta_Sans,
     Open_Sans,
     DM_Sans
} from "next/font/google";

// Primary — used for links/nav, weight 600
export const roboto = Roboto({
     subsets: ["latin"],
     weight: ["400", "500", "600"],
     variable: "--font-roboto",
     display: "swap",
});

// Secondary — Roboto Slab, weight 400
export const robotoSlab = Roboto_Slab({
     subsets: ["latin"],
     weight: ["400"],
     variable: "--font-roboto-slab",
     display: "swap",
});

// Headings h1–h5
export const plusJakartaSans = Plus_Jakarta_Sans({
     subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
     variable: "--font-plus-jakarta-sans",
     display: "swap",
});

// Body text, h6, buttons
export const openSans = Open_Sans({
     subsets: ["latin"],
     weight: ["400", "600"],
     variable: "--font-open-sans",
     display: "swap",
});

export const dmSans = DM_Sans({
     variable: "--font-dm-sans",
     subsets: ["latin"],
     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
