import React from "react";
import RatingsStars from "../../../Components/RatingsStars";

const SuccessCard = ({ image, title, ratings, content }) => {
  return (
    <div className="flex flex-col gap-4 w-[20rem] h-[23rem] bg-black p-4 rounded-lg">
      <div className="flex justify-center">
        <img
          className="rounded-full w-[5rem] h-[5rem]"
          src={image}
          alt="ProfileImage"
        />
      </div>
      <div className="flex justify-center">
        <RatingsStars rating={ratings} />
      </div>
      <div className="flex-grow">
        <p className="text-white">{content}</p>
      </div>
      <div className="text-white mt-auto">{title}</div>
    </div>
  );
};

export default SuccessCard;
