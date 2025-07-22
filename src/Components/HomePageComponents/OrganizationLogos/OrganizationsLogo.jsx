import React from "react";
import "./OrganizationsLogo.css";

const OrganizationsLogo = () => {
    const organizations = [
        {
            name: "BlueCraft",
            logo: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/BlueCraftLogoUpdate.jpeg",
            description: "Innovation and Technology"
        },
        {
            name: "GanpatRaj",
            logo: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/GanpatRajLogoUpdate.jpeg",
            description: "Excellence in Service"
        },
        {
            name: "RiddhiSiddhi",
            logo: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/RiddhiSiddhiLogoUpdat.jpeg",
            description: "Growth and Prosperity"
        }
    ];

    return (
        <section className="organizations-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Partner Organizations</h2>
                    <p className="section-subtitle">
                        Collaborating with industry leaders to deliver exceptional value
                    </p>
                </div>

                <div className="organizations-grid">
                    {organizations.map((org, index) => (
                        <div key={index} className="organization-card">
                            <div className="logo-container">
                                <img
                                    src={org.logo}
                                    alt={`${org.name} Logo`}
                                    className="organization-logo"
                                    loading="lazy"
                                />
                            </div>
                            <div className="organization-info">
                                <h3 className="organization-name">{org.name}</h3>
                                <p className="organization-description">{org.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrganizationsLogo;
