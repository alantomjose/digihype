import React from "react";
import Post from "../Blog/Post";
import { Link } from "react-router-dom";
export default function BlogSum() {
  return (
    <div className="py-32 px-3 sm:px-12 md:px-32 h-screen">
      <h1 className="text-3xl text-center">Our Blog</h1>
      <div className="shadow-lg my-8 mx-4 bg-gray-100 bg-opacity-50 postcard animate rounded ">
        <div
          className="text-2xl leading-tight font-heading sm:text-3xl py-6 sm:px-20 px-8 "
          //   dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className="px-10 pb-6 sm:px-20 sm:pb-10 ">
          {/* <p >{post.excerpt.rendered} </p> */}
          <div
            className="pb-4"
            // dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <Link
            // to={id}
            className="bg-gray-700 rounded-full py-2 px-5 my-4 text-white"
          >
            Read Mode
          </Link>
        </div>
      </div>
    </div>
  );
}
