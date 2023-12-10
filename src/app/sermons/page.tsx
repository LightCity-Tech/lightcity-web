"use client";

import React, { useEffect, useState } from "react";
import { getAllSeries } from "../services/api";

import { InfinitySpin } from "react-loader-spinner";
import Pagination from "./pagination";
import Link from "next/link";
import { Button } from "@/src/ui";
import ButtonLeft from "@/public/assets/svgs/button-icon-left.svg";
import ButtonRight from "@/public/assets/svgs/button-icon-right.svg";

type Props = {};

const SermonLibrary = (props: Props) => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState<ISeries[] | any>([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const res = await getAllSeries(page);
        setSeries(res?.data.series);
        setTotal(res?.meta.total);
        setPrevPage(res?.meta.prevPage)
        setNextPage(res?.meta.nextPage)
        console.log(res);
        setLoading(false);
      } catch (error) {}
    };
    fetchSeries();
  }, [page]);

  const data = Math.ceil(total / 12);
  const pages = Array.from(Array(data).keys());

  return (
    <section className="">
      <div className="lg:w-[1700px] w-full md:bg-[url('/assets/images/sermons.png')] bg-[url('/assets/images/sermons-mobile.png')] bg-center bg-cover bg-no-repeat h-[600px] object-cover px-5 sm:px-8 md:px-10 mx-auto lg:px-24 xl:px-24 flex items-start lg:items-center">
        <div className="mt-12 lg:mt-0">
          <p className="text-[16px] py-3 text-blackA font-bold">
            OUR TEACHINGS
          </p>
          <h3 className="text-[45px] inline lg:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold text-blackA">
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
      <div className="bg-[#fff] px-5 md:px-10 mx-auto py-20 lg:px-24 xl:px-20 w-full">
        <div className="w-full bg-[#fff]">
          <div className="rounded-md bg-[#fff] shadow-md lg:w-4/5 mx-auto p-4 border border-[rgba(222, 222, 222, 1)]">
            <span className="block px-2">Sermon Title</span>
            <input
              type="text"
              className="inline-block p-2 w-full focus:outline-0"
              placeholder="Type here"
            />
          </div>
        </div>

        {loading ? (
          <div className="w-full flex mt-16 justify-center h-full items-center">
            <InfinitySpin width="300" color="rgb(232 157 44)" />
          </div>
        ) : (
          <div>
            <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
              {series.map((serie: any, i: number) => (
                <Link href={`/sermons/${serie._id}`} key={serie._id}>
                  <div
                    className="bg-black p-4 rounded-tl-md rounded-tr-md h-[200px] relative"
                    key={serie._id}
                  >
                    <div className="h-1 bg-secondary-200 block w-[90%] top-4 absolute mx-auto text-white "></div>
                    <div className="flex items-center justify-center">
                      <div className="px-4 py-6 text-center">
                        {" "}
                        <h3 className="text-white text-[16px] uppercase">
                          {serie.title}
                        </h3>
                        {serie.tracks.length > 0 && <p>(A Series)</p>}
                      </div>
                    </div>
                    <div className=" p-2 mt-4 left-0 w-[70%] text-center right-0 mx-auto absolute bottom-8">
                      <p className="text-secondary-200 uppercase text-[12px]">
                        Pastor Tochi Madubuobi
                      </p>
                    </div>
                    <div className="h-1 bg-secondary-200 block w-[90%] bottom-4 absolute mx-auto "></div>
                  </div>
                  <div className="px-4 bg-white py-3 h-[100px] rounded-br-md rounded-bl-md">
                    <p className="font-semibold">{serie.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-x-4 md:justify-end">
                <div className="flex items-center space-x-4 border p-3 rounded-[8px] border-[#DEDEDE] hover:cursor-pointer" onClick={() => setPage(prevPage)}>
                <ButtonLeftIcon />
                <p>Previous</p>
              </div>

                <div className="flex items-center space-x-4 border p-3 rounded-[8px] border-[#DEDEDE] hover:cursor-pointer" onClick={() => setPage(nextPage)}>
                <p>Next</p>
                <ButtonRightIcon />
              </div>
              {/* <div onClick={forward}>ypp</div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SermonLibrary;

const ButtonRightIcon  = () => {
    return (
      <Link href="/" className="">
        <ButtonRight  />
      </Link>
    );
  };

  const ButtonLeftIcon  = () => {
    return (
      <Link href="/" className="">
        <ButtonLeft  />
      </Link>
    );
  };
