import React from "react";
import Navbar from "../components/Navbar";
import Tapbar from "../components/Tapbar";
import Carousel from "../components/Carousel";
import Factstart from "../components/Factstart";
import Blogstart from "../components/Blogstart";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Aboutstart from "../components/Aboutstart";
import Teamstart from "../components/Teamstart";
// new 
const About = () => {
    return (
        <div>
            <Tapbar />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <Aboutstart />
            <Teamstart />
            <Factstart />
            <Blogstart />
            {/* <Teamstart /> */}
            <Footer />
            {/* <!-- Back to Top --> */}
            <a to="#" className="btn btn-secondary btn-square rounded-circle back-to-top"><i className="fa fa-arrow-up text-white"></i></a>
        </div>
    );
};

export default About;
