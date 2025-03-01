

import React from 'react';
import { assets } from '../../assets/assets';
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="d-flex flex-row mt-5 justify-content-around flex-wrap">
        <div className="d-flex flex-column m-5 pl-5 logo-container">
          <img src={assets.logo} className="mb-4 img-fluid logo-img" alt="Company Logo" />
          <p className="w-100 text-muted">
            React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="list-unstyled text-muted">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="list-unstyled text-muted">
            <li>+1-212-123-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <hr />
        <p className="py-2 text-sm">Copyright 2024 @ forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
