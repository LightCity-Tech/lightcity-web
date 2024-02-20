"use client";

import React, {useState} from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Typography, Button, Input, InputPhone, Select } from "@/src/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerMeetingSchema } from "../_schema/schema";
import { registerMeeting } from "@/src/app/services/api";


export type FormData = {
  fullname: string,
  email: string,
  phonenumber: string,
  circuit: any,
  location: string,
};

const meetingDLC = [
  { heading: "Date", description: "23rd - 24th February, 2024" },
  {
    heading: "Location",
    description: " 179 Ziks Avenue (Second Floor), Uwani, Enugu State.",
  },
  { heading: "Contact", description: "08141748947, 08138720239" },
]; //DLC stands for Date, Location and Contact

const optionsData = [
  { label: "Abakpa", value: "Abakpa" },
  { label: "Agbani/One-Day", value: "Agbani/One-Day" },
  { label: "Maryland/Ugwuaji", value: "Maryland/Ugwuaji" },
  { label: "Obiagu", value: "Obiagu" },
  { label: "Ologo", value: "Ologo" },
  { label: "UNEC", value: "UNEC" },
  { label: "UNN/Nsukka", value: "UNN/Nsukka" },
  { label: "Uwani", value: "Uwani" },
  { label: "Other", value: "Other" },
];

const UpcomingMeeting = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(registerMeetingSchema),
  });

  const onSubmit = async (data: FormData) => {
    const { ...rest } = data;

    const newData = { ...rest, meetingId:"" }; //Please, note that meetingId is static for now, we would eventually pull it from the urlParams

    try {
      const statusCode = await registerMeeting(newData);
      if(statusCode === 201){
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false)
        }, 2000)
        methods.reset();
      }
    } catch (error) {
      console.error("Error submittting:", error);
    }
  };

  //Function to handle focus
  const handleFocus = () => {
    setIsFocused(true)
    setTimeout(() => {
      setIsFocused(false)
    }, 1000)
  }

  return (
    <section>
      <FormProvider {...methods}>
        <section className="w-full h-[100vh] relative overflow-hidden bg-[url('/assets/images/hero-wc.webp')] bg-cover flex items-center justify-center brightness-80">
          <div className="">
            <Typography
              align="center"
              color="white"
              fontWeight="semi-bold"
              variant="h1"
              customClassName=""
            >
              Faith Seminar
            </Typography>
            <Typography
              align="center"
              color="white"
              fontWeight="medium"
              variant="h3"
            >
              179 Ziks Avenue (Second Floor), Uwani, Enugu State.
            </Typography>
            <Typography
              align="center"
              color="white"
              fontWeight="medium"
              variant="h3"
            >
              23rd- 24th February, 2024
            </Typography>
          </div>
        </section>
        <section className="bg-white flex justify-start items-center px-24 py-16 max-lg:px-12 ">
          <div className="w-full flex divide-x-2 divide-secondary-main max-sm:flex-col max-sm:divide-x-0">
            <div className="pr-10 max-sm:mb-4">
              {meetingDLC.map((item, index) => (
                <div key={index}>
                  <Typography
                    variant="body-reg"
                    color="secondary-main"
                    align="left"
                    fontWeight="semi-bold"
                    customClassName="uppercase"
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="caption-mid"
                    color="main-black"
                    align="left"
                    fontWeight="regular"
                  >
                    {item.description}
                  </Typography>
                </div>
              ))}
            </div>
            <div className=" px-4 max-sm:p-0">
              <Typography
                align="left"
                color="black"
                variant="h2"
                fontWeight="semi-bold"
                customClassName="text-5xl mb-8"
              >
                Complete your registration
              </Typography>
              <form
                className="flex flex-col w-full"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <Input
                  name="fullname"
                  label="full name"
                  type="text"
                  placeholder="Enter here"
                />
                <Input
                  name="email"
                  type="email"
                  label="email address"
                  placeholder="Enter here"
                />
                <InputPhone name="phonenumber" label="mobile number" />
                <Select label = "circuit" options = {optionsData} name = "circuit"/>
                <fieldset className="flex flex-col">
                  <Input
                    name="location"
                    label="location"
                    type="text"
                    placeholder="Enter here"
                    fieldCustomClassName="mb-0"
                  />
                  <Typography
                    align="left"
                    variant="caption-reg"
                    fontWeight="regular"
                    customClassName="text-[#818181]"
                  >
                    Where are you coming from?
                  </Typography>
                </fieldset>
                <Button
                  variant="primary"
                  color="primary"
                  label="Submit"
                  buttonType="submit"
                  customClassName={`w-full flex justify-center items-center mt-8 ${isFocused ? "ring ring-secondary-main ring-offset-2" : "ring-0"}`}
                  onClick={handleFocus}
                />
              </form>
              {isRegistered &&
                <Typography
                  variant = "caption-mid"
                  align="left"
                  customClassName="mt-3 text-green-600"
                >
                  You have succesfully registered for this meeting. 🥳
              </Typography>
              }
            </div>
          </div>
        </section>
      </FormProvider>
    </section>
  );
};

export default UpcomingMeeting;
