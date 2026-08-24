import type { Metadata } from "next";
import { roboto, robotoSlab, plusJakartaSans, openSans, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
     title: "FotoVibe – Photography & Photographer Portfolio",
     description:
          "Preserving cherished memories through the lens, turning fleeting moments into timeless images.",
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html
               lang="en"
               className={`${roboto.variable} ${robotoSlab.variable} ${plusJakartaSans.variable} ${openSans.variable} ${dmSans.variable}`}
          >
               <body>{children}</body>
          </html>
     );
}
