import React, { useState } from 'react';
import d1 from './../../assetes/images/d1.png'
import { BiSolidStar } from 'react-icons/bi';
import DoctorAbout from './../../pages/Doctors/DoctorAbout'
import DoctorFb from './DoctorFb';
import SidePanel from './../Doctors/SidePanel'

const Doctordetails = () => {
  const[tab,setTab]=useState('about')
  return (
    <>
     <section><div className='mt-[100px] max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-3 gap-[50px] '>
        <div className='md:col-span-2'>
          <div className='flex items-center gap-5'>
            <figure className='max-w-[200px] max-h-[200px]'> 
        
            
              <img src={d1} alt='' className='w-full h-[190px]'></img>
            </figure>
            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Dr.Abhinav  Arora</h3>
              <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                <BiSolidStar className='flex text-yellowColor text-[20px] ' />4.8
                </span> 
                <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
              </div>
              <p className='text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>World-class care for everyone .Our health system offers unmatched, expert health care</p>
            </div>
          </div>
          <div className='mt-[50px] border-b-[2px] border-solid border-[#0066ff34]'>
            <button  onClick={()=>setTab('about')} className={`${tab==='about' && 'border-b border-solid   border-primaryColor : border'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>About</button>
            <button  onClick={()=>setTab('feedback')} className={`${tab==='feedback' && 'border-b border-solid border-primaryColor : border'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>Feedback</button>
          </div>
         <div className='mt-[50px] '>
          {tab=== 'about' && <DoctorAbout/> }
          {tab=== 'feedback' && <DoctorFb/>}
         </div>
        </div>
        <div><SidePanel/> </div>
      </div>
     </div>
     </section>
    </>
    
  );
}

export default Doctordetails;
