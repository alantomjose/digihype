import React from "react";
import { Link } from "react-router-dom";

export default function BlogSumCard(props) {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg cardt animate my-3">
        <img
          class="w-full h-auto object-fill"
          src="https://images.unsplash.com/photo-1590755202874-2e48e32ed07a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2032&q=80"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}
