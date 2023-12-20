import React from 'react';
import { useState } from 'react';
import {PiUserCircleFill} from 'react-icons/pi'
import { formateDate } from '../../utils/formateDate';
import { BiSolidStar } from "react-icons/bi";
import FeedbackForm from './FeedbackForm';

const DoctorFb = () => {
  const[showFeedbackForm,setShowFeedbackForm]=useState(false);
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor'>All Review (272)</h4>
       
       <div className='flex justify-between gap-10 mb-[30px]  mt-6 border border-solid rounded-[12px] p-2 shadow shadow-opacity-30'>
        <div className='flex gap-3'>
           <figure className='w-10 h-10 rounded-full'>
            <PiUserCircleFill className='h-10  w-full text-textColor '/>
           </figure>
           <div>
            <h5 className='text-[16px] leading-6 text-primaryColor font-bold'> Ali Ahemed</h5>
            <p className='text-[14px] leading-6 text-textColor'>{formateDate('02-14-2023')}</p>
            <p className='text_para font-medium mt-2 text-[15px]'>Good Service Highly Recommended 👍</p>
           </div>
        </div>
        <div className='text-[#0067FF] text-[14px] flex gap-1'>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStar/>
            <BiSolidStar/>

        </div>
       </div>
       </div>
      
      { !showFeedbackForm &&(<div className='text-center'> 
      <button className='btn' onClick={()=>setShowFeedbackForm(true)}>
        Give Feedback
      </button>
      </div>)}
      {showFeedbackForm && <FeedbackForm/> }

    </div>
  );
}

export default DoctorFb;
