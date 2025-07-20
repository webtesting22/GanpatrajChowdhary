import React, { useState, useEffect } from "react";
import NavigationData, { profileData } from "./NavigationData";
import './NavigationBar.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Show navigation when hovered OR when not scrolled
    const shouldShowNavigation = !isScrolled || isHovered;

    return (
        <div id="NavigationBar">
            <div className="Container">
                <div
                    className={`NavigationBarContainer ${isScrolled ? 'scrolled' : ''} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Profile Picture */}
                    <div className="profile-section">
                        <Link to="/"><div className="profile-image">
                            <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GanpatRajLogoUpdated.jpeg" alt={profileData.name} />
                        </div></Link>

                        {/* Available for work text - only visible when scrolled and not hovered */}
                        <div className={`available-text ${isScrolled && !isHovered ? 'show' : ''}`}>
                            <span>Visionary Entrepreneur & Philanthropist</span>
                            <div className="status-dot"></div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links - hidden when scrolled but show on hover */}
                    <div className={`nav-links desktop-nav ${shouldShowNavigation ? '' : 'hide'}`}>
                        {NavigationData.map((item) => (
                            <a
                                key={item.id}
                                href={item.path}
                                className="nav-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Contact Button - hidden when scrolled but show on hover */}
                    <div className={`contact-section desktop-contact ${shouldShowNavigation ? '' : 'hide'}`}>
                        <button className="contact-btn">
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
                    <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-menu-header">
                            <div className="mobile-profile-section">
                            <Link to="/">  <div className="mobile-profile-image">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GanpatRajLogoUpdated.jpeg" alt={profileData.name} />
                                </div>
                                </Link>
                                <div className="mobile-profile-info">
                                    <h3>{profileData.name}</h3>
                                    <p>Visionary Entrepreneur & Philanthropist</p>
                                </div>
                            </div>
                            <button className="mobile-close-btn" onClick={closeMobileMenu}>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                        <div className="mobile-nav-links">
                            {NavigationData.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.path}
                                    className="mobile-nav-link"
                                    onClick={closeMobileMenu}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="mobile-contact-section">
                            <button className="mobile-contact-btn">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;