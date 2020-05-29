import React from 'react'
import Post from '../Blog/Post'
import {Link } from 'react-router-dom'
import BlogSumCard from './BlogSumCard'
export default function BlogSum() {
    return (
        <div className="py-32 px-3 sm:px-12 md:px-32">
            <h1 className="text-3xl text-center" >Our Blog</h1>
                <BlogSumCard/>
        </div>
      </div>
    </div>
  );
}
