import React from "react";
import { Link } from "react-router-dom";

export default function BlogSumCard(props) {
  return (
    <div>
      <div class="bg-gray-300 bg-opacity-75   max-w-sm flex flex-col h-auto rounded overflow-hidden shadow-lg cardt animate  w-64 sm:w-full mx-3  sm:mx-5">
        <img
          class="w-full h-auto object-fill rounded"
          src="https://images.unsplash.com/photo-1590755202874-2e48e32ed07a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2032&q=80"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 m-3">
          <div class="font-bold text-2xl mb-2 ">{props.title}</div>
          <p class="text-gray-900 text-base ">{props.desc}</p>
          <div className="mt-5 text-right ">
            <Link
              to={props.link}
              className="bg-gray-900 bg-opacity-75 hover:bg-opacity-100 rounded-full py-2 px-5 text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
