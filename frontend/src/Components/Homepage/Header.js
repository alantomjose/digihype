import React from "react";
import curvyLine from "../../Img/curvyLine.png";
import curvyLinesm from "../../Img/curvyLinesm.png";
import hero from "../../Img/hdlogo2.png";
import Services from "./Services";
import "./Header.css";

export default function Header() {
  return (
    <div className="">
      <div className="  ">
        <div className="w-screen bg-fixed bg-left bg-cover h-screen bg-orange-100 bigbg  ">
          <div className="  py-16 sm:py-32 sm:mx-24  ">
            <div className="flex flex-col sm:ml-20 ml-12 sm:mt-0 mt-24 justify-around items-center sm:items-start mr-8 fade">
              <div className="hero w-full  h-auto">
                <img className="  " src={hero} />
              </div>
              <div className="max-w-lg mx-4 sm:pr-56 sm:mt-12 ">
                <h1 className=" leading-none text-4xl sm:text-6xl font-heading text-gray-800   ">
                  {" "}
                  HYPE Digital{" "}
                </h1>
                <p className="text-gray-900 sm:text-2xl text-base pt-1 sm:pt-0 ">
                  We Make Brands Happen
                </p>
                {/* <button class="btn bg-gray-600 hover:bg-gray-500 text-white">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative overflow-hidden pb-2/3  ">
          <img className="a w-full hidden sm:inline  " src={curvyLine} />
          <img className="a w-full sm:hidden  " src={curvyLinesm} />
        </div> */}
      </div>
    </div>
  );
}
