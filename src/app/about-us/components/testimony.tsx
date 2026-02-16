"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";
import { Info } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Checkbox } from "@/src/ui";
import { RichTextEditor } from "./richTextEditor";
import { toast } from "sonner";
import { motion } from "framer-motion";

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

  interface MouseCoordinates {
    x: number;
    y: number;
  }

  interface MousePositionMap {
    [key: number]: MouseCoordinates;
  }

  const [mousePosition, setMousePosition] = useState<MousePositionMap>({});
  const [hoveringImage, setHoveringImage] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition((prev: MousePositionMap) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const testimonialImages = [
    {
      image: "assets/images/image 1.jpg",
      passage:
        "They overcame him by the blood of the Lamb and by the word of their testimony",
      reference: "Revelation 12:11",
    },
    {
      image: "assets/images/image 11.jpg",
      passage:
        "Come and hear, all you who fear God; let me tell you what he has done for me",
      reference: "Psalm 66:16",
    },
    {
      image: "assets/images/image 6.webp",
      passage: "Let the redeemed of the Lord tell their story",
      reference: "Psalm 107:2",
    },
    {
      image: "assets/images/image 13.jpg",
      passage:
        "Go home to your own people and tell them how much the Lord has done for you",
      reference: "Mark 5:19",
    },
  ];

  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-start gap-10"
      
    >
      <div className="w-full lg:w-[55%]">
        <div className="w-full grid grid-cols-2 grid-rows-4 gap-2 auto-rows-fr h-[500px]">
          {testimonialImages.map((image, index) => {
            let specificStyle;

            if (index === 0) {
              specificStyle = "row-span-2";
            } else if (index === 1) {
              specificStyle = "row-span-3";
            } else if (index === 2) {
              specificStyle = "row-span-3";
            } else {
              specificStyle = "row-span-2";
            }

            const mousePos = mousePosition[index] || { x: 0, y: 0 };
            const isHovering = hoveringImage === index;

            return (
              <div
                className={`rounded min-h-[150px] relative overflow-hidden cursor-none ${specificStyle}`}
                key={index}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveringImage(index)}
                onMouseLeave={() => setHoveringImage(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/${image.image}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />

                {/* Text + Background Layer - Only visible in spotlight */}
                <motion.div
                  className="absolute inset-0 bg-secondary-25 flex items-center justify-center pointer-events-none p-4"
                  style={{
                    clipPath: isHovering
                      ? `circle(60px at ${mousePos.x}px ${mousePos.y}px)`
                      : "circle(0px at 50% 50%)",
                    WebkitClipPath: isHovering
                      ? `circle(60px at ${mousePos.x}px ${mousePos.y}px)`
                      : "circle(0px at 50% 50%)",
                  }}
                  animate={{
                    opacity: isHovering ? 1 : 0,
                  }}
                  transition={{ opacity: { duration: 0.2 } }}
                >
                  <div className="text-center">
                    <p className="font-sans text-secondary-main text-sm md:text-base font-medium italic leading-relaxed">
                      &quot;{image.passage}&quot;
                    </p>
                    <p className="font-sans text-secondary-main text-xs md:text-sm mt-2">
                      {image.reference}
                    </p>
                  </div>
                </motion.div>

                {/* Blurred Edge Effect */}
                {isHovering && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 60px at ${mousePos.x}px ${mousePos.y}px,`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
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
