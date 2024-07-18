import React from "react";
import Button from "../../../Components/Button";

const defaultImage = "https://picsum.photos/200/300";
const defaultText =
  "This is the default text for the blog card. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex odit a consequuntur minus iure dolores dolore, sed unde incidunt sequi delectus, qui cupiditate?";

const BlogCard = ({ text = defaultText, title, image = defaultImage }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-0 pb-[40%]">
        <img
          src={image}
          alt={title || "Blog Image"}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex p-4 flex-col justify-center h-[60%]">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="flex items-center justify-center py-2">
        <Button
          width={"w-full"}
          background="bg-black"
          textColor="text-green-600 hover:text-white"
          text="Read more"
          textsize="text-xl"
        />
      </div>
    </div>
  );
};

export default BlogCard;
