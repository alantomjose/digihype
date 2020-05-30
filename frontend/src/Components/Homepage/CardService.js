import React, { useEffect } from "react";
// import SIcon from "../../Img/cardico.png";
// import Pr from "../../assets/img/publicrelations.png";

export default function CardService(props) {
  // useEffect(() => {
  //     console.log(props);
  // }
  //     )
  const handleClick = () => {
    console.log("ck");
    let desc = document.querySelector(`#desc${props.num}`);
    desc.classList.toggle("hidden");
    let id = document.querySelector(`#id${props.num}`);
    id.classList.toggle("flex-col");

    for (let i = 1; i <= 6; i++) {
      if (i == props.num) continue;
      console.log(i);
      desc = document.querySelector(`#desc${i}`);
      desc.classList.add("hidden");
      id = document.querySelector(`#id${i}`);
      id.classList.remove("flex-col");
    }
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      id={`id${props.num}`}
      className="flex  items-center sm:flex-row 
              justify-end flex-left bg-gray-100 
              bg-opacity-75 sm:flex-col sm:h-64 h-full mx-12 sm:py-6 py-3 
              sm:px-0 px-1 my-4 sm:my-8 sm:text-center justify-center rounded-lg 
               cardt animate w-9/12 md:w-4/12 xl:w-3/12 "
    >
      <img className="sm:h-12 h-6  sm:mx-auto mx-2" src={props.icn} />
      <h1 className="sm:items-center sm:pt-4 sm:pb-2 sm:text-xl text-base  ">
        {props.title}
      </h1>
      <p className="text-sm  px-8 py-2 hidden sm:block" id={`desc${props.num}`}>
        {props.desc}
      </p>
    </div>
  );
}
