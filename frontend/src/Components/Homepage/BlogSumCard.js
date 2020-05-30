import React from "react";
import { Link } from "react-router-dom";

export default function BlogSumCard(props) {
  return (
    <div>
      <div class="max-w-sm flex flex-col h-auto rounded overflow-hidden shadow-lg cardt animate m-3">
        <img
          class="w-full h-auto object-fill"
          src="https://images.unsplash.com/photo-1590755202874-2e48e32ed07a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2032&q=80"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base ">{props.desc}</p>
          <div className="mt-5 text-right ">
            <Link
              to={props.link}
              className="bg-gray-700 rounded-full py-2 px-5 text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
