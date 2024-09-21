import React from "react";
import HeroSection from "./Components/HeroSection";
import Leaves from "../Home/Assets/LeavesBG.png";
import ImageCarousel from "./Components/ImageCrousal";
import SmallCard from "./Components/SmallCard";
import OfferingsSection from "./Components/OfferingsSection";
import PartnersMarquee from "./Components/PartnersMarquee";
import SuccessCard from "./Components/SuccessCard";
import Skewbar from "../../Components/Skewbar";
import Button from "../../Components/Button";
import OfferingsCards from "./Components/OfferingsCards";
import Industry from "./Components/ Industry";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
const Home = () => {
  const navigate = useNavigate();

  const items = [
    <div className="item" data-value="1">
      <img src="https://lorempic.com/640/480" alt="" />
    </div>,
    <div className="item" data-value="2">
      <img src="https://lorempic.com/640/480" alt="" />
    </div>,
    <div className="item" data-value="3">
      <img src="https://lorempic.com/640/480" alt="" />
    </div>,
    <div className="item" data-value="4">
      <img src="https://lorempic.com/640/480" alt="" />
    </div>,
    <div className="item" data-value="5">
      <img src="https://lorempic.com/640/480" alt="" />
    </div>,
  ];

  const reviews = [
    {
      title: "Abhay Pratap Singh",
      image: "https://picsum.photos/200",
      ratings: "5",
      content:
        "Working with Regreenation has really helped us in many ways. We are able to reduce our waste production by 50% and save more on other resources.",
    },
    {
      title: "Nisha Sharma",
      image: "https://picsum.photos/200",
      ratings: "4",
      content:
        "The consultancy services provided by Regreenation were top-notch. They guided us through the process of implementing sustainable practices effectively.",
    },
  ];

  // Array for OfferingsCards rows
  const offeringsRows = [
    { marginClass: "" },
    { marginClass: "mr-32" },
    { marginClass: "mr-64" },
  ];

  return (
    <div className="bg-black flex flex-col px-[8rem] gap-[8rem]">
      <HeroSection />
      <section>
        <Skewbar title="Our Services" />
        <p className="text-white text-lg w-[840px]">
          Regreenation Labs offers expert consulting in sustainability, advanced
          technology integration, and eco-friendly solutions. We help businesses
          reduce waste, optimize operations, and implement green practices for a
          sustainable future.
        </p>
        <div className="py-5">
          <Button
            onclick={() => navigate("/Offerings")}
            background="bg-green-600"
            textColor="text-white-600 hover:text-black"
            text="Know more"
            textsize="text-xl"
            rounded="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-10 my-10">
          {offeringsRows.map((row, index) => (
            <div
              key={index}
              className={`flex justify-end gap-10 ${row.marginClass}`}
            >
              <OfferingsCards />
              <OfferingsCards />
            </div>
          ))}
        </div>
      </section>

      <div>
        <Skewbar title="Working with us" />
        <div className="flex items-center justify-center py-12 gap-[8rem]">
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
        </div>
      </div>

      <div>
        <Skewbar title="Industries" />
        <div>
          <Industry />
        </div>
      </div>

      <div>
        <Skewbar title="Why Us?" />
        <div className="flex justify-center gap-16 py-5 flex-wrap">
          {reviews.map((item, index) => (
            <div key={index}>
              <SuccessCard
                title={item.title}
                image={item.image}
                ratings={item.ratings}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Skewbar title="Our Work" />
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000}
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
  );
};

export default Home;
