"use client";

interface Track {
  fileId: string;
  title: string;
  url: string;
  yearTaught: string;
  thumbnail: null;
  dateUploaded: string;
  _id: string;
}

interface Series {
  _id: string;
  title: string;
  yearTaught: string;
  thumbnail: null;
  dateUploaded: string;
  tracks: Track[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface LatestSeriesArray {
  latestSeries: Series[];
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography, SeriesCard } from "@/src/ui";
import { getLatestSermons } from "../../services/api";
import RedirectIcon from "@/public/assets/svgs/redirect-icon.svg";

const SeriesSection = () => {
  const [latestSeries, setLatestSeries] = useState<LatestSeriesArray[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestSeries = async () => {
      try {
        const latestSermons: LatestSeriesArray[] = await getLatestSermons();
        setLatestSeries(latestSermons);
      } catch (error: any) {
        setError(
          "Sorry! We encountered an error fetching the latest sermon series. But, please visit the link below to see our other sermons."
        );
      }
    };

    fetchLatestSeries();
  }, []);

  return (
    <section className="bg-white py-12 md:px-8 lg:px-20 xl:px-24 2xl:px-40 px-5">
      <div className="w-full flex flex-row justify-center items-center mb-16">
        <div className="border-t border-main-black h-0 w-[5rem] lg:w-[12.5rem]"></div>
        <Typography
          variant="body-mid"
          fontWeight="medium"
          align="center"
          customClassName="text-main-black mx-[1.5rem]"
        >
          LATEST SERIES
        </Typography>
        <div className="border-t border-main-black h-0 w-[5rem] lg:w-[12.5rem]"></div>
      </div>
      <div className="space-y-8 flex flex-col gap-y-12">
        {!error ? (
          <div>
            {latestSeries.map((series: any) => (
              <SeriesCard
                title={series.title}
                image={""}
                subtitle={""}
                description={""}
                url={series._id}
                key={series._id}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Typography
              variant="body-mid"
              fontWeight="medium"
              align="center"
              customClassName="text-red-400"
            >
              {error}
            </Typography>
            <div className="mt-4 block text-secondary-main relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#99815C] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-[#99815C]">
              <Link
                href="/sermons"
                className="flex justify-center items-center gap-2"
              >
                See our Sermons
                <RedirectIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SeriesSection;
