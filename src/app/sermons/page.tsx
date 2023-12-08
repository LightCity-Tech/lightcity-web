"use client";

import React, { useEffect, useState } from "react";
import { getAllSeries } from "../services/api";

type Props = {};

interface ISeries {
  _id: string;
  title: string;
  yearTaught: string;
  thumbnail: any;
  tracks: Tracks[];
}

interface Tracks {
  fileId: string;
  title: string;
  url: string;
  yearTaught: string;
  thumbnail: any;
  _id: string;
}

const SermonLibrary = (props: Props) => {
  const [series, setSeries] = useState<ISeries | any>([]);
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await getAllSeries(1);
        console.log(res?.data);
        setSeries(res?.data?.data.series);
      } catch (error) {}
    };
    fetchSeries();
  }, []);

  return (
    <section className="">
      <div className="w-full bg-[#f2f2f2] h-[500px] px-5 sm:px-8 md:px-10 mx-auto lg:px-24 xl:px-20 flex items-center">
        <div>
          <p className="text-[16px] py-3 text-blackA font-bold">
            OUR TEACHINGS
          </p>
          <h3 className="text-[45px] inline lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold text-blackA">
            Sermon Library
          </h3>
          <div className="w-full md:w-[50%] py-8">
            <p className="text-main-black">
              Here you can find teachings from our current series or you can
              even go through our message archives and listen to messages from
              an older series. These are available to you 24/7 and can be shared
              amongst friends and family!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] sm:px-8 md:px-10 mx-auto py-20 lg:px-24 xl:px-20 w-full">
        <div className="w-full bg-[#fff]">
          <div className="rounded-md bg-[#fff] shadow-md w-4/5 mx-auto p-4 border border-[rgba(222, 222, 222, 1)]">
            <span className="block px-2">Sermon Title</span>
            <input
              type="text"
              className="inline-block p-2 focus:outline-0"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {series.map((serie: any, i: number) => (
            <div
              className="bg-black p-4 rounded-tl-md rounded-tr-md h-[200px] relative"
              key={serie._id}
            >
              <div className="h-1 bg-secondary-200 block w-[90%] top-4 absolute mx-auto text-white "></div>
              <div className="flex items-center justify-center">
                <div className="p-4 text-center">
                  {" "}
                  <h3 className="text-white text-[20px]">{serie.title}</h3>
                 
                </div>
              </div>
              <div className="bg-secondary-200 p-2 mt-4 text-center mx-auto absolute bottom-6">
                    <p>Pastor Tochi Madubuobi</p>
                  </div>
              <div className="h-1 bg-secondary-200 block w-[90%] bottom-4 absolute mx-auto "></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonLibrary;
