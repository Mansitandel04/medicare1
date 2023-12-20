import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const FeedbackForm = () => {
  const [rating, setRating] = useState(false);
  const [hover, setHover] = useState(false);
  // const[reviewtext,setReviewText] =useState("");
  // const handlesubmitReview = async e=>{
  //   e.preventDefault();
  // }

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience*
        </h3>
        <div className=" text-[14px]  gap-1">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-grey-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span className="flex">
                  <BiSolidStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className=" mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggetions*
        </h3>
        <textarea
          className="border border-solid border-[2px] rounded-md md:shadow shadow-opacity-10 focus:outline outline-primaryColor  w-full  px-4 py-3 "
          rows={5}
          placeholder="Write Your Message Here!!!"
          // onChange={()=>setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button className="btn  text-[15px] px-5 py-3" type="submit" >Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
