// export default Servicestart;
import React from 'react';
import ReactWOW from 'react-wow'; // If you're using the React-WOW library for animations

const Servicestart = () => {
    return (
        <div className="container-fluid services py-5 mb-5 desg ">
            <div className="container">
                <div className="text-center mx-auto pb-5" style={{ maxWidth: '600px' }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/986/603/original/3d-icon-of-customer-service-png.png" className='photo-5' alt="" />

                    <h5 className="text-design mt-3">Our Services</h5>
                    <br />
                    <h1 className='para-deg'>Services Built Specifically For Your Business</h1>
                </div>

                <div className="row g-5 services-inner">
                    {/* Web Design */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".3s">

                            <div className="services-item bg-light rounded">

                                <div className="p-4 text-center services-content">

                                    <div className="services-content-icon">



                                        <i className="fa fa-code fa-7x mb-4 text-primary fs-3 photo"></i>
                                        <h4 className="mb-3 head">Web Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn text-white px-3 py-2 butt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Web Development */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="services-item bg-light rounded oval photo">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-file-code fa-7x mb-4 text-primary fs-3"></i>
                                        <h4 className="mb-3 head">Web Development</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-3 py-2 butt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* UI/UX Design */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="services-item bg-light rounded">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-external-link-alt fa-7x mb-4 text-primary fs-3"></i>
                                        <h4 className="mb-3 head">UI/UX Design</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-3 py-2 butt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Web Security */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".3s">
                            <div className="services-item bg-light element rounded">
                                <div className="p-4 text-center services-content ">
                                    <div className="services-content-icon">
                                        <i className="fas fa-user-secret fa-7x mb-4 text-primary fs-3"></i>
                                        <h4 className="mb-3 head">Web Security</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-3 py-2 butt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Digital Marketing */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="services-item bg-light rounded">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fa fa-envelope-open fa-7x mb-4 text-primary fs-3"></i>
                                        <h4 className="mb-3 head">Digital Marketing</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-3 py-2 butt">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Programming */}
                    <div className="col-md-6 col-lg-4 skew-animation">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="services-item bg-light rounded">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <i className="fas fa-laptop fa-7x mb-4 text-primary fs-3"></i>
                                        <h4 className="mb-3 head">Programming</h4>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                        <a href="#" className="btn btn-secondary text-white px-3 py-2 butt">Read More</a>
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