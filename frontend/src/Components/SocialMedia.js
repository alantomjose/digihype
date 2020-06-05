import React from "react";

export default function SocialMedia() {
  return (
    <div>
      <div className="sm:ml-8 hidden sm:block ml-2 fixed social z-50">
        <ul className="social-icons flex flex-col justify-between  h-64  ">
          <li>
            <a
              href=""
              className="social-icon  bg-white hover:bg-gray-300 animate  p-3 shadow-lg bg-opacity-50 rounded-full text-2xl "
            >
              {" "}
              <i className="fa m-1   fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href=""
              className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-50 rounded-full text-2xl"
            >
              {" "}
              <i className="fa m-1 fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href=""
              className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-50 rounded-full text-2xl"
            >
              {" "}
              <i className="fa m-1 fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href=""
              className="social-icon bg-white hover:bg-gray-300 animate   p-3 shadow-lg bg-opacity-50 rounded-full text-2xl"
            >
              {" "}
              <i className="fa m-1 fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
