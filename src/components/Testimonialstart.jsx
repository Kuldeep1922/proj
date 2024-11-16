import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Assuming you're using react-owl-carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Client Name 1',
            profession: 'Profession 1',
            image: './src/img/testimonial-1.jpg',
            rating: 5,
            feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.'
        },
        {
            id: 2,
            name: 'Client Name 2',
            profession: 'Profession 2',
            image: './src/img/testimonial-2.jpg',
            rating: 5,
            feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.'
        },
        {
            id: 3,
            name: 'Client Name 3',
            profession: 'Profession 3',
            image: './src/img/testimonial-3.jpg',
            rating: 5,
            feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.'
        },
        {
            id: 4,
            name: 'Client Name 4',
            profession: 'Profession 4',
            image: './src/img/testimonial-4.jpg',
            rating: 5,
            feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.'
        }
    ];

    return (
        <div className="container-fluid testimonial py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Testimonial</h5>
                    <h1>Our Client Saying!</h1>
                </div>
                <OwlCarousel className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay=".5s">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-item border p-4" key={testimonial.id}>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div className="ms-4">
                                    <h4 className="text-secondary">{testimonial.name}</h4>
                                    <p className="m-0 pb-3">{testimonial.profession}</p>
                                    <div className="d-flex pe-5">
                                        {/* Render the star icons based on the rating */}
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <i key={index} className="fas fa-star me-1 text-primary"></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="border-top mt-4 pt-3">
                                <p className="mb-0">{testimonial.feedback}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;