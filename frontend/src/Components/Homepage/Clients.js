import React from 'react'
import vb from '../../Img/clients/vb.png'
import cg from '../../Img/clients/cg.png'
import d from '../../Img/clients/d.png'
import ps from '../../Img/clients/ps.png'
import sf from '../../Img/clients/sf.png'

export default function Clients() {
    return (
        <div className="py-6 font-heading text-gray-800">
            <h1 className="text-5xl text-center">Our Clients</h1>
            <div className="flex justify-around px-32 flex-wrap pt-10 px-4 relative">
                
                    
                    <img  className="relative h-16 mx-8 my-12 " src={cg}/>
                    <img  className="relative h-16 mx-8 my-12 " src={d}/>
                    <img  className="relative h-16 mx-8 my-12 " src={ps}/>
                    <img  className="relative h-16 mx-8 my-12" src={sf}/>
                    <img  className="relative h-16 mx-8 my-12" src={vb}/>
                
            </div>
        </div>
    )
}
