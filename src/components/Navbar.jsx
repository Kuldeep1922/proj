import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <nav className="navbar navbar-dark navbar-expand-lg py-0">
                        {/* Navbar Brand */}
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-white fw-bold d-block">
                                High<span className="text-secondary">Tech</span>
                            </h1>
                        </Link>

                        {/* Navbar Toggle Button for Mobile */}
                        <button
                            type="button"
                            className="navbar-toggler me-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Links */}
                        <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div className="navbar-nav ms-auto mx-xl-auto p-0 d-flex flex-column flex-md-row">
                                <Link to="/" className="nav-item nav-link active text-secondary">
                                    Home
                                </Link>
                                <Link to="/about" className="nav-item nav-link">
                                    About
                                </Link>
                                <Link to="/services" className="nav-item nav-link">
                                    Services
                                </Link>
                                <Link to="/projects" className="nav-item nav-link">
                                    Projects
                                </Link>

                                {/* Dropdown for Pages */}
                                <div className="nav-item dropdown d-flex flex-column">
                                    <Link
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </Link>
                                    <div className="dropdown-menu rounded" style={{ display: "flex", justifyContent: "space-around", background: "linear-gradient(135deg, #EECE13 10%, #B210FF 100%)" }}>
                                        <div style={{ justifyItems: "self-start", alignItems: "self-start", marginTop: "20px", marginLeft: "10px", }}>
                                            <Link to="/blog" className="dropdown-item" style={{ width: "100%", color: "white" }}>
                                                <span className="clc">Our Blog</span>
                                            </Link>
                                            <Link to="/team" className="dropdown-item" style={{ width: "100%", color: "white" }}>
                                                <span className="clc">Our Team</span>
                                            </Link>
                                            <Link to="/testimonial" className="dropdown-item" style={{ width: "100%", color: "white" }}>
                                                <span className="clc">Testimonial</span>
                                            </Link>
                                            <Link to="/404" className="dropdown-item" state={{ width: "100%", color: "white" }}>
                                                <span className="clc">404 page</span>
                                            </Link>
                                        </div>

                                        {/* Background Image that is hidden on small screens and shown on large screens */}
                                        <div
                                            style={{
                                                display: "flex",
                                                backgroundImage: `url('https://external-preview.redd.it/mXoiOpFthya_psW9SGeNWDkMg1qVsZZuqQnuKUhGyAw.jpg?auto=webp&s=a43b6f1747dd4ee76073d4c1d889900f838f60c7')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: "200px", // Adjust height as needed
                                                borderRadius: "8px",
                                                width: "200px",
                                                marginLeft: "40px",
                                                marginRight: "10px",
                                                cursor: "pointer"
                                            }}
                                            className="d-none d-lg-block" // Hide on small screens, show on large screens
                                        >
                                            {/* Any content inside the background image div can go here */}
                                        </div>
                                    </div>
                                </div>

                                <Link to="/contact" className="nav-item nav-link">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Phone & Search */}
                        <div className="d-none d-xl-flex flex-shrink-0">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                <a href="#" className="position-relative">
                                    <i className="fa fa-phone-alt text-white fa-2x"></i>
                                    <div
                                        className="position-absolute"
                                        style={{ top: "-7px", left: "20px" }}
                                    >
                                        <i className="fa fa-comment-dots text-secondary"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-4 border-end">
                                <span className="text-white-50">Have any questions?</span>
                                <span className="text-secondary">Call: +0123 456 7890</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-center ms-4">
                                <a href="#">
                                    <i className="bi bi-search text-white fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;