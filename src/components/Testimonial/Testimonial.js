import React from 'react';
import { Pagination } from 'swiper';
import {Swiper ,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
// import {HiStar} from 'react-icons/hi'
import doctor1 from '../../assetes/images/doctor1.jpg'
 


const Testimonial = () => {
  return (
    <div className='mt-[30px]  lg:mt-[55px]'>
    <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
      breakpoints={{
        640:{
            slidesPerView:1,
            spaceBetween:0
        },
        768:{
            slidesPerView:2,
            spaceBetween:20
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30
        }
      }}>
      <SwiperSlide>
        <div  className='py-[30px] py-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
                <img src={doctor1} alt=''></img>
                <div><h4>Mansi Tandel</h4></div>
            </div>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
} 

export default Testimonial;
