"use client";

import { SeriesDropdown } from "@/src/ui";

const SeriesDropdownComponent = () => {
  const sermons = ["Immersion Retreat 2021", "Bible Seminar", "Believer's Authority", "Immersion Retreat 2021", "Bible Seminar", "Believer's Authority"]

  return (
    <details className="w-full">
      <summary className="pb-5 text-3xl font-bold">
        Series Dropdown Component
      </summary>
      <div className="grid">
        <SeriesDropdown title="Sermons from 2024" sermons={sermons} />
      </div>
    </details>
  );
};

export default SeriesDropdownComponent;
