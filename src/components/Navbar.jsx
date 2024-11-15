import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <nav className="navbar navbar-dark navbar-expand-lg py-0">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-white fw-bold d-block">
                                High<span className="text-secondary">Tech</span>
                            </h1>
                        </Link>
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
                        <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div className="navbar-nav ms-auto mx-xl-auto p-0">
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
                                <div className="nav-item dropdown">
                                    <Link
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </Link>
                                    <div className="dropdown-menu rounded">
                                        <Link to="/blog" className="dropdown-item">
                                            Our Blog
                                        </Link>
                                        <Link to="/team" className="dropdown-item">
                                            Our Team
                                        </Link>
                                        <Link to="/testimonial" className="dropdown-item">
                                            Testimonial
                                        </Link>
                                        <Link to="/404" className="dropdown-item">
                                            404 Page
                                        </Link>
                                    </div>
                                </div>
                                <Link to="/contact" className="nav-item nav-link">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shrink-0">
                            <div
                                id="phone-tada"
                                className="d-flex align-items-center justify-content-center me-4"
                            >
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
