import React from "react";
import icon1 from '../assetes/images/icon1.jpg'
import icon2 from '../assetes/images/icon2.jpeg'
import icon3 from '../assetes/images/icon3.webp'
import { Link } from "react-router-dom";
import About from "../components/About/About";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "./../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from '../assetes/images/faqImg.webp'
import FaqList from "../components/Faqs/FaqList";

// import Testimonial from "../components/Testimonial/Testimonial";

// './assetes/images/bg2.jpeg'


const Home = () => {
  return (
    <>
      {/* ================hero section start========= */}
   
<div>
      <section className="hero__section  pt-[60px] 2xl:h-[800px] ">

        <div className="container mt-[100px]" >
          <div
            className="flex flex-col lg:flex-row gap-[90px] "
            style={{ display: "flex", flexDirection: "column", gap: "90px" }}
          >
            {/* ================hero content============= */}
            <div style={{ alignItems: 'flex-start', marginLeft: '100px' }}>
              <div className="lg:w-[570px]" >
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800]"
                  style={{
                    fontSize: "3.3rem",
                    color: "#181A1E",
                    fontWeight: "700",
                    alignItems: "flex-start",
                    width: "450px",


                  }}
                >
                  We help patients live a healthy , longer life.
                </h1>
                <p className="text__para text-textColor" style={{ marginTop: "40px", width: "400px", fontWeight: '400', alignItems: "flex-start", fontSize: "1rem" }}>
                  Whether you need a routine check-up, specialized treatment,
                  or a second opinion, [Your Clinic Name] has you covered. Our
                  diverse team of doctors spans various medical specialties,
                  ensuring that you have access to a wide range of services
                  under one roof.
                </p>
                <Link to='/doctors'>
                <button className="btn ">Request an Appointmnet</button>
                </Link>
              </div>
              {/* ================hero counter================= */}
              <div style={{ display: 'flex', width: '600px', justifyContent: 'space-evenly', alignItems: 'center', gap: '0.8rem' }}>
                <div className="text-[25px] leading-[56px] mt-[20px] lg:text-[44px] lg-[54px] font-[700] text-headingColor">
                  <h2>30+</h2>
                  <span className="w-[60px] h-1 rounded-full block bg-[yellow] mt-[-8px]"></span>
                  <p className="text_para">Years Of experiance</p>
                </div>
                <div className="text-[25px] leading-[56px] mt-[20px] lg:text-[44px] lg-[54px] font-[700] text-headingColor">
                  <h2>15+</h2>
                  <span className="w-[60px] h-1 rounded-full block bg-[green] mt-[-8px]"></span>
                  <p className="text_para"> Clinice</p>
                </div>
                <div className="text-[25px] leading-[56px] mt-[20px] lg:text-[44px] lg-[54px] font-[700] text-headingColor">
                  <h2>100%</h2>
                  <span className="w-[60px] h-1 rounded-full block bg-[purple] mt-[-8px]"></span>
                  <p className="text_para">Patients Satisfaction</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ================hero section EnD========= */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center"> Providing the best medical services</h2>
            <p className="text_para text-center"> World class care for Everyone.Our health System offers unmatched,expert health care.</p>
          </div>
          <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]  flex justify-center">

            <div className="py-[30px] px-5">
              <div className="" >{/*flex items-center justify-center*/}
                <img className='h-[200px]' src={icon1} alt="img" />
              </div>
              <div className="mt-[30px]"></div>
              <h2 className="text-[1.4rem] leading-9 text-headingColor font-[700] text-center w-[250px]" >Find a Doctor</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center w-[250px]">World class care for Everyone.Our health System offers unmatched,expert health care</p>
              <Link to='/doctors' className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />

              </Link>
            </div>
            <div className="py-[30px] px-5">
              <div className="" >{/*flex items-center justify-center*/}
                <img className='h-[200px]' src={icon2} alt="img" />
              </div>
              <div className="mt-[30px]"></div>
              <h2 className="text-[1.4rem] leading-9 text-headingColor font-[700] text-center w-[250px]" >Find Location </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center w-[250px]">World class care for Everyone.Our health System offers unmatched,expert health care</p>
              <Link to='/doctors' className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />

              </Link>
            </div>
            <div className="py-[30px] px-5">
              <div className="" >{/*flex items-center justify-center*/}
                <img className='h-[200px]' src={icon3} alt="img" />
              </div>
              <div className="mt-[30px]"></div>
              <h2 className="text-[1.4rem] leading-9 text-headingColor font-[700] text-center w-[250px]" >Book an Appointment</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center w-[250px]">World class care for Everyone.Our health System offers unmatched,expert health care</p>
              <Link to='/doctors' className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />

              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================about section  ===================*/}
      <About/>
      
     {/* ==================services section  start =============== */}
    <section>
      <div className="container"> 
      <div className="xl:w-[470px]  mx-auto mt-[-150px]">
        <h2 className="heading text-center ">Our Medical Services</h2>
        <p className="text_para text-center mt-[10px] ">World-class care for everyone .Our health system offers unmatched, expert health care.</p>
  
      </div>
      </div>
    </section>
    <ServiceList/>
    {/* ==================services section  End =============== */}
     {/* ================Doctors section  start =============== */}
    <section>
      <div className="container"> 
      <div className="xl:w-[470px]  mx-auto ">
        <h2 className="heading text-center ">Our Doctors </h2>
        <p className="text_para text-center mt-[10px] ">World-class care for everyone .Our health system offers unmatched, expert health care.</p>
  
      </div>
      </div>
    </section>
    <DoctorList/>
    {/* ==================doctors section  End ============*/}
    {/* ================FAQ section  start =============== */}
    <section>
      <div className="container"> 
      <div className="flex justify-between gap-[50px] lg:gap-0 ">
        <div className=" w-1/2 hidden md:block">
        <img src={faqImg} alt=''className="h-[500px] ml-[100px] mt-[70px] " ></img>
      </div>
      <div className="w-full md:w-1/2 mx-[100px]">
        <h2 className="heading"> Most Questions by Our Beloved Patients</h2>
        <FaqList/>
      </div>
      </div>
      </div>
    </section>

      {/* ================FAQ section  end =============== */}
      {/* ================testimonial =============== */}
      {/* <section>
        <div className="container">
        <div className="xl:w-[470px]  mx-auto ">
        <h2 className="heading text-center  ">What Our Patients Says </h2>
        <p className="text_para text-center mt-[10px] ">World-class care for everyone .Our health system offers unmatched, expert health care.</p>
      
      </div>
      
        </div>
      </section> */}
      {/* ================trestimonial end =============== */}
      </div>
    </>
  );
};

export default Home;
