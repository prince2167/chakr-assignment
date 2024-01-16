/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

interface IProps {
  id: number;
  name: string;
  size: string;
  seller: string;
  mrp: number;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, size, seller, mrp, price, image }: IProps) => {
  return (
    <div className="bg-white w-full  py-6 px-[24px] border border-gray-200">
      <div className=" flex gap-10 lg:flex-nowrap ">
        <div>
          <img
            src={image}
            alt="product"
            className="w-[110px] object-cover pl-1"
          />
        </div>

        {/* list */}
        <div className="w-full flex flex-col gap-3">
          <div>
            <div className="flex w-full justify-between items-center flex-wrap ">
              <p>{name}</p>
              <div className="flex ">
                Delivery by Fri 19 |{" "}
                <p className="line-through text-gray-400 ml-1">₹40</p>{" "}
                <span className="text-green-600 ml-1">Free</span>
              </div>
            </div>
            <p className="text-gray-400 text-[15px]">Size: {size}</p>
            <p className="text-gray-400 text-[15px] mt-3">Seller: {seller}</p>
          </div>
          <div>
            <span className="line-through text-gray-400 text-[14px]">
              ₹{mrp.toLocaleString()}
            </span>
            <span className="text-[17px] font-semibold"> ₹{price}</span>
            <span className="text-green-600 ml-2">75% off </span>{" "}
            <span className="text-green-600 ml-4 font-semibold">
              1 offer available
            </span>
          </div>
        </div>

        {/*  */}
      </div>
      {/* button */}
      <div className="flex gap-6 mt-2 items-center">
        <div className="flex items-center gap-2 ">
          <button className="border border-gray-300 text-[18px]  px-2 font-semibold   rounded-full flex justify-center items-center">
            -
          </button>
          <span className="border border-gray-300 px-2 w-[40px] flex items-center justify-center ">
            1
          </span>
          <button className="border border-gray-300 px-2 font-semibold  rounded-full flex justify-center items-center">
            +
          </button>
        </div>
        <div className="flex gap-4 font-semibold">
          <p>SAVE FOR LATER</p>
          <p>REMOVE</p>
        </div>
      </div>

      {/* place order */}
    </div>
  );
};

export default ProductCard;
