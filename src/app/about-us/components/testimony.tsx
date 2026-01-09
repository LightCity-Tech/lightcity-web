"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { kashuan } from "@/styles/font";
import { Input, Checkbox } from "@/src/ui";
import { RichTextEditor } from "./richTextEditor";

const Testimony = () => {
  const [testimony, setTestimony] = useState("");

  const testimonySchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Please enter a valid email")
      .optional()
      .or(z.literal("")),
    consent: z.boolean().optional(),
  });

  const methods = useForm<z.infer<typeof testimonySchema>>({
    resolver: zodResolver(testimonySchema),
    mode: "onChange",
    defaultValues: {
      consent: false,
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: z.infer<typeof testimonySchema>) => {
    console.log("Form data:", data);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start ">
      <div className="lg:w-[45%] w-full">
        <h2 className="font-kaushan text-center md:text-left block text-2xl mb-8 md:text-[32px] lg:mb-0 lg:text-[34px] xl:text-[44px] text-[#6F4B16]">
          Leave a testimony at our Pastor&apos;s Desk
        </h2>
        <div></div>
      </div>
      <div className="lg:w-1/2 w-full">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              type="text"
              label="Name*"
              placeholder="Please, enter your name or an alias"
              testimony={true}
              customClassName="py-4"
            />
            <div className="py-4">
              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="Please, enter your email address"
                testimony={true}
                customClassName="mb-0"
              />
              <div className="flex flex-row justify-start items-center p-3 bg-[#ffd08965] rounded-md text-[#6F4B16]">
                <Info className="size-4" />
                <p className="ml-2 text-xs">
                  Your email is optional and will only be used if we need to
                  contact you about your story.
                </p>
              </div>
            </div>

            <RichTextEditor />
            <Checkbox
              name="consent"
              label="I confirm that this testimony is a true account of my experience and consent to it been shared publicly."
              disabled={!isValid}
            />
            <div
              className={`group relative w-full mt-4 p-[5px] rounded-md  transition-all duration-700 ease-[cubic-bezier(0.13,0,0.39,0)]  ${
                isValid
                  ? "bg-gradient-to-r from-[#FFD089] via-transparent to-[#FFD089] bg-[length:200%_100%] bg-left animate-shimmer-infinite"
                  : ""
              }`}
            >
              <button
                className={`font-kaushan w-full text-2xl py-5 font-normal tracking-widest rounded-md flex justify-center items-center ${
                  isValid
                    ? "cursor-pointer bg-secondary-main text-secondary-25 transition-all duration-700 ease-[cubic-bezier(0.13,0,0.39,0)] group-hover:bg-[#FFD089] group-hover:text-secondary-main/75"
                    : "cursor-not-allowed text-neutral-400 bg-[#DDD1C0]"
                }`}
                type="submit"
                disabled={!isValid}
              >
                Submit your testimony
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export { Testimony };
