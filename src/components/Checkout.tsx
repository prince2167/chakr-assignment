import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="w-[320px] sm:[400px] bg-white sahdow-lg border border-gray-200">
        <h1 className="text-gray-400 text-[15px] font-[600] px-6 py-3 ">
          PRICE DETAILS
        </h1>
        <div className="border border-gray-200 px-6 py-3 flex  flex-col gap-6">
          <div className="flex justify-between ">
            <p>Price (3 items)</p>
            <p>₹10,497</p>
          </div>
          <div className="flex justify-between ">
            <p>Discount</p>
            <p className="text-green-600">- ₹8,286</p>
          </div>
          <div className="flex justify-between ">
            <p>Delivery Charges</p>
            <div className="flex gap-1">
              <p className="text-gray-400 line-through">₹120</p>{" "}
              <span className="text-green-600">Free</span>
            </div>
          </div>
          <div className="flex justify-between py-6 border border-dashed border-gray-300 border-x-0 font-semibold ">
            <p className="">Total Amount</p>
            <p>₹2,211</p>
          </div>
          <p className="text-green-600 font-[600]">
            You will save ₹8,286 on this order
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-400 w-[350px] mt-4 text-sm font-semibold pl-6">
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
