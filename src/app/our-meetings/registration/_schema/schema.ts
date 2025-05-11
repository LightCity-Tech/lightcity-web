import { z } from "zod";

const phoneNumberRegExp = /^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/;
const circuitOptions = ["Abakpa", "Agbani/One-Day", "Maryland/Ugwuaji", "Obiagu", "Ologo", "UNEC", "UNN/Nsukka", "Uwani", "Other"];

export const registerMeetingSchema = z.object({
  fullname: z.string().min(1, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter your email address in the format: text@example.com" }),
  location: z.string().min(1, { message: "Please enter your location" }),
  phonenumber: z.string().regex(phoneNumberRegExp, { message: 'Phone number entered is not valid' }),
  circuit: z.string().optional(),
  church: z.string(),
  is_nursing_mother: z.string().min(1, { message: "Please indicate" }),
  is_pastor: z.string().min(1, { message: "Please indicate if you are a Pastor" }),
  has_medical_condition: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Please select yes or no" }),
  }),
  medical_condition: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.has_medical_condition === "yes" && !data.medical_condition?.trim()) {
    ctx.addIssue({
      path: ["medical_condition"],
      code: z.ZodIssueCode.custom,
      message: "Please state your medical condition",
    });
  }
});
