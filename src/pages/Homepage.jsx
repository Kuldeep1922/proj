import React from "react";
import Navbar from "../components/Navbar";
import Tapbar from "../components/Tapbar";
import Carousel from "../components/Carousel";
import Factstart from "../components/Factstart";
import Aboutstart from "../components/Aboutstart";
import Projectstart from "../components/Projectstart";
import Servicestart from "../components/Servicestart";
import Blogstart from "../components/Blogstart";
// import Teamstart from "../components/Teamstart";
import Testimonialstart from "../components/Testimonialstart";

const Homepage = () => {
  return (
    <div>
      <Tapbar />
      <Navbar />
      <Carousel />
      <Factstart />
      <Aboutstart />
      <Servicestart />
      <Projectstart />
      <Blogstart />
      {/* <Teamstart /> */}
      <Testimonialstart />
    </div>
  );
};

export default Homepage;
