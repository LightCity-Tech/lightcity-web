"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { registerMeeting } from "../services/api";
import { toast } from "sonner";

const registrationSchema = z.object({
  fullname: z.string().min(5, "The fullname field cannot be left empty"),
  email: z.string().email("Please enter a valid email address"),
  phonenumber: z.string().min(11, "Your phonenumber must be greater than or equal to 11 digits"),
  location: z.string().min(3, "You must enter your location"),
  circuit: z.string().min(1, "Please select a ciruit from the available options"),
});

type Props = {};

const MeetingForm = (props: Props) => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
  });

  const handleFormSubmission = async (data: z.infer<typeof registrationSchema>) => {
    try {
      // set submitting to true
      setSubmitting(true);
      // handle the form submission
      const res = await registerMeeting({
        ...data,
        meetingId: ""
      })
      if(res === 201){
        setSubmitting(false);
        reset();
        toast.success("You have successfully registered");
      }
    } catch (e: any) {
      if (isAxiosError(e)) {
        setSubmitting(false);
        toast.error(e.response!.data.message);
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium leading-6 text-gray-900 uppercase"
          >
            Full Name
          </label>
          <div className="relative mt-2 flex flex-col gap-3">
            <input
              type="text"
              id="fullname"
              {...register("fullname", { required: true })}
              className="block w-full rounded-[10rem] border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-[#DEDEDE] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DEDEDE] sm:text-sm sm:leading-6"
              aria-invalid={errors.fullname ? "true": "false"}
            />
            {errors.fullname && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullname.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 uppercase"
          >
            Email Address
          </label>
          <div className="relative mt-2 flex flex-col gap-3">
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="block w-full rounded-[10rem] border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-[#DEDEDE] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DEDEDE] sm:text-sm sm:leading-6"
              aria-invalid={errors.email? "true": "false"}
            />
            {
              errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )
            }
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium leading-6 text-gray-900 uppercase"
          >
            Mobile Number
          </label>
          <div className="relative mt-2 flex flex-col gap-3">
            <input
              type="tel"
              id="mobile"
              {...register("phonenumber", { required: true })}
              className="block w-full rounded-[10rem] border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-[#DEDEDE] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DEDEDE] sm:text-sm sm:leading-6"
              aria-invalid={errors.phonenumber ? "true": "false"}
            />
            {
              errors.phonenumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phonenumber.message}
                </p>
              )
            }
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="circuit"
            className="block text-sm font-medium leading-6 text-gray-900 uppercase"
          >
            Circuit
          </label>
          <div className="relative mt-2 h-16 w-full min-w-[200px] flex flex-col gap-3">
            <select
              id="circuit"
              className="peer h-full w-full rounded-full border border-[#DEDEDE] bg-transparent px-3 py-2 pr-4"
              {...register("circuit", { required: true })}
              aria-invalid={errors.circuit? "true": "false"}
            >
              <option>Select</option>
              <option value="Abakpa">Abakpa</option>
              <option value="Agbani/One-Day">Agbani/One-Day</option>
              <option value="Maryland/Ugwuaji">Maryland/Ugwuaji</option>
              <option value="Obiagu">Obiagu</option>
              <option value="Ologo">Ologo</option>
              <option value="UNEC">UNEC</option>
              <option value="UNN/Nsukka">UNN/Nsukka</option>
              <option value="Uwani">Uwani</option>
              <option value="Other">Other</option>
            </select>
            {
              errors.circuit && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.circuit.message}
                </p>
              )
            }
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900 uppercase"
          >
            Location
          </label>
          <div className="relative mt-2 flex flex-col gap-3">
            <input
              type="text"
              id="location"
              {...register("location", { required: true })}
              className="block w-full rounded-[10rem] border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-[#DEDEDE] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DEDEDE] sm:text-sm sm:leading-6"
              aria-invalid={errors.location ? "true": "false"}
            />
            <small className="mt-1">Where are you coming from</small>
            {
              errors.location && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )
            }
          </div>
        </div>
        <button
          className="my-4 bg-primary-800 rounded-full w-full text-center py-2.5 flex items-center justify-center font-semibold"
          type="submit"
          disabled={submitting}
        >
          <span className={`mr-2 ${submitting ? 'flex' : 'hidden'}`}>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
