import React from "react";
import leaves from "../Assets/earthBulb.png";
import Button from "../../../Components/Button";
import { useNavigate } from "react-router-dom";
import video from "../Assets/HeroSection.mp4";
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex relative w-full  ">
      <video
        className="w-full opacity-30 "
        autoPlay
        loop
        muted
        src={video}
      ></video>
      <div className="flex flex-col absolute text-[#39B54A] font-extrabold text-6xl top-72 left-52">
        <p>Regreenation Labs</p>
        <p className="text-white text-4xl">
          Cutting edge technology, but sustainable
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
