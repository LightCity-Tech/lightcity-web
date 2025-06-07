"use client";

import { Button, Typography } from "@/src/ui";
import React, { useEffect, useState } from "react";
import { getASeries } from "../../services/api";
import { useSearchParams } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

const ButtonLeft = dynamic(
  () => import("@/public/assets/svgs/button-icon-left.svg")
);
const DownloadIcon = dynamic(
  () => import("@/public/assets/svgs/save-icon.svg")
);

type Props = {};

const SermonDetail = (props: Props) => {
  const router = useRouter();

  const [series, setSeries] = useState<ISeries[] | any>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const _id = searchParams.get("id");

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const res = await getASeries(_id as string);
        setSeries(res?.data.series);
        setLoading(false);
      } catch (error) {}
    };
    fetchSeries();
  }, [_id]);

  return loading ? (
    <div className="w-full flex mt-16 justify-center h-full items-center">
      <InfinitySpin width="300" color="rgb(232 157 44)" />
    </div>
  ) : (
    <section className="h-auto ">
      <div className="w-full bg-[#fff] px-5 sm:px-8 md:px-10 mx-auto lg:px-24 xl:px-20 flex">
        <Button
          variant="no-border"
          color="primary"
          label={"Back to All Messages"}
          leftIcon={<ButtonLeft />}
          customClassName="bg-[#fff] hover:text-[#D69429]"
          onClick={() => router.back()}
        />
      </div>
      <div className="flex w-full mb-4 lg:mt-4 items-center mx-auto lg:max-w-[980px] xl:max-w-[1180px] px-5">
        <div className="w-full lg:flex lg:flex-row flex flex-col space-x-0 lg:space-x-12">
          <div className="w-full h-[250px] p-4 bg-black flex flex-col justify-between rounded-t-lg mt-4">
            <span className="block h-1 bg-secondary-200 w-full"></span>
            <div>
              <Typography variant="h3" color="white" align="center">
                {series?.title}
              </Typography>
              {series?.tracks?.length > 1 && (
                <Typography variant="caption-mid" color="white" align="center">
                  (A Series)
                </Typography>
              )}
            </div>
            <Typography variant="body-reg" color="primary-main" align="center">
              Pastor Tochi Madubuobi
            </Typography>
            <span className="block h-1 bg-secondary-200 w-full"></span>
          </div>
          <div className="w-full">
            <h3 className="text-[20px] mt-4 lg:mt-0 py-3 lg:text-[28px] font-semibold">
              {series?.title}
            </h3>
            <div className="">
              {series?.tracks?.map((track: any) => (
                <div
                  key={track?._id}
                  className={`group w-full py-2 px-4 flex justify-between items-center relative transition duration-300 hover:bg-secondary-25 `}
                >
                  <p>{track?.title}</p>
                  <div
                    className={`flex justify-center items-center  small-mobile:bg-secondary-25 small-mobile:rounded-lg ${styles.download}`}
                  >
                    <DownloadButton link={track?.fileId} />
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

const DownloadButton = ({ link }: any) => {
  return (
    <a
      href={`https://drive.google.com/uc?export=download&id=${link}`}
      download="cv"
      className=""
    >
      <DownloadIcon />
    </a>
  );
};
