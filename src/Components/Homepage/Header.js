import React from 'react'
import curvyLine from '../../Img/curvyLine.png'

export default function Header() {

    return (
        <div>
           <div className="h-48 ">
                <div className="  py-48 bg-headerGray " >
                    <div className="flex">
                        <h1 className="text-6xl px-20 font-mono"> Digital HYPE</h1>
                    </div>
                </div>
               <img className="h-full w-full" src={curvyLine}/>
           </div>
        </div>
    )
}
