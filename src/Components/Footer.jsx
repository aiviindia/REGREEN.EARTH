import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pages = [
  { name: "Home", path: "/" },
  { name: "Offerings", path: "/Offerings" },
  { name: "Blogs", path: "/Blogs" },
];
const contacts = [
  { name: "About Us", path: "/AboutUs" },
  { name: "Contact Us", path: "/ContactUs" },
];
const socials = [
  {
    logo: <Facebook />,
    link: "https://facebook.com/",
  },
  {
    logo: <Instagram />,
    link: "https://instagram.com/",
  },
  {
    logo: <Linkedin />,
    link: "https://linkedin.com/",
  },
  {
    logo: <Twitter />,
    link: "https://twitter.com/",
  },
  {
    logo: <Youtube />,
    link: "https://youtube.com/",
  },
];

const Footer = () => {
  return (
    <div className="pt-20 relative bottom-0 left-0 w-full bg-black text-white">
      <div
        className=" flex items-center px-10
      text-white text-3xl
      absolute rounded-xl bg-[#39B54A] w-[60%]  right-0 h-[4rem]"
      >
        Regreenation Labs
      </div>
      <div className="flex flex-col pt-24 px-40 w-full gap-14 items-center justify-center">
        <div className="flex gap-32">
          <div>
            <p className="text-2xl">Pages</p>
            <ul className="mt-2">
              {Pages.map((page, index) => (
                <li key={index} className="my-4">
                  <Link to={page.path} className="text-white hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl"></p>
            <ul className="mt-2">
              {Pages.map((page, index) => (
                <li key={index} className="my-4">
                  <Link to={page.path} className="text-white hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl">Pages</p>
            <ul className="mt-2">
              {Pages.map((page, index) => (
                <li key={index} className="my-4">
                  <Link to={page.path} className="text-white hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl">Contact us</p>
            <ul className="mt-2">
              {contacts.map((item, index) => (
                <li key={index} className="my-4">
                  <Link to={item.path} className="text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl">Follow us on</p>
            <ul className="mt-2 flex gap-4">
              {socials.map((item, index) => (
                <li key={index} className="my-4">
                  <a href={item.link} className="text-white hover:underline">
                    {item.logo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center opacity-50 text-white py-4">
        &copy; 2024 Regreenation Labs. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
