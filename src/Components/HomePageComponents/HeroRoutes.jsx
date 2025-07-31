import React from 'react';
import HeroHome from './HeroHome/HeroHome';
import VideoContainer from './VideoContainer/VideoContainer';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator';
import Awards from '../Awards/Awards';
import OrganizationsLogo from './OrganizationLogos/OrganizationsLogo';

const HeroRoutes = () => {
    return (
        <>
            <HeroHome />
            <VideoContainer />
            <Awards />
            <OrganizationsLogo />
            {/* <QuoteGenerator/> */}
        </>
    );
};

export default HeroRoutes;