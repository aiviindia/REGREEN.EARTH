import React from "react";

const NavBar = () => {
  const navItems = [
    "Home",
    "Offering",
    // "Solutions",
    "Blogs",
    "About",
    "Contact Us",
  ];

  return (
    <div>
      <div className="w-full h-[1rem]"></div>
      <div className="flex justify-between bg-black text-[#39B54A] p-6 py-8 font-xl">
        <div>Regreenation Labs</div>
        <ul className="flex list-none gap-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="transition ease-in-out hover:transition-colors hover:-translate-y-1 hover:scale-110 duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <div>Login</div>
      </div>
    </div>
  );
};

export default NavBar;
