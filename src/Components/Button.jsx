import React from "react";

const Button = ({ background, textColor, text, width, textsize }) => {
  return (
    <button
      className={`${background} ${textColor} ${width} ${textsize} rounded-md py-2 px-4 text-center transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
