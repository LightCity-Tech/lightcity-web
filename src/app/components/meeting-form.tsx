"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { isAxiosError } from "axios";
import { registerMeeting } from "../services/api";
import { toast } from "sonner";
import { registerMeetingSchema } from "../our-meetings/registration/_schema/schema";
import { Input, InputPhone, Select, Button } from "@/src/ui";
import SuccessModal from "./success-modal";

const optionsData = [
  { label: "Abakpa", value: "Abakpa" },
  { label: "Agbani/One-Day", value: "Agbani/One-Day" },
  { label: "Maryland/Ugwuaji", value: "Maryland/Ugwuaji" },
  { label: "Obiagu", value: "Obiagu" },
  { label: "Ologo", value: "Ologo" },
  { label: "UNEC", value: "UNEC" },
  { label: "Oldsite", value: "Oldsite" },
  { label: "UNN/Nsukka", value: "UNN/Nsukka" },
  { label: "Uwani", value: "Uwani" },
  { label: "Other", value: "Other" },
];

const MeetingForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<z.infer<typeof registerMeetingSchema>>({
    resolver: zodResolver(registerMeetingSchema),
  });

  const handleFormSubmission = async (
    data: z.infer<typeof registerMeetingSchema>
  ) => {
    try {
      // set submitting to true
      console.log(data);
      setSubmitting(true);
      // handle the form submission
      const res = await registerMeeting({
        ...data,
        meetingId: "68205ca639d527c19d4f5ecf",
        circuit: data.circuit || "", // Ensure circuit is always provided
      });
      if (res === 201) {
        setSubmitting(false);
        setIsSuccess(true);
        methods.reset()
        // methods.reset('circuit')
        // methods.reset('has_medical_condition', null as any)
        //  methods.resetField('is_nursing_mother', {defaultValue: ''})
        // methods.setValue('is_nursing_mother', null as any)
        // toast.success("You have successfully registered for this meeting. 🥳");
      }
    } catch (e: any) {
      setSubmitting(false);
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

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSuccess]);

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
        <InputPhone
          name="phonenumber"
          label="mobile number (Preferably WhatsApp)"
        />

        <Select
          name="circuit"
          label="circuit (For LightCity Church Members Only)"
          options={optionsData}
        />

        <Input
          name="location"
          label="Where are you coming from? (City/Town)"
          type="text"
          placeholder="Enter here"
        />

        <Select
          name="gender"
          label="Gender"
          options={[
            { label: "Female", value: "female" },
            { label: "Male", value: "male" },
          ]}
        />

        <Input
          name="church"
          label="Local Church"
          type="text"
          placeholder="Enter here"
        />

        <Select
          name="is_nursing_mother"
          label="Nursing mother or coming with child/children"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        {methods.getValues("is_nursing_mother") === "yes" && (
          <Select
            name="number_of_children"
            label="Select number of children"
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
            ]}
          />
        )}

        <Select
          name="has_medical_condition"
          label="Any known medical condition?"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

        {methods.getValues("has_medical_condition") === "yes" && (
          <Input
            name="medical_condition"
            label="If yes, Indicate"
            type="text"
            placeholder="Enter here"
          />
        )}

        <Select
          name="is_pastor"
          label="Are you a Pastor? (Lead or Associate)"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />

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
          rightIcon={<SpinnerIcon />}
          disabled={submitting}
        />
      </form>

      <SuccessModal
        show={isSuccess}
        onClose={() => setIsSuccess(false)}
        message="Form submitted successfully!"
      />
    </FormProvider>
  );
};

export default MeetingForm;
