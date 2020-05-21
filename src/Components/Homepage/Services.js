import React, {useEffect} from 'react'
import CardService from './CardService'
import ScrollMagic from 'scrollmagic'

export default function Services() {

    

    return (
        <div className=" container mx-auto   ">
           <h2 className="text-5xl text-gray-800 text-center font-heading" id="test">Services</h2> 
           <div className="flex justify-around flex-row flex-wrap mx-16 py-10">
               <CardService title="Public Relations " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
               <CardService title="Digital Marketing " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
               <CardService title="Social Media Management " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
           
               <CardService title="Influencer marketing  " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
               <CardService title="SEO " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
               <CardService title="Talent Management " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
           </div>
        </div>
    )
}
