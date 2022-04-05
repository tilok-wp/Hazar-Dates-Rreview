import React from 'react';
import aboutImage from './../../images/about-image.jpg'

const About = () => {
    return (
        <div className='py-8'>
            <h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase mb-5'>About Us</h3>
            <img className='img-fluid mb-3' src={aboutImage} alt="" />
            <div className="md:w-3/4 mx-auto p-5">
                <p>Our story began in 1988 as a foodstuff import/export facility. Today, we are a market leader for packaging and processing dates. Our world-class facility is located in Dubai Industrial City, and is the definition of technological advancement and automation. We have dedicated dates sorting, washing, and packaging lines and state-of-the-art date paste, date syrup and date sugar production lines.</p>
                <p>Our range of packaging varies from bulk 1kg loose dates to 5kg vacuum packs. Given our rapidly-growing factory size and highly advanced technology, we can cater to our individual client s needs and requirements. One of our key strengths at Al Barakah Dates is our capacity to store more than 40,000 metric tons of dates in our cold stores, enabling us to retain the freshness of our dates throughout the season.</p>

            </div>
        </div>
    );
};

export default About;