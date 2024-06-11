import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Port1.css';

// import required modules
import { Navigation } from 'swiper/modules';



//img section
import pf_1 from '../assets/portfolio/portfolio-1.png';
import pf_2 from '../assets/portfolio/portfolio-2.png';
import pf_3 from '../assets/portfolio/portfolio-3.png';
import pf_4 from '../assets/portfolio/portfolio-4.png';
import pf_5 from '../assets/portfolio/portfolio-5.png';
import pf_6 from '../assets/portfolio/portfolio-6.png';
import pf_7 from '../assets/portfolio/portfolio-7.png';
import pf_8 from '../assets/portfolio/portfolio-8.png';
import pf_9 from '../assets/portfolio/portfolio-9.jpeg';
import pf_10 from '../assets/portfolio/portfolio-10.png';
import pf_11 from '../assets/portfolio/portfolio-11.png';

//port components
import Portfolio_info1 from './port_components/Portfolio_info1';
import Portfolio_info2 from './port_components/Portfolio_info2';
import Portfolio_info3 from './port_components/Portfolio_info3';
import Portfolio_info4 from './port_components/Portfolio_info4';
import Portfolio_info5 from './port_components/Portfolio_info5';
import Portfolio_info6 from './port_components/Portfolio_info6';
import Portfolio_info7 from './port_components/Portfolio_info7';
import Portfolio_info8 from './port_components/Portfolio_info8';
import Portfolio_info9 from './port_components/Portfolio_info9';
import Portfolio_info10 from './port_components/Portfolio_info10';
import Portfolio_info11 from './port_components/Portfolio_info11';

const Port1 = () => {
  return (
    <div>
       <Swiper 
          navigation={true}  
          modules={[Navigation]} 
          className="mySwiper"
          loop={true} 
          spaceBetween={30} >
        <SwiperSlide>
        <section id='portfolio-details-1' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_1}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info1/>
               </div>
            </div>
        </div>
     </section>
        </SwiperSlide>
        <SwiperSlide><section id='portfolio-details-2' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_2}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info2/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-3' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_3}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info3/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-4' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_4}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info4/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-5' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_5}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info5/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-6' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_6}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info6/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-7' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_7}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info7/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-8' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_8}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info8/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-9' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_9}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info9/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
        <SwiperSlide><section id='portfolio-details-10' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_10}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info10/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>

        <SwiperSlide><section id='portfolio-details-10' className='portfolio-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-lg-5 pt-5'>
                    <div className='portfolio-details-slider'>
                        <div className='align-items-center '>
                          <img className='rounded border border-2 shadow-lg' src={pf_11}/>
                        </div>
                    </div>
                </div>
           

                <div class="col-4">
                    <Portfolio_info11/>
               </div>
            </div>
        </div>
     </section></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Port1
