import React from 'react'
import Header from './Header';
import Services from './Services';



export default function Homepage() {
    return (
        <div className="">
           <Header/>
           {/* Height adjustment */}
           <div className="block h-64"></div>
           <div className="block h-64"></div>
           <div className="block h-48"></div>
           
           <Services/>

           <div className="h-48 bg-gray-700 w-full mt-20">

           </div>

           
           
        </div>
    )
}
