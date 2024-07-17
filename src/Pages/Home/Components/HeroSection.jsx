import React from "react";
import leaves from "../Assets/earthBulb.png";
import Button from "../../../Components/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-[600px] items-center justify-center p-4">
      <div className="text-5xl mr-4">
        <h1 className="text-white">Cutting Edge Technology</h1>
        <h1 className="text-[#39B54A]">But, Sustainable</h1>
        <div className="mt-4" onClick={() => navigate("/Offerings")}>
          <Button
            background="bg-gray-300"
            textColor="text-green-600"
            text="Explore More"
            textsize="text-xl"
          />
        </div>
      </div>
      <div className="flex-shrink-0 w-1/2">
        <img
          className="object-contain w-full h-full"
          src={leaves}
          alt="Earth Bulb"
        />
      </div>
    </div>
  );
};

export default HeroSection;
