import React from 'react'

export default function WhatWeDoCard(props) {
    const mouseOver=()=>{
        const desc = document.querySelector(`#desc${props.id}`);
        // console.log(card+"dadsada")
        const title = document.querySelector(`#title${props.id}`);
        // desc.classList.remove('scale-0');
        desc.classList.remove('opacity-0');
        desc.classList.remove('text-xs');
        desc.classList.add('text-xl');
        // desc.classList.add('scale-100');
        title.classList.remove('text-3xl');
        title.classList.add('text-6xl');

    }
    const mouseExit=()=>{
        const desc = document.querySelector(`#desc${props.id}`);
        // console.log(card+"dadsada")
        const title = document.querySelector(`#title${props.id}`);
        // desc.classList.add('scale-0');
        desc.classList.add('opacity-0');
        // desc.classList.remove('scale-100');
        desc.classList.add('text-xs');
        desc.classList.remove('text-xl');
        title.classList.add('text-3xl');
        title.classList.remove('text-6xl');

    }
    return (
        <div>
            <div onMouseEnter={()=>mouseOver()}
                onMouseLeave={()=>mouseExit()}
                
                    id="wwdcard"
                 className=" wwdCard bg-yellow-200 flex flex-col justify-around py-64 px-12 max-w-lg h-full  "
                 style={{
                        backgroundImage:`url(${props.bg})`
                    }}>
                    <span id={`title${props.id}`}
                        className="text-3xl animate " >
                        {props.title}
                    </span>
                    <div id={`desc${props.id}`} className="text-xs transform  animate opacity-0" >
                    {props.desc}
                    </div>
                </div>
        </div>
    )
}
