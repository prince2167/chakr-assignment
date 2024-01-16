import React from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className=" w-[330px] flex justify-between items-center  bg-white h-[36px] px-2 rounded-sm  shadow-xl lg:w-[550px] ">
      <input
        placeholder="Search for products, brands and more"
        className=" w-full text-[14px] border border-none outline-none "
      />
      <span className="text-[#2975f0] font-bold">
        <IoIosSearch size="20" />
      </span>
    </div>
  );
};

export default Searchbar;
