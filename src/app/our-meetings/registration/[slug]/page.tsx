"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Typography,
  Button,
  Input,
  InputSelect,
  InputPhoneNumber,
} from "@/src/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerMeetingSchema } from "../_schema/schema";
import { registerMeeting } from "@/src/app/services/api";

export type FormData = {
  fullname: string;
  email: string;
  phonenumber: any;
  circuit: {value: string, label:string};
  location: string;
  meetingId: string;
};

const meetingDLC = [
  { heading: "Date", description: "16th - 18th February, 2024" },
  {
    heading: "Location",
    description: " 179 Ziks Avenue (Second Floor), Uwani. Enugu State",
  },
  { heading: "Contact", description: "08141748947, 08138720239" },
]; //DLC stands for Date, Location and Contact

const optionsData = [
  { label: "Abakpa", value: "abakpa" },
  { label: "Agbani/One-Day", value: "agbani/one-day" },
  { label: "Maryland/Ugwuaji", value: "maryland/ugwuaji" },
  { label: "Obiagu", value: "obiagu" },
  { label: "Ologo", value: "ologo" },
  { label: "UNEC", value: "unec" },
  { label: "UNN/Nsukka", value: "unn/nsukka" },
  { label: "Uwani", value: "uwani" },
  { label: "Other", value: "other" },
];

const UpcomingMeeting = () => {
  const methods = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(registerMeetingSchema),
  });
  const {register} = methods;

  const onSubmit = async (data: FormData) => {
    try{
      await registerMeeting(data)
      console.log(data)
      // console.log('form submitted')
    }catch(error){
      console.error('Error submittting:', error)
    }
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
              179 Ziks Avenue (Second Floor), Uwani. Enugu State
            </Typography>
            <Typography
              align="center"
              color="white"
              fontWeight="medium"
              variant="h3"
            >
              08th - 10th February, 2024
            </Typography>
          </div>
        </section>
        <section className="bg-white flex justify-start items-center px-24 py-16 max-lg:px-12 ">
          <div className="flex divide-x-2 divide-secondary-main max-sm:flex-col max-sm:divide-x-0">
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
            <div className="px-4 max-sm:p-0">
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
                <InputPhoneNumber label="Mobile Number" {...register("phonenumber")}/>
                <InputSelect label="circuit" options={optionsData}  {...register("circuit")}/>
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
                  customClassName="w-full flex justify-center items-center mt-8"
                />
              </form>
            </div>
          </div>
        </section>
      </FormProvider>
    </section>
  );
};

export default UpcomingMeeting;
