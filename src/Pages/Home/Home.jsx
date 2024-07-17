import React from "react";
import HeroSection from "./Components/HeroSection";
import Leaves from "../Home/Assets/LeavesBG.png";
import ImageCarousel from "./Components/ImageCrousal";

const Home = () => {
  const images = [
    {
      id: "1",
      url: "",
      text: "",
    },
  ];

  return (
    <div className="bg-black">
      <HeroSection />
      <div className='w-full bg-[url("./assets/LeavesBG.png")]'>
        <div className="flex flex-col p-10 py-10  text-white font-semibold text-xl space-y-6">
          <div className="space-y-6 backdrop-blur-lg py-4 px-4 rounded-xl">
            <h1 className="text-2xl">
              Welcome to Regreenation Labs, where innovation meets
              sustainability
            </h1>
            <p>
              At Regreenation Labs, we are committed to creating a better world
              through cutting-edge technology solutions designed with the planet
              in mind. Our mission is to empower businesses and communities to
              embrace sustainability by integrating environmentally friendly
              practices and technologies into everyday operations.
            </p>
            <p>
              From developing state-of-the-art renewable energy systems to
              designing eco-friendly infrastructure, Regreenation Labs is at the
              forefront of the sustainability movement. Our solutions are
              tailored to meet the unique needs of each client, ensuring that
              sustainability is seamlessly woven into the fabric of their
              operations.
            </p>
            <p>
              We are passionate about fostering a culture of sustainability and
              innovation. Through our consultancy services, we provide strategic
              insights, cutting-edge technology, and hands-on support to help
              businesses transition to greener practices. Whether you are a
              startup looking to build a sustainable foundation or an
              established company aiming to enhance your environmental
              performance, Regreenation Labs is your trusted partner in the
              quest for sustainability.
            </p>
            <p>
              Join us in our mission to create a sustainable future. Together,
              we can innovate, inspire, and implement solutions that not only
              protect our planet but also create a thriving, sustainable economy
              for generations to come. Explore the endless possibilities with
              Regreenation Labs – where technology meets sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
