import React, { useState } from "react";
import { Image, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import './JourneyPhotos.css';

const JourneyPhotos = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Image data organized by categories
    const imageData = {
        all: [
            {
                id: 1,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image1.jpg",
                alt: "Business Meeting",
                category: "business"
            },
            {
                id: 2,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image3.jpg",
                alt: "Leadership",
                category: "leadership"
            },
            {
                id: 3,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image4.JPG",
                alt: "Team Collaboration",
                category: "team"
            },
            {
                id: 4,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image5.JPG",
                alt: "Strategic Planning",
                category: "strategy"
            },
            {
                id: 5,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image7.JPG",
                alt: "Innovation",
                category: "innovation"
            },
            {
                id: 6,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image8.JPG",
                alt: "Success",
                category: "success"
            },
            {
                id: 7,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image9.jpg",
                alt: "Growth",
                category: "growth"
            }
        ],
        business: [
            {
                id: 1,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image1.jpg",
                alt: "Business Meeting"
            },
            {
                id: 4,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image5.JPG",
                alt: "Strategic Planning"
            }
        ],
        leadership: [
            {
                id: 2,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image3.jpg",
                alt: "Leadership"
            },
            {
                id: 6,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image8.JPG",
                alt: "Success"
            }
        ],
        team: [
            {
                id: 3,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image4.JPG",
                alt: "Team Collaboration"
            }
        ],
        innovation: [
            {
                id: 5,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image7.JPG",
                alt: "Innovation"
            }
        ],
        growth: [
            {
                id: 7,
                src: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/Image9.jpg",
                alt: "Growth"
            }
        ]
    };

    const tabItems = [
        {
            key: 'all',
            label: 'All Photos',
            children: (
                <div className="gallery-grid">
                    {imageData.all.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            key: 'business',
            label: 'Business',
            children: (
                <div className="gallery-grid">
                    {imageData.business.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            key: 'leadership',
            label: 'Leadership',
            children: (
                <div className="gallery-grid">
                    {imageData.leadership.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            key: 'team',
            label: 'Team',
            children: (
                <div className="gallery-grid">
                    {imageData.team.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            key: 'innovation',
            label: 'Innovation',
            children: (
                <div className="gallery-grid">
                    {imageData.innovation.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            key: 'growth',
            label: 'Growth',
            children: (
                <div className="gallery-grid">
                    {imageData.growth.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                preview={{
                                    mask: <div className="preview-mask">Click to preview</div>
                                }}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <div className="paddingTop marginTop marginBottom">
            <div className="Container">
                <div className="CommonHeader">
                    <div className="TagContainer">
                        <Link to="/"> Home</Link> . Journey Photos
                    </div>
                    <h2>A Legacy in <span>Frames</span></h2>
                    <p>Discover the inspiring milestones and timeless moments from Ganpatraj Chowdhary’s extraordinary journey, captured through a lens.

                    </p>
                </div>

                <div className="gallery-container">
                    <Tabs
                        defaultActiveKey="all"
                        items={tabItems}
                        onChange={setActiveTab}
                        className="custom-tabs"
                        tabBarStyle={{
                            marginBottom: '40px',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default JourneyPhotos;