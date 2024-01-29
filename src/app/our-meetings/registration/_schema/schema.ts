import * as Yup from "yup";

export const registerMeetingSchema = Yup.object({
  fullname: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .email("The email address is invalid")
    .required("Please enter your email address"),
  location: Yup.string().required("Please enter your location"),
  phonenumber: Yup.string()
    .required("Please enter your phone number")
    .min(8, "Phone number must be at least 8 characters"),
  circuit: Yup.object({
    value: Yup.string(),
    label: Yup.string()
  })
  .nullable()
  .required("Please this field is required")
});
