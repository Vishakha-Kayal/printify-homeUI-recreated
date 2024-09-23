import React from "react";
import higherprofits from "../assets/higherprofits.svg";
import { heroQualities } from "../assets/assets";
const About = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-[70vh] place-items-center">
      {heroQualities.map((data) => {
        return (
          <div className="flex flex-col items-center gap-11">
            <div>
              <img src={data.image} alt="" />
            </div>
            <h1 className="text-4xl tracking-tighter font-sora">{data.title}</h1>
            <p className="w-[80%] text-[1.6rem] text-[#485256] text-center">{data.titleDesc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
