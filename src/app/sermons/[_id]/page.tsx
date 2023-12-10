"use client";

import { Button } from "@/src/ui";
import React, { useEffect, useState } from "react";
import ButtonLeft from "@/public/assets/svgs/button-icon-left.svg";
import DownloadIcon from "@/public/assets/svgs/save-icon.svg";
import { getASeries } from "../../services/api";
import { useParams } from "next/navigation";
import ReactPlayer from 'react-player'

import { InfinitySpin } from "react-loader-spinner";
import Link from "next/link";

type Props = {};

const SermonDetail = (props: Props) => {
  const [series, setSeries] = useState<ISeries[] | any>([]);
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const res = await getASeries(_id as string);
        setSeries(res?.data.series);
        console.log(res);
        setLoading(false);
      } catch (error) {}
    };
    fetchSeries();
  }, []);

  return (
    loading ? 
        <div className="w-full flex mt-16 justify-center h-full items-center">
          <InfinitySpin width="300" color="rgb(232 157 44)" />
        </div> :
    <section className="lg:h-[60vh]">
      <div className="w-full bg-[#fff] px-5 sm:px-8 md:px-10 mx-auto lg:px-24 xl:px-20 flex">
        <Link href="/sermons">
        <Button
          variant="no-border"
          color="primary"
          label={"Back to All Messages"}
          leftIcon={<ButtonLeft />}
          customClassName="bg-[#fff]"
        />
        </Link>
        
      </div>
      <div className="flex lg:mt-12 items-center mx-auto lg:max-w-[980px] xl:max-w-[1180px] lg:py-6 px-5">
        <div className="lg:flex lg:flex-row mt-4 flex flex-col space-x-0 lg:space-x-12">
          <div
            className="bg-black lg:p-4 lg:w-[48%] w-full rounded-tl-md rounded-tr-md h-[200px] relative"
            key={series._id}
          >
            <div className="h-1 bg-secondary-200 block w-[90%] top-4 absolute mx-auto text-white "></div>
            <div className="flex items-center justify-center">
              <div className="px-4 py-6 text-center">
                {" "}
                <h3 className="text-white text-[14px] lg:text-[16px] uppercase">
                  {series.title}
                </h3>
                {series?.tracks?.length > 0 && <p>(A Series)</p>}
              </div>
            </div>
            <div className=" p-2 mt-4 left-0 w-[70%] text-center right-0 mx-auto absolute bottom-8">
              <p className="text-secondary-200 uppercase text-[12px]">
                Pastor Tochi Madubuobi
              </p>
            </div>
            <div className="h-1 bg-secondary-200 block w-[90%] bottom-4 absolute mx-auto "></div>
          </div>
          <div>
            <h3 className="text-[20px] mt-4 lg:mt-0 py-3 lg:text-[28px] font-semibold">{series.title}</h3>
            <div className="py-4 space-y-4">
              {series?.tracks?.map((track: any, i: number) => (
                <div key={track._id} className="flex space-x-5">
                  <p>{track.title}</p>
                  <div className="-mt-4 self-end">
                    <DownloadButton link={track.fileId} />
                  </div>
                  
                </div>
              ))}
            </div>
            {/* <audio controls>    
    <source src="https://drive.google.com/uc?export=open&id=1THABamhMVnm33kNeBjwCv-iH9-A6SN80" type="audio/mp3" />    
</audio> */}
{/* <ReactPlayer /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonDetail;

const DownloadButton = ({link}: any) => {
  return (
    <a href={`https://drive.google.com/uc?export=download&id=${link}`} download="cv">
      <DownloadIcon />
    </a>
  );
};
