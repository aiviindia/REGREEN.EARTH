import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

const TextImageSlider = ({ images, texts, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const nextSlide = () => {
    setAnimationDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setAnimationDirection("prev");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Slide every 5000ms (5 seconds)
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full px-10 py-10">
      <div className="absolute left-0 p-2 cursor-pointer" onClick={prevSlide}>
        <ArrowLeftCircle size={32} />
      </div>
      <div className="flex w-full h-full relative gap-2">
        <div
          className={`w-3/5 transition-transform duration-500 ${animationDirection === "next" ? "transform translate-x-0" : "transform -translate-x-full"}`}
        >
          <img
            src={images[activeIndex]}
            alt="Slider Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`w-2/5 p-4 text-white bg-black bg-opacity-50 flex flex-col gap-3 transition-transform duration-500 ${animationDirection === "next" ? "transform translate-x-0" : "transform -translate-x-full"}`}
        >
          <p className="text-3xl">{title[activeIndex]}</p>
          <p className="text-xl">{texts[activeIndex]}</p>
        </div>
      </div>
      <div className="absolute right-0 p-2 cursor-pointer" onClick={nextSlide}>
        <ArrowRightCircle size={32} />
      </div>
    </div>
  );
};

export default TextImageSlider;
