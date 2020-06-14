import React from 'react'

export default function Wordpress() {
    const iframe = '<iframe src="https://hypeblognet.wordpress.com/blog-2/" width="1040" height="1050"></iframe>'; 
    return (
        <div>
            <div>
            <iframe src="https://hypeblognet.wordpress.com/blog-2/" height={window.innerHeight} width={window.innerWidth} />         
      </div>
        </div>
    )
}
