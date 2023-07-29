import React from "react";
import musicIcon from "../images/icon-music.svg";
import heroImage from "../images/illustration-hero.svg";
const OrderSummary = () => {
  return (
    <div className="w-[400px] md:w-[500px] bg-white rounded-3xl">
      <div>
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover rounded-t-3xl"
        />
      </div>
      <div className="px-14">
        <h1 className="text-darkBlue text-3xl font-bold text-center mt-10 mb-5">
          Order summary
        </h1>
        <p className="px-5 md:text-center text-desaturatedBlue md:px-10">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex bg-veryPaleBlue rounded-2xl p-5 md:p-5 mt-5">
          <img src={musicIcon} alt="music note" />
          <div className="ml-5 mr-10 md:mr-20">
            <h2 className="font-bold text-sm md:text-base">Annual plan</h2>
            <p>$59.99/year</p>
          </div>
          <button className="text-brightBlue underline hover:no-underline hover:opacity-60">
            Change
          </button>
        </div>
        <div className="flex flex-col">
          <button className="bg-brightBlue hover:opacity-60 text-white rounded-lg p-3 mt-10 mb-5 font-bold shadow-2xl">
            Proceed to payment
          </button>
          <button className="text-desaturatedBlue hover:text-black font-bold mb-10">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
