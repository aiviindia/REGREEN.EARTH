import React from "react";
import bankimage from "../Assets/industries/bank.png";
import coprate from "../Assets/industries/coprate.png";
import manufacture from "../Assets/industries/manufacture.png";
import realstate from "../Assets/industries/realstate.png";
import others from "../Assets/industries/others.png";

// Section Component
const Section = ({ image, title, isImageLeft }) => {
  return (
    <div
      className={`flex justify-between items-center px-[10rem] py-[2rem] text-white text-2xl ${isImageLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div>
        <img
          src={image || "/earth.svg"}
          alt={title || "Image"}
          className="w-60 h-60 object-cover"
        />
      </div>
      <div>
        <h2 className="rounded-full p-[1rem] border-2 hover:border-green-600 hover:text-green-600">
          {title || "industry"}
        </h2>
      </div>
    </div>
  );
};

// Industry Component
const Industry = () => {
  // Data array
  const data = [
    {
      image: `${bankimage}`,
      title: "Banking",
    },
    {
      image: `${coprate}`,
      title: "Corporate",
    },
    {
      image: `${manufacture}`,
      title: "Manufacturing",
    },
    {
      image: `${realstate}`,
      title: "Real-Estate",
    },
    {
      image: `${others}`,
      title: "Many Others",
    },
  ];

  return (
    <div>
      {/* Map through the data array and render a Section for each */}
      {data.map((item, index) => (
        <Section
          key={index} // Unique key for each item
          image={item.image} // Pass the image
          title={item.title} // Pass the title
          isImageLeft={index % 2 === 0} // Alternate image position
        />
      ))}
    </div>
  );
};

export default Industry;
