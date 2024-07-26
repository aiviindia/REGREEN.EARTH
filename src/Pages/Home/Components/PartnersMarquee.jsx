import { LocateOff } from "lucide-react";
import React from "react";

const PartnersMarquee = () => {
  return (
    <div className="w-full h-[200px]">
      <marquee behavior="slide" direction="left">
        <div className="flex py-[5rem]"></div>
      </marquee>
    </div>
  );
};

export default PartnersMarquee;
