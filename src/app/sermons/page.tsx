"use client";

import React, { useEffect, useRef, useState } from "react";
import { getAllSeriesNonPaginated } from "../services/api";
import { SeriesDropdown, Typography } from "@/src/ui";
import { InfinitySpin } from "react-loader-spinner";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

type Props = {};

const SermonLibrary = (props: Props) => {
  const [series, setSeries] = useState<ISeries[] | any>([]);
  const [filteredSeries, setFilteredSeries] = useState<ISeries[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const searchBox = useRef<HTMLInputElement>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const res = await getAllSeriesNonPaginated();
        setSeries(res?.data.series);
        setFilteredSeries(res?.data.series);
        setLoading(false);
        setInitialLoad(false);
      } catch (error) {
        setLoading(false);
        setInitialLoad(false);
        console.error("Error fetching series:", error);
      }
    };
    fetchSeries();
  }, []);

  // debounce search functionality
  const debounce = (callback: Function, delay: number) => {
    let timeoutId: any;

    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  };

  const searchSeries = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase(); // Case-insensitive search
    setSearch(query);

    if (query === "") {
      setFilteredSeries(series); // Show all sermons if search is cleared
    } else {
      const filtered = series.filter((sermon: { title: string }) =>
        sermon.title.toLowerCase().includes(query)
      );
      setFilteredSeries(filtered); // Update with filtered results
    }
  }, 700);

  const clearSearchBar = () => {
    setSearch("");
    // clear the text in the input
    searchBox.current!.value = "";
    setFilteredSeries(series);
  };

  const sortSermonYears = (sermons: ISeries[]) => {
    const groupedByYear: { [key: string]: ISeries[] } = {};

    sermons.forEach((series) => {
      let yearTaught: string;

      if (!series.yearTaught || series.yearTaught === "Word") {
        const dateUploaded = new Date(series.dateUploaded);
        yearTaught = dateUploaded.getFullYear().toString();
      } else {
        yearTaught = series.yearTaught;
      }

      if (!groupedByYear[yearTaught]) {
        groupedByYear[yearTaught] = [];
      }

      groupedByYear[yearTaught].push(series);
    });

    return groupedByYear;
  };

  const groupedSermons = sortSermonYears(filteredSeries);

  const [sliceIndex, setSliceIndex] = useState<number>(0);

  const paginateToPrevious = () => {
    if (sliceIndex > 0) {
      setSliceIndex(sliceIndex - 6);
    }
  };

  const paginateToNext = () => {
    if (sliceIndex + 6 < Object.keys(groupedSermons).length) {
      setSliceIndex(sliceIndex + 6);
    }
  };

  const prevDisabled = sliceIndex === 0;
  const nextDisabled = sliceIndex + 6 >= Object.keys(groupedSermons).length;

  return (
    <section className="overflow-x-hidden">
      <div className=" w-full h-[600px] flex items-start bg-[url('/assets/images/sermons-mobile.png')] bg-center bg-cover bg-no-repeat mx-auto object-cover px-5 sm:px-8 md:bg-[url('/assets/images/sermons.png')] md:px-10 lg:items-center lg:w-[1700px] lg:px-24 xl:px-24">
        <div className="mt-12 lg:mt-0">
          <p className="text-[16px] py-3 text-secondary-main font-bold">
            OUR TEACHINGS
          </p>
          <h3 className="text-[45px] inline lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold text-secondary-main">
            Sermon Library
          </h3>
          <div className="w-full md:w-[40%] py-8">
            <p className="text-main-black">
              Here you can find teachings from our current series or you can
              even go through our message archives and listen to messages from
              an older series. These are available to you 24/7 and can be shared
              amongst friends and family!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] px-5 mx-auto py-20 pb-10 w-full lg:px-24 md:px-10 xl:px-20">
        <div className="w-full bg-[#fff]">
          <div className="rounded-md bg-[#fff] shadow-md lg:w-4/5 mx-auto p-4 border border-[rgba(222, 222, 222, 1)]">
            <span className="block px-2">Sermon Title</span>
            <div className="flex flex-row gap-x-2 items-center justify-center">
              <input
                type="text"
                className="inline-block p-2 w-full focus:outline-0"
                placeholder="Type here"
                onChange={searchSeries}
                ref={searchBox}
              />
              <span
                onClick={clearSearchBar}
                className={`${
                  search != "" ? "block hover:cursor-pointer" : "hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="w-full flex mt-16 justify-center h-full items-center">
            <InfinitySpin width="300" color="rgb(232 157 44)" />
          </div>
        ) : !loading && !initialLoad && filteredSeries.length === 0 ? (
          <div className="w-full h-[25rem] flex justify-center items-center">
            <Typography
              variant="h2"
              align="center"
              color="secondary-200"
            >
              Sermon matching your search isn&apos;t available
            </Typography>
          </div>
        ) : (
          <div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
              {Object.keys(groupedSermons)
                .slice(sliceIndex, sliceIndex + 6)
                .map((year) => (
                  <div key={year}>
                    <SeriesDropdown
                      title={`Sermons from ${year}`}
                      sermons={groupedSermons[year]}
                    />
                  </div>
                ))}
            </div>

            <div className="mt-20 flex justify-end gap-4">
              <button
                className={`w-[6rem] border-2 rounded flex justify-center items-center p-2 ${
                  prevDisabled
                    ? "opacity-50 cursor-not-allowed border-[#848884]"
                    : "border-secondary-main hover:bg-[#feefd6] hover:border-[#feefd6]"
                }`}
                onClick={paginateToPrevious}
                disabled={prevDisabled}
              >
                <HiChevronLeft
                  size={30}
                  color={prevDisabled ? "#848884" : "#32220A"}
                />
              </button>
              <button
                className={`w-[6rem] border-2 rounded flex justify-center items-center p-2 ${
                  nextDisabled
                    ? "opacity-50 cursor-not-allowed border-[#848884]"
                    : "border-secondary-main hover:bg-[#feefd6] hover:border-[#feefd6]"
                }`}
                onClick={paginateToNext}
                disabled={nextDisabled}
              >
                <HiChevronRight
                  size={30}
                  color={nextDisabled ? "#848884" : "#32220A"}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SermonLibrary;
