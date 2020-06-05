import React from 'react'
import WhatWeDoCard from './WhatWeDoCard'

export default function WhatWeDo() {
    return (
        <div className="h-screen">
            <h1 className="text-6xl text-center ">What We Do</h1>
            <div className="flex justify-between w-screen bg-orange-400 h-full max-w-screen overflow-hidden">
                
               <WhatWeDoCard id="1" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1083"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />

                <WhatWeDoCard id="2" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1081"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />
                 
                 <WhatWeDoCard id="3" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1075"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />

                  <WhatWeDoCard id="4" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1067"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />

                  <WhatWeDoCard id="5" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1075"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />

                  <WhatWeDoCard id="6" title=" Digital Marketing"
               bg="https://unsplash.it/1500/1500/?image=1081"
                desc="Need media presence for your brand? We bring PR excellence to you We bring PR excellence to youWe bring PR excellence to you"
                 />

                

                
            </div>

        </div>
    )
}
