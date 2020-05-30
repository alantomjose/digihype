import React, { useEffect } from "react";
import Post from "../Blog/Post";
import { Link } from "react-router-dom";
import BlogSumCard from "./BlogSumCard";
import ScrollMagic from "scrollmagic";

export default function BlogSum() {
  useEffect(() => {
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#blogstart",
      // duration:100,
      offset: -25,
    })
      .setClassToggle("#blogheading", "opacity-100")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#blogstart",
      // duration:100,
      offset: -25,
    })

      .setClassToggle("#blogcards", "opacity-100")
      .addTo(controller);
  }, []);
  return (
    <div
      id="blogstart"
      className="py-6 px-1 sm:px-8 h-screen  w-fixed bg-fixed bg-center bg-cover relative overflow-y-scroll"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
    <div id="nextLogo" className="absolute text-4xl animate sm:hidden font-heading text-yellow-300 "> 
    <i className="fa m-1   fa-arrow-right"></i>
     </div>
      <h1
        id="blogheading"
        className="opacity-0 slowanimate sm:text-5xl text-3xl my-3 text-center font-heading"
      >
        Our Blog
      </h1>
      <div className="overflow-x-auto ">
      <div
        id="blogcards"
        className="opacity-0 slowanimate flex sm:justify-center justify-between w-screen items-around  sm:mt-24 "
      >
        <BlogSumCard
          title="The Coldest Sunset"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          link="Enter/link"
        />
        <BlogSumCard
          title="The Coldest Sunset"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          link="enterlinktopost"
        />
        <BlogSumCard
          title="The Coldest Sunset"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          link="enterlinktopost"
        />
      </div>
      </div>
      <div id="" className=" text-center m-10  ">
        <Link
          to="/blog"
          className="bg-gray-700 rounded-full py-2 px-5 text-white text-xl cardt animate"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
