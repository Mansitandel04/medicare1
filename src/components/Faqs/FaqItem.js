import React from 'react';
import { useState } from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'


const FaqItem = ({item}) => {
 const[isOpen,setIsOpen]=useState(false);
const toggaleAccordian=()=>{
    setIsOpen(!isOpen);
}

  return (
    <div className='p-3 lg:p-3 rounded-[12px] border border-solid shadow-md shadow-opacity-10 border-[#D9DcE2] mb-3 cursor-pointer'>
      <div className='flex items-center justify-between gap-3'onClick={toggaleAccordian}>
        <h4 className='text-[17px] hover:text-primaryColor '>{item.question}</h4>
        <div className={`${isOpen && 'bg-primaryColor text-white border-none'} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>{ isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
      </div>
      {isOpen && <div className='mt-4'> 
        <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7  font-[400] text-textColor'>{item.content}</p></div>}
    </div>
  );
}

export default FaqItem;
