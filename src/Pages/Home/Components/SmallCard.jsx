import React from "react";

const SmallCard = ({ image, number, title }) => {
  return (
    <div className=" flex flex-col text-white h-[200px] w-[200px] items-center justify-center gap-2 border-2 border-green-300">
      <div className=" flex h-[150px] w-[150px]">
        <img src={image} alt="" />
      </div>
      <div className="text-xl">10,000+</div>
    </div>
  );
};

export default SmallCard;
