import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import alt from "../../Img/postAlt.jpg";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: { rendered: "Loading.." },
          excerpt: { rendered: "loading..." },
          img: "img",
          slug: "test",
        },
      ],
      page: 1,
    };
  }
  componentDidMount() {
    axios
      .get(`https://techcrunch.com/wp-json/wp/v2/posts?page=${this.state.page}`)
      .then((res) => {
        console.log(res.data[0].jetpack_featured_media_url);
        // console.log("worjs");
        this.setState({ posts: res.data, page: this.state.page });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  nextPage = () => {
    axios
      .get(
        `https://techcrunch.com/wp-json/wp/v2/posts?page=${this.state.page + 1}`
      )
      .then((res) => {
        console.log(res.data);
        // console.log("worjs");
        this.setState({ posts: res.data, page: this.state.page + 1 });
        window.scrollTo(0, 0);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  prevPage = () => {
    axios
      .get(
        `https://techcrunch.com/wp-json/wp/v2/posts?page=${this.state.page - 1}`
      )
      .then((res) => {
        console.log(res.data);
        // console.log("worjs");
        this.setState({ posts: res.data, page: this.state.page - 1 });
        window.scrollTo(0, 0);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        className=" w-screen bg-fixed bg-center bg-cover  overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502920970741-47c1bafc8d49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="text-center text-5xl mt-32 font-heading mb-10  ">
          The Blog
        </div>
        <div className="mx-2 md:mx-12 lg:mx-40 item-center text-gray-800  ">
          {this.state.posts.map((post, key) => {
            var id = "/post/" + post.id;
            return (
              <div className="shadow-lg my-8 mx-4 bg-gray-100 bg-opacity-50 postcard animate rounded ">
                <div className="flex w-full flex-col xl:flex-row">
                  <div
                    id="theimagediv"
                    className="xl:w-1/2  flex justify-center  "
                  >
                    <img
                      id="postthumber"
                      className="rounded-lg object-cover object-center xl:mt-5 xl:ml-10"
                      src={
                        post.jetpack_featured_media_url
                          ? post.jetpack_featured_media_url
                          : alt
                      }
                    />
                  </div>
                  <div id="content" className="xl:w-1/2">
                    <div
                      className="text-2xl leading-tight font-heading sm:text-3xl py-6 sm:pl-20 px-8 "
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div className="px-10 pb-6 sm:pl-20 sm:pb-10 ">
                      {/* <p >{post.excerpt.rendered} </p> */}
                      <div
                        className="pb-4"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full text-right p-6  sm:p-5">
                  <Link
                    to={id}
                    className="bg-gray-700 rounded-full py-2 px-5 my-4 text-white "
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center py-10">
          {this.state.page > 1 ? (
            <button
              onClick={() => {
                this.prevPage();
              }}
              className="bg-gray-800 rounded-full py-2 px-5 mx-10 text-white"
            >
              Previous
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={() => {
              this.nextPage();
            }}
            className="bg-gray-800 rounded-full py-2 px-5 mx-10 text-white"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
