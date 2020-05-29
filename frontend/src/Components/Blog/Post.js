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
    <div>
      <div className="mx-2 md:mx-12 lg:mx-32 item-center ">
        <div className="h-32 w-full  "> </div>
        <div className="shadow-lg my-24 ">
          <div
            className="text-3xl py-6 px-20"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* <div className="px-20 pb-10">{content}</div> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
