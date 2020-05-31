import React, { Component } from "react";
import Slider from "react-slick";
import vb from "../../Img/clients/vb.png";
import cg from "../../Img/clients/cg.png";
import d from "../../Img/clients/d.png";
import ps from "../../Img/clients/ps.png";
import sf from "../../Img/clients/sf.png";

export default class Clientsnew extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      //   prevArrow: true,
      autoplay: true,
      autoplaySpeed: 400,
      vertical: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      focusOnSelect: false,
    };
    return (
      <div
        className=" bg-fixed bg-center bg-cover flex flex-col items-left w-screen "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="sm:text-6xl text-4xl sm:pt-5 pt-6 sm:ml-24 ml-6 sm:mt-8 font-heading">
          Our Clients
        </div>
        <div id="carouseldiv " className=" sm:w-1/2 sm:pt-16 pt-4 sm:pl-20">
          <div>
            <Slider {...settings}>
              <div>
                <img
                  className="relative sm:h-16 sm:mx-8 sm:my-12 h-10 mx-8 my-8 "
                  src={cg}
                />
              </div>
              <div>
                <img
                  className="relative sm:h-16 sm:mx-8 sm:my-12 h-10 mx-8 my-8 "
                  src={d}
                />
              </div>
              <div>
                <img
                  className="relative sm:h-16 sm:mx-8 sm:my-12 h-10 mx-8 my-8"
                  src={sf}
                />
              </div>
              <div>
                <img
                  className="relative sm:h-16 sm:mx-8 sm:my-12 h-10 mx-8 my-8"
                  src={vb}
                />
              </div>
              <div className="">
                <img
                  className="relative sm:h-16 sm:mx-8 sm:my-12 h-10 mx-8 my-8 "
                  src={ps}
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="sm:block h-10 xl:h-16"></div>
      </div>
    );
  }
}
