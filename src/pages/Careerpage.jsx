import React, { useState } from "react";
import "./CareerPage.css"; // For custom styling
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ContactStart from "../components/Contactstart";

const CareerPage = () => {
    const jobListings = [
        {
            id: 1,
            title: "Software Engineer",
            location: "Remote",
            img:"https://eranstiller.com/wp-content/uploads/2023/09/Software-Engineer-Skills.png",
            description: "Develop and maintain web applications using modern frameworks.",
            requirements: "Experience with React, Node.js, and MongoDB.",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            img:"https://www.guvi.com/blog/wp-content/uploads/2023/07/Future-and-Scope-of-UIUX-Design-1200x628.webp",
            location: "San Francisco, CA",
            description: "Design user-friendly interfaces for web and mobile applications.",
            requirements: "Proficiency in Figma, Adobe XD, and wireframing tools.",
        },
        {
            id: 3,
            title: "Product Manager",
            img:"https://www.cio.com/wp-content/uploads/2023/07/multi-tasking_project-management_designer-100747096-orig.jpg?quality=50&strip=all",
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

            <div className="form d-flex container apply-form" style={{ backgroundColor:"#bfbfbf", borderRadius:"10px"}} >
                <img src="https://static.wixstatic.com/media/6c9339_f724dc8ff7c943ecb2fa691a4b5b67e2~mv2.png/v1/fill/w_494,h_394,al_c,q_85,enc_auto/resized.png" alt="" style={{ width:"40%",margin:"10px", borderRadius:"10px" }}/>
                <div className="career-form-container apply-form-form " style={{ maxWidth: "70%"}}>
                    <h2>Apply for a Position</h2>
                    <form className="career-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            {/* Full Name with @ prefix */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ height: "40px", marginTop: "5px" }}><i className="bi bi-at"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter your name"
                                    aria-label="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ height: "40px" }}
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
                                />
                                <span className="input-group-text" id="basic-addon2" style={{ height: "40px", marginTop: "5px" }}>@example.com</span>
                            </div>
                        </div>

                        <div className="form-row">
                            {/* Phone Number */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ height: "40px", marginTop: "5px" }}><i className="bi bi-telephone"></i></span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone number"
                                    aria-label="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {/* <span className="input-group-text" style={{ height: "40px", marginTop: "5px" }}>.00</span> */}
                            </div>

                            {/* Position Applying For */}
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ height: "40px", marginTop: "5px" }}>@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Department"
                                    aria-label="Department"
                                />
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div className="input-group mb-3">
                            <span className="input-group-text">Upload Resume</span>
                            <input
                                type="file"
                                className="form-control"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Textarea */}
                        <div className="input-group">
                            <span className="input-group-text">Other</span>
                            <textarea
                                className="form-control"
                                name="additionalInfo"
                                placeholder="Additional Information"
                                aria-label="With textarea"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn rounded-pill">
                            Submit Application
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
                                        <img src={job.img} style={{borderRadius:"10px"}} alt="" />
                                        <br/>
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

                <footer className="career-footer">
                    <p>
                        Don’t see a role that fits? <a href="#contact">Contact us</a> to
                        express your interest, and we’ll keep your profile on file.
                    </p>
                </footer>
            </div></>
    );
};

export default CareerPage;
