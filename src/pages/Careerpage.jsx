import React, { useState } from "react";
import "./CareerPage.css"; // For custom styling
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ContactStart from "../components/Contactstart";
import Footer from "../components/Footer";

const CareerPage = () => {
    const jobListings = [
        {
            id: 1,
            title: "Software Engineer",
            location: "Remote",
            img: "https://eranstiller.com/wp-content/uploads/2023/09/Software-Engineer-Skills.png",
            description: "Develop and maintain web applications using modern frameworks.",
            requirements: "Experience with React, Node.js, and MongoDB.",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            img: "https://www.guvi.com/blog/wp-content/uploads/2023/07/Future-and-Scope-of-UIUX-Design-1200x628.webp",
            location: "San Francisco, CA",
            description: "Design user-friendly interfaces for web and mobile applications.",
            requirements: "Proficiency in Figma, Adobe XD, and wireframing tools.",
        },
        {
            id: 3,
            title: "Product Manager",
            img: "https://www.cio.com/wp-content/uploads/2023/07/multi-tasking_project-management_designer-100747096-orig.jpg?quality=50&strip=all",
            location: "New York, NY",
            description: "Lead cross-functional teams to deliver impactful products.",
            requirements: "Strong communication and project management skills.",
        }
    ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Application Submitted Successfully!");
        // Add your form submission logic here (e.g., send data to a server)
    };

    return (
        <>
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">Career Page</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Career</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}
            <header className="career-header m join-our-team">
                <h1>Join Our Team!</h1>
                <p>Explore exciting opportunities and grow your career with us.</p>
            </header>

            <div className="form d-flex container apply-form" style={{ backgroundColor: "#eadeff", borderRadius: "10px" }} >
                <img src="./src/img/OrgUVC-L_Bus-15_Single-04_1_-removebg.png" alt="" style={{ width: "40%", margin: "10px", borderRadius: "10px" }} />
                <div className="career-form-container apply-form-form " style={{ maxWidth: "70%" }}>
                    <h2 style={{ color: "#1842b6" }}>Apply for a Position</h2>
                    <form className="career-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            {/* Full Name with @ prefix */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ height: "40px", marginTop: "5px", border: ".5px solid grey" }}><i className="bi bi-at"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter your name"
                                    aria-label="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ height: "40px", border: ".5px solid grey" }}

                                />
                            </div>

                            {/* Email with domain suffix */}
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Recipient's email"
                                    aria-label="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ border: ".5px solid grey" }}
                                />
                                <span className="input-group-text" id="basic-addon2" style={{ border: ".5px solid grey", height: "40px", marginTop: "5px" }}>@example.com</span>
                            </div>
                        </div>

                        <div className="form-row">
                            {/* Phone Number */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ height: "40px", marginTop: "5px", border: ".5px solid grey" }}><i className="bi bi-telephone" ></i></span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone number"
                                    aria-label="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    style={{ border: ".5px solid grey" }}
                                />
                                {/* <span className="input-group-text" style={{ height: "40px", marginTop: "5px" }}>.00</span> */}
                            </div>

                            {/* Position Applying For */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ height: "40px", marginTop: "5px", border: ".5px solid grey" }}>@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Department"
                                    aria-label="Department" style={{ border: ".5px solid grey" }}
                                />
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div className="input-group mb-3">
                            <span className="input-group-text" style={{ border: ".5px solid grey" }}>Upload Resume</span>
                            <input
                                type="file"
                                className="form-control"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                required
                                style={{ border: ".5px solid grey" }}
                            />
                        </div>

                        {/* Textarea */}
                        <div className="input-group">
                            <span className="input-group-text" style={{ border: ".5px solid grey" }}>Other</span>
                            <textarea
                                className="form-control"
                                name="additionalInfo"
                                placeholder="Additional Information"
                                aria-label="With textarea"
                                style={{ border: ".5px solid grey" }}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn " style={{ backgroundColor: "#1842b6" }}>
                            <b>Submit Application</b>
                        </button>
                    </form>
                </div>


            </div>


            <div className="career-page">


                <section className="job-listings container py-5 ">
                    <h2 className="text-center mb-4">Current Openings</h2>
                    <div className="row">
                        {jobListings.map((job) => (
                            <div key={job.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100 shadow-lg">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{job.title}</h5>
                                        <img src={job.img} style={{ borderRadius: "10px" }} alt="" />
                                        <br />
                                        <p className="card-text"><strong>Location:</strong> {job.location}</p>
                                        <p className="card-text">{job.description}</p>
                                        <p className="card-text">
                                            <strong>Requirements:</strong> {job.requirements}
                                        </p>
                                        <button className="btn btn-primary mt-auto">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <ContactStart />


            </div> <Footer />
        </>
    );
};

export default CareerPage;
