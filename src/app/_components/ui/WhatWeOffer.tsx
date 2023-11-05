import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="px-10 py-5">
      <div className="flex justify-center">
        <h1 className="capitalize font-bold text-lg lg:text-3xl text-purple-700">
          What We Offer
        </h1>
      </div>
      <div className=" mt-7 ">
        <ul className="flex flex-col space-y-3 md:space-y-6 md:ml-10 text-base md:text-lg">
          <li>✅ Screen Repairs - Get that crystal-clear display back.</li>
          <li>✅ Battery Replacements - Say goodbye to low battery anxiety.</li>
          <li>
            ✅ Performance Optimization - Speed up your phone, like magic.
          </li>
          <li>✅ Data Recovery - Don't lose precious memories and files.</li>
          <li>
            ✅ Repairs on the Spot - We understand that your time is valuable.
          </li>
          <li>✅ Expert Advice - Our tech wizards are just a call away.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeOffer;
