import React from 'react'
import '@/styles/style.css';

const Model = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5rem', flexWrap: 'wrap' }}>
    <section style={{ textAlign: 'center', border: '2px solid #bfb8b8', borderRadius: '20px', padding: '20px', backgroundColor: 'black', width: '100%', maxWidth: '700px', height: '500px', marginBottom: '10px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>View 3-D Model</h2>
      <div className="sketchfab-embed-wrapper" style={{ borderRadius: '20px', overflow: 'hidden' }}>
        <iframe
          style={{ width: '100%', height: '400px' }}
          title="E12"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking=""
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
          src="https://sketchfab.com/models/b4c96cbfecf648b3a2fbf822df4ba37f/embed?ui_theme=dark"
          className="iframe"
        ></iframe>
      </div>
    </section>
  
    <div style={{ width: '100%', maxWidth: '300px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="containerx" style={{ display: 'inline-block' }}>
        <div className="typed-out">
          <h1 style={{
            textAlign: 'center',
            background: 'linear-gradient(45deg, #ff7b00, #3333ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'typing 5s forwards, blink 2s 7s infinite alternate',
            fontSize: '3rem',
          }}>
            View 3-D Model<br /> of <br /> E12 First <br /> by <br /> IIT Bombay <br /> Racing
          </h1>
        </div>
      </div>
    </div>
  </div>
  


 




  );
};



export default Model