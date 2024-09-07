import React from "react";
import Section from "../AboutUs/Components/Sections.jsx";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TeamMember from "./Components/TeamMember.jsx";

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
const items = [
  <div className="item" data-value="1">
    <img src="https://lorempic.com/640/480" alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src="https://lorempic.com/640/480" alt="" />
  </div>,
  <div className="item" data-value="3">
    3 <img src="https://lorempic.com/640/480" alt="" />
  </div>,
  <div className="item" data-value="4">
    4 <img src="https://lorempic.com/640/480" alt="" />
  </div>,
  <div className="item" data-value="5">
    5 <img src="https://lorempic.com/640/480" alt="" />
  </div>,
];

const AboutUs = () => {
  return (
    <div className="bg-black ">
      <div className="flex items-center justify-center text-white font-extrabold text-6xl py-10">
        About Us
      </div>

      <div className="px-20">
        <p className="flex py-10 font-bold text-5xl text-[#39B54A]">
          Our story
        </p>
        <div className=" flex ">
          <div className="text-white text-xl w-[50%] p-10">
            Regreenation Labs is dedicated to transforming businesses with
            sustainable solutions and cutting-edge technology. Our mission is to
            reduce waste production and promote eco-friendly practices. Since
            our inception, we've partnered with companies to implement
            strategies that not only benefit the environment but also enhance
            operational efficiency. Our expert team combines innovation with a
            passion for sustainability, ensuring our clients lead the way in
            green business practices. Join us in our journey to create a greener
            future, one sustainable step at a time. Together, we can make a
            lasting impact on our planet.
          </div>
          <div className="w-[50%] h-full p-10">
            <AliceCarousel
              items={items}
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={1000}
              animationDuration={1000}
              animationType="fadeout"
              infinite
              touchTracking={false}
              disableDotsControls
              disableButtonsControls
              autoHeight
              autoWidth
            />
          </div>
        </div>
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
      <div className="px-20">
        <p className="flex py-10 font-bold text-5xl text-[#39B54A]">
          Meet our team
        </p>
        <div className=" flex flex-col gap-5 items-center  justify-center">
          <TeamMember
            name={"Abhay Pratap singh"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium?"
            }
            title={"new text"}
            image={
              "https://fastly.picsum.photos/id/230/400/300.jpg?hmac=PV0FCndROICGo5pvRP4CRYP3vksCGJ3Kvs5c7nAL4-s"
            }
          />
          <TeamMember
            name={"Abhay Pratap singh"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium?"
            }
            title={"new text"}
            image={
              "https://fastly.picsum.photos/id/230/400/300.jpg?hmac=PV0FCndROICGo5pvRP4CRYP3vksCGJ3Kvs5c7nAL4-s"
            }
          />
          <TeamMember
            name={"Abhay Pratap singh"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium?"
            }
            title={"new text"}
            image={
              "https://fastly.picsum.photos/id/230/400/300.jpg?hmac=PV0FCndROICGo5pvRP4CRYP3vksCGJ3Kvs5c7nAL4-s"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
