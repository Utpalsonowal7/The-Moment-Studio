import { ContactSchema } from "@/schema/contact";
import { sendMail } from "@/utils/mail";

export async function POST(req: Request) {
     try {
          const body = await req.json();

          const result = ContactSchema.safeParse(body);

          if (!result.success) {
               return Response.json(
                    { error: "Invalid input", details: result.error },
                    { status: 400 },
               );
          }

          const validatedData = result.data;

          console.log("📩 New contact form submission:", validatedData);

          await sendMail(validatedData);

          return Response.json({
               success: true,
               message: "✅ Message Sent Successfully",
          });
     } catch (err) {
          console.error("Error sending email", err);
          return Response.json(
               {
                    success: false,
                    message: "Error Sending Message",
               },
               {
                    status: 500,
               },
          );
     }
}
