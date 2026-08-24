import { BrevoClient, BrevoError } from "@getbrevo/brevo";
import { ContactForm } from "@/schema/contact";

const key = process.env.BREVO_API_KEY;

if (!key) {
     throw new Error("BREVO_API_KEY is missing");
}

const client = new BrevoClient({
     apiKey: key,
});

const escapeHtml = (str: string) =>
     str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");

export const sendMail = async (options: ContactForm) => {
     try {
          await client.transactionalEmails.sendTransacEmail({
               subject: `New Inquiry: ${options.service} — ${options.name}`,
               htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:40px 20px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:#111827;padding:24px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;">New Contact Form Submission</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px;color:#4b5563;font-size:15px;line-height:1.6;">
                You have received a new message from your portfolio contact form.
              </p>
              <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#f9fafb;">
                  <td style="width:150px;font-weight:bold;color:#111827;">Name</td>
                  <td style="color:#374151;">${escapeHtml(options.name)}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;color:#111827;">Email</td>
                  <td style="color:#374151;">${escapeHtml(options.email)}</td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="font-weight:bold;color:#111827;">Service</td>
                  <td style="color:#374151;">${escapeHtml(options.service)}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;color:#111827;">Phone</td>
                  <td style="color:#374151;">${options.phone ? escapeHtml(options.phone) : "Not Provided"}</td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="font-weight:bold;color:#111827;vertical-align:top;">Message</td>
                  <td style="color:#374151;white-space:pre-wrap;line-height:1.7;">${escapeHtml(options.message)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px;text-align:center;background:#f9fafb;color:#6b7280;font-size:13px;">
              This email was automatically generated from your portfolio contact form.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
               sender: { name: options.name, email: "utpal@utpal.utpx.in" },
               to: [{ email: "sonowalu73@gmail.com", name: "Utpal Sonowal" }],
               replyTo: { email: options.email, name: options.name },
          });
     } catch (err) {
          if (err instanceof BrevoError) {
               console.error(`API error ${err.statusCode}:`, err.message);
          } else {
               console.error("Failed to Send mail", err);
          }
          throw err;
     }
};

type VisitorMailOptions = {
     ip: string;
     userAgent: string;
     path: string;
};

export const sendVisitorMail = async (options: VisitorMailOptions) => {
     try {
          await client.transactionalEmails.sendTransacEmail({
               subject: `New Visitor — ${options.ip}`,

               htmlContent: `
<!DOCTYPE html>
<html>
<head>
     <meta charset="UTF-8" />
     <title>New Website Visitor</title>
</head>

<body style="margin:0;padding:40px 20px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">

     <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
               <td align="center">

                    <table
                         width="650"
                         cellpadding="0"
                         cellspacing="0"
                         style="
                              background:#ffffff;
                              border-radius:12px;
                              overflow:hidden;
                              border:1px solid #e5e7eb;
                         "
                    >

                         <!-- Header -->
                         <tr>
                              <td
                                   style="
                                        background:#111827;
                                        padding:24px;
                                        text-align:center;
                                   "
                              >
                                   <h1
                                        style="
                                             margin:0;
                                             color:#ffffff;
                                             font-size:24px;
                                        "
                                   >
                                        New Website Visitor
                                   </h1>
                              </td>
                         </tr>

                         <!-- Content -->
                         <tr>
                              <td style="padding:32px;">

                                   <p
                                        style="
                                             margin:0 0 24px;
                                             color:#4b5563;
                                             font-size:15px;
                                             line-height:1.6;
                                        "
                                   >
                                        Someone just visited your website.
                                   </p>

                                   <table
                                        width="100%"
                                        cellpadding="12"
                                        cellspacing="0"
                                        style="border-collapse:collapse;"
                                   >

                                        <!-- IP -->
                                        <tr style="background:#f9fafb;">
                                             <td
                                                  style="
                                                       width:150px;
                                                       font-weight:bold;
                                                       color:#111827;
                                                  "
                                             >
                                                  IP Address
                                             </td>

                                             <td style="color:#374151;">
                                                  ${escapeHtml(options.ip)}
                                             </td>
                                        </tr>

                                        <!-- Page -->
                                        <tr>
                                             <td
                                                  style="
                                                       font-weight:bold;
                                                       color:#111827;
                                                  "
                                             >
                                                  Page
                                             </td>

                                             <td style="color:#374151;">
                                                  ${escapeHtml(
                                                       options.path || "/",
                                                  )}
                                             </td>
                                        </tr>

                                        <!-- User Agent -->
                                        <tr style="background:#f9fafb;">
                                             <td
                                                  style="
                                                       font-weight:bold;
                                                       color:#111827;
                                                       vertical-align:top;
                                                  "
                                             >
                                                  User Agent
                                             </td>

                                             <td
                                                  style="
                                                       color:#374151;
                                                       line-height:1.6;
                                                  "
                                             >
                                                  ${escapeHtml(
                                                       options.userAgent ||
                                                            "Not available",
                                                  )}
                                             </td>
                                        </tr>

                                        <!-- Time -->
                                        <tr>
                                             <td
                                                  style="
                                                       font-weight:bold;
                                                       color:#111827;
                                                  "
                                             >
                                                  Time
                                             </td>

                                             <td style="color:#374151;">
                                                  ${new Date().toLocaleString(
                                                       "en-IN",
                                                       {
                                                            timeZone:
                                                                 "Asia/Kolkata",
                                                       },
                                                  )}
                                             </td>
                                        </tr>

                                   </table>

                              </td>
                         </tr>

                         <!-- Footer -->
                         <tr>
                              <td
                                   style="
                                        padding:20px;
                                        text-align:center;
                                        background:#f9fafb;
                                        color:#6b7280;
                                        font-size:13px;
                                   "
                              >
                                   This notification was automatically
                                   generated by your website.
                              </td>
                         </tr>

                    </table>

               </td>
          </tr>
     </table>

</body>
</html>
`,

               sender: {
                    name: "The Moment Studio",
                    email: "utpal@utpal.utpx.in",
               },

               to: [
                    {
                         email: "sonowalu73@gmail.com",
                         name: "Utpal Sonowal",
                    },
               ],
          });
     } catch (err) {
          if (err instanceof BrevoError) {
               console.error(`API error ${err.statusCode}:`, err.message);
          } else {
               console.error("Failed to send visitor mail", err);
          }

          throw err;
     }
};