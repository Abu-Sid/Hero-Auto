import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState();
  useEffect(() => {
    fetch("https://thawing-ravine-07119.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialData(data);
        console.log(testimonialData);
      });
  }, []);
    return (
      <section id="reviews" className="testimonials p-md-3">
                <div className="my-5 ">
                    <div className="review-title text-center">
                        <h3>Testimonials</h3>
                    </div>
                    <div>
                    {testimonialData?.length > 0 ?
                        <Swiper   loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10} >
                            {
                                testimonialData.map(testimonial => <SwiperSlide key={testimonial._id}><Testimonial testimonial={testimonial} /></SwiperSlide>)    
                            }
                        </Swiper>
                        : <div className="text-center">
                            <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />
                        </div>
                    }
                </div>
                </div>
        </section>
      //  <section className="testimonials my-5 py-5">
      //      <div className="container">
      //          <div className="section-header text-center">
      //              <h1 className="text-white text-uppercase fw-bold">What Our Customers Says</h1>
      //          </div>
      //          <div className="card-deck mt-5 pb-3">
      //               {
      //                   testimonialData?.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
      //               }
      //           </div>
      //      </div>
      //  </section>
    );
};

export default Testimonials;    