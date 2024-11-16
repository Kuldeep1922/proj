import React from 'react';
import ReactWOW from 'react-wow'; // If you're using the React-WOW library for animations

const Servicestart = () => {
    return (
        <div className="container-fluid services py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>

                <div className="row g-5 services-inner">
                    {/* Web Design */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".3s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Web Development */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Development</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* UI/UX Design */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">UI/UX Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Web Security */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".3s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Web Security</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Digital Marketing */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Digital Marketing</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Programming */}
                    <div className="col-md-6 col-lg-4">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="services-item bg-light">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                        <h4 className="mb-3">Programming</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicestart;