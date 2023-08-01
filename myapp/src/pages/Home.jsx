import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Poster from "../components/Poster";

import Products from "../components/Products";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Poster/>

      <Products />
      
      <Footer />
    </div>
  );
};

export default Home;
