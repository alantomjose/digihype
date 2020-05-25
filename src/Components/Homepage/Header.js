import React from "react";
import curvyLine from "../../Img/curvyLine.png";
import curvyLinesm from "../../Img/curvyLinesm.png";
import hero from "../../Img/hero.png";
import Services from "./Services";

export default function Header() {
  return (
    <div className="">
      <div className="h-500 border-black border ">
        <div
          className="w-screen bg-fixed bg-center bg-cover h-screen "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
          }}
        >
          <div className="  py-24 sm:py-32  sm:py-40  sm:mx-24  ">
            <div className="flex justify-around">
              <div className="max-w-lg mx-4">
                <h1 className="text-6xl pt-12 font-heading  text-gray-800 my-2">
                  {" "}
                  HYPE Digital{" "}
                </h1>
                <p className="text-gray-900 text-2xl ">
                  Top Class Marketing And Advertising At Your Fingertips.
                </p>
                {/* <button class="btn bg-gray-600 hover:bg-gray-500 text-white">
                  Learn More
                </button> */}
              </div>
              <div className="hidden lg:block hero pt-20 ">
                <img classNem="hero" src={hero} />
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
