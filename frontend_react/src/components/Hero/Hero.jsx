import React from 'react';
import cabinImage from '../../img/cabin.jpeg'

const Hero = () => {
  return (
    <>
      <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
        <div className="hero full-width full-height">
          <img
            src={cabinImage}
            alt="Hero"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="hide-on-mobile hero">
        <img
          src={cabinImage}
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default Hero;
