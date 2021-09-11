import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ServiceDetail.css";
const ServiceDetail = ({ service }) => {
    
  const history = useHistory();
    // console.log("service",service);
    const {_id,name,price,imageURL}=service;
    return (
      <>
        <div data-aos="fade-up" className='col-lg-4 col-md-6 mb-3 text-center'>
      <div onClick={() => history.push(`/checkout/${_id}`)} className='service p-4 radius h-100'>
          <img style={{height: '170px'}} className='img-fluid radius service-img' src={imageURL} alt=""/>
          <h4 className='mt-3 text-center'>{name}</h4>
          <h5 className='color-primary mt-3'>price: ${price}</h5>
          <h5 className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!</h5>
          <button className='mt-3  primary-btn' >Book</button>
      </div>
  </div>
      </>
      
    );
};

export default ServiceDetail;