import React from "react";
import Features from "./Features";

import Header from "./Header";
import Hero from "./Hero";
import NewItems from "./NewItems";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero />
      <Features></Features>
      <NewItems></NewItems>
      <Services></Services>
    </div>
  );
};

export default Home;
