import React from "react";
import { Outlet } from "react-router-dom";
import Event from "./Event";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Home;
