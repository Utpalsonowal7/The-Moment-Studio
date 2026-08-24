import { sendVisitorMail } from './../utils/mail';
import "server-only";

export const notifyVisitor = async (headers: Headers) => {
     const forwardedFor = headers.get("x-forwarded-for");

     const ip =
          forwardedFor?.split(",")[0]?.trim() ||
          headers.get("x-real-ip") ||
          "Unknown";

     const userAgent = headers.get("user-agent") || "Unknown";

     const path = headers.get("x-invoke-path") || "/";

     await sendVisitorMail({
          ip,
          userAgent,
          path,
     });
};
