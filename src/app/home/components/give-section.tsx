"use client";

import { Typography } from "@/src/ui";
// import BulletPoint from "@/public/assets/svgs/bullet-point.svg";
import { BulletPoint } from "@/src/ui";

const GiveSection = () => {
  const givingReasons = [
    {
      title: "For the work of ministry",
      reason:
        "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail. ",
    },
    {
      title: "For the work of ministry",
      reason:
        "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail. ",
    },
    {
      title: "For the work of ministry",
      reason:
        "We are a people of God with a mandate from God to herald the glorious message of Jesus; teaching and preaching until the whole earth is filled with his gospel as the waters cover the sea, and by God, we will not fail. ",
    },
  ];

  return (
    <section className="w-full px-24 py-[5.8rem] flex justify-between gap-28 bg-white">
      <div className="w-1/2">
        <div className="flex items-center mb-10">
          <Typography
            variant="h4"
            color="main-black"
            fontWeight="medium"
            align="left"
            customClassName="mr-6"
          >
            WHY WE GIVE
          </Typography>
          <div className="border-t border-main-black h-0 w-[12.5rem]"></div>
        </div>
        <div className="flex flex-col gap-10">
          {givingReasons.map((reason, index) => (
            <div key={index} className="flex gap-3">
              <div className="pt-2">
                <BulletPoint />
              </div>

              <div>
                <Typography
                    variant="h4"
                    color="secondary-main"
                    fontWeight="medium"
                    align="left"
                    customClassName="mb-3"
                >{reason.title}</Typography>
                <Typography
                    variant="h6"
                    color="main-black"
                    fontWeight="medium"
                    align="left"
                >{reason.reason}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default GiveSection;
