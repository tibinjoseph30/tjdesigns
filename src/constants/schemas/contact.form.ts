import z from "zod";

export const contactSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Enter a valid email address"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  message: z.string().min(5, "Message should be at least 5 characters")
});
