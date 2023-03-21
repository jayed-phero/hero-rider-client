import React from 'react';
import Services from '../../Services/Services';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Services />
        </div>
    );
};

export default Home;