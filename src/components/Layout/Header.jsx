import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../Button";
import logo from "../../assets/logo.png";
import logoName from "../../assets/logoName.svg";

const Header = () => {
  return (
    <header className="container px-14 py-6 lg:py-7 border-b-[2px] border-[#dadada] lg:border-none">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-3 lg:hidden">
          <GiHamburgerMenu style={{ color: "#6E39B7", fontSize: "3.9rem" }} />
          <div>
            <img src={logo} alt="PRINTIFY" className="w-[3.2rem]" />
          </div>
        </div>
        <div className="py-1 w-full hidden lg:flex lg:justify-between">
          <div>
            <img src={logoName} alt="" />
          </div>
          <div className="flex gap-11">
            <ul className="font-sora font-medium flex items-center gap-6 text-[1.6rem] text-[#26262e] tracking-wide">
              <li>Catalog</li>
              <li>How It Works</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Services</li>
              <li>Use-Cases</li>
              <li>Contact Us</li>
            </ul>
            <Button
              bg="bg-[#6C5DD4]"
              paddingY="py-[1.25rem]"
              paddingX="px-[1.35rem]"
              text="text-2xl"
              font="font-bold"
              color="text-white"
              content="Get Started"
            />
          </div>
        </div>
        <nav>
          <div className="block lg:hidden">
            <Button
              bg="bg-[#6C5DD4]"
              paddingY="py-[1.25rem]"
              paddingX="px-[1.35rem]"
              text="text-2xl"
              font="font-bold"
              color="text-white"
              content="Get Started"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
