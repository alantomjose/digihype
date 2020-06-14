import React, { useEffect } from "react";
import Post from "../Blog/Post";
import { Link } from "react-router-dom";
import BlogSumCard from "./BlogSumCard";
import ScrollMagic from "scrollmagic";
import "../../css/animation.css";

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
      className="py-6 px-1 sm:px-0  w-fixed bg-fixed bg-center bg-cover relative  "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2035416/pexels-photo-2035416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div
        id="nextLogo"
        className="hidden absolute text-4xl animate sm:hidden font-heading text-yellow-300 "
      >
        <i className="fa m-1   fa-arrow-right"></i>
      </div>
      <h1
        id="blogheading"
        className="opacity-0 slowanimate sm:text-5xl text-3xl my-3 text-center font-heading"
      >
        Blog
      </h1>
      <div className="overflow-x-auto xl:overflow-hidden ">
        <div
          id="blogcards"
          className="opacity-0 slowanimate flex lg:justify-center justify-between w-screen items-around sm:mt-8 xl:mt-20 "
        >
          <BlogSumCard
            title="SALVATORE FERRAGAMO"
            desc="Salvatore Ferragamo, the name alone is an image of extravagance and advancement. Be that as it may, Ferragamo is in excess of a name...."
            link="/wp"
            imagelink="https://hypeblognet.files.wordpress.com/2020/06/a-sf944s_profile-245.png?w=1024"
          />
          <BlogSumCard
            title="SALVATORE FERRAGAMO"
            desc="Salvatore Ferragamo, the name alone is an image of extravagance and advancement. Be that as it may, Ferragamo is in excess of a name...."
            link="/wp"
            imagelink="https://hypeblognet.files.wordpress.com/2020/06/a-sf944s_profile-435.png?w=1024"
          />
          <BlogSumCard
            title="SALVATORE FERRAGAMO"
            desc="Salvatore Ferragamo, the name alone is an image of extravagance and advancement. Be that as it may, Ferragamo is in excess of a name...."
            link="/wp"
            imagelink="https://hypeblognet.files.wordpress.com/2020/06/a-sf944s_profile-435.png?w=1024"
          />
        </div>
      </div>
      <div id="" className=" text-center m-10  ">
        <Link
          to="/blog"
          className="bg-gray-900 bg-opacity-75 hover:bg-opacity-100 rounded-full py-2 px-5 text-white text-2xl cardt animate"
        >
          View All
        </Link>
      </div>
      <div className="sm:block xl:h-6"></div>
    </div>
  );
}
