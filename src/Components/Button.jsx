import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  background,
  textColor,
  text,
  width,
  textsize,
  rounded,
  onclick,
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onclick}
      className={`${background} ${textColor} ${width} ${textsize} ${rounded} py-2 px-4 text-center transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
