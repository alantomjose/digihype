import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Post(props) {
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  useEffect(() => {
    Axios.get(
      "https://techcrunch.com/wp-json/wp/v2/posts/" + props.match.params.id
    )
      .then((res) => {
        console.log(res.data.content);
        setid(props.match.params.id);
        settitle(res.data.title.rendered);
        setcontent(res.data.content.rendered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      id="post"
      className=" w-screen bg-fixed bg-center bg-cover h-full overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502920970741-47c1bafc8d49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="mx-2 md:mx-12 lg:mx-48 item-center overflow-hidden text-gray-800">
        <div className="h-32 w-full  "> </div>
        <div className="shadow-lg my-24 bg-gray-100 bg-opacity-50 rounded px-15 mt-8">
          <div
            className="text-2xl leading-tight font-heading sm:text-3xl py-6 sm:px-20 px-8 py-8"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* <div className="px-20 pb-10">{content}</div> */}
          <div
            className=" pb-6 sm:px-20 sm:pb-10"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
