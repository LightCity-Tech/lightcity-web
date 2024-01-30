import * as Yup from "yup";

const phoneNumberRegExp = /^[0-9]{9,}$|^0$/

export const registerMeetingSchema = Yup.object({
  fullname: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .email("The email address is invalid")
    .required("Please enter your email address"),
  location: Yup.string().required("Please enter your location"),
  dialCode: Yup.string().required(),
  number: Yup.string().matches(phoneNumberRegExp, 'Phone number is not valid').required(),
  circuit: Yup.string().required()
});
