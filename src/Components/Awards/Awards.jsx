import React from "react";
import "./Awards.css";

const Awards = () => {
    const awardsData = [
        {
            id: 1,
            award: "Yuva Unstoppable Icon Award 2010",
            presentedBy: "The Former President of India Late Dr. A.P.J Abdul Kalam",
            year: "2010"
        },
        {
            id: 2,
            award: "AMA - Atlas Dyechem Outstanding Entrepreneur Award 2011",
            presentedBy: "Ahmedabad Management Association",
            year: "2011"
        },
        {
            id: 3,
            award: "Social Appreciation Award",
            presentedBy: "Rajasthan Hospital for social services",
            year: "2012"
        },
        {
            id: 4,
            award: "Outstanding President Award",
            presentedBy: "Lions Club",
            year: "2013"
        }
    ];

    return (
        <div className="AwardsContainer paddingTop marginTop paddingBottom">
            <div className="Container">
                <div className="CommonHeader">
                    <div className="TagContainer">
                        <a href="/"> Home</a> . Awards
                    </div>
                    <h2>Recognition & <span>Achievements</span></h2>
                    <p>Celebrating the remarkable achievements and recognition received by Mr. Ganpatraj Chowdhary for his outstanding contributions to entrepreneurship, social service, and community development.</p>
                </div>

                <div className="awards-grid">
                    {awardsData.map((award) => (
                        <div key={award.id} className="award-card">
                            <div className="award-header">
                                <div className="award-year">{award.year}</div>
                                <div className="award-icon">🏆</div>
                            </div>
                            <div className="award-content">
                                <h3 className="award-title">{award.award}</h3>
                                <p className="award-presenter">Presented by {award.presentedBy}</p>
                            </div>
                            <div className="award-overlay">
                                <span>View Details</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;