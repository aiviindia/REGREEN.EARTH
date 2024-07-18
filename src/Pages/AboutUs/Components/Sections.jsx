import React from "react";

const Section = ({ image, title, content, position = "left" }) => {
  return (
    <div className="flex p-20 gap-8 items-center align-middle">
      {position === "left" && (
        <div>
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="flex flex-col">
        <div className="text-4xl text-green-500 py-5">{title}</div>
        <div className="text-white text-xl">{content}</div>
      </div>
      {position === "right" && (
        <div>
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      )}
    </div>
  );
};

export default Section;
