import React from 'react';
import HeroHome from './HeroHome/HeroHome';
import VideoContainer from './VideoContainer/VideoContainer';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator';

const HeroRoutes = () => {
    return (
        <>
            <HeroHome />
            <VideoContainer />
            <QuoteGenerator/>
        </>
    );
};

export default HeroRoutes;