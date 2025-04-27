"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { isAxiosError } from "axios";
import { registerMeeting } from "../services/api";
import { toast } from "sonner";
import { registerMeetingSchema } from "../our-meetings/registration/_schema/schema";
import { Input, InputPhone, Select, Button } from "@/src/ui";

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

const MeetingForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const methods = useForm<z.infer<typeof registerMeetingSchema>>({
    resolver: zodResolver(registerMeetingSchema),
  });

  const handleFormSubmission = async (
    data: z.infer<typeof registerMeetingSchema>
  ) => {
    try {
      // set submitting to true
      setSubmitting(true);
      // handle the form submission
      const res = await registerMeeting({
        ...data,
        meetingId: "",
      });
      if (res === 201) {
        setSubmitting(false);
        methods.reset();
        toast.success("You have successfully registered for this meeting. 🥳");
      }
    } catch (e: any) {
      if (isAxiosError(e)) {
        setSubmitting(false);
        toast.error(e.response!.data.message);
      }
    }
  };

  const SpinnerIcon = () => {
    return (
      <span className={`mr-2 ${submitting ? "flex" : "hidden"}`}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {
              ".spinner_P7sC{transform-origin:center;animation:spinner_svv2 .75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}"
            }
          </style>
          <path
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            className="spinner_P7sC"
          />
        </svg>
      </span>
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmission)}>
        <Input
          name="fullname"
          label="full name"
          type="text"
          placeholder="Enter here"
        />
        <Input
          name="email"
          label="email address"
          type="email"
          placeholder="Enter here"
        />
        <InputPhone name="phonenumber" label="mobile number" />
        <Select name="circuit" label="circuit" options={optionsData} />
        <Input
          name="location"
          label="Where are you coming from?"
          type="text"
          placeholder="Enter here"
        />
        <Input
          name="church"
          label="Local Church"
          type="text"
          placeholder="Enter here"
        />
        <Select name="nursing" label="Are you a nursing mother?" options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]} />
        <Select name="nursing" label="Any known medical condition?" options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]} />
        <Input
          name="medicalcondition"
          label="If yes, Indicate"
          type="text"
          placeholder="Enter here"
        />
        <Select name="pastor" label="Any you a Pastor?" options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]} />

        <div className="mt-3 text-center">
          <h3 className="text-2xl font-semibold">For Partnership</h3>
          <h3 className="text-xl">0672104443</h3>
          <h3 className="text-xl">GT Bank</h3>
        </div>
        <Button
          variant="primary"
          color="primary"
          label="Submit"
          buttonType="submit"
          customClassName={`w-full flex justify-center items-center mt-8`}
          leftIcon={<SpinnerIcon />}
          disabled={submitting}
        />
      </form>
    </FormProvider>
  );
};

export default MeetingForm;
