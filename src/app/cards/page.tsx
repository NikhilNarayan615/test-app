"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <section className="text-white-600 body-font">

      <div className="container flex flex-col text-center w-ful"> {/* Decreased margin from mb-6 to mb-3 */}
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: '#555' }}>Driving Organizational and <br/> Technical Excellence</h1>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          marginTop: '0.2rem',
          background: '-webkit-linear-gradient(45deg, #ff00cc, #3333ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#555'
        }}>Where Innovation Meets <br/> Excellence.</h1>
        <p className='text-gray-600'>Our team has both Organizational and technical <br/>divisions which are further divided into mechanical,<br/> electrical and driverless subdivisions</p>
        <div className="h-50 overflow-hidden rounded-lg shadow-xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
  </section>
  
  );
}

const testimonials = [
  {
    quote:
      "Mechanical",
    // name: "",
    title: "Precision in Motion: Shaping Mechanical Excellence",
  },
  {
    quote:
      "Driverless",
    // name: "William Shakespeare",
    title: "Driving the Future: Pioneering Autonomous Excellence",
  },
  {
    quote: "Organisational",
    // name: "Edgar Allan Poe",
    title: "Elevating Excellence: Orchestrating Team Success",
  },
  {
    quote: "Electrical",
    // name: "Edgar Allan Poe",
    title: "Electrifying Innovation: Powering Tomorrow's Mobility",
  },

];
