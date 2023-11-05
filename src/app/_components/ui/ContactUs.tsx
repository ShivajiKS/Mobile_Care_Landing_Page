import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div id="contactSection" className="px-10 py-5 lg:px-20">
      <div className="flex justify-center capitalize font-bold text-xl lg:text-3xl text-purple-700">
        <h2>Contact information</h2>
      </div>
      <div className="flex mt-7 ml-3 lg:ml-5 flex-col space-y-6">
        <div className="flex space-x-4">
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
          <h4 className="text-base lg:text-lg font-medium"> +91 9989750073</h4>
        </div>
        <div className="flex space-x-4">
          <img src="/email.svg" alt="email icon" width={24} height={24} />
          <h4 className="text-base lg:text-lg font-medium">
            urssrinu73@gmail.com
          </h4>
        </div>
        <div className="flex space-x-4">
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
          <div className="font-normal capitalize ml-1 w-72 md:w-full">
            <p className="inline md:block text-sm lg:text-lg font-medium">
              Shop no 5 near South India Shopping Mall UMCC road,
            </p>
            <p className="inline md:block text-sm lg:text-lg font-medium">
              Kukatpally Housing Board(KPHB), Hyderabad, Telangana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
