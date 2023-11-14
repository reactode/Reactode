import { useState } from "react";
import logo from "/reactodeLogo.png";
import menu from "/menu.svg";

import close1 from "/close1.svg";

const navLink = [
  {
    id: 0,
    header: "Home",
    link: "/",
  },
  {
    id: 1,
    header: "Members",
    link: "/Members",
  },
  {
    id: 2,
    header: "Team ",
    link: "/Teams",
  },
  {
    id: 3,
    header: "Projects",
    link: "/Projects",
  },
  {
    id: 4,
    header: "Business",
    link: "/Business",
  },
 ];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((prevToggle) => !prevToggle);
  const closeMenu = () => setToggle(false);

  return (
    <div className="mb-4">
      <div className="flex justify-between align-center text-2xl">
        {/* Logo */}

        <img className=" self-center max-sm:h-8" src={logo} alt="" />

        {/* Navlinks */}
        <div className="hidden md:flex self-center">
          <div className="flex gap-x-6 self-center text-white text-xl xl:text-3xl font-medium font-['Inter']">
            {navLink.map((step) => (
              <a
                key={step.id}
                id={step.id}
                href={step.link}
                target="_blank"
                rel="noreferrer"
              >
                {step.header}
              </a>
            ))}
          </div>
        </div>

        <div className="flex  gap-x-2 sm:gap-x-4 self-center   ">

          <a href="">
            <button className=" p-2 sm:px-4 px-2 self-center  text-white text-xs lg:text-xl font-semibold font-['Roboto']" style={{borderRadius: "0.625rem",
border: "1px solid rgba(0, 0, 0, 0.50)",
background: "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(237, 146, 215, 0.00) 26.73%), radial-gradient(96.63% 140.33% at 76.68% 66.67%, rgba(96, 46, 166, 0.00) 0%, rgba(201, 119, 214, 0.50) 100%)",
backgroundBlendMode: "overlay, normal",
boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.10), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset"}}>
             Contact us
            </button>
          </a>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center p-1 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {toggle ? (
                <img className="h-8 w-8" src={close1} alt="" />
              ) : (
                <img className="h-8 w-8" src={menu} alt="" />
              )}
            </button>
          </div>
        </div>

        {/* Hamburger */}
      </div>

      {/* Mobile Nav */}
      {toggle && (
        <div className="flex flex-col md:hidden">
          <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
            {navLink.map((step) => (
              <a
                key={step.id}
                className="text-center cursor-pointer text-gray-100 hover:text-[#8B70AD] block px-3 py-2 rounded-md text-base font-medium"
                href={step.link}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                {step.header}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}