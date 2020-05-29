import React, { useEffect } from "react";
import CardService from "./CardService";
import ScrollMagic from "scrollmagic";

export default function Services() {
  return (
    <div
      className="w-screen bg-fixed bg-center bg-cover h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565530995968-2e619c04a8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60')",
      }}
    >
      <div className=" container mx-auto pt-10   ">
        <h2
          className="sm:text-5xl text-3xl text-gray-200 text-center font-heading"
          id="test"
        >
          What We Do
        </h2>
        <div className="">
          <div className="flex justify-around  flex-row flex-wrap h-full sm:mx-16 sm:py-10 py-2">
            <CardService
              num="1"
              title="Public Relations "
              desc="Need media presence for your brand? We bring PR excellence to you."
            />
            <CardService
              num="2"
              title="Digital Marketing "
              desc="Need media presence for your brand? We bring PR excellence to you."
            />
            <CardService
              num="3"
              title="Social Media Management "
              desc="Do you feel that your business is not reaching the intended audience?           
              Well now it will, leave It to us. We will help you break the internet."
            />

            <CardService
              num="4"
              title="Influencer marketing  "
              desc="Do you feel that your business is not reaching the intended audience?           
              Well now it will, leave It to us. We will help you break the internet."
            />
            <CardService
              num="5"
              title="SEO "
              desc="Authenticity is our virtue and we aim to provide you with quality content."
            />
            <CardService
              num="6"
              title="Talent Management "
              desc="At Hype Digital, you will find a heartfelt piece of us in everything that we deliver. As someone rightly said that talent hits a target no one else can hit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
