import React from "react";
import { heroQualities } from "../assets/assets";
import herobg from "../assets/herobg.svg"

const About = () => {
  return (
    <div className="pl-[3rem] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[70vh]  place-items-center"
    style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {heroQualities.map((data) => {
        return (
          <div className=" h-full flex flex-col justify-center gap-11">
            <div className="h-[27%] overflow-hidden flex justify-between items-center">
              <img src={data.image} alt="" className="rounded-full  w-44 h-44 object-center" />
            </div>
            <h1 className="font-semibold h-[8%] text-4xl tracking-tighter font-sora">{data.title}</h1>
            <p className="h-[20%] font-medium w-[84%] text-[1.6rem] text-[#485256]">{data.titleDesc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
