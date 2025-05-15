import { z } from "zod";

// const circuitOptions = ["Abakpa", "Agbani/One-Day", "Maryland/Ugwuaji", "Obiagu", "Ologo", "UNEC", "UNN/Nsukka", "Uwani", "Other"];

const phoneNumberRegExp = /^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/;

export const registerMeetingSchema = z
  .object({
    fullname: z.string().min(1, { message: "Please enter your full name" }),
    email: z
      .string()
      .email({ message: "Please enter your email address in the format: text@example.com" }),
    location: z.string().min(1, { message: "Please enter your location" }),
    phonenumber: z
      .string(),
      // .regex(/^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/, {
      //   message: "Phone number entered is not valid",
      // }),
    circuit: z.string().optional(),
    gender: z.string().min(1, { message: "Please indicate your gender" }),
    church: z.string(),
    is_nursing_mother: z.string().min(1, { message: "Please indicate" }),
    number_of_children: z.string().optional(),
    is_pastor: z.string().min(1, { message: "Please indicate if you are a Pastor" }),
    has_medical_condition: z.enum(["yes", "no"], {
      errorMap: () => ({ message: "Please select yes or no" }),
    }),
    medical_condition: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Conditional validation for medical condition
    if (data.has_medical_condition === "yes" && !data.medical_condition?.trim()) {
      ctx.addIssue({
        path: ["medical_condition"],
        code: z.ZodIssueCode.custom,
        message: "Please state your medical condition",
      });
    }

    // Conditional validation for number_of_children
    if (  data.is_nursing_mother &&
    data.is_nursing_mother.toLowerCase() !== "no" &&
    !data.number_of_children?.trim()) {
      ctx.addIssue({
        path: ["number_of_children"],
        code: z.ZodIssueCode.custom,
        message: "Please indicate the number of children",
      });
    }
  });
