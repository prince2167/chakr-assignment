"use client";

import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { MdIndeterminateCheckBox } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigations = [
    {
      icon: <CgProfile />,
      label: "My Profile",
    },
    {
      icon: <FaPlus />,
      label: "Flipkart Plus Zone ",
    },
    {
      icon: <MdIndeterminateCheckBox />,
      label: "Orders",
    },
    {
      icon: <FaHeart />,
      label: "Wishlist",
    },
    {
      icon: <FaDatabase />,
      label: "Rewards",
    },
    {
      icon: <FaGift />,
      label: "Gift Cards",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav className="w-[430px] sm:w-full bg-[#2975f0] sticky top-0 z-50 py-2 px-10 flex-wrap sm:non-wrap lg:px-[200px] flex justify-between items-center ">
      <div className="flex items-center gap-4 flex-col  sm:flex-row ">
        <Logo />
        <div className="hidden sm:block">
          {" "}
          <Searchbar />
        </div>
      </div>
      <button
        className="bg-white relative text-[#2975f0] font-semibold px-2 sm:px-10  py-1 rounded-sm mt-1 sm:mt-0"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Login
      </button>

      {open && (
        <div
          className="absolute h-[300px] w-[260px] top-12 right-36  "
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {open && (
            <ul className=" bg-white border mt-3 w-full border-gray-300">
              <li className="flex justify-between items-center text-sm font-semibold p-3 hover:bg-[#f0f2f6]">
                <p>New customer?</p>
                <p className="text-[#2975f0] ">Sign up</p>
              </li>
              {navigations.map((nav) => (
                <li
                  key={nav.label}
                  className="flex items-center gap-4 border border-gray-100 p-4 hover:bg-[#f0f2f6]"
                >
                  <span className="text-[#2975f0]">{nav.icon}</span>
                  <p className="text-[14px]">{nav.label}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
