
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import doctor1 from "../../assetes/images/doctor1.webp"
import { Link } from "react-router-dom";

const about = () => {
  return (
    <section className='h-[700px]'>
       <div className="container">
        <div className='flex  justify-between gap-[0px] lg:gap-[130px] xl:gap-[0] flex-col lg:flex-row'>
          {/*======================= About IMg========================== */}
          <div className="flex justify-between gap-[20px] flex-col h-[400px] ml-[100px]">
            <img className='h-[400px] rounded-[10px] shadow-md shadow-opacity-30'src={doctor1}alt=''></img>
            
            <div className="text-headingColor md:w-[300px]    md:right-[-7%] lg:right-[22%] border-[2px] rounded-[15px] py-[10px] px-[40px] shadow-md shadow-opacity-50 ">
              <h1 className="text-[1.3rem] font-[600]">Dr.Mike Varshavski</h1>
              <p className="text-[1.1rem] font-[500]">Dentist</p>
              <div className="flex text-yellowColor text-[20px]  ">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStarHalf />
              </div>

            </div>

          </div>
          {/* ========================About content====================== */}
          <div className="flex justify-between gap-[20px] flex-col mr-[200px] w-[650px]">
          <h2 className="heading font-[500] text-[2rem]"> "Proud to be one of the nations best"</h2> 
          <p className="text_para text-[1rem] mt-[5px]">As a board-certified [medical specialty], Dr.Mike Varshavski has demonstrated unwavering dedication to patient care. They are a firm believer in a patient-centered approach, ensuring that each individual's unique needs and concerns are addressed. Dr. Varshavski continuously stays updated on the latest advancements in [medical specialty], delivering cutting-edge treatments and personalized care.</p>
          <p className="text_para text-[1rem] mt-[0px]">Patients seeking expert medical care and a caring, understanding healthcare provider need look no further than Dr.Mike Varshavski. With a solid foundation of medical knowledge and a deep-rooted sense of empathy, Dr.Varshavski is a beacon of hope for those navigating the complexities of their health journey.</p>
          <Link to='/doctors'><button className="btn mt-[5px]">Learn More</button></Link>
          </div>
          
        </div>
       </div>
    </section>
 
  )
};

export default about;
