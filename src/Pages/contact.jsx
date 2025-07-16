import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import backComp from "../assets/HomeBg.jpeg";

function Contact() {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, subject, message });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backComp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Half screen height
          width: "100%", // Full width
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-start">
          <h1 className="text-white lg:mx-28 ml-8 lg:text-5xl md:text-4xl text-3xl">
            Contact Us
          </h1>
        </div>
      </div>
      <section>
        <div className="flex flex-col lg:mx-28 items-center mt-5 lg:mt-24">
          <div style={{ width: "100%", height: "50vh" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194550484014!2d-122.08138298468991!3d37.38747497982914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0c6c0a61a0b%3A0xf5df87e0a7e98984!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614154698596!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className='bg-gray-50 py-20 mt-10'>
       
        <div className="flex flex-col lg:flex-row lg:mx-32 mx-2 sm:mx-32 ">
          {/* Left Form Section */}
          <div className="flex-1 bg-gray-100 p-6 lg:p-8 shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 rounded-md w-full text-sm md:text-base"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 rounded-md w-full text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border p-2 mt-4 rounded-md w-full text-sm md:text-base"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="border p-2 mt-4 rounded-md w-full h-40 text-sm md:text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="flex-1 lg:ml-8 mt-8 lg:mt-0 text-gray-600">
            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.1 2 5 5.1 5 9C5 16.5 12 22 12 22C12 22 19 16.5 19 9C19 5.1 15.9 2 12 2ZM12 11C10.3 11 9 9.7 9 8C9 6.3 10.3 5 12 5C13.7 5 15 6.3 15 8C15 9.7 13.7 11 12 11Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Address:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">TF-06 Deans Trade Center Peshawar</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79C9.06 13.23 10.77 14.94 13.21 17.38C13.61 17.78 14.25 17.87 14.74 17.55C15.89 16.83 17.11 15.96 18.07 15.14C18.64 14.65 18.7 13.82 18.21 13.32L15.08 10.19C14.84 9.95 14.5 9.87 14.18 10.01L12.6 10.69C12.32 10.82 11.98 10.8 11.71 10.64C10.64 10.04 9.53 9.25 8.57 8.29C7.61 7.33 6.81 6.21 6.21 5.14C6.05 4.87 6.03 4.53 6.16 4.25L6.85 2.68C6.98 2.36 6.9 2.02 6.66 1.79L3.53 0.21C3.03 -0.29 2.2 -0.23 1.71 0.34C0.89 1.3 0.02 2.52 -0.7 3.66C-1.02 4.15 -0.92 4.79 -0.52 5.19C2.15 7.86 4.63 10.34 7.31 13.01C9.99 15.69 12.46 18.16 15.13 20.84C15.53 21.23 16.18 21.13 16.67 20.83C17.81 20.1 19.03 19.24 19.93 18.47C20.61 17.97 20.7 16.95 20.21 16.21C17.77 12.92 14.68 9.82 11.39 7.39L6.62 10.79Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Phone:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">+ 1235 2355 98</p>
                </div>
              </div>
            </div>

            <div className="mb-8 ">
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.25 3H4.75C3.78 3 3 3.78 3 4.75V19.25C3 20.22 3.78 21 4.75 21H19.25C20.22 21 21 20.22 21 19.25V4.75C21 3.78 20.22 3 19.25 3ZM19.25 19.25H4.75V4.75H19.25V19.25ZM7.69 14.94H6.38V13.62H7.69V14.94ZM6.38 11.5H7.69V7.75H6.38V11.5ZM9.47 14.94H8.16V13.62H9.47V14.94ZM8.16 11.5H9.47V7.75H8.16V11.5ZM11.25 14.94H9.94V13.62H11.25V14.94ZM9.94 11.5H11.25V7.75H9.94V11.5ZM13.03 14.94H11.72V13.62H13.03V14.94ZM11.72 11.5H13.03V7.75H11.72V11.5ZM14.81 14.94H13.5V13.62H14.81V14.94ZM13.5 11.5H14.81V7.75H13.5V11.5ZM16.59 14.94H15.28V13.62H16.59V14.94ZM15.28 11.5H16.59V7.75H15.28V11.5ZM18.38 14.94H17.06V13.62H18.38V14.94ZM17.06 11.5H18.38V7.75H17.06V11.5Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Email:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">uqasofts@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-500 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12ZM12 14C10.34 14 5 15.34 5 17V19H19V17C19 15.34 13.66 14 12 14Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-base">Website:</p>
                  <p className="font-medium text-xs md:text-sm lg:text-base">www.usasofts.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
