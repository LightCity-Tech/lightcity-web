"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { isAxiosError } from "axios";
import { registerAccommodation, registerMeeting } from "../services/api";
import { toast } from "sonner";
import { Input, InputPhone, Select, Button } from "@/src/ui";
import SuccessModal from "./success-modal";
import { accommodationMeetingSchema } from "../our-meetings/accommodation/_schema/schema";

const hotelsData = [
  { label: "De-Dons Hotel", value: "dedons" },
  { label: "Romchi Resort Hotel", value: "romchi" },
  { label: "Royal Palace Hotel", value: "royal" },
];

const dedonsData = [
  { label: "Single Room - ₦10,000", value: "single" },
  { label: "Standard Room - ₦15,000", value: "standard" },
  { label: "Queens Room - ₦20,000", value: "queens" },
  { label: "Executive Room - ₦22,000", value: "executive" },
  { label: "VIP Room - ₦25,000", value: "vip" },
];

const romchiData = [
  { label: "Royal Suite - ₦14,000", value: "royal" },
  { label: "Deluxe (A) - ₦16,000", value: "deluxe-A" },
  { label: "Deluxe (B) - ₦18,000", value: "deluxe-B" },
];

const royalData = [
  { label: "Double Room 1 - ₦20,000", value: "double-room-1" },
  { label: "Double Room 2 - ₦23,000", value: "double-room-2" },
];

const AccommodationForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<z.infer<typeof accommodationMeetingSchema>>({
    resolver: zodResolver(accommodationMeetingSchema),
    defaultValues: {
      is_pairing: false,
      // other fields...
    },
  });

  const handleFormSubmission = async (
    data: z.infer<typeof accommodationMeetingSchema>
  ) => {
    try {
      // set submitting to true
      console.log(data);
      setSubmitting(true);
      // handle the form submission
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email || "");
      formData.append("gender", data.gender || "");
      formData.append("phone_number", data.phone_number || "");
      formData.append("hotel_name", data.hotel_name || "");
      formData.append("room_category", data.room_category || "");
      formData.append("is_pairing", String(data.is_pairing));
      formData.append("meeting_id", "68205ca639d527c19d4f5ecf");

      // Add form fields
      // Object.keys(formData).forEach(key => {
      //   if (key !== 'receipt_url') {
      //     formData.append(key, data[key as keyof z.infer<typeof accommodationMeetingSchema>] || "");
      //   }
      // });

      // Add file
      if (data.receipt_url) {
        formData.append("receipt_url", data.receipt_url[0]);
      }
      const res = await registerAccommodation(formData as any);
      if (res === 201) {
        setSubmitting(false);
        setIsSuccess(true);
        methods.reset();
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
          name="name"
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
          name="phone_number"
          label="mobile number (Preferably WhatsApp)"
        />

        {/* <Input
          name="location"
          label="Where are you coming from? (City/Town)"
          type="text"
          placeholder="Enter here"
        /> */}

        <Select
          name="gender"
          label="Gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <Select name="hotel_name" label="Select a Hotel" options={hotelsData} />

        <Select
          name="room_category"
          label="Select A Room"
          options={
            methods.getValues("hotel_name") === "dedons"
              ? dedonsData
              : methods.getValues("hotel_name") === "romchi"
              ? romchiData
              : methods.getValues("hotel_name") === "royal"
              ? royalData
              : []
          }
        />

        <p>
          Alternatively, you can decide to split the cost of a room between you
          and another participant that we&apos;d pair you with. Let us know if
          that&apos;s an option you&apos;ll willing to consider.
        </p>

        <label className="flex items-center gap-2 cursor-pointer mt-5">
          <input
            type="checkbox"
            {...methods.register("is_pairing")}
            className="peer hidden"
          />
          <span className="w-5 h-5 flex items-center justify-center border border-gray-600 rounded-sm bg-white peer-checked:bg-primary-main peer-checked:border-blue-600">
            <svg
              className="hidden peer-checked:block w-3.5 h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-sm font-medium">
            I want to share a room with another participant
          </span>
        </label>

        <h3 className="mt-5 text-xl font-semibold">For Payments: </h3>
        <div className="mt-3">
          {/* <h3 className="text-2xl font-semibold">For Partnership</h3> */}
          <div>
            {" "}
            <h3 className="text-gray-600">Account Number: </h3>
            <h3 className="font-semibold">4600509322</h3>
          </div>
           <div>
            <h3 className="text-gray-600">Bank Name:</h3>
            <h3 className="font-semibold"> VFD-MicroFinance Bank</h3>
          </div>
          <div>
            <h3 className="text-gray-600">Account Name:</h3>
            <h3 className="font-semibold"> Tochukwu Ali - Lightcity</h3>
          </div>
         
        </div>

        <h3 className="mt-6">Upload proof of Payment</h3>
        <Input
          name="receipt_url"
          label=""
          type="file"
          placeholder="Enter here"
          accept="image/*"
          onChange={(e) => {
            const file = e.currentTarget.files?.[0] || null;
            console.log(file, e.currentTarget.files?.[0]);
            methods.setValue("receipt_url", file);
          }}
        />

        {/* <div className="mt-3 text-center">
          <h3 className="text-2xl font-semibold">For Partnership</h3>
          <h3 className="text-xl">0672104443</h3>
          <h3 className="text-xl">GT Bank</h3>
        </div> */}

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
        again="Register Again"
      />
    </FormProvider>
  );
};

export default AccommodationForm;
