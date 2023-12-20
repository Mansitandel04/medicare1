import React from "react";
import { useEffect,useRef } from 'react';
import logo from "../../assetes/images/logo (1).png";
// import userImg from '../../assetes/images/user.png'
import { Link } from "react-router-dom";
// import {BiMenu}from 'react-icons/bi';


const navlinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  { path: "/services", display: "Services" },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
const headerRef=useRef(null)
const menuRef=useRef(null)

const handleStickeyHeader=()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80){
      headerRef.current.classList.add('sticky__header')
    }else{
    headerRef.current.classList.remove('sticky__header')
    }
  })
}
useEffect (()=>{
  handleStickeyHeader()
  return()=>window.removeEventListener('scroll',handleStickeyHeader)
})
const toggleMenu =()=>menuRef.current.classList.toggle('show__menu')



  return (
    <header
    ref={headerRef}
      className="header" style={{
        width:"100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        height: "90px",
        margin:'0px',
        position:'fixed',
        backgroundColor:"white"
        // borderRadius:'15px',
        // border:'1px solid transparent',
        // margin:"20px",

        // backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/004/449/784/large_2x/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background-medicine-medical-health-cross-healthcare-decoration-for-flyers-poster-web-banner-and-card-illustration-vector.jpg)'
      
      }}>
      <div className="container  " >
        <div
          className="box1 "
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* ======logo======== */}

          <div>
            <img 
              // style={{ width: "180px", height: "80px" }}
              src={logo}
              alt="logo"
            />
          </div>

          {/* ============= MeNu =========== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu} style={{ marginLeft: "250px" }}>
            <ul
              className="menu flex item-center gap-[2.7rem] list-unstyled"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1.8rem",
                listStyle: "none",
              }}
            >
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    style={{
                      color: "blue",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                    to={link.path}
                    className={(navclass) =>
                      navclass.isactive ? "color:red" : "color:green"
                    }
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============nav right========== */}

          <div className="flex items-center gap-4 " style={{ marginLeft: '400px', display: 'flex', alignItems: 'center' }}>
            {/* <div>
              <Link to='/' >
                <figure className="w-[35px] h-[35px] rounded-full ">
                  <img src={userImg} className='w-full rounded-full' alt="user" style={{ width: '50px', height: '50px', marginLeft: '150px' }} />
                </figure>
              </Link>
            </div> */}

            <Link to='/login'>
              <button style={{ border: '1px transparent solid', marginLeft: '35px', marginRight: '25px', padding: "5px 15px", backgroundColor: "blue", borderRadius: "50px", color: "white" ,fontWeight:"600"}}>Login</button>
            </Link>

            {/* <span  className="md:hidden" onClick={toggleMenu} style={{}}>

              <BiMenu  style={{width:"2rem",height:"2rem"}}/>
            </span> */}
             <Link to='/register'>
            <button style={{ border: '1px transparent solid', display: 'flex', padding: "5px 15px", backgroundColor: "blue",borderRadius: "50px", color: "white" ,fontWeight:"600"}}>Sign Up</button>
              </Link>



          </div>



        </div>
      </div>
  </header>
  );
};
export default Header;


