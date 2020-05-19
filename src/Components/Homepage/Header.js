import React from 'react'
import curvyLine from '../../Img/curvyLine.png'
import curvyLinesm from '../../Img/curvyLinesm.png'
import hero from '../../Img/hero.png'
import Services from './Services'

export default function Header() {


    return (
        <div className="">
           <div className="h-40  ">
                <div className="w-full bg-headerGray">
                    <div className="  py-32  sm:py-40  sm:mx-24 bg-headerGray " >
                        <div className="flex justify-around">
                            <div className="max-w-lg mx-4">
                                <h1 className="text-6xl pt-12 font-heading  text-gray-800 my-2"> HYPE Digital </h1>
                                <p className="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation 
                                </p>
                                <button class="my-8 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
                                        Learn More
                                </button>
                            </div>
                            <div className="hidden lg:block hero ">
                                <img classNem="hero" src={hero}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pb-2/3  ">
                    <img className="a w-full hidden sm:inline " src={curvyLine}/>
                    <img className="a w-full sm:hidden  " src={curvyLinesm}/>
                </div>
               
           </div>
           
        </div>
    )
}
