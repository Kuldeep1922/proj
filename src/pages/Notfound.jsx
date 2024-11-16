import React from "react";
import Navbar from "../components/Navbar";
import Tapbar from "../components/Tapbar";
import Factstart from "../components/Factstart";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div>
            <Tapbar />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">404 Error</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item" aria-current="page"></li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <Factstart />
            <div className="container-fluid py-5 my-5 wow fadeIn" data-wow-delay="0.3s">
                <div className="container text-center py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <!-- Back to Top --> */}
            <Link to="#" className="btn btn-secondary btn-square rounded-circle back-to-top"><i className="fa fa-arrow-up text-white"></i></Link>
        </div>
    );
};

export default Notfound;