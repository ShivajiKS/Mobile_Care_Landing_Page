import React from "react";

const Location = () => {
  return (
    <div className="p-2 px-10 ">
      <div className="flex justify-center mt-2 P-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.27334382236!2d78.39558745000001!3d17.50425105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91685a55cc2b%3A0x659539d9197ffbbd!2sSAMSUNG%20MOBILE%20REPAIR!5e0!3m2!1sen!2sin!4v1698998061872!5m2!1sen!2sin"
          className="w-[86vw] h-[350px] lg:h-[500px]"
          loading="lazy"
          title="location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
