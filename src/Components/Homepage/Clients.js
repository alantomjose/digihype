import React from 'react'
import vb from '../../Img/clients/vb.svg'
import cg from '../../Img/clients/cg.svg'
import d from '../../Img/clients/d.svg'
import ps from '../../Img/clients/ps.svg'
import sf from '../../Img/clients/sf.svg'

export default function Clients() {
    return (
        <div className="py-6 font-heading text-gray-800">
            <h1 className="text-5xl text-center">Clients</h1>
            <div className="flex justify-around px-32 flex-wrap pt-20 px-4 relative">
                
                    
                    <img  className=" relative h-16 mx-8 mx-12" src={cg}/>
                    <img  className=" relative h-16 mx-8" src={d}/>
                    <img  className=" relative h-48 mx-8 top-5" src={ps}/>
                    <img  className=" relative h-64 mx-8" src={sf}/>
                    <img  className=" relative h-64" src={vb}/>
                
            </div>
        </div>
    )
}
