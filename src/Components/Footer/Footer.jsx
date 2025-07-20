import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="Container">
                <div className="footer-content">
                    {/* Logo and Description Section */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <Link to="/">
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GanpatRajLogoUpdated.jpeg"
                                    alt="Ganpatraj Chowdhary"
                                />
                            </Link>
                            <div className="logo-text">
                                <h3>Ganpatraj Chowdhary</h3>
                                <p>Visionary Entrepreneur & Philanthropist</p>
                            </div>
                        </div>
                        <p className="footer-description">
                            Leading the Riddhi Siddhi Group with innovation, sustainability, and community development at the core of our mission.
                        </p>
                    </div>

                    {/* Contact Information Section */}
                    <div className="footer-section">
                        <h4>Contact Information</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FiPhone className="contact-icon" />
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value"><Link to="tel:919898920679" style={{color:"white"}}>91 98989 20679</Link></span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FiMail className="contact-icon" />
                                <div>
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">info@Test.com</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FiMapPin className="contact-icon" />
                                <div>
                                    <span className="contact-label">Address</span>
                                    <span className="contact-value">Ahmedabad, Gujarat, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/about" className="footer-link">About</Link>
                            <Link to="/journey-photos" className="footer-link">Milestones & Memories</Link>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-section">
                        <h4>Connect With Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FiLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FiTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Ganpatraj Chowdhary. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
                            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;