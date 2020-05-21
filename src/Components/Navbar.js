import React,{useEffect} from 'react'
import '../build/tailwind.css'
import ScrollMagic from 'scrollmagic'

export default function Navbar() {
    useEffect(() => {
        // init controller
        var controller = new ScrollMagic.Controller();

        // create a scene
         new ScrollMagic.Scene({
            triggerElement:'#test',
            // duration:100,
            offset:-50,
            
        })
        .setClassToggle('#navbar','bg-transparent')
        .setClassToggle('#navbar','bg-gray-800') 
        // .setClassToggle('#dpdown','text-white') 
        // .setClassToggle('#navbar','text-gray-700') 
        .addTo(controller);

         // create a scene
         new ScrollMagic.Scene({
            triggerElement:'#test',
            // duration:100,
            offset:-50,
            
        })
        // .setClassToggle('#navbar','bg-transparent')
        // .setClassToggle('#navbar','bg-gray-800') 
        .setClassToggle('#dpdown','text-white') 
        .addTo(controller);

        
    },[])


    const hamToggle=(e)=>{
        console.log("click");
        const dropDown=document.querySelector('.dropdown');
        const closeBtn =document.querySelector('.closeButton');
        const hamburger =document.querySelector('.hamburger');

        dropDown.classList.toggle('hidden');
        closeBtn.classList.toggle('hidden');
        hamburger.classList.toggle('hidden');
    }
    

    return (
        <div className="fixed w-full z-50 ">
          <header className="bg-transparent text-gray-700   sm:flex sm:justify-between sm:pt-3" id="navbar">
          <div className="flex justify-between items-center py-3 sm:py-0">
                {/* logo */}
                <div>
                    <h1 className=" text-white text-xl px-4 font-bold sm:pb-3 sm:pl-10 font-heading  text-headerGray" id="smTitle">HYPE Digital</h1>
                </div>
                
                {/* hamburger */}
                <div className="  sm:hidden animate" onClick={e=>hamToggle(e)}>
                    <button className=" hamburger text-gray-300  hover:text-gray-600 px-3">
                        <svg className="fill-current h-4 text-gray-600 " viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="18" rx="10"></rect>
                            <rect y="30" width="100" height="18" rx="10"></rect>
                            <rect y="60" width="100" height="18" rx="10"></rect>
                            
                        </svg>
                    </button >

                    <button className="  hidden closeButton text-gray-300  hover:text-gray-600 px-3">
                    <svg  className="fill-current h-6  " xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
                    </button>
                    
                </div>
          </div>
          <div className=" hidden  pb-4 sm:flex sm:justify-bottom sm:pr-10 dropdown animate" id="dpdown" >
              <a href="#" className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded">About Us</a>
              <a href="#" className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded">Contact</a>
              <a href="#" className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded">Order</a>
          </div>
              
          </header> 
        </div>
    )
}
