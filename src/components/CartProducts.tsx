import React from "react";
import Checkout from "./Checkout";
import CartList from "./CartList";

const CartProducts = () => {
  return (
    <div className="max-w-[1680px] w-full mt-2 flex justify-center  z-0 mx-12 sm:mx-0   ">
      <div className="flex justify-center items-center ">
        <div className="flex gap-6 sm:items-start flex-wrap">
          <div className="flex justify-center  items-center">
            <div className=" w-[330px] sm:w-[600px] lg:w-[900px] ">
              <header className=" text-[14px] w-full py-[12px] px-[16px] bg-white border border-gray-300 rounded-sm flex justify-between items-center">
                <p>From Saved Addresses</p>
                <button className="border border-gray-300 px-6 py-2 text-[#2975f0] font-semibold rounded-sm">
                  Enter Delivery Pincode
                </button>
              </header>
              <CartList />
            </div>
          </div>

          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
