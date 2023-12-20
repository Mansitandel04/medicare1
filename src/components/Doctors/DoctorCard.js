import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";


const DoctorCard = ({ doctor }) => {
  const { name, specialization,photo ,avgRating,totalRating,totalPatients,hospital} = doctor;
  return (
    <div className="p-3 lg:p-5  border-[2px] rounded-[20px] shadow-md shadow-opacity-50 ">
      <img src={photo} alt='img' className="w-[300px] h-[300px] rounded-[20px] "></img>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[500] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="mt-1 lg:mt-4 flex items-center justify-between">
         <span className="bg-[#CCF0F3] text-headingColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">{specialization}</span>
    
      <div className="flex items-center gap-[6px]">
        <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold">
        <div className="flex text-yellowColor text-[20px]  ">
                <BiSolidStar /></div>{avgRating}
        </span>
        <span className="text-headingColor text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400]">({totalRating})</span>
      </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between gap-[100px]">
        <div>
          <h3 className="text-[16px] leading-7  lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">+  {totalPatients} Patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor"> At  {hospital}</p>
        </div>
        <Link
        to="/doctors/1"
        className="w-[30px] h-[30px]  rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
      >
        <BsArrowRight className="group-hover:text-white w-6 h-4 " />
      </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
