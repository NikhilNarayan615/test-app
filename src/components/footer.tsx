"use client";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  
 
  return (
    <footer className="body-font ">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  ">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <img
              src="https://www.iitbracing.org/assets/Blog-post/racing_website_logo_blue.png"
              alt=""
              style={{ maxWidth: "150px", height: "auto" }}
            />

            <span
              className="ml-3 text-xl"
              style={{
                background: "-webkit-linear-gradient(45deg, #ff00cc, #3333ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.5rem", // Increase font size
              }}
            >
              IIT Bombay
            </span>
          </a>
          <h1 className="my-3 text-xl text-gray-300">Racing Team IIT Bombay</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            IIT Bombay Racing is India's premier Formula Student Electric team
            with a vision to "Revolutionize Electric Mobility in India.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
              Magazine
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-white-800">
                  Stay update with our latest
                </a>
              </li>
              <li className="mt-3">
            <a className="text-gray-700 hover:text-gray-800 "> <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label className="leading-7 text-xl text-gray-600">Email</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-white bg-opacity-80 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-3 hover:text-white"/>

          </div>
         
         
        </div></a>
          </li>
          <li>
            <div className="mt-3">
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
          </div>
          </li>
             
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h1 className="title-font font-medium text-gray-300 tracking-widest text-xl mb-3">
            Contact Us
            </h1>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white-800">
                📞 7875692712
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-400 hover:text-white-800 ">
                📞 9930779212
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-400 hover:text-white-800">
                📍IIT Bombay,Powai,
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-400 hover:text-white-800">
                 400063, India
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h1 className="title-font font-medium text-gray-300 tracking-widest text-xl mb-3">
              Follow us
            </h1>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white-800">
                Let us be Social
                </a>
              </li>

              
              <li className="mt-3">
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
              </li>
             
             
             
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
