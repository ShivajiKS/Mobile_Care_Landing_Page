import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className=" h-full mt-5 p-6 flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center ">
        {/* hero content container */}
        <div className="md:ml-16">
          <div className=" md:flex flex-col space-y-3 items-start justify-center font-sans	">
            <h1 className="font-bold uppercase text-xl lg:text-5xl  text-purple-700 text-center">
              <span>mobile </span>repair service
            </h1>
            <h2 className="font-normal capitalize text-base md:text-lg  ml-1">
              Broken phone? We'll fix it fast and cheap!
            </h2>
            <div className="md:hidden text-sm text-justify p-1 mb-10">
              <p>
                Welcome to SrinuMobiles, where your mobile device is our top
                priority. We're not just your average repair shop. we're your
                partners in mobile excellence.
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-normal capitalize text-lg ">
                  +91 9989750073
                </p>
              </div>
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="font-normal capitalize text-sm md:text-base ml-1 w-72 md:w-full">
                  <p className="inline md:block">
                    Shop no 5 near South India Shopping Mall UMCC road,
                  </p>
                  <p className="inline md:block">
                    Kukatpally Housing Board(KPHB), Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12  lg:mr-12">
            <Link
              href={"#contactSection"}
              className="px-20 py-3 text-center bg-purple-500  rounded-lg text-black font-bold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* hero image container... */}
        <div className=" hidden md:block absolute md:static md:top-20 left-20">
          <img
            src="https://img.freepik.com/premium-vector/mobile-repair-telephone-smartphone-electronics-service-cartoon-illustration_2175-5057.jpg?w=800"
            alt="Srinu mobile care image..."
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
