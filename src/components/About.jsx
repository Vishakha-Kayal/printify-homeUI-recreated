import { useEffect } from "react";
import React from "react";
import { heroQualities } from "../assets/assets";
import herobg from "../assets/herobg.svg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
 
  useGSAP(() => {
    gsap.from(".image", {
      y: -200,
      opacity:0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger:{
        trigger:".about"
      }
    });
    gsap.from(".title", {
      y: -200,
      duration: 1,
      opacity:0,
      stagger: 0.2,
      scrollTrigger:{
        trigger:".about"
      }
    });
  });

  return (
    <div className="mt-36 py-[7rem] pl-[3rem] gap-20 lg:gap-0 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[70vh] place-items-center"
    style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {heroQualities.map((data) => {
        return (
          <div className="mb-8 lg-mb-0 h-full items-center lg:items-baseline  flex flex-col justify-center gap-11">
            <div className="image opacity-1 lg:h-[33%] overflow-hidden flex justify-between items-center">
              <img src={data.image} alt="" className="rounded-full w-[16rem] h-[16rem] lg:w-44 lg:h-44 object-center" />
            </div>
            <h1 className="font-semibold h-[8%] text-5xl lg:text-4xl title font-sora">{data.title}</h1>
            <p className="title h-[20%] font-medium tracking-tight w-[84%] text-[2rem] lg:text-[1.7rem] text-[#485256] text-center lg:text-left">{data.titleDesc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
