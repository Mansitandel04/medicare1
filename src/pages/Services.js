
import { services } from '../assetes/data/services';
import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
const  serviceslink=[
  {
    name:"Cancer Care",
    desc:"World-class care for everyone .Our health system offers unmatched, expert health care.from the lab to the clinic",
    bgColor:"rgba(254,182,13,.2)",
    textColor:"#FEB60D",
    img:'https://healthyflat.com/wp-content/uploads/2018/02/Natural-Cancer-Treatments.jpg'
},
{
    name:"Labour & Delivery",
    desc:"World-class care for everyone .Our health system offers unmatched, expert health care.from the lab to the clinic",
    bgColor:"rgba(254,182,13,.2)",
    textColor:"#FEB60D",
    img:'https://img.emedihealth.com/wp-content/uploads/2021/05/tips-for-taking-care-of-a-newborn-baby-feat-600x406.jpg'
},
{
    name:"Heart & Vascular",
    desc:"World-class care for everyone .Our health system offers unmatched, expert health care.from the lab to the clinic",
    bgColor:"rgba(254,182,13,.2)",
    textColor:"#FEB60D",
    img:'https://th.bing.com/th/id/R.a6048f917eb912ed39549b2d8cd7032a?rik=baUeDd6Jpn5D8Q&riu=http%3a%2f%2fwww.solteam-medical.com%2fproimages%2fproducts%2fpro-list-2-1.jpg&ehk=URpqgVkYo96yXNzIuwvB8S%2fSv11XPcCrORF0tYi6Gaw%3d&risl=&pid=ImgRaw&r=0'
},

]

const Services = () => {
  return (
    <div>
      <section>
        <div className='container'>
        <div className=' mt-[100px] mx-[130px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[40px] mb-[50px] '>
      {services.map((item,index)=>(
        <ServiceCard item={item} index={index} key={index}/>
      ))}
    </div>

        </div>
      </section>
      <section>
        <div className='container'>
        <div className=' mx-[130px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[-150px] mb-[50px] '>
      {serviceslink.map((item,index)=>(
        <ServiceCard item={item} index={index} key={index}/>
      ))}
    </div>

        </div>
      </section>
      
    </div>
  );
}

export default Services;
