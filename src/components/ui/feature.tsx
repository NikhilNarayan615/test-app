import React from 'react';

const Feature: React.FC = () => {
  return (
<section className="text-white-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white-900">Our Mission</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-white-500" style={{ background: 'linear-gradient(to right, #ff00cc, #3333ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>#Racing Up The Ladder</p>

    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gradient-to-br from-purple-400 to-indigo-500 border border-white-200 p-6 rounded-lg" style={{ borderRadius: '30px' }}>
          <h2 className="text-lg text-white-900 font-medium title-font mb-2">"Electrifying Innovation"</h2>
          <p className="leading-relaxed text-base">Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.</p>
        </div>
      </div>
      <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gradient-to-br from-red-400 to-pink-500 border border-white-200 p-6 rounded-lg" style={{ borderRadius: '20px' }}>
          <h2 className="text-lg text-white-900 font-medium title-font mb-2">"Speeding Towards Excellence"</h2>
          <p className="leading-relaxed text-base">We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge designs on a global stage.</p>
        </div>
      </div>
      <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 border border-white-200 p-6 rounded-lg" style={{ borderRadius: '25px' }}>
          <h2 className="text-lg text-white-900 font-medium title-font mb-2">"Driving India's Green Revolution"</h2>
          <p className="leading-relaxed text-base">Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.</p>
        </div>
      </div>
      <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 border border-white-200 p-6 rounded-lg" style={{ borderRadius: '35px' }}>
          <h2 className="text-lg text-white-900 font-medium title-font mb-2">"Engineering the Future"</h2>
          <p className="leading-relaxed text-base">At IIT Bombay Racing, we're on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.</p>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default Feature;
