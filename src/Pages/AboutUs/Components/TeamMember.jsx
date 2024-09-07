import React from "react";

const TeamMember = ({ name, image, title, discription, Linkedin }) => {
  return (
    <div>
      <div className="flex gap-10 w-full rounded-xl hover:bg-[#39B54A] p-10 border border-[#39B54A] ">
        <div className="w-[30%]">
          <img className=" rounded-full" src={image} alt={name} />
        </div>
        <div className=" w-[70%] flex flex-col gap-5 text-white">
          <div>{name}</div>
          <div>{title}</div>
          <div>{discription}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
