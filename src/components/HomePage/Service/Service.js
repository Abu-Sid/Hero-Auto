import React, { useEffect, useState } from 'react';
import uber from '../../../Image/uber.jpeg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import '../ServiceDetail/ServiceDetail.css';
const Services = () => {
    const [serviceData, setServiceData] = useState();
  useEffect(() => {
    fetch("https://thawing-ravine-07119.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, [setServiceData]);
    return (
        <section id="services" className="service-container mt-5">
            <div className="text-center">
                <h1 className=" text-uppercase p-5">Services at Your Fingertips</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {serviceData?.length?<div className="w-100 row ">
                    {
                        serviceData?.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>:
                <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />}
            </div>
            <img style={{width:'100%',marginTop:'2rem'}} src={uber} alt=""/>
        </section>
    );
};

export default Services;