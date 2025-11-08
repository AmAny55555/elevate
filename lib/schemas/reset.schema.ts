import { z } from "zod";

const strongPassword = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const resetPasswordSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(strongPassword, {
        message:
          "Password must include upper & lower case letters, a number, and a special character",
      }),
    rePassword: z.string().min(8, { message: "Please confirm your password" }),
  })
  .refine((data) => data.newPassword === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
