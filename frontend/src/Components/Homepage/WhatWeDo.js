import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";

export default function WhatWeDo() {
  return (
    <div className="relative text-white h-full">
      <div className="text-6xl text-center py-10 text-white w-full absolute font-heading  ">
        <div className="bg-black bg-opacity-25 inline p-5 shadow-lg rounded">
          What We Do
        </div>
      </div>
      <div className="flex justify-between h-full w-screen max-w-screen overflow-auto ">
        <WhatWeDoCard
          id="1"
          title=" Public Relations"
          bg="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="Need media presence for your brand? We bring PR excellence to you"
        />

        <WhatWeDoCard
          id="2"
          title="Digital Marketing"
          bg="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="Integrated Marketing Communications across all Digital platforms."
        />

        <WhatWeDoCard
          id="3"
          title=" Social Media Management"
          bg="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="Do you feel that your business is not reaching the intended audience?           
          Well now it will, leave It to us. We will help you break the internet."
        />
        <WhatWeDoCard
          id="4"
          title="Talent Management"
          bg="https://images.pexels.com/photos/3692083/pexels-photo-3692083.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="At Hype Digital, you will find a heartfelt piece of us in everything that we deliver. As someone rightly said that talent hits a target no one else can hit."
        />

        <WhatWeDoCard
          id="5"
          title="Influencer Marketing"
          bg="https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="Do you feel that your business is not reaching the intended audience?           
          Well now it will, leave It to us. We will help you break the internet."
        />

        <WhatWeDoCard
          id="6"
          title="SEO"
          bg="https://images.pexels.com/photos/2853432/pexels-photo-2853432.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=1200&w=1260"
          desc="Authenticity is our virtue and we aim to provide you with quality content."
        />
      </div>
    </div>
  );
}
