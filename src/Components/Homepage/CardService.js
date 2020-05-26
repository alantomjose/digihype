import React, { useEffect } from "react";
import SIcon from "../../Img/cardico.png";
import Wrench from "../../Img/wrench.png";

export default function CardService(props) {
  // useEffect(() => {
  //     console.log(props);
  // }
  //     )
  const handleClick =()=>{
    console.log("ck");
    const desc = document.querySelector(`#desc${props.num}`);
    desc.classList.toggle("hidden");
  }
  return (
    <div  onClick={()=>{handleClick()}} className="flex justify-end flex-left bg-gray-100 
            bg-opacity-75 sm:flex-col sm:h-full h-full mx-12 sm:py-6 py-3 
              sm:px-0 px-1 my-4 sm:my-8 sm:text-center justify-center rounded-lg 
               cardt animate w-9/12 md:w-4/12 xl:w-3/12">
      <img className="sm:h-12 h-6 sm:mx-auto mx-2" src={Wrench} />
      <h1 className="sm:items-center sm:pt-4 sm:pb-2 sm:text-xl text-lg  ">
        {props.title}
      </h1>
      <p className="text-sm  px-8 py-2 hidden sm:block" id={`desc${props.num}`}>{props.desc}</p>
    </div>
  );
}
