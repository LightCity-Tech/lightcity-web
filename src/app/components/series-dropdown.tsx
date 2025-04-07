"use client";

import { SeriesDropdown } from "@/src/ui";

const SeriesDropdownComponent = () => {
  const sermons: ISeries[] = [
    {
      title: "Immersion Retreat 2021",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
    {
      title: "Bible Seminar",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
    {
      title: "Believer's Authority",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
    {
      title: "Immersion Retreat 2021",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
    {
      title: "Bible Seminar",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
    {
      title: "Believer's Authority",
      dateUploaded: "",
      _id: "",
      yearTaught: "",
      thumbnail: null,
      tracks: [],
    },
  ];

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
