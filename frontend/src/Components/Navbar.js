import React, { useEffect } from "react";
import "../build/tailwind.css";
import ScrollMagic from "scrollmagic";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#test",
      // duration:100,
      offset: -50,
    })
      .setClassToggle("#navbar", "bg-transparent")
      .setClassToggle("#navbar", "sm:bg-gray-900")

      // .setClassToggle('#navbar','text-gray-700')
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#test",
      // duration:100,
      offset: -50,
    })
      .setClassToggle("#navbar", "bg-gray-900")
      // .setClassToggle("#smTitle", "text-white")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#test",
      // duration:100,
      offset: -50,
    })
      // .setClassToggle("#navbar", "bg-gray-900")
      .setClassToggle("#smTitle", "text-white")
      .addTo(controller);

    //   // .setClassToggle('#navbar','sm:bg-transparent')
    //   // .setClassToggle('#smTitle',"text-white")
    //   .setClassToggle("#dpdown", "text-white")
    //   .addTo(controller);
  }, []);

  const hamToggle = (e) => {
    console.log("click");
    const dropDown = document.querySelector(".dropdown");
    const closeBtn = document.querySelector(".closeButton");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("#navbar");
    const title = document.querySelector("#smTitle");

    dropDown.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    if (!nav.classList.contains("bg-gray-900")) {
      nav.classList.toggle("bg-gray-900");
    }
    if (!title.classList.contains("text-white")) {
      title.classList.toggle("text-white");
    }

    // nav.classList.toggle("bg-gray-800");
    // dropDown.classList.toggle("text-white")
  };

  return (
    <div className="fixed w-full z-50 text-lg ">
      <header
        className=" sm:bg-transparent text-gray-800   sm:flex sm:justify-between sm:pt-3"
        id="navbar"
      >
        <div className="flex justify-between items-center py-3 sm:py-0">
          {/* logo */}
          <div>
            <a href="/">
              <h1
                className="  text-xl px-4 font-bold sm:pb-3 sm:pl-10 font-heading text-black"
                id="smTitle"
              >
                HYPE Digital
              </h1>
            </a>
          </div>
          {/* <div className="block sm:hidden">
            <ul className="flex flex-row justify-around ">
              <li>
                <a href="" className="text-2xl">
                  {" "}
                  <i className="fa m-2  fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" className=" text-2xl">
                  {" "}
                  <i className="fa m-2 fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="" className=" text-2xl">
                  {" "}
                  <i className="fa m-1 fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" className=" text-2xl">
                  {" "}
                  <i className="fa m-1 fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div> */}

          {/* hamburger */}
          <div className="  sm:hidden animate" onClick={(e) => hamToggle(e)}>
            <button className=" hamburger text-gray-300  hover:text-gray-600 px-3">
              <svg
                className="fill-current h-4 text-gray-600 "
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect width="100" height="18" rx="10"></rect>
                <rect y="30" width="100" height="18" rx="10"></rect>
                <rect y="60" width="100" height="18" rx="10"></rect>
              </svg>
            </button>

            <button className="  hidden closeButton text-gray-300  hover:text-gray-600 px-3">
              <svg
                className="fill-current h-6  "
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className=" hidden text-white pb-4 sm:flex sm:justify-bottom sm:pr-10 dropdown animate"
          id="dpdown"
        >
          <a
            href="/"
            className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded"
          >
            Home
          </a>
          <a
            href="#services"
            className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block sm:px-3 px-2 py-1 m-1 hover:bg-gray-300 rounded"
          >
            Contact
          </a>
          <a
            href="/blog"
            className="block sm:px-3 px-2 py-1 m-1 sm:bg-gray-700 sm:text-white hover:bg-gray-300 hover:text-gray-900 rounded-full  "
          >
            <p className="sm:px-2  "> BLOG </p>
          </a>
          {/* Social Media Icons */}
            {/* <div className="sm:ml-8 hidden sm:block ml-2 fixed social"> */}
              <ul className="social-icons flex flex-row block justify-around  h-auto mt-3 sm:hidden py-3 ">
                <li>
                  <a
                    href=""
                    className="social-icon  bg-gray-300 hover:bg-gray-300 animate  p-3 shadow-lg bg-opacity-25 rounded-full text-2xl "
                  >
                    {" "}
                    <i className="fa m-2   fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-25 rounded-full text-2xl"
                  >
                    {" "}
                    <i className="fa m-1 fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-25 rounded-full text-2xl"
                  >
                    {" "}
                    <i className="fa m-1 fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-25 rounded-full text-2xl"
                  >
                    {" "}
                    <i className="fa m-1 fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            {/* </div> */}
          {/* social media icon end */}
        </div>
      </header>
    </div>
  );
}
