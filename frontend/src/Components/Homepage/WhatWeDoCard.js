import React from "react";
import "../../css/imageblur.css";

export default function WhatWeDoCard(props) {
  const mouseOver = () => {
    const desc = document.querySelector(`#Wdesc${props.id}`);
    // console.log(card+"dadsada")
    const title = document.querySelector(`#title${props.id}`);
    const blur = document.querySelector(`#theblurrer${props.id}`);
    blur.classList.remove("bg-opacity-0");
    blur.classList.add("bg-opacity-50");
    // desc.classList.remove('scale-0');
    desc.classList.remove("opacity-0");
    desc.classList.remove("text-sm");
    // desc.classList.add('scale-100');
    title.classList.remove("text-3xl");
    title.classList.add("text-5xl");
  };
  const mouseExit = () => {
    const desc = document.querySelector(`#Wdesc${props.id}`);
    // console.log(card+"dadsada")
    const title = document.querySelector(`#title${props.id}`);
    const blur = document.querySelector(`#theblurrer${props.id}`);
    blur.classList.remove("bg-opacity-50");
    blur.classList.add("bg-opacity-0");
    // desc.classList.add('scale-0');
    desc.classList.add("opacity-0");
    desc.classList.add("text-sm");
    // desc.classList.remove('scale-100');
    title.classList.add("text-3xl");
    title.classList.remove("text-5xl");
  };
  return (
    <div>
      <div
        onMouseEnter={() => mouseOver()}
        onMouseLeave={() => mouseExit()}
        id="wwdcard"
        className=" wwdCard flex flex-col justify-around py-64 px-4 max-w-lg min-h-full bg-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div
          id={`theblurrer${props.id}`}
          className="bg-gray-900 p-5 bg-opacity-0 mx-0 animate rounded-lg"
        >
          <span
            id={`title${props.id}`}
            className="text-3xl font-heading animate leading-none tracking-tight  "
          >
            {props.title}
          </span>
          <div
            id={`Wdesc${props.id}`}
            className="text-sm transform pt-10 text-xl animate opacity-0"
          >
            {props.desc}
          </div>
        </div>
        <div className=" h-32"></div>
      </div>
    </div>
  );
}
