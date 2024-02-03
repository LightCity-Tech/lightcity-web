import * as Yup from "yup";

const phoneNumberRegExp = /^[0-9]{9,}$|^0$/;

const circuitOptions = ["Abakpa", "Agbani/One-day", "Maryland/Ugwuaji","Obiagu", "Ologo", "UNEC", "UNN/Nsukka", "Uwani", "Other"]

export const registerMeetingSchema = Yup.object({
  fullname: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .email("The email address is invalid")
    .required("Please enter your email address"),
  location: Yup.string().required("Please enter your location"),
  dialCode: Yup.string().required(),
  number: Yup.string().required("Please enter your phone number").matches(phoneNumberRegExp, 'Phone number entered is not valid'),
  circuit: Yup.string().oneOf(circuitOptions, "Please select the circuit you belong to").required()
});
