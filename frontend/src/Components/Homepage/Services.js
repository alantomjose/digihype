import React, { useEffect } from "react";
import CardService from "./CardService";
import ScrollMagic from "scrollmagic";

export default function Services() {
  return (
    <div
      className="w-screen bg-fixed bg-center bg-cover h-screen"
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
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <CardService
              num="2"
              title="Digital Marketing "
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <CardService
              num="3"
              title="Social Media Management "
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />

            <CardService
              num="4"
              title="Influencer marketing  "
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <CardService
              num="5"
              title="SEO "
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <CardService
              num="6"
              title="Talent Management "
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
