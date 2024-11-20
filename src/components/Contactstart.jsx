import React from 'react'

const ContactStart = () => {
    return (
        <div style={{ overflowX: "hidden" }}> {/* Prevent horizontal scroll */}
            <section className="mt-5">
                <div className="bg-light py-5">
                    <div className="container">
                        <div className="d-flex justify-content-between flex-wrap">
                            <h1 className="fw-bold">Contact us</h1>
                            <nav className="pt-3" aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <i className="bi bi-caret-right-fill mt-2"></i>
                                    <li className="breadcrumb-item active mt-2" aria-current="page">
                                        Contact
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main>
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Contact Information */}
                        <div className="col-xl-6">
                            <div className="row row-cols-md-2 g-4">
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                        <div className="d-flex align-items-center">
                                            <i className='bi bi-envelope h3 pe-2'></i>
                                            <span className="h5">Email</span>
                                        </div>
                                        <span>example@domain.com</span>
                                    </div>
                                </div>
                                <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-telephone h3 pe-2"></i>
                                            <span className="h5">Phone</span>
                                        </div>
                                        <span>+0123456789, +9876543210</span>
                                    </div>
                                </div>
                            </div>

                            <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-pin h3 pe-2"></i>
                                        <span className="h5">Office location</span>
                                    </div>
                                    <span>#007, Street name, Bigtown BG23 4YZ, England</span>
                                </div>
                            </div>

                            <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                                <iframe
                                    className="w-100 hvr-shadow" /* Ensure iframe doesn't overflow */
                                    width="100%"
                                    height="345"
                                    frameBorder="0"
                                    scrolling="no"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7495799461126!2d85.78377557523591!3d20.261007281203074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a76e34ca56a7%3A0x12a37e05d42cf04f!2sCODE%20DAIS%20SOFTWARE%20AND%20RESEARCH!5e1!3m2!1sen!2sin!4v1731744985623"
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-xl-6">
                            <h2 className="pb-4">Leave a message</h2>
                            <form>
                                <div className="row g-4">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="fname" className="form-label">Fname</label>
                                        <input type="text" className="form-control" id="fname" placeholder="John" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="lname" className="form-label">Lname</label>
                                        <input type="text" className="form-control" id="lname" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="+1234567890" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country">
                                        <option value="1">USA</option>
                                        <option value="2">Non USA</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactStart
