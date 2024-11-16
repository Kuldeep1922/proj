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
import Contactstart from "../components/Contactstart";
import Footer from "../components/Footer";

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
      <Contactstart />
      <Footer />
    </div>
  );
};

export default Homepage;
