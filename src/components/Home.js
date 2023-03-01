import React from "react";
import Event from "./Event";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Event />
      <Footer />
    </>
  );
};

export default Home;
