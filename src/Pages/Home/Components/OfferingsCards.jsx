import React from "react";
import newlogo from "../Assets/climateTech.png";

const OfferingsCards = ({ logo, title, content }) => {
  return (
    <div className="flex flex-col gap-2 w-[20rem]  rounded-3xl border-white border-2 text-white px-6 py-4 hover:bg-green-600">
      <div className="flex items-center gap-5">
        <img
          src={logo}
          alt="Climate Tech Logo"
          className="block"
          style={{ width: "26.97px", height: "31px" }}
        />
        <h1>{title}</h1>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default OfferingsCards;
