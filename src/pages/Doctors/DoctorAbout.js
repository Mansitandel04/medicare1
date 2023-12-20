import React from 'react';
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
    <div className='mt-[100px]'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About Of
      <span className='text-irisBlueColor leading-9 '>
        Abhinav Arora
        </span></h3>
        <p className='text_para text-[17px]'>Dr.Abhinav Arora is a highly experienced and accomplished surgeon dedicated to providing the highest quality of care to their patients. With a passion for surgical excellence and a commitment to patient well-being, Dr.Arora has built a reputation for their surgical expertise and compassionate approach.</p>
    </div>

    <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Education</h3>
      <p className='text_para text-[17px]'>Dr. Arora completed his medical degree at a prestigious medical school, where he demonstrated exceptional aptitude and dedication to his studies. He then pursued specialized training in surgery, honing his skills in various surgical techniques and procedures. His commitment to ongoing education and training ensures that he remains up-to-date with the latest advancements in surgical practices.</p>
    </div>

    <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Experience</h3>
      <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'> {formateDate("07-04-2010") } -{formateDate("08-13-2014") } </span>
            <p className='text-[15px] leading-6 font-medium text-textColor '>Sr.Surgeon</p>
            <p className='text-[14px] leading-6 font-medium text-textColor '>New Apoolo Hospital ,New York.</p>
        
        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'> {formateDate("09-10-2014") } -{formateDate("11-10-2022") } </span>
            <p className='text-[15px] leading-6 font-medium text-textColor '>Sr.Surgeon</p>
            <p className='text-[14px] leading-6 font-medium text-textColor '>Bengluru,India</p>    
        
        </li>
        
      </ul>
       </div>

    </div>
  );
}

export default DoctorAbout;
