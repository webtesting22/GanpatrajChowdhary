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
        <div className='paddingTop marginTop' style={{position: 'relative'}}>
            <div className='Container'>
                <div className='CommonHeader'>
                    <div>
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/8935a316-38c6-4cec-b100-baa11e2f21d6.part0.jpeg" alt="" />
                    </div>
                    <div className='TagContainer'>
                        Ganpatraj Chowdhary
                    </div>
                    <div className='MaxContainer'>
                        <h2>Discover the Inspiring Journey of Mr. Ganpatraj Chowdhary – <span>Visionary Entrepreneur, Philanthropist, and Environmental Leader</span></h2>
                        {/* <p></p> */}
                        <div className='CommonbtnContainer'>
                            <button onClick={handleScrollDown}>Explore <MdArrowOutward /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome;