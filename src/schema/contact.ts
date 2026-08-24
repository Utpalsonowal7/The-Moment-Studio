import { z } from "zod";

export const ContactSchema = z.object({
     name: z.string().trim().min(1, "Name is required"),
     email: z.string().trim().email("A valid email is required"),
     phone: z.string().trim().optional().or(z.literal("")),
     service: z.string().trim().min(1, "Service is required"),
     message: z.string().trim().min(1, "Message is required"),
     
});

export type ContactForm = z.infer<typeof ContactSchema>;
