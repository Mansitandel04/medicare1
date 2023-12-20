import React from 'react';
import {doctors} from './../../assetes/data/doctors';
import DoctorCard from './../../components/Doctors/DoctorCard'
import d4 from './../../assetes/images/d4.jpeg';
import d5 from './../../assetes/images/d5.jpeg';
import d6 from './../../assetes/images/d6.webp';

const  doctorslink=[
  {
   id:"04",
   name:"Dr.Rihana Patel",
   specialization:"Dentist",
   avgRating:"4.9",
   totalRating:270,
   photo:d4,
   totalPatients:1500,
   hospital:"City Hospital,Mumbai"
  },
  {
      id:"05",
      name:"Dr.Riya Tanvar",
      specialization:"Gynecologist",
      totalRating:243,
      avgRating:"4.8",
      photo:d5,
      totalPatients:1500,
      hospital:"City Hospital ,Mumbai"
     },
     {
      id:"06",
      name:"Dr.Raj Sinha ",
      specialization:"Physiotherapist",
      avgRating:"4.9",
      totalRating:280,
      photo:d6,
      totalPatients:1500,
      hospital:"City Hospital,Mumbai"
     },
     {
      id:"04",
      name:"Dr.Rihana Patel",
      specialization:"Dentist",
      avgRating:"4.9",
      totalRating:270,
      photo:d4,
      totalPatients:1500,
      hospital:"City Hospital,Mumbai"
     },
     {
         id:"05",
         name:"Dr.Riya Tanvar",
         specialization:"Gynecologist",
         totalRating:243,
         avgRating:"4.8",
         photo:d5,
         totalPatients:1500,
         hospital:"City Hospital ,Mumbai"
        },
        {
         id:"06",
         name:"Dr.Raj Sinha ",
         specialization:"Physiotherapist",
         avgRating:"4.9",
         totalRating:280,
         photo:d6,
         totalPatients:1500,
         hospital:"City Hospital,Mumbai"
        },
     
]

const Doctors = () => {
  return (
    <>
      <section>
        <div className='container text-center mt-[100px]'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-#0066ff2c rounded-md flex items-center justify-between border border-solid border-[2px]'>
            <input type='search' className='py-4 pl-4 pr-2  w-full focus:outline-none  cursor-pointer placeholder:text-textColor shadow-md shadow-opacity-50 ' placeholder='Search  Doctor'></input>
            <button className='btn mt-0 h-[56px]  rounded-[0px] rounded-r-md shadow-md shadow-opacity-50'>Search</button>
          </div>
          </div>
        </section>
        <section>
        <div className='container'>
        <div className=' mx-[130px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[-50px] '>
      {doctors.map(doctor=>(
        <DoctorCard doctor={doctor} key={doctor.id}/>
      ))}
    </div>
        </div>
      </section>
      
        <section>
        <div className='container'>
        <div className=' mx-[130px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[-50px] '>
      {doctorslink.map(doctor=>(
        <DoctorCard doctor={doctor} key={doctor.id}/>
      ))}
    </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
