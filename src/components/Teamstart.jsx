import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Teamstart.css'; // Custom CSS

const Teamstart = () => {
    return (
        <div className="team-section">
            <div className="container text-center">
                <div className="section-header">
                    <h5 className="text-gradient">Our Team</h5>
                    <h1 className="main-heading">Meet Our Expert Team</h1>
                    <p>We bring expertise, creativity, and innovation to deliver excellence.</p>
                </div>

                <OwlCarousel
                    className="owl-carousel team-carousel"
                    items={3}
                    loop
                    margin={30}
                    autoplay
                    autoplayTimeout={3000}
                    nav
                    responsive={{
                        0: { items: 1 },
                        768: { items: 2 },
                        1024: { items: 3 },
                    }}
                >
                    {/* Team Cards */}
                    {[
                        { name: 'John Doe', role: 'CEO', img: './src/img/team-1.jpg' },
                        { name: 'John Doe', role: 'CEO', img: './src/img/team-1.jpg' },
                        { name: 'Jane Smith', role: 'CTO', img: './src/img/team-2.jpg' },
                        { name: 'Michael Johnson', role: 'Lead Developer', img: './src/img/team-3.jpg' },
                        { name: 'Sarah Lee', role: 'Designer', img: './src/img/team-4.jpg' },
                    ].map((member, index) => (
                        <div className="team-card" key={index} style={{width:"400px"}}>
                            <div className="team-img-wrapper">
                                <img src={member.img} alt={member.name} className="team-img" />
                                <div className="overlay">
                                    <div className="social-icons">
                                        <Link to="#" className="social-icon"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#" className="social-icon"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#" className="social-icon"><i className="fab fa-instagram"></i></Link>
                                        <Link to="#" className="social-icon"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Teamstart;
