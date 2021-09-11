import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import image from '../../../Image/landing_car.png';
import "./Header.scss";

AOS.init();
const Header = () => {
    return (
      <header className="header-container position-relative landing">
      <div className="row mx-auto flex-column-reverse flex-md-row header-row">
          <div className="col-md-5">
              <div data-aos-offset="300" className="ms-md-5 ps-1 ps-lg-4">
                  <h1 data-aos="fade-down" data-aos-delay='500' className="color-primary">WE DO IT ALL</h1>
                  <h3 data-aos="fade-right" data-aos-delay='1000' className='my-3'>FROM OIL CHANGES TO INSPECTIONS  WE'RE HERE TO KEEP YOUR CAR RUNNING.</h3>
                  <div data-aos="fade-left" data-aos-delay='1500' className="my-2 header-icon">
                      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/saifulsojib.bd" className="me-1 header-links link-1">
                          <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saiful-sojib/" className="me-1 header-links link-2">
                          <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCoCyQ3EKg-0N_prpv3akw4g" className="me-1 header-links link-3">
                          <FontAwesomeIcon icon={faYoutube} />
                      </a>
                  </div>
                  <a href="#services">
                      <button data-aos="fade-down" data-aos-delay='2000' className='primary-btn'>Get Services</button>
                  </a>
              </div>
          </div>
          <div className="col-md-7">
              <div className="bottom-side ">
                  <img data-aos="fade-down"
                      className="img-fluid"
                      src={image} alt=""
                  />
              </div>
          </div>
      </div>
  </header>
        
    );
};

export default Header;