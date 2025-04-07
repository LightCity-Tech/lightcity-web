import { z } from "zod";

const phoneNumberRegExp = /^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/;
const circuitOptions = ["Abakpa", "Agbani/One-Day", "Maryland/Ugwuaji", "Obiagu", "Ologo", "UNEC", "UNN/Nsukka", "Uwani", "Other"];

export const registerMeetingSchema = z.object({
  fullname: z.string().min(1, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter your email address in the format: text@example.com" }),
  location: z.string().min(1, { message: "Please enter your location" }),
  phonenumber: z.string().regex(phoneNumberRegExp, { message: 'Phone number entered is not valid' }),
  circuit: z.string().min(1).refine(value => circuitOptions.includes(value), { message: "Please select the circuit you belong to" }),
});
