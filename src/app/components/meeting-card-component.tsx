"use client";

import MeetingCard from "@/src/ui/elements/meeting-card";
import SampleImg from "@/public/assets/images/sample-meeting-img.png";

const MeetingCardComponent = () => {
  return (
    <details className="w-full">
      <summary className="pb-5 text-3xl font-bold">
        Meeting Card Component
      </summary>
      <MeetingCard
        title="Word Conference 2023"
        image={SampleImg}
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
