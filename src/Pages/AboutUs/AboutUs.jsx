import React from "react";
import Section from "../AboutUs/Components/Sections.jsx";

const sections = [
  {
    id: 1,
    image: "https://lorempic.com/640/480",
    title: "Our Mission",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum facilis laborum dignissimos consequuntur possimus ut magnam ad, rem tenetur, aut accusantium. Nisi!",
    position: "left",
  },
  {
    id: 2,
    image: "https://lorempic.com/640/480",
    title: "Our Vision",
    content:
      "Our vision is to create a sustainable future by leveraging cutting-edge technology and innovation. We aim to empower businesses and communities to embrace environmentally friendly practices.",
    position: "right",
  },
  {
    id: 3,
    image: "https://lorempic.com/640/480",
    title: "Our Values",
    content:
      "Integrity, innovation, and sustainability are at the core of everything we do. We believe in fostering a culture of transparency and responsibility in all our endeavors.",
    position: "left",
  },
  // Add more objects as needed
];

const AboutUs = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center text-white font-extrabold text-6xl py-10">
        About Us
      </div>
      {sections.map((section) => (
        <Section
          key={section.id}
          image={section.image}
          title={section.title}
          content={section.content}
          position={section.position}
        />
      ))}
    </div>
  );
};

export default AboutUs;
