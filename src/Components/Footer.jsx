import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className=" bottom-0 left-0 w-full h-52 bg-black ">
      <div className="w-full h-[1px]  bg-gray-600 "> </div>
      <div className="flex flex-col items-center justify-center py-6  text-white">
        <p className="font-extrabold text-3xl"> Follow us on our socials</p>
        <div className="flex gap-5 py-6">
          <Facebook size={40} />
          <Instagram size={40} />
          <Linkedin size={40} />
          <Twitter size={40} />
        </div>
        <div className=" flex gap-10 font-bold text-xl">
          <div className="flex gap-4">
            <Phone />
            <p>+91 9876543211</p>
          </div>
          <div className="flex gap-4">
            <Mail />
            <p>regreenationlabs@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
