import React, { useState } from "react";
import './About.css';
import { Link } from "react-router-dom";
import OurJourney from "../OurJourney/OurJourney";

const About = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Demo images for masonry grid
    const demoImages = [
        {
            id: 1,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image5.JPG",
            alt: "Business Meeting"
        },
        {
            id: 2,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image1.jpg",
            alt: "Team Collaboration"
        },
        {
            id: 3,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image3.jpg",
            alt: "Office Environment"
        },
        {
            id: 4,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image7.JPG",
            alt: "Innovation"
        },
        {
            id: 5,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image8.JPG",
            alt: "Leadership"
        },
        {
            id: 6,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image9.jpg",
            alt: "Success"
        },
        {
            id: 7,
            src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image4.JPG",
            alt: "Growth"
        }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="paddingTop marginTop marginBottom">
                <div className="Container">
                    <div className='CommonHeader'>
                        <div className='TagContainer'>
                            <Link to="/"> Home</Link> . About
                        </div>
                        <h2>Visionary <span>Entrepreneur, Leader, and Philanthropist</span> Shaping a Sustainable Future</h2>
                    </div>

                    <div className="MansoryGridContainer">
                        {demoImages.map((image) => (
                            <div
                                key={image.id}
                                className="masonry-item"
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div className="image-overlay">
                                    <span>Click to view</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Full Screen Modal */}
                    {isModalOpen && selectedImage && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={closeModal}>
                                    ×
                                </button>
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="modal-image"
                                />
                             
                            </div>
                        </div>
                    )}

                    <br />
                    <h3 className="marginTop DesignHeading">Ganpatraj&nbsp;Chowdhary</h3>
                    <br />
                    <b><i>Chairman & Managing Director – Riddhi Siddhi Group</i></b>
                    <br />
                    <br />
                    <p>A first-generation entrepreneur and visionary industrialist, Mr. Ganpatraj Chowdhary has transformed humble beginnings into a powerful legacy. Born in a small village in Rajasthan, he started his entrepreneurial journey at just 20 with a scooter and a dream. Today, he leads a multi-vertical conglomerate spanning Starch & Chemicals, Newsprint, Paper, Real Estate, and Renewable Energy.</p>

                    <p>His leadership has resulted in strategic alliances, takeovers of iconic units, and sustainable growth. Guided by his life philosophy of "Learn, Earn, and Return," he continues to lead with purpose, innovation, and compassion.</p>
                </div>
            </div>
            <OurJourney />
        </>
    )
}

export default About;