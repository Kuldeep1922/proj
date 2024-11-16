import React from 'react';
import { Link } from 'react-router-dom'; // If you plan on using React Router for navigation

const Footer = () => {
    return (
        <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    {/* Brand Section */}
                    <div className="col-lg-3 col-md-6">
                        <Link to="/">
                            <h1 className="text-white fw-bold d-block">
                                High<span className="text-secondary">Tech</span>
                            </h1>
                        </Link>
                        <p className="mt-4 text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat
                            inventore consectetur repellendus optio debitis.
                        </p>
                        <div className="d-flex hightech-link">
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2">
                                <i className="fab fa-facebook-f text-primary"></i>
                            </a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2">
                                <i className="fab fa-twitter text-primary"></i>
                            </a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2">
                                <i className="fab fa-instagram text-primary"></i>
                            </a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-0">
                                <i className="fab fa-linkedin-in text-primary"></i>
                            </a>
                        </div>
                    </div>

                    {/* Short Links Section */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Short Link</h3>
                        <div className="mt-4 d-flex flex-column short-link">
                            <Link to="/about" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>About us
                            </Link>
                            <Link to="/contact" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Contact us
                            </Link>
                            <Link to="/services" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Our Services
                            </Link>
                            <Link to="/projects" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Our Projects
                            </Link>
                            <Link to="/blog" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog
                            </Link>
                        </div>
                    </div>

                    {/* Help Links Section */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Help Link</h3>
                        <div className="mt-4 d-flex flex-column help-link">
                            <Link to="/terms" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use
                            </Link>
                            <Link to="/privacy-policy" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy
                            </Link>
                            <Link to="/help" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Helps
                            </Link>
                            <Link to="/faqs" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>FQAs
                            </Link>
                            <Link to="/contact" className="mb-2 text-white">
                                <i className="fas fa-angle-right text-secondary me-2"></i>Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-secondary">Contact Us</h3>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="https://www.google.com/maps?q=123+Street,+New+York,+USA" target="_blank" className="pb-3 text-light border-bottom border-primary">
                                <i className="fas fa-map-marker-alt text-secondary me-2"></i> 123 Street, New York, USA
                            </a>
                            <a href="tel:+1234567890" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-phone-alt text-secondary me-2"></i> +123 456 7890
                            </a>
                            <a href="mailto:info@example.com" className="py-3 text-light border-bottom border-primary">
                                <i className="fas fa-envelope text-secondary me-2"></i> info@exmple.com
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="text-light mt-5 mb-4" />

                {/* Footer Bottom Section */}
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light">
                            <a href="#" className="text-secondary">
                                <i className="fas fa-copyright text-secondary me-2"></i>Your Site Name
                            </a>, All right reserved.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <span className="text-light">
                            Designed By
                            <a href="https://htmlcodex.com" className="text-secondary">HTML Codex</a>
                            Distributed By
                            <a href="https://themewagon.com" className="text-secondary">ThemeWagon</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;