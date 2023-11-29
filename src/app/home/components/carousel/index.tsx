import { useEffect, useRef, useState } from 'react';

import React from 'react';
import Image from 'next/image';

type Props = {
  items: string[],
  interval: number
}

export const AutoplayCarousel = ({ items, interval = 4000 }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, items.length]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
        //   transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {items.map((item: any, index: number) => (
          <div
            key={index}
            style={{ boxSizing: "border-box" ,  flex: "0 0 100%",
          
            height: '100%', width: '100%'}}
          >
           {item}
          </div>
        ))}
      </div>
    </div>
  );
};