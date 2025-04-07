"use client";

import MeetingCard from "@/src/ui/elements/meeting-card";

const MeetingCardComponent = () => {
  return (
    <details className="w-full">
      <summary className="pb-5 text-3xl font-bold">
        Meeting Card Component
      </summary>
      <MeetingCard
        title="Word Conference 2023"
        year=""
        image="https://res.cloudinary.com/tochukwu/image/upload/w_250/v1700481884/lightcity/qek9s7hvd51k4yr0rta9.webp"
        description="We are a people of God with a mandate from God to herald the
          glorious message of Jesus; teaching and preaching until the whole
          earth is filled with his gospel as the waters cover the sea, and by
          God, we will not fail."
        month="December"
        startDay="08"
        duration="08TH - 10TH"
        location="ENUGU, NIGERIA"
      />
    </details>
  );
};

export default MeetingCardComponent;
