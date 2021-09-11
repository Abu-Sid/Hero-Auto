import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Member from './Member';
import "./Team.css";
import "./teamData";
import { teamData } from './teamData';


SwiperCore.use([EffectCoverflow,Pagination]);

const Team = () => {
    return (
       <section className="team-container" id="about">
           <h3>Meet our Awesome team</h3>
           <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla! Lorem ipsum dolor sit</small></p>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}   
             autoplay={{  delay: 2500, disableOnInteraction: false}} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true}
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
          >
                {
                        teamData.map(team => {
                            return(
                                <SwiperSlide  key={team.id}>
                                    <Member key={team.id} team={team} />
                                </SwiperSlide>
                            )
                        })
                }
            
          
            </Swiper>
       </section>
    );
};

export default Team;