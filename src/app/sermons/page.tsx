import React from "react";

type Props = {};

const SermonLibrary = (props: Props) => {
  return (
    <section className="">
      <div className="bg-[#FAFAFA] h-[500px] flex items-center  mx-auto px-24">
        <div className="w-full md:w-full sm:px-8 md:px-10 xl:px-20">
          <p>OUR TEACHINGS</p>
          <h3 className="text-[45px] inline lg:text-[60px] xl:text-[84px] leading-[48px] lg:leading-[80px] mt-3 font-bold">Sermon Library</h3>
          <div className="w-full md:w-[50%] py-6">
            <p>
            Here you can find teachings from our current series or you can even
            go through our message archives and listen to messages from an older
            series. These are available to you 24/7 and can be shared amongst
            friends and family!
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SermonLibrary;
