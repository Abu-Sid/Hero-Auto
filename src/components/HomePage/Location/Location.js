import RoomIcon from '@material-ui/icons/Room';
import React from 'react';

const services = [
    { 
        title: 'Dhaka',
        detail: '420 Bijoy Sharni, Dhaka-4000',
        contact:"Phone-123456789"

    },
    {
        title: 'Chittagong ',
        detail: '420 Bijoy Sharni, Dhaka-4000',
        contact:"Phone-123456789"
    },
    {
        title: 'Rajshahi',
        detail: '420 Bijoy Sharni, Dhaka-4000',
        contact:"Phone-123456789"

    },
]

const Location = () => {
    return (
        <div className='mt-5'>
            <div className="section-header text-center">
                   <h1 className="text- text-uppercase">Area we serve</h1>
               </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                {
                    services.map(service =>
                        <div data-aos="zoom-in"
                        className="card m-2 shadow" style={{ width: '20rem',height:'15rem', border: 'none' }}>
                            <div className="card-body text-center mt-5">
                                <h3 className="card-title shared-color"><RoomIcon fontSize="large"/>{service.title}</h3>
                                <p className="card-text shared-color text">{service.detail}</p>
                                <p className="card-text shared-color text">{service.contact}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Location;