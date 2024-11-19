import React from "react";
import Navbar from "../components/Navbar";
import Tapbar from "../components/Tapbar";
import Carousel from "../components/Carousel";
import Factstart from "../components/Factstart";
import Aboutstart from "../components/Aboutstart";
import Projectstart from "../components/Projectstart";
import Servicestart from "../components/Servicestart";
import Blogstart from "../components/Blogstart";
import Teamstart from "../components/Teamstart";
import Testimonialstart from "../components/Testimonialstart";
import Contactstart from "../components/Contactstart";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Tapbar />
      <Navbar />
      <Carousel />
      <Factstart />
      <Aboutstart />
      <Servicestart />
      <Projectstart />
      <Blogstart />
      <Teamstart />
      <Testimonialstart />
      <Contactstart />
      <Footer />
      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-secondary btn-square rounded-circle back-to-top">
        <i className="fa fa-arrow-up text-white"></i>
      </a>

    </div>
  );
};

export default Homepage;
