import React, { Fragment } from 'react';
import heroImg from "../images/banner.png";

const Hero = () => {
    return (
        <Fragment>
            <div style={{width:'100%' }}>
                <img src={heroImg} alt="Hero Banner" className='w-full h-full' />
            </div>
        </Fragment>
    );
};

export default Hero;