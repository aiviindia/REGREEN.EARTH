import React from "react";

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
      image: "src/Pages/Home/Assets/industries/bank.png",
      title: "Banking",
    },
    {
      image: "src/Pages/Home/Assets/industries/coprate.png",
      title: "Corporate",
    },
    {
      image: "src/Pages/Home/Assets/industries/manufacture.png",
      title: "Manufacturing",
    },
    {
      image: "src/Pages/Home/Assets/industries/realstate.png",
      title: "Real-Estate",
    },
    {
      image: "src/Pages/Home/Assets/industries/others.png",
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
