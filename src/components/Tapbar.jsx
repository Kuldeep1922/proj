import React from 'react'
import { Link } from 'react-router-dom'

const Tapbar = () => {
    return (
        <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><Link href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></Link>23 Ranking Street, New York</small>
                        <small className="me-3 text-white-50"><Link href="#"><i className="fas fa-envelope me-2 text-secondary"></i></Link>Email@Example.com</small>
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <Link href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></Link>
                        <Link href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></Link>
                        <Link href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></Link>
                        <Link href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tapbar