import React from 'react'

const Team = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom right, rgb(68, 23, 126), rgb(126, 20, 113))', boxShadow: '0 0 10px rgb(126, 20, 113)', borderRadius: '20px', padding: '20px' }}>
    <section className="text-white-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden' }}>
          <img src="https://www.iitbracing.org/assets/Blog-post/TeamHome.jpeg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center my-5">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">The Team
            <br className="hidden lg:inline-block"/>
          </h1>
          <h3 className='text-light'>"Driving Innovation, Powering Sustainability: IITB Racing"</h3><br />
          <p className="mb-8 leading-relaxed ">IIT Bombay Racing is India's premier Formula Student Electric team with a vision to "Revolutionize Electric Mobility in India focusing on sustainable technologies and innovations".</p>
          <p className="mb-8 leading-relaxed ">IIT Bombay Racing stands at the forefront of India's Formula Student Electric teams, driven by an unwavering vision to spearhead a transformative shift in the landscape of electric mobility. Through relentless dedication and a passion for excellence, we are committed to propelling India into the global forefront of sustainable electric mobility solutions.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Know More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Team