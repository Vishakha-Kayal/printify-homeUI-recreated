import React from "react";
import { heroQualities } from "../assets/assets";
import herobg from "../assets/herobg.svg"

const About = () => {
  return (
    <div className="mt-36 py-[7rem] pl-[3rem] gap-20 lg:gap-0 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[70vh] place-items-center"
    style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {heroQualities.map((data) => {
        return (
          <div className="mb-8 lg-mb-0 h-full items-center lg:items-baseline  flex flex-col justify-center gap-11">
            <div className="lg:h-[33%] overflow-hidden flex justify-between items-center">
              <img src={data.image} alt="" className="rounded-full w-[16rem] h-[16rem] lg:w-44 lg:h-44 object-center" />
            </div>
            <h1 className="font-semibold h-[8%] text-5xl lg:text-4xl tracking-tighter font-sora">{data.title}</h1>
            <p className="h-[20%] font-medium w-[84%] text-[2rem] lg-text-[1.6rem] text-[#485256] text-center lg:text-left">{data.titleDesc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
