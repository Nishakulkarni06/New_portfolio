import React from 'react'
import './Main.css'
import Zoomify from "../../photos/Screenshot 2024-10-29 145141.png";
import Wanderlust from "../../photos/Screenshot 2024-10-29 153609.png";
import Gemini from "../../photos/Screenshot 2024-10-29 225634.png"
import ECom from "../../photos/Screenshot 2024-10-29 224931.png"
import Simon from "../../photos/Screenshot 2024-10-29 230732.png"
import Slider from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProjCards from "../../components/ProjCards/ProjCards";
import {EffectCoverflow ,Pagination ,Navigation}  from 'swiper/modules';
import {motion} from "framer-motion";  

const Main = () => {
const transition = {duration:2,type:'spring'} 
    
  return (
    <div>
      <div className="projects">
          <h1>Projects</h1>
          <div className="container">
             <Swiper 
             effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}
             loop={true}
             slidesPerView={'auto'}
             coverflowEffect={
              {
                rotate : 0,
                stretch : 0,
                depth:100,
                modifier:2.5
              }
             }
             pagination={{el:'.swipper-pagination',clickable:true}}
             navigation={{
              nextEl:'.Swiper-button-next',
              prevEl:'.Swiper-button-prev', 
              clickable:true,  
            }}
            modules = {[EffectCoverflow,Pagination,Navigation]} 
             className="swiper_container"
             >
              
              <motion.div
    initial={{ backgroundColor: "white" }} 
    whileInView={{ backgroundColor:"black" }} 
    transition={{ duration: 0.5 }} 
    viewport={{ once: false }} // Set to false for testing
>
              <SwiperSlide>
              <ProjCards image={Wanderlust} text={'Hotel Rentel Booking'} link={'https://wanderlust-51in.onrender.com/listings'} className='projCards'></ProjCards>
              </SwiperSlide>
              </motion.div>
              <SwiperSlide>
              <ProjCards image={Zoomify} text={'Video Calling App'} link={'https://zoomify-frontend.onrender.com'} className='projCards'></ProjCards>
              </SwiperSlide>
              <SwiperSlide>
              <ProjCards image={Gemini} text={'API Integrated Chat Bot '} link={''} className='projCards'></ProjCards>
              </SwiperSlide>
              <SwiperSlide>
              <ProjCards image={Simon} text={'Simon Says Game'} link={'https://wanderlust-51in.onrender.com/listings'} className='projCards'></ProjCards>
              </SwiperSlide>
              <SwiperSlide>
              <ProjCards image={ECom} text={'ECommerce website (UI)'} link={'https://wanderlust-51in.onrender.com/listings'} className='projCards'></ProjCards>
              </SwiperSlide>

                <div className="slider-controler">
                  <div className="swiper-button-previous slider-arrow">
                    <ion-ico name="arrow-back-outline"></ion-ico>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ion-ico name="arrow-forward-outline"></ion-ico>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
             </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Main
