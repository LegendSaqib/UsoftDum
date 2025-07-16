import React from "react";
import { useState } from "react";
import backComp from "../assets/imageBg.jpeg";
import SoftwareDev from "../assets/logo.jpg";
import Meeting from "../assets/Meeting.webp";
import buisnes from "../assets/buines.jpg";
import Slider from "../Components/Slider";
import Laptop from "../assets/Laptop.jpeg";

const Home = () => {
  // Array to manage which FAQ is open
  const [open, setOpen] = useState(null);

  // Function to handle toggling FAQ items
  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <>
     <div
  className="min-h-screen relative bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${backComp})`,
    backgroundAttachment: "scroll", // Ensure background scrolls with content
  }}
>
  <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-4 md:px-28">
    {/* 1st Div */}
    <div className="w-full lg:w-1/2 md:w-1/2 mt-16 md:mt-32 text-center md:text-left">
      {/* Increased margin for mobile */}
      <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Transform Your Business with Cutting-Edge IT Solutions
      </p>
      <button className="mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base md:text-lg text-white bg-lime-500 p-2 sm:p-3 md:p-4 rounded font-bold">
        Explore Services
      </button>
    </div>

    {/* 2nd Div */}
    <div className="w-full md:w-2/3 lg:w-1/3 bg-white mt-10 md:mt-28 rounded pb-10 px-6 md:mr-28 p-6 shadow-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-2 sm:mt-4 md:mt-6">
        Choose Your Ideal Tech Solution
      </h2>
      <p className="text-center mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
        From software development to IT consultancy, we empower businesses with innovative technology.
      </p>

      {/* Service Dropdown */}
      <div className="mt-4 sm:mt-6 text-center">
        <select
          id="services"
          className="mt-2 p-2 border border-gray-300 rounded w-full md:w-72 text-sm sm:text-base md:text-lg"
        >
          <option value="default">Select a Service</option>
          <option value="webDevelopment">Web Development</option>
          <option value="appDevelopment">Mobile App Development</option>
          <option value="cloudSolutions">Cloud Solutions</option>
          <option value="uiuxDesign">UI/UX Design</option>
        </select>
      </div>

      {/* Project Timeline Dropdown */}
      <div className="mt-4 sm:mt-6 text-center">
        <select
          id="timeline"
          className="mt-2 p-2 border border-gray-300 rounded w-full md:w-72 text-sm sm:text-base md:text-lg"
        >
          <option value="default">Project Duration</option>
          <option value="1month">1 Month</option>
          <option value="3months">3 Months</option>
          <option value="6months">6 Months</option>
          <option value="1year">1 Year</option>
        </select>
      </div>

      <p className="text-center mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
        Get a customized plan for your business.
      </p>

      {/* Get Started Button */}
      <div className="text-center">
        <button className="mt-4 sm:mt-6 w-full md:w-72 bg-blue-500 text-white py-2 px-10 rounded hover:bg-blue-600 text-sm sm:text-base md:text-lg">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>



    {/* Offers Section */}
<section className="lg:mx-28 p-3 lg:mt-28 sm:mx-4 mt-16">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center">
    Our Services
  </h2>
  <p className="pt-8 text-center text-sm sm:text-base md:text-lg lg:text-lg">
    We provide innovative software solutions tailored to your business needs.
  </p>

  <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between lg:gap-6 mt-12">
    {/* First Service */}
    <div
      className="lg:w-1/3 sm:w-full p-4 pb-8 rounded-lg flex flex-col items-center justify-center mb-6 lg:mb-0"
      style={{ background: "linear-gradient(45deg, #00c6ff, #0072ff)" }}
    >
      <img
        src={SoftwareDev}
        alt="Software Development"
        className="py-4 sm:py-6 md:py-8 w-1/2 sm:w-2/3 lg:w-28"
      />
      <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
        Custom Software Development
      </span>
      <p className="py-4 text-white text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">
        Scalable & Efficient Solutions
      </p>
      <hr className="w-full border-t-2 border-white mb-4" />
      <ul className="list-disc list-inside ml-5 text-white text-sm sm:text-base md:text-lg lg:text-lg">
        <li>Web & Mobile App Development</li>
        <li>Enterprise Software Solutions</li>
        <li>Cloud-Based Systems</li>
      </ul>
      <button className="bg-white mt-8 text-teal-900 text-sm sm:text-base md:text-lg lg:text-base font-semibold py-2 px-4 rounded">
        Learn More
      </button>
    </div>

    {/* Second Service */}
    <div
      className="lg:w-1/3 sm:w-full p-4 pb-8 rounded-lg flex flex-col items-center justify-center mb-6 lg:mb-0"
      style={{ background: "linear-gradient(45deg, #00c6ff, #0072ff)" }}
    >
      <img
        src={SoftwareDev}
        alt="IT Consulting"
        className="py-4 sm:py-6 md:py-8 w-1/2 sm:w-2/3 lg:w-28"
      />
      <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
        IT Consulting
      </span>
      <p className="py-4 text-white text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">
        Expert Guidance for Businesses
      </p>
      <hr className="w-full border-t-2 border-white mb-4" />
      <ul className="list-disc list-inside ml-5 text-white text-sm sm:text-base md:text-lg lg:text-lg">
        <li>Business Process Optimization</li>
        <li>Technology Strategy & Planning</li>
        <li>Security & Compliance</li>
      </ul>
      <button className="bg-white mt-8 text-teal-900 text-sm sm:text-base md:text-lg lg:text-base font-semibold py-2 px-4 rounded">
        Learn More
      </button>
    </div>

    {/* Third Service */}
    <div
      className="lg:w-1/3 sm:w-full p-4 pb-8 rounded-lg flex flex-col items-center justify-center mb-6 lg:mb-0"
      style={{ background: "linear-gradient(45deg, #00c6ff, #0072ff)" }}
    >
      <img
        src={SoftwareDev}
        alt="Digital Marketing"
        className="py-4 sm:py-6 md:py-8 w-1/2 sm:w-2/3 lg:w-28"
      />
      <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
        Digital Marketing
      </span>
      <p className="py-4 text-white text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">
        Boost Your Online Presence
      </p>
      <hr className="w-full border-t-2 border-white mb-4" />
      <ul className="list-disc list-inside ml-5 text-white text-sm sm:text-base md:text-lg lg:text-lg">
        <li>SEO & SEM Strategies</li>
        <li>Social Media Marketing</li>
        <li>Content & Email Marketing</li>
      </ul>
      <button className="bg-white mt-8 text-teal-900 text-sm sm:text-base md:text-lg lg:text-base font-semibold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  </div>
</section>



      {/* new section why chose us */}
<section className="mt-16 lg:mt-28">
  <div className="min-h-screen mx-4 lg:mx-28 flex justify-center items-center ">
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
          src={buisnes}
          alt="Person working"
          className="w-full h-full object-cover"
        />
      </div>

      {/* FAQ Section */}
      <div className="lg:p-10  p-2 flex flex-col justify-center">
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
          Elevate your business with UQA Softs&apos; IT services
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

export default Home;
