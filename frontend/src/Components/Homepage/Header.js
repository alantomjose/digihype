import React from "react";
import curvyLine from "../../Img/curvyLine.png";
import curvyLinesm from "../../Img/curvyLinesm.png";
import hero from "../../Img/hdlogo2.png";
import Services from "./Services";

export default function Header() {
  return (
    <div className="">
      <div className="  ">
        <div
          className="w-screen bg-fixed bg-left bg-cover h-screen   "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')",
          }}
        >
          <div className="  py-24 sm:py-32 sm:mx-24  ">
            <div className="flex flex-col  sm:ml-20 ml-12 sm:mt-0 mt-24 justify-around items-center sm:items-start mr-8">
              <div className="hero  w-full  ">
                <img classNem="hero" src={hero} />
              </div>
              <div className="max-w-lg mx-4 sm:pt-64 sm:pr-56 sm:mt-12 pt-24 ">
                <h1 className=" leading-none text-4xl sm:text-6xl font-heading text-gray-800   ">
                  {" "}
                  HYPE Digital{" "}
                </h1>
                <p className="text-gray-900 sm:text-2xl text-base pt-1 sm:pt-0">
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
