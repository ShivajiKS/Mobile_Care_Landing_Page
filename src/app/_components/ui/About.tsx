import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div id="aboutSection" className="px-10 py-5 lg:px-20">
      <div className="flex justify-center items-center">
        <h3 className="capitalize font-bold text-lg lg:text-3xl text-purple-700">
          About Us
        </h3>
      </div>
      <div className="text-justify hyphens-auto text-base lg:text-lg mt-7 flex flex-col space-y-2">
        <p className="indent-5 lg:indent-10">
          We're Srinu Mobile Care, your one-stop shop for all your mobile repair
          needs. We offer a wide range of services, from simple screen repairs
          to complex motherboard replacements. Our team of experienced
          technicians is certified by the major mobile manufacturers, so you can
          be confident that your device is in good hands.
        </p>
        <p className="indent-5 lg:indent-10">
          With over 8 years of experience, Srinu Mobile Care has been serving
          the Kukatpally, Hyderabad community with reliable mobile and tablet
          repair services. Our deep-rooted experience means you can count on us
          to understand and fix your device issues.
        </p>
        <p className="indent-5 lg:indent-10">
          We specialize in fixing a variety of mobile and tablet brands,
          including popular names like Samsung, Apple, Mi, Redmi, Oppo, Vivo,
          Realme, and many more. No matter which brand or model you own, we have
          the know-how to restore your device to its optimal performance.
        </p>
        <p className="indent-5 lg:indent-10">
          If you're looking for a reliable and affordable mobile care provider,
          look no further than Srinu Mobile Care. Contact us today to schedule a
          repair or to learn more about our services.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-bold">Benefits:</h3>
        <ul className="mt-4 ml-1 flex flex-col space-y-3 md:space-y-6 md:ml-5 text-base font-normal md:text-lg">
          <li>✅ Over 9 years of experience</li>
          <li>✅ Wide range of services</li>
          <li>✅ Affordable rates</li>
          <li>✅ Free consultations</li>
          <li>✅ Certified technicians</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
