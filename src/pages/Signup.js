import React, { useState } from "react";
import { Link } from "react-router-dom";
import user1 from './../assetes/images/user1.jpeg'
const Signup = () => {
  const[selectedFile,setSelectedFile]=useState(null)
  // const[previewURL,setPreviewURL]=useState("")
  const[formData,setFormData]=useState({
    email:"",
    password:"",
    photo:selectedFile,
    gender:'',
    role:'patient',
   
  });

  const handleInputChange= (e) => {
    setFormData({ ...formData ,[e.target.name]:e.target.value});
   };
   const handleFileInputChange = async(event)=>{
    const file =event.target.files[0]
    console.log(file)
   };
   const submitHandler =async event=>{
    event.preventDefault()
    console.log(formData)
   }


  return (
    <section className="px-5 lg:px-0 ">
      <div className=" mt-[100px] w-full max-w-[550px] mx-auto rounded-lg shadow  shadow-textColor shadow-opacity-90 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Create an <span className="text-primaryColor px-1">Account</span>
          !!! 
        </h3>

        <form   onSubmit={ submitHandler}className="py-4 md:py-3">
          <div className="mb-5">
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4  py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-textColor cursor-pointer"
              required
            ></input>
          </div>

          <div className="mb-5">
            <input
              placeholder="Enter Your E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4  py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-textColor cursor-pointer"
              required
            ></input>
          </div>

          <div className="mb-5">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-textColor cursor-pointer"
              required
            ></input>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <label
              className="text-headingColor font-bold text-[16px] leading7 "
            >
              Are you a:
              <select
              required
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="text-primaryColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
            <label
              className="text-headingColor font-bold text-[16px] leading7 "
            >
              Gender:
              <select
              required
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="text-primaryColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="mb-5 flex items-center gap-3">
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={user1} alt="" className="w rounded-full"></img>
            </figure>
             <div className="relative w-[130px] h-[50px]"><input   required type="file" name="photo" id="customFile" onChange={handleFileInputChange} accept=".jpg,.png"  className=" absolute top-0 left-0 w-full h-full  cursor-pointer opacity-0 "/>
             <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[10px] py-[10px]  text-[15px]  leading-6 overflow-hidden bg-[#0066ff46] text-headingColor  font-semibold rounded-lg  truncate cursor-pointer ">Upload Photo</label></div>
          </div>

          <div className="mt-1">
            <button  onClick={submitHandler} className="btn w-full rounded-lg text-[18px]" type="submit">
              Sign Up
            </button>
          </div>
          <p className="text-textColor mt-5 text-center">
            Already Have an account?
            <Link to="/login" className="text-primaryColor font-medium ml-1">
              login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
