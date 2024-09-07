import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import consultation from "../Assets/consultation.png";
import climateTech from "../Assets/climateTech.png";
import techoSphere from "../Assets/techoSphere.png";
import knowledge from "../Assets/knowledgeAcad.png";
const OfferingsSection = () => {
  const services = [
    {
      logo: `${consultation}`,
      title: "Consultation",
      description:
        "We provide expert consulting services to integrate sustainable practices and advanced technology solutions into your business.",
      path: "/consultation",
    },
    {
      logo: `${climateTech}`,
      title: "Renewable Energy Solutions",
      description:
        "Our team offers state-of-the-art renewable energy systems to help reduce your carbon footprint and enhance energy efficiency.",
      path: "/renewable-energy",
    },
    {
      logo: `${techoSphere}`,
      title: "Eco-friendly Infrastructure",
      description:
        "We design and develop eco-friendly infrastructure tailored to meet the unique needs of your business, ensuring sustainability at every step.",
      path: "/eco-friendly-infrastructure",
    },
    {
      logo: `${knowledge}`,
      title: "Sustainability Training",
      description:
        "Our comprehensive sustainability training programs equip your team with the knowledge and skills to implement and maintain green practices.",
      path: "/sustainability-training",
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-[70%]">
      {services.map((service, index) => (
        <div index={index}>
          <Section
            logo={service.logo}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default OfferingsSection;

const Section = ({ logo, title, description, path }) => {
  return (
    <div className="flex justify-center items-center align-middle gap-10 px-10 rounded-xl h-[10rem] hover:bg-[#39B54A]">
      <div className="flex object-scale-down w-[20rem] h-[20rem]">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="text-white text-3xl font-bold">{title}</div>
      <div className="text-white text-xl">{description}</div>
      <div className=" p-5 rounded-full ">
        <CircleArrowOutUpRight size={30} />
      </div>
    </div>
  );
};
