import React from 'react'
import '@/styles/style.css';

const Divisions = () => {
  return (
    <section className="text-gray-900 body-font my-5">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-black-800 rounded-lg shadow-xl">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Divisions...</h1>
        <p className="mb-8 leading-relaxed text-gray-400">
          At IIT Bombay Racing, we pride ourselves on our structured approach to excellence. Our team is organized into two key divisions, each playing a crucial role in our mission to revolutionize electric mobility in India: the Organizational Division and the Technical Division. The Technical Division forms the heart of our team, and it is further subdivided into three specialized units.
        </p>
        <p className="mb-8 leading-relaxed text-gray-400">
          These divisions come together in harmony, each playing a unique role in achieving our collective vision. As we continue to push the envelope of sustainable technologies and innovations in Formula Student Electric competitions, our integrated approach ensures that every aspect of our work aligns with our goal of transforming the future of electric mobility in India.
        </p>
        <div className="flex justify-center my-3">
        <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-lg">Know us better</button>
          </div>
</div>

      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://www.iitbracing.org/assets/Blog-post/competitions3.jpeg"/>
      </div>
    </div>
  </section>
  
  
  

  )
}

export default Divisions