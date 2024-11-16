import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel'; // Assuming you are using react-owl-carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Teamstart = () => {
    return (
        <div className="container-fluid py-5 mb-5 team">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet our expert Team</h1>
                </div>

                {/* OwlCarousel setup with responsive options */}
                <OwlCarousel
                    className="owl-carousel team-carousel wow fadeIn"
                    data-wow-delay=".5s"
                    items={3} // Adjust the number of items as per your design
                    loop
                    margin={30}
                    nav
                    responsive={{
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                        1024: {
                            items: 3,
                        },
                    }}
                >
                    {/* Directly writing JSX for each team member */}
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt="John Doe" />
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4>Full Name</h4>
                                    <p className="m-0"></p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt="Jane Smith" />
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4>Jane Smith</h4>
                                    <p className="m-0">CTO</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt="Michael Johnson" />
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4>Michael Johnson</h4>
                                    <p className="m-0">Lead Developer</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt="Sarah Lee" />
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4>Sarah Lee</h4>
                                    <p className="m-0">Designer</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Teamstart;