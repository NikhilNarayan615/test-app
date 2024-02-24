import React from 'react'

const Legacy = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600" style={{
    background: "-webkit-linear-gradient(45deg, #ff00cc, #3333ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}}>
    Our Legacy
</h1>

      <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">Click To Know The Legacy Of Our Cars

      </h3>

      <p className="mb-8 leading-relaxed">Fuelled by passion, precision, and a legacy of speed, our racing team at IIT Bombay has left tire marks....</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://www.iitbracing.org/assets/Blog-post/legacy.jpeg"/>
    </div>
  </div>
</section>
  )
}

export default Legacy