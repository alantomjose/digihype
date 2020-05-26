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
      arrows: true,
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
    };
    return (
      <div
        className=" bg-fixed bg-center bg-cover h-screen flex flex-col items-left w-screen "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div className="text-6xl pt-5 ml-10 font-heading">Our Clients</div>
        <div id="carouseldiv " className=" w-1/2 pt-20 pl-20">
          <div>
            <Slider {...settings}>
              <div>
                <img className="relative h-16 mx-8 my-12 " src={cg} />
              </div>
              <div>
                <img className="relative h-16 mx-8 my-12 " src={d} />
              </div>
              <div>
                <img className="relative h-16 mx-8 my-12" src={sf} />
              </div>
              <div>
                <img className="relative h-16 mx-8 my-12" src={vb} />
              </div>
              <div>
                <img className="relative h-16 mx-8 my-12 " src={ps} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
