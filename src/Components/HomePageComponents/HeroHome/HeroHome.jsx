import React from 'react';
import './HeroHome.css';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const HeroHome = () => {
    const handleScrollDown = (e) => {
        e.preventDefault();
        window.scrollBy({
            top: 700,
            behavior: 'smooth'
        });
    };

    return (
        <div className='paddingTop marginTop'>
            <div className='Container'>
                <div className='CommonHeader'>
                    <div className='TagContainer'>
                        Ganpatraj Chowdhary
                    </div>
                    <h2>Discover the essence of Pearl, a free Framer template. <span>Let's shape your brand into a masterpiece together.</span></h2>
                    {/* <p></p> */}
                    <div className='CommonbtnContainer'>
                        <button onClick={handleScrollDown}>About Us <MdArrowOutward /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;