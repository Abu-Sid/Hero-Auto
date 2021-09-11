import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../../Image/user.png';
import './Testimonial.css';


const Testimonial = ({testimonial}) => {
    const {name,review} =testimonial;
    return (
        <div className="testimonial-card">
              <div className="testimonial-avatar-box">
                  <img className="testimonial-avatar img-fluid" src={img} alt={name} />
              </div>
              <div className="testimonial-content">
                  <div className="testimonial-description">
                      <p className='des text-muted' >{review}</p>
                  </div>
                  <h5 className="mb-0 mt-0 pb-0 text-primary">{name}</h5>
                  <div>
                    {
                        ['rating1', 'rating2', 'rating3', 'rating4', 'rating5'].map((rating, i) => <FontAwesomeIcon key={rating}  className={`${i<'selected-rating'}`} icon={faStar} />)
                    }
                </div>
              </div>
          </div>
    //     <div className="card shadow rounded-5 card-animation">
    //          <Grid item align="center">
    //          <RateReviewIcon  fontSize="large"/>
    //          </Grid>
    //         <div className="card-body">
               
    //             <p className="card-text text-center">{review}</p>
    //         </div>
    //         <div className="card-footer d-flex  justify-content-center">
                
    //                 <h4 className="text-primary ">{name}</h4>
    //         </div>
    //    </div>
    );
};

export default Testimonial;
