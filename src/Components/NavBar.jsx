import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Offerings", path: "/Offerings" },
    { name: "Blogs", path: "/Blogs" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  return (
    <div>
      <div className='w-full h-[1rem] bg-[url("./assets/LeavesBG.png")]'></div>
      <div className="flex justify-between bg-black text-[#39B54A] p-6 py-8 text-xl">
        <div>Regreenation Labs</div>
        <ul className="flex list-none gap-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer transition ease-in-out hover:transition-colors hover:-translate-y-1 hover:scale-110 duration-300 ${
                location.pathname === item.path ? "text-white" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div>Login</div>
      </div>
      <div className='w-full h-[0.1rem] bg-[url("./assets/LeavesBG.png")]'></div>
    </div>
  );
};

export default NavBar;
