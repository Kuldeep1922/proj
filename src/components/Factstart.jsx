import React from 'react';
import ReactWOW from 'react-wow';

const Factstart = () => {
    return (
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <ReactWOW animation="fadeIn" delay=".1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">99</h1>
                                <h5 className="text-white mt-1">Success in getting happy customer</h5>
                            </div>
                        </ReactWOW>
                    </div>
                    <div className="col-lg-3">
                        <ReactWOW animation="fadeIn" delay=".3s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">25</h1>
                                <h5 className="text-white mt-1">Thousands of successful business</h5>
                            </div>
                        </ReactWOW>
                    </div>
                    <div className="col-lg-3">
                        <ReactWOW animation="fadeIn" delay=".5s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">120</h1>
                                <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                            </div>
                        </ReactWOW>
                    </div>
                    <div className="col-lg-3">
                        <ReactWOW animation="fadeIn" delay=".7s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-primary counter-value">5</h1>
                                <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Factstart;