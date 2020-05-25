import React from "react";

export default function ContactForm() {
  return (
    // <div className="w-screen">
    <div
      className=" bg-fixed bg-center bg-cover h-screen flex flex-col items-left w-screen "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
      }}
    >
      <div className=" h-40 w-screen  "> </div>

      <div className=" py-12 px-2 sm:px-20 md:px-40 lg:px-40  ">
        <div className="bg-red-400 py-12  px-20 m-3 sm:mx-0 lg:mx-48 rounded-lg text-center">
          <h1 className="text-2xl font-heading">Contact Us</h1>

          <div class="mb-3 pt-2 text-left  mx-5">
            <label for="name" className="text-sm font-bold text-gray-700">
              Name:{" "}
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>

          <div class="mb-3 pt-2 text-left  mx-5">
            <label for="name" className="text-sm font-bold text-gray-700">
              Email:{" "}
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>

          <div class="mb-3 pt-2 text-left  mx-5">
            <label for="name" className="text-sm font-bold text-gray-700">
              Message:{" "}
            </label>
            <textarea
              type="text-area"
              name="Message"
              placeholder="Message"
              class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
        </div>
      </div>

      <div className="h-40 w-full "> </div>
    </div>
  );
}
