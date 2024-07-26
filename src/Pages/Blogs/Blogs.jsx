import React from "react";
import BlogCard from "./Components/BlogCard";
import ImageCarousel from "../../Components/ImageCarosel";
import TextImageSlider from "../../Components/TextImageSlider";

const blogs = [
  {
    id: "1",
    image: "https://lorempic.com/640/480",
    title: "This is a random Article",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, unde ipsam nihil fugiat inventore quos nam atque quae totam tenetur.",
  },
  {
    id: "2",
    image: "https://lorempic.com/640/480",
    title: "Exploring the World of Technology",
    text: "Technology is rapidly evolving, changing the way we live and work. In this article, we delve into the latest trends and innovations in the tech world.",
  },
  {
    id: "3",
    image: "https://lorempic.com/640/480",
    title: "The Importance of Sustainable Living",
    text: "Sustainability is crucial for the future of our planet. Learn how you can make small changes in your daily life to live more sustainably.",
  },
  {
    id: "4",
    image: "https://lorempic.com/640/480",
    title: "The Future of Renewable Energy",
    text: "Renewable energy sources like solar and wind power are becoming more prevalent. Discover the benefits and challenges of transitioning to renewable energy.",
  },
  {
    id: "5",
    image: "https://lorempic.com/640/480",
    title: "Healthy Eating Habits for a Better Life",
    text: "Eating healthy is essential for maintaining good health and well-being. In this article, we share tips and recipes for a balanced diet.",
  },
  {
    id: "6",
    image: "https://lorempic.com/640/480",
    title: "Traveling the World on a Budget",
    text: "Traveling doesn’t have to be expensive. Learn how to explore the world without breaking the bank with these budget-friendly travel tips.",
  },
  {
    id: "7",
    image: "https://lorempic.com/640/480",
    title: "Traveling the World on a Budget",
    text: "Traveling doesn’t have to be expensive. Learn how to explore the world without breaking the bank with these budget-friendly travel tips.",
  },
  {
    id: "8",
    image: "https://lorempic.com/640/480",
    title: "Traveling the World on a Budget",
    text: "Traveling doesn’t have to be expensive. Learn how to explore the world without breaking the bank with these budget-friendly travel tips.",
  },
];
const images = blogs.map((blog) => blog.image);
const texts = blogs.map((blog) => blog.text);
const title = blogs.map((blog) => blog.title);
const Blogs = () => {
  return (
    <div className="bg-black px-24">
      <div className="text-white text-6xl font-extrabold flex items-center justify-center py-10">
        {" "}
        Featured Blogs{" "}
      </div>
      <div className="backdrop-blur-3xl bg-white w-full h-[500px]">
        <TextImageSlider images={images} texts={texts} title={title} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20 ">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            text={blog.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
