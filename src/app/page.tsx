import HeroSection from "./_components/ui/HeroSection";
import Categories from "./_components/ui/Categories";
import WhatWeOffer from "./_components/ui/WhatWeOffer";
import Location from "./_components/ui/Location";
import AboutSection from "./_components/ui/About";
import ContactUs from "./_components/ui/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Categories />
      <WhatWeOffer />
      <AboutSection />
      <ContactUs />
      <Location />
    </main>
  );
}
