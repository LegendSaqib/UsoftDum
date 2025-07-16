import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import backComp from "../assets/HomeBg.jpeg";

function ApplyService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    requirements: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backComp})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          width: '100%',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center j ">
          <h1 className="text-white text-4xl lg:ml-28 lg:text-start text-center">Apply for IT Services</h1>
        </div>
      </div>

      <section className="flex justify-center items-center pt-16 py-8">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-[600px] border">
          <h1 className="text-2xl font-bold text-center mb-4">How can we help you?</h1>
          <p className="text-gray-600 text-center mb-8">
            We provide a range of IT services tailored to your needs. Let's get started by filling out the form below.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Service you're interested in"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your requirements"
              className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional message"
              className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
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
    </>
  );
}

export default ApplyService;
