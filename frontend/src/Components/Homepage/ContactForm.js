import React, { Component } from "react";
import axios from "axios";
export default class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    alert("Submission Successfull");
    e.preventDefault();
    // console.log("submitted");
    const { firstname, lastname, email, message } = this.state;
    const form = axios.post("/api/form", {
      firstname,
      lastname,
      email,
      message,
    }).then((res)=>{
      console.log("submitted");

      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      })
    })
    
  }

  render() {
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

        <div className=" sm:py-12 py-6 px-2 sm:px-20 md:px-40 lg:px-40   ">
          <div className="bg-black bg-opacity-50  sm:py-12 py-6  sm:px-20 m-3 sm:mx-0 lg:mx-48 rounded-lg text-center">
            <h1 className="sm:text-5xl text-2xl font-heading text-gray-400 ">
              Contact Us
            </h1>

            <form onSubmit={this.handleSubmit} class="w-full ">
              <div class="flex flex-wrap mx-3 mb-6 ">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                  />
                  <p class="text-red-100 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <p class="text-gray-400 text-xs italic">
                    Enter Valid Email-ID
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:h-48 h-12 resize-none"
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                  <p class="text-gray-400 text-xs italic">
                    Use Submit Button To Send This Message
                  </p>
                </div>
              </div>
              <div class="flex items-between justify-center ">
                <div class="">
                  <button
                    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
                <div class=""></div>
              </div>
            </form>
          </div>
        </div>

        <div className="h-40 w-full "> </div>
      </div>
    );
  }
}
