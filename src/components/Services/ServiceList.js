import React from 'react';
import {services} from './../../assetes/data/services'
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  return (
    <div className=' mx-[130px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[-50px] '>
      {services.map((item,index)=>(
        <ServiceCard item={item} index={index} key={index}/>
      ))}
    </div>
  );
}

export default ServiceList;
