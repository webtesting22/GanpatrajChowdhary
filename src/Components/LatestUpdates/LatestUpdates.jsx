import React, { useState } from "react";
import { FiPlay, FiCalendar, FiClock, FiArrowRight, FiX, FiExternalLink } from "react-icons/fi";
import "./LatestUpdates.css";

const LatestUpdates = () => {
    const [selectedUpdate, setSelectedUpdate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Latest updates based on Mr. Ganpatraj Chowdhary's actual journey and achievements
    const latestUpdates = [
        {
            id: 1,
            title: "Mr. Ganpatraj Chowdhary Honored with Prestigious Yuva Unstoppable ICON Award",
            category: "Awards",
            date: "2024-01-15",
            time: "3 hours ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
            excerpt: "Mr. Ganpatraj Chowdhary receives the prestigious Yuva Unstoppable ICON Award, recognizing his exceptional leadership and contribution to entrepreneurship and social welfare.",
            content: "Mr. Ganpatraj Chowdhary, Chairman and Managing Director of Riddhi Siddhi Group, has been honored with the prestigious Yuva Unstoppable ICON Award. This recognition celebrates his remarkable journey from a small village in Rajasthan to becoming one of India's most successful entrepreneurs. The award acknowledges his exceptional vision, wisdom, and leadership that has created wealth, provided employment, and promoted sustainability. Mr. Chowdhary's inspiring journey from starting with a scooter at age 20 to leading a multi-vertical conglomerate serves as a beacon of hope for young entrepreneurs across the country.",
            tags: ["Awards", "Leadership", "Entrepreneurship"],
            readTime: "4 min read",
            featured: true
        },
        {
            id: 2,
            title: "Rajasthan School Ahmedabad Expands Educational Impact to 3000+ Students",
            category: "Education",
            date: "2024-01-14",
            time: "1 day ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Under Mr. Chowdhary's leadership, Rajasthan School Ahmedabad continues to provide quality education to over 3000 underprivileged students at minimal fees.",
            content: "As the Chairman of Rajasthan School, Ahmedabad, Mr. Ganpatraj Chowdhary is making a profound impact on over 3000 underprivileged students by offering quality education at minimal fees. This initiative reflects his life philosophy of 'Learn, Earn, and Return.' The school has become a model of educational excellence, providing opportunities to students who otherwise might not have access to quality education. Mr. Chowdhary's commitment to education extends beyond just providing facilities - he actively encourages others to donate for different social welfare activities, creating a ripple effect of positive change in the community.",
            tags: ["Education", "CSR", "Social Impact"],
            readTime: "3 min read",
            featured: false
        },
        {
            id: 3,
            title: "Riddhi Siddhi Group Expands Renewable Energy Portfolio in Drought-Affected Barmer",
            category: "Environment",
            date: "2024-01-13",
            time: "2 days ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Mr. Chowdhary's initiative to rejuvenate water bodies in drought-affected Barmer region benefits nearby villagers and animals.",
            content: "Mr. Ganpatraj Chowdhary's commitment to environmental sustainability takes a significant step forward with the expansion of renewable energy projects in the drought-affected Barmer region. The initiative focuses on rejuvenating water bodies that benefit nearby villagers and animals, addressing the critical water scarcity issue in his native region. This project aligns with the group's significant investment in renewable energy, including windmills in Tamil Nadu, Maharashtra, and Gujarat. The initiative demonstrates Mr. Chowdhary's deep connection to his roots and his dedication to improving the lives of people in rural areas.",
            tags: ["Environment", "Sustainability", "Rural Development"],
            readTime: "5 min read",
            featured: false
        },
        {
            id: 4,
            title: "New Animal Shelter Initiative Launched by Mr. Ganpatraj Chowdhary",
            category: "Philanthropy",
            date: "2024-01-12",
            time: "3 days ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "As an animal lover, Mr. Chowdhary expands his philanthropic work with new animal shelter facilities.",
            content: "Mr. Ganpatraj Chowdhary's philanthropic work extends beyond human welfare to include animal welfare. As an animal lover, he has built comprehensive animal shelters that provide care and protection to stray animals. This initiative reflects his holistic approach to social responsibility and his belief in the interconnectedness of all living beings. The animal shelters are equipped with modern facilities and staffed by trained professionals, ensuring the well-being of animals in need. This project is part of his broader commitment to serving society in multiple dimensions.",
            tags: ["Philanthropy", "Animal Welfare", "Social Responsibility"],
            readTime: "3 min read",
            featured: false
        },
        {
            id: 5,
            title: "Strategic Alliance with Roquette Freres France Strengthens Global Presence",
            category: "Business",
            date: "2024-01-11",
            time: "4 days ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Riddhi Siddhi Group's strategic alliance with Roquette Freres France enhances global market presence and technological capabilities.",
            content: "Riddhi Siddhi Group, under Mr. Ganpatraj Chowdhary's visionary leadership, has strengthened its global presence through a strategic alliance with Roquette Freres France. This partnership represents a significant milestone in the group's expansion strategy, bringing advanced technology, best practices, and expanded market access. The alliance builds on Mr. Chowdhary's successful track record of strategic partnerships, including the previous collaboration with Roquette and the acquisition of Hindustan Lever Biopolymer Unit. This development positions the group as a global player in the starch and allied chemicals industry.",
            tags: ["Business", "Partnership", "Global Expansion"],
            readTime: "4 min read",
            featured: false
        },
        {
            id: 6,
            title: "Preservation of Ancient Tirthasthan Receives National Recognition",
            category: "Heritage",
            date: "2024-01-10",
            time: "5 days ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Mr. Chowdhary's efforts to maintain ancient tirthasthan and preserve history, traditions, and art receive national appreciation.",
            content: "Mr. Ganpatraj Chowdhary's enthusiastic work to maintain ancient tirthasthan has received national recognition for its contribution to preserving history, traditions, and art for future generations. His commitment to cultural preservation goes beyond business success, reflecting his deep respect for India's rich heritage. The initiative includes restoration projects, documentation of traditional practices, and educational programs to pass on cultural knowledge to younger generations. This work demonstrates Mr. Chowdhary's holistic approach to community development and his understanding that true progress includes preserving our cultural roots.",
            tags: ["Heritage", "Cultural Preservation", "Community"],
            readTime: "3 min read",
            featured: false
        },
        {
            id: 7,
            title: "Prime Minister Narendra Modi Appreciates Mr. Chowdhary's Entrepreneurial Achievements",
            category: "Recognition",
            date: "2024-01-09",
            time: "6 days ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "India's Prime Minister Mr. Narendra Modi and Gujarat's Ex-Chief Minister Mr. Vijay Rupani appreciate Mr. Chowdhary's entrepreneurial endeavors.",
            content: "Mr. Ganpatraj Chowdhary's entrepreneurial endeavors and accomplishments have been appreciated on several occasions by India's Prime Minister Mr. Narendra Modi and Gujarat's Ex-Chief Minister Mr. Vijay Rupani. This recognition at the highest levels of government acknowledges Mr. Chowdhary's contribution to India's economic growth and his role as a model entrepreneur. His journey from a small village in Rajasthan to leading a successful multi-vertical conglomerate serves as an inspiration for the government's vision of promoting entrepreneurship and self-reliance.",
            tags: ["Recognition", "Government", "Entrepreneurship"],
            readTime: "4 min read",
            featured: false
        },
        {
            id: 8,
            title: "'You are Unstoppable' Campaign Inspires Youth Across India",
            category: "Motivation",
            date: "2024-01-08",
            time: "1 week ago",
            image: "https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Mr. Chowdhary's mantra 'You are Unstoppable' spreads across the country, inspiring today's youth to Learn, Earn and Return.",
            content: "Mr. Ganpatraj Chowdhary's powerful mantra 'You are Unstoppable' is slowly and surely spreading across the country, inspiring today's youth to embrace his philosophy of Learn, Earn, and Return. This campaign has become a movement, encouraging young people to believe in their potential and work towards creating positive change in society. Mr. Chowdhary's message to young leaders - 'It is our duty to do the best and obligation to give back to society' - resonates with millions of aspiring entrepreneurs and social workers across India. The campaign includes motivational speeches, mentorship programs, and initiatives to support young entrepreneurs.",
            tags: ["Motivation", "Youth", "Leadership"],
            readTime: "5 min read",
            featured: false
        }
    ];

    const openModal = (update) => {
        setSelectedUpdate(update);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUpdate(null);
        document.body.style.overflow = 'unset';
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="latest-updates paddingTop marginTop paddingBottom">
            <div className="Container">
                <div className="updates-header">
                    <h2>Latest <span>Updates</span></h2>
                    <p>Stay informed about the latest developments, achievements, and initiatives from Mr. Ganpatraj Chowdhary and Riddhi Siddhi Group</p>
                </div>

                <div className="updates-grid">
                    {latestUpdates.map((update) => (
                        <div 
                            key={update.id} 
                            className={`update-card ${update.featured ? 'featured' : ''}`}
                            onClick={() => openModal(update)}
                        >
                            <div className="update-image">
                                <img src={update.image} alt={update.title} />
                                {update.video && (
                                    <div className="video-overlay">
                                        <FiPlay />
                                    </div>
                                )}
                                {update.featured && (
                                    <div className="featured-badge">Featured</div>
                                )}
                            </div>
                            
                            <div className="update-content">
                                <div className="update-meta">
                                    <span className="category">{update.category}</span>
                                    <div className="date-time">
                                        <FiCalendar />
                                        <span>{formatDate(update.date)}</span>
                                        <FiClock />
                                        <span>{update.time}</span>
                                    </div>
                                </div>
                                
                                <h3 className="update-title">{update.title}</h3>
                                <p className="update-excerpt">{update.excerpt}</p>
                                
                                <div className="update-footer">
                                    <div className="read-time">
                                        <span>{update.readTime}</span>
                                    </div>
                                    <div className="read-more">
                                        <span>Read More</span>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="updates-footer">
                    <button className="load-more-btn">
                        Load More Updates
                        <FiArrowRight />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedUpdate && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FiX />
                        </button>
                        
                        <div className="modal-header">
                            <div className="modal-meta">
                                <span className="modal-category">{selectedUpdate.category}</span>
                                <div className="modal-date-time">
                                    <FiCalendar />
                                    <span>{formatDate(selectedUpdate.date)}</span>
                                    <FiClock />
                                    <span>{selectedUpdate.time}</span>
                                </div>
                            </div>
                            <h2 className="modal-title">{selectedUpdate.title}</h2>
                        </div>

                        <div className="modal-body">
                            {selectedUpdate.video && (
                                <div className="modal-video">
                                    <video controls>
                                        <source src={selectedUpdate.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            
                            <div className="modal-image">
                                <img src={selectedUpdate.image} alt={selectedUpdate.title} />
                            </div>
                            
                            <div className="modal-text">
                                <p>{selectedUpdate.content}</p>
                            </div>
                            
                            <div className="modal-tags">
                                {selectedUpdate.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="modal-actions">
                                <button className="share-btn">
                                    <FiExternalLink />
                                    Share
                                </button>
                                <button className="download-btn">
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LatestUpdates;