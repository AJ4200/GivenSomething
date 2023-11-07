import React from "react";
import Header from "@/components/Header";
import MainCard from "@/components/cards/MainCard";
import More from "@/components/cards/More";
import AdSpace from "@/components/cards/AdSpace";
import Socials from "@/components/cards/Socials";
import Footer from "@/components/Footer";

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
<div className="flex flex-col w-full md:items-center space-x-4 md:flex-row">
  <MainCard />
  <More />
</div>
      <div className="flex flex-col w-full items-center space-x-4 mt-1 md:flex-row">
        <AdSpace />
        <Socials />
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
