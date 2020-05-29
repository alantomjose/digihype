import React from "react";
import Post from "../Blog/Post";
import { Link } from "react-router-dom";
import BlogSumCard from "./BlogSumCard";
export default function BlogSum() {
  return (
    <div
      className="py-6 px-6 sm:px-8 h-screen overflow-y-auto w-screen bg-fixed bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584610482853-0b47043c4ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <h1 className="sm:text-5xl   text-center font-heading">Our Blog</h1>
      <div className="flex justify-between items-around flex-wrap sm:mt-24">
        <BlogSumCard />
        <BlogSumCard />
        <BlogSumCard />
      </div>
    </div>
  );
}
