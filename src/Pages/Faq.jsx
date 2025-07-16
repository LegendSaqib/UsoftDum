import React from 'react'
import backComp from "../assets/HomeBg.jpeg";
const FAQ = () => {
    return (
        <div
          style={{
            backgroundImage: `url(${backComp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh', // Full screen height
            width: '100%',   // Full width
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-white text-4xl">FAQ</h1>
          </div>
        </div>
      );
    };

export default FAQ