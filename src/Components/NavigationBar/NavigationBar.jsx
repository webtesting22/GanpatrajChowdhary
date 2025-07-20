import React, { useState, useEffect } from "react";
import NavigationData, { profileData } from "./NavigationData";
import './NavigationBar.css';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

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
                        <div className="profile-image">
                            <img src={profileData.image} alt={profileData.name} />
                        </div>

                        {/* Available for work text - only visible when scrolled and not hovered */}
                        <div className={`available-text ${isScrolled && !isHovered ? 'show' : ''}`}>
                            <span>Available for work</span>
                            <div className="status-dot"></div>
                        </div>
                    </div>

                    {/* Navigation Links - hidden when scrolled but show on hover */}
                    <div className={`nav-links ${shouldShowNavigation ? '' : 'hide'}`}>
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

                    {/* Contact Button - hidden when scrolled but show on hover */}
                    <div className={`contact-section ${shouldShowNavigation ? '' : 'hide'}`}>
                        <button className="contact-btn">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;