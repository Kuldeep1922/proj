import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Assuming you're using react-owl-carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    return (
        <div className="container-fluid testimonial py-5 mb-5">
            <div className="container">
                <div
                    className="text-center mx-auto pb-5 wow fadeIn"
                    data-wow-delay=".3s"
                    style={{ maxWidth: "600px" }}
                >
                    <h5 className="text-primary">Our Testimonial</h5>
                    <h1>Our Client Saying!</h1>
                </div>
                <OwlCarousel
                    className="owl-carousel testimonial-carousel wow fadeIn"
                    data-wow-delay=".5s"
                    loop
                    margin={10}
                    // nav
                    autoplay
                    responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 },
                    }}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <div className="testimonial-item border p-4" key={item}>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <img
                                        src={`./src/img/testimonial-${item}.jpg`}
                                        alt=""
                                    />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        {[...Array(5)].map((_, index) => (
                                            <i
                                                key={index}
                                                className="fa fa-star me-1 starcolor" 
                                            ></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                                    interdum aliquam dolor eget urna. Nam volutpat libero sit amet
                                    leo cursus, ac viverra eros morbi quis quam mi.
                                </p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;
