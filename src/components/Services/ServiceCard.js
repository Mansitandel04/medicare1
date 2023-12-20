import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


const ServiceCard = ({ item, index }) => {
  const { name, desc } = item;
  return (
    <div className="py-[30px] px-2 lg:px-5 mx-[10px] border-[2px] rounded-[20px] shadow-md shadow-opacity-50 border-[2px] border-solid  ">
      
      <h2 className="text-[26px] leading-9 text-headingColor font-[500] mt-[15px]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
      <Link
        to="/doctors"
        className="w-[30px] h-[30px]  rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
      >
        <BsArrowRight className="group-hover:text-white w-6 h-4 " />
      </Link>
    </div>
  );
};

export default ServiceCard;
