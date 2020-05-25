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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div
        className=" bg-fixed bg-center bg-cover h-screen flex flex-col items-center  "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80')",
        }}
      >
        <div className="text-6xl border-b pt-5 ">Our Clients</div>
        <div id="carouseldiv " className="w-full  pt-20">
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
        <div className=" m-10 pt-5 text-6xl border-b">
          Delivering the best Customer Service
        </div>
        <div className=" pt-5 px-15 mx-20 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </div>
    );
  }
}
