import React, { useState } from "react";
import './OurJourney.css';

const OurJourney = () => {
    const [activeStep, setActiveStep] = useState(0);

    const journeySteps = [
        {
            id: 1,
            year: "23rd March 1963",
            title: "Birth",
            description: "Born in a small village, Gadh Siwana, Barmer District of Rajasthan.",
            icon: "👶"
        },
        {
            id: 2,
            year: "Education",
            title: "Academic Background",
            description: "Completed primary education in Gadh Siwana and graduated in commerce from the University of Madras, Tamil Nadu.",
            icon: "🎓"
        },
        {
            id: 3,
            year: "1983",
            title: "Entrepreneurial Beginning",
            description: "Mr. Ganpatraj's journey as an entrepreneur began. At the young age of 20, he joined his family business of trading in Starch and allied products on a Scooter.",
            icon: "🛵"
        },
        {
            id: 4,
            year: "1985",
            title: "First Acquisition",
            description: "Within a short span of two years, he had acquired his first starch manufacturing plant – Glaxo.",
            icon: "🏭"
        },
        {
            id: 5,
            year: "Milestones",
            title: "Business Expansion",
            description: "He has witnessed several milestones taking over the Hindustan Lever Biopolymer Unit, a Strategic alliance with Roquette, a Joint Venture with Roquette Freres France, acquired Shree Rama Newsprint Ltd.",
            icon: "📊"
        },
        {
            id: 6,
            year: "Present",
            title: "Current Roles",
            description: "He is the Chairman and Managing Director of the Riddhi Siddhi Group, Director of The Anup Engineering Ltd, Non Exec Chairman of Shree Rama Newsprint Ltd.",
            icon: "👔"
        },
        {
            id: 7,
            year: "Present",
            title: "Diversification & Sustainability",
            description: "The group manages several verticals including Starch & Allied Chemicals, Newsprint, Writing & Printing Paper and Real Estate. The group has also significantly invested in renewable energy with the setup of windmills in Tamilnadu, Maharashtra, Gujarat.",
            icon: "🌱"
        }
    ];

    const currentRoles = [
        {
            id: 1,
            title: "CMD, Riddhi Siddhi Group",
            description: "Chairman and Managing Director"
        },
        {
            id: 2,
            title: "Director, The Anup Engineering Ltd",
            description: "Board Director"
        },
        {
            id: 3,
            title: "Non-Exec Chairman, Shree Rama Newsprint Ltd",
            description: "Non-Executive Chairman"
        }
    ];

    return (
        <><div className="current-roles-section  marginBottom">
        <div className="Container">
            <div className="roles-header">
                <h2 className="roles-title">Current Roles</h2>
                <p className="roles-subtitle">Leadership positions across diverse industries</p>
            </div>

            <div className="roles-container">
                {currentRoles.map((role, index) => (
                    <div key={role.id} className="role-item">
                        <h3>{role.title}</h3>
                        <div className="role-description">{role.description}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
            <div className="journey-container paddingTop">
                <div className="journey-content">
                    <div className="journey-header">
                        <h2 className="journey-title">Our Journey</h2>
                        <p className="journey-subtitle">From humble beginnings to industry leadership</p>
                    </div>

                    <div className="journey-timeline">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`journey-step ${index === activeStep ? 'active' : ''}`}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div className="step-connector">
                                    <div className="step-line"></div>
                                    <div className="step-dot"></div>
                                </div>

                                <div className="step-content">
                                    <div><i>{step.year}</i></div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="journey-progress">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            Step {activeStep + 1} of {journeySteps.length}
                        </div>
                    </div>

                    {/* Current Roles Section */}

                </div>
            </div>
            
        </>
    );
};

export default OurJourney;