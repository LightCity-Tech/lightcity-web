"use client";

import { Controller } from "react-hook-form";
import { Info } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Checkbox } from "@/src/ui";
import { RichTextEditor } from "./richTextEditor";
import { toast } from "sonner";

const Testimony = () => {
  const testimonySchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Please enter a valid email")
      .optional()
      .or(z.literal("")),
    testimony: z
      .string()
      .min(1, "Testimony is required")
      .refine(
        (val) => {
          if (val.trim().length === 0) return true;
          const plainText = val
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, "")
            .trim();
          return plainText.length >= 10;
        },
        {
          message: "Testimony must be at least 10 characters long",
        },
      ),
    consent: z.boolean().refine((val) => val === true, {
      message: "You must agree to continue",
    }),
  });

  const methods = useForm<z.infer<typeof testimonySchema>>({
    resolver: zodResolver(testimonySchema),
    mode: "onChange",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      testimony: "",
      consent: false,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, errors },
    clearErrors,
  } = methods;

  const nameValue = methods.watch("name");
  const testimonyValue = methods.watch("testimony");

  const plainText = (testimonyValue || "").replace(/<[^>]+>/g, "").trim();
  const isConsentValid = nameValue?.length > 0 && plainText.length >= 10;

  const onSubmit = (data: z.infer<typeof testimonySchema>) => {
    setTimeout(() => {
      console.log("Form data:", data);
    }, 500);

    reset(
      {
        name: "",
        email: "",
        testimony: "",
        consent: false,
      },
      { keepErrors: false, keepTouched: false, keepDirty: false },
    );
    setTimeout(() => clearErrors(), 0);
    toast.success("Thank you! Your testimony has been submitted successfully.");
  };

  const testimonialImages = [
    {
      image: "assets/images/image 1.jpg",
      passage: "",
    },
    {
      image: "assets/images/image 11.jpg",
      passage: "",
    },
    {
      image: "assets/images/image 6.webp",
      passage: "",
    },
    {
      image: "assets/images/image 13.jpg",
      passage: "",
    },
  ];

  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-start gap-10"
      id="share-your-testimony"
    >
      <div className="w-full lg:w-[55%]">
        <div className="w-full grid grid-cols-2 grid-rows-3 gap-2">
          {testimonialImages.map((image, index) => {
            let specificStyle;

            if (index === 0) {
              specificStyle = "";
            } else if (index === 1) {
              specificStyle = "";
            } else if (index === 2) {
              specificStyle = "";
            } else {
              specificStyle = "";
            }

            return (
              <div
                className={` rounded h-[300px] ${specificStyle}`}
                key={index}
                style={{
                  backgroundImage: `url('/${image.image}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-[45%]">
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
                customClassName="py-4"
                fieldCustomClassName="!mb-2"
              />
              <div className="flex flex-row justify-start items-center p-3 bg-[#ffd08965] rounded-md text-[#6F4B16]">
                <Info className="size-4" />
                <p className="ml-2 text-xs">
                  Your email is optional and will only be used if we need to
                  contact you about your story.
                </p>
              </div>
            </div>
            <Controller
              name="testimony"
              control={methods.control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <RichTextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                  {fieldState.error && (
                    <p className="text-sm text-red-500 mb-4 -mt-2">
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
            <Checkbox
              name="consent"
              label="I confirm that this testimony is a true account of my experience and consent to it been shared publicly."
              disabled={!isConsentValid}
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
