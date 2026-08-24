import type { Metadata } from "next";
import { headers } from "next/headers";

import { roboto, robotoSlab, plusJakartaSans, openSans, dmSans } from "./fonts";

import "./globals.css";

import { sendVisitorMail } from "@/utils/mail";

export const metadata: Metadata = {
     title: "FotoVibe – Photography & Photographer Portfolio",
     description:
          "Preserving cherished memories through the lens, turning fleeting moments into timeless images.",
};

export default async function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     if (process.env.ENABLE_VISITOR_EMAIL === "true") {
          const requestHeaders = await headers();

          console.log("IP HEADERS:", {
               xForwardedFor: requestHeaders.get("x-forwarded-for"),
               xRealIp: requestHeaders.get("x-real-ip"),
               cfConnectingIp: requestHeaders.get("cf-connecting-ip"),
               forwarded: requestHeaders.get("forwarded"),
          });

          const ip =
               requestHeaders.get("cf-connecting-ip") ||
               requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
               requestHeaders.get("x-real-ip") ||
               "Unknown";

          const userAgent = requestHeaders.get("user-agent") || "Unknown";

          console.log("Visitor IP:", ip);

          sendVisitorMail({
               ip,
               userAgent,
               path: "/",
          }).catch((error) => {
               console.error("Visitor notification failed:", error);
          });
     }
     return (
          <html
               lang="en"
               className={`
                    ${roboto.variable}
                    ${robotoSlab.variable}
                    ${plusJakartaSans.variable}
                    ${openSans.variable}
                    ${dmSans.variable}
               `}
          >
               <body>{children}</body>
          </html>
     );
}
