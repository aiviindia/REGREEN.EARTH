import React from "react";
import leaves from "../Assets/earthBulb.png";
import Button from "../../../Components/Button";
import { useNavigate } from "react-router-dom";
import video from "../Assets/HeroSection.mp4";
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between  py-10">
      <div className="flex flex-col gap-5 text-2xl text-white">
        <div className="font-bold text-[48px] leading-none text-green-600">
          aivi Labs
        </div>
        <p className="text-[28px]">sustinable cutting edge technology</p>
        <div className="flex gap-5">
          <Button
            onclick={() => navigate("/AboutUs")}
            background="bg-white"
            textColor="text-green-600 hover:text-black"
            text="Read more"
            textsize="text-xl"
            rounded={"rounded-full"}
          >
            Know More
          </Button>
          <Button
            background="bg-green-600"
            textColor="text-white-600 hover:text-black"
            text="Get started"
            textsize="text-xl"
            rounded={"rounded-full"}
          >
            Get Started
          </Button>
        </div>
      </div>
      <img src="/mainlogo.svg" alt="" />
    </div>
  );
};

export default HeroSection;
