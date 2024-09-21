import React from "react";

const TeamMember = ({ name, image, title, description, Linkedin }) => {
  return (
    <div className="w-full">
      <div className="flex gap-10 w-full rounded-xl p-10 border border-[#39B54A] transition duration-300 hover:bg-[#39B54A] hover:shadow-xl hover:scale-105 transform">
        <div className="w-[30%] transition-transform duration-300 hover:scale-110">
          <img className="rounded-full" src={image} alt={name} />
        </div>
        <div className="w-[70%] flex flex-col gap-5 text-white">
          <div className="text-2xl font-semibold">{name}</div>
          <div className="text-xl">{title}</div>
          <div className="text-lg">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
