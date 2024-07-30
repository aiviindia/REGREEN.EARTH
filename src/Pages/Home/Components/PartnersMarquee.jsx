import { LocateOff, Ticket } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import lego from "../Assets/LegoLogo.png";
const partners = [
  {
    id: "1",
    logo: "/earth.svg",
    title: "",
  },
  {
    id: "1",
    logo: "/earth.svg",
    title: "",
  },
  {
    id: "1",
    logo: "/earth.svg",
    title: "",
  },
  {
    id: "1",
    logo: "/earth.svg",
    title: "",
  },
];

const PartnersMarquee = () => {
  return (
    <div className=" flex justify-center items-centerw-full h-[200px] ">
      <Marquee>
        <div className="flex  gap-24">
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
          <img width={100} height={100} src={lego} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default PartnersMarquee;
