import React, { useState } from 'react'; // Import useState for state management
import backComp from '../assets/HomeBg.jpeg';
import Meeting from '../assets/meeting.webp';
import business from '../assets/buines.jpg'; // Corrected the spelling here
import Slider from '../Components/Slider'; // Assuming you have a Slider component imported
import Laptop from '../assets/laptop.jpeg'; // Assuming you have a Laptop image imported

const About = () => {
  const [open, setOpen] = useState(null); // State to track open FAQ item

  const toggle = (index) => {
    setOpen(open === index ? null : index); // Toggle the FAQ item
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backComp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh', // Full screen height
          width: '100%',   // Full width
        }}
      >
        <div className="bg-black bg-opacity-50  h-full flex items-center justify-start">
          <h1 className="text-white lg:mx-28 ml-8 lg:text-5xl md:text-4xl text-3xl">About Us</h1>
        </div>
      </div>

       {/* new section why chose us */}
      <section className="mt-16 lg:mt-28">
        <div className="min-h-screen mx-4 lg:mx-28 flex justify-center items-center p-4">
          <div className="max-w-4xl lg:max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Section */}
            <div className="h-64 sm:h-full">
              <img
                src={Meeting}
                alt="People working"
                className="w-full h-full object-cover"
              />
            </div>
      
            {/* Text Section */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6">
                We are committed to delivering high-quality solutions tailored to your needs. Our team ensures excellence in every project we undertake.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base lg:text-lg">
                <li>Customized solutions to meet your specific requirements.</li>
                <li>Expert professionals with years of industry experience.</li>
                <li>Client-focused approach ensuring seamless collaboration.</li>
                <li>Reliable and efficient service delivery.</li>
              </ul>
              <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 sm:px-6 rounded text-sm sm:text-base lg:text-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      
       {/* How it Works Section */}
       <section className="bg-slate-200 lg:py-36 lg:mt-28 py-10">
        <h2 className="lg:text-5xl text-3xl text-center">How it Works</h2>
        <p className="text-lg md:text-xl text-center pt-5">
          Our streamlined process ensures a smooth experience from start to finish.
        </p>
      
        <div className="mx-4 md:mx-10 lg:mx-28 pt-10 flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center md:text-left transition-transform hover:scale-105">
            <p className="w-16 h-16 bg-slate-400 flex justify-center items-center rounded-full mx-auto md:mx-0">
              1
            </p>
            <h2 className="text-lg md:text-xl pt-3 font-semibold">
              Submit Your Request
            </h2>
            <p className="text-base md:text-lg pt-2">
              Provide the necessary details, and our team will review your request promptly.
            </p>
          </div>
      
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center md:text-left transition-transform hover:scale-105">
            <p className="w-16 h-16 bg-slate-400 flex justify-center items-center rounded-full mx-auto md:mx-0">
              2
            </p>
            <h2 className="text-lg md:text-xl pt-3 font-semibold">
              Get a Personalized Plan
            </h2>
            <p className="text-base md:text-lg pt-2">
              Our experts will create a solution tailored to your needs.
            </p>
          </div>
      
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center md:text-left transition-transform hover:scale-105">
            <p className="w-16 h-16 bg-slate-400 flex justify-center items-center rounded-full mx-auto md:mx-0">
              3
            </p>
            <h2 className="text-lg md:text-xl pt-3 font-semibold">
              Enjoy the Benefits
            </h2>
            <p className="text-base md:text-lg pt-2">
              Implement the plan and experience seamless service with our support.
            </p>
          </div>
        </div>
      </section>
      
      

       {/* Frequently Asked Questions section */}
      <section>
        <div className="min-h-screen flex justify-center items-center bg-white-50 p-4">
          <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="h-full">
              <img
                src={business}
                alt="Person working"
                className="w-full h-full object-cover"
              />
            </div>
      
            {/* FAQ Section */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
      
              {/* FAQ Items */}
              {[
                "How does the process work?",
                "What services do you offer?",
                "How can I contact support?",
                "Do you provide personalized solutions?",
              ].map((question, index) => (
                <div key={index} className="mb-4">
                  {/* Question */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-lg text-left transition-colors hover:bg-gray-200"
                  >
                    <span className="text-gray-800">{question}</span>
                    <span className="text-gray-500">
                      {open === index ? "-" : "+"}
                    </span>
                  </button>
      
                  {/* Answer */}
                  {open === index && (
                    <div className="bg-white p-4 border-t border-gray-200">
                      <p className="text-gray-600">
                        Our process is simple and efficient. We provide tailored solutions to meet your needs. Contact our support team for further assistance.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <Slider />
      </div>

       <section>
        <div
          className="min-h-[50vh] bg-cover flex items-center"
          style={{
            backgroundImage: `url(${Laptop})`,
            backgroundSize: "cover", // Ensures the image covers the container without stretching
            backgroundPosition: "center", // Centers the image for better alignment
            backgroundAttachment: "scroll", // Keeps the background image scrollable
          }}
        >
          {/* Content with Row Layout */}
          <div className="flex flex-col md:flex-row w-full mx-4 md:mx-28">
            {/* Text Section */}
            <div className="text-white flex-1 mb-4 md:mb-0">
              <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed text-start">
                Elevate your business with UQA Softs' IT services
              </p>
            </div>
      
            {/* Button Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center text-white">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
