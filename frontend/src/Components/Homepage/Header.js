import React from "react";
import curvyLine from "../../Img/curvyLine.png";
import curvyLinesm from "../../Img/curvyLinesm.png";
import hero from "../../Img/hdlogo2.png";
import Services from "./Services";
import "./Header.css";

export default function Header() {
  const scrollDown=()=>{
    window.scrollTo({
      top:1020,
      left:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="relative" id="header">
    <div id="test" className="w-screen  h-48 absolute bottom-0"></div>
    {/* scroll Arrow */}
    <div className="absolute text-6xl text-black hidden lg:block" onClick={()=>{scrollDown()}} id="scrollarrow">
     <i className="fa m-1 fa-angle-double-down"></i>
    </div>
      <div className="">
        <div className="w-screen bg-fixed bg-left bg-cover  topbg bg-gray-200 ">
          <div className="  py-24 sm:py-24 sm:mx-24  ">
            <div className="flex flex-col sm:ml-20   ml-12 sm:mt-0 mt-0 justify-around items-center sm:items-start mr-8 fade">
              <div className="hero w-full  h-auto  " id="hero">
                <img className=" " src={hero} />
              </div>
              <div className="max-w-lg mx-4 sm:pt-10 sm:pr-10 sm:mt-3 pt-5  ">
                <h1 className=" leading-none text-6xl sm:text-7xl font-heading text-gray-800   ">
                  {" "}
                  HYPE Digital{" "}
                </h1>
                <p className="text-gray-900 text-2xl sm:text-3xl text-base pt-1 sm:pt-0 leading-tight">
                  We Make Brands Happen
                </p>
                {/* <button class="btn bg-gray-600 hover:bg-gray-500 text-white">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          <div className="sm:block h-6 md:h-56 xl:h-64"></div>
          <div className="sm:block xl:h-6"></div>
        </div>
        {/* <div className="relative overflow-hidden pb-2/3  ">
          <img className="a w-full hidden sm:inline  " src={curvyLine} />
          <img className="a w-full sm:hidden  " src={curvyLinesm} />
        </div> */}
      </div>
    </div>
  );
}
