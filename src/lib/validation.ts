import { z } from "zod";


export const registerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;

export const emailSchema = z.object({
  email: z.string().email("Invalid email"),
});

export type TEmailSchema = z.infer<typeof emailSchema>;

export const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export type TPasswordSchema = z.infer<typeof passwordSchema>;

// Define a schema for the EnquiryFormSchema 
export const EnquiryFormSchema = z.object({
  name: z.string().min(1, { message: "this field is required" }),
  email: z.string().email().min(1, { message: "this field is required" }),
  message : z.string().min(1, { message: "this field is required" }).max(300,{message:"you have reached characters limit."}),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: "please check the contact number entered",
  }),

});

export type TEnquiryFormSchema = z.infer<typeof EnquiryFormSchema>;