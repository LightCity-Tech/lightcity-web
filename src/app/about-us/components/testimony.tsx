"use client";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { kashuan } from "@/styles/font";
import { Input, Checkbox } from "@/src/ui";
import { RichTextEditor } from "./richTextEditor";

const Testimony = () => {
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
    formState: { isValid },
  } = methods;

  console.log(isValid);

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start">
      <div className="lg:w-[45%] w-full">
        <h2
          className={`${kashuan.className} hidden md:block text-[24px] lg:text-[34px] xl:text-[44px] text-[#6F4B16]`}
        >
          Leave a testimony at our Pastor&apos;s Desk
        </h2>
        <div></div>
      </div>
      <div className="lg:w-1/2 w-full">
        <FormProvider {...methods}>
          <form>
            <Input
              name="name"
              type="text"
              label="Name*"
              placeholder="Please, enter your name or an alias"
              testimony={true}
              customClassName="py-4"
            />
            <Input
              name="email"
              label="Email Address"
              type="email"
              placeholder="Please, enter your email address"
              testimony={true}
              customClassName="py-4"
            />
            <RichTextEditor />
            <Checkbox
              name="consent"
              label="All your data is private"
              disabled={!isValid}
            />
            <div className="group relative w-full mt-4 p-[5px] rounded-md bg-gradient-to-r from-[#ffd089] via-transparent to-[#ffd089] bg-[length:200%_100%] bg-left transition-all duration-700 ease-[cubic-bezier(0.13,0,0.39,0)] hover:bg-right hover:scale-[1.013]">
              <button
                className={`${kashuan.className} w-full text-2xl py-5 bg-secondary-main text-secondary-25 font-normal tracking-widest rounded-md cursor-pointer flex justify-center items-center`}
                type="submit"
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
