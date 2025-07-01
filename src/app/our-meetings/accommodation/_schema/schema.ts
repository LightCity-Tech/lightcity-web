import { z } from "zod";

export const accommodationMeetingSchema = z
  .object({
    name: z.string().min(1, { message: "Please enter your full name" }),
    email: z
      .string()
      .email({ message: "Please enter your email address in the format: text@example.com" }),
    phone_number: z
      .string(),
      gender: z.string(),
      // .regex(/^(\+\s?\d{1,3}\s?)?(\(\d{1,4}\)\s?)?[0-9\s]{9,}$/, {
      //   message: "Phone number entered is not valid",
      // }),
    hotel_name: z.string().optional(),
    room_category: z.string().min(1, { message: "Please indicate your gender" }),
    is_pairing: z.boolean().optional(),
    receipt_url: z.any().optional(),
  })
