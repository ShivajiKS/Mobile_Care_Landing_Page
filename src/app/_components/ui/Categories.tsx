import React from "react";

type Category = {
  id: string;
  title: string;
  description: string;
};

const data: Category[] = [
  {
    id: "_01",
    title: "broken display",
    description:
      "We can fix your broken smartphone or tablet display quickly and efficiently. We use only the highest quality replacement parts and our technicians are experts in all types of screen repairs.",
  },
  {
    id: "_02",
    title: "Water Damage",
    description:
      "If your phone or tablet has been water damaged, don't panic! Bring it to us right away and we'll do our best to save it. We have the tools and experience to repair water damaged devices of all kinds.",
  },
  {
    id: "_03",
    title: "Battery Issues",
    description:
      "If your phone or tablet's battery is no longer holding a charge, or if it's draining too quickly, we can replace it with a new one. We offer a variety of battery options to choose from, so you can find the one that's right for your needs.",
  },
  {
    id: "_04",
    title: "Motherboard Issues",
    description:
      "If your phone or tablet's motherboard is damaged, it can cause a variety of problems, such as crashing, freezing, and overheating. We can repair or replace damaged motherboards, so you can get your device back up and running again.",
  },
  {
    id: "_05",
    title: "More Services",
    description:
      "We also offer camera repair, charging port replacement, software fixes, and more in Kukatpally Housing Board (KPHB), Hyderabad, Telangana, to keep your phone in top shape.",
  },
];

const Categories = () => {
  return (
    <div className="p-4 mt-10 lg:mt-20 ">
      <div className="flex justify-center">
        <h1 className="capitalize font-bold text-xl lg:text-3xl text-purple-700">
          we are experts in resolving the following issues
        </h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 p-3 md:p-10">
        {data.map(({ id, title, description }) => (
          <div
            key={id}
            className="border-2 p-3 mt-2 rounded-xl text-black hover:bg-purple-700 hover:text-white cursor-pointer drop-shadow-xl"
          >
            <h1 className="text-lg lg:text-xl font-semibold capitalize p-2">
              {title}
            </h1>
            <p className="text-base font-normal p-2 text-justify hyphens-auto">
              {description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;
