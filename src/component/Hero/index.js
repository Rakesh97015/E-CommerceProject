

import React from 'react';
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <div className="d-flex flex-column flex-sm-row border border-secondary ">
      <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div className="bg-secondary" style={{ width: "40px", height: "2px" }}></div>
          <p className="fw-medium m-0">OUR BEST SELLERS</p>
        </div>
        <h1 className="display-4 fw-bold my-2">Latest Arrivals</h1>
        <div className="d-flex align-items-center gap-2 mt-2">
          <p className="fw-semibold">SHOP IN</p>
          <div className="bg-secondary" style={{ width: "40px", height: "2px" }}></div>
        </div>
      </div>
      {/* <img className="w-100 w-sm-50  img-fluid" src={assets.hero_img} style={{ maxWidth: '70%', maxHeight: '400px', objectFit: 'cover' }}  alt="Hero" /> */}
      <img
        className="w-full sm:w-1/2 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto img-fluid"
         src={assets.hero_img}
         style={{ maxHeight: '400px', objectFit: 'cover' }}
         alt="Hero"
        />

    </div>
  );
};

export default Hero;
