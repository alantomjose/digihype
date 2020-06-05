import React, { Component } from "react";
import "../css/Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center bg-gray-900 text-center h-screen">
        <div class="loader">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div className="text-xl text-white pt-10 pl-5">Loading...</div>
      </div>
    );
  }
}

export default Loading;
