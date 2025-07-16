import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import author from '../assets/author.webp';
import Png1 from '../assets/Png1.webp';
import Png2 from '../assets/png2.webp';
import Png3 from '../assets/png3.webp';
import Png4 from '../assets/png4.webp';
import Png5 from '../assets/png5.webp';

const images = [Png1, Png2, Png3, Png4, Png5];

const testimonials = [
  { id: 1, name: 'Micky Mouse', image: author, text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering." },
  { id: 2, name: 'John Doe', image: author, text: "This program has changed many lives for the better and has shown us the impact of small efforts." },
  { id: 3, name: 'Jane Smith', image: author, text: "An invaluable program, truly changing the world one step at a time." },
  { id: 4, name: 'Alice Johnson', image: author, text: "The dedication and support shown through this program are inspiring." },
  { id: 5, name: 'Bob Brown', image: author, text: "I'm grateful for the opportunity to witness such positive impact." }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(images.length); // Start in the middle of duplicated array

  // Triple the images to create a seamless loop effect
  const loopedImages = [...images, ...images, ...images];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset position when reaching the start or end of duplicated images
  useEffect(() => {
    if (currentIndex >= images.length * 2) {
      setTimeout(() => {
        setCurrentIndex(images.length);
      }, 500); // Delay to complete the transition
    } else if (currentIndex < images.length) {
      setTimeout(() => {
        setCurrentIndex(images.length * 2 - 1);
      }, 500); // Delay to complete the transition
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Testimonial Slider */}
      <div className="flex items-center justify-center min-h-[50vh] p-4">
        <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src={testimonials[currentIndex % images.length].image}
              alt={testimonials[currentIndex % images.length].name}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left px-4 md:px-6">
            <p className="text-gray-700 text-sm md:text-lg">{`"${testimonials[currentIndex % images.length].text}"`}</p>
            <p className="mt-2 md:mt-4 text-gray-500 text-sm md:text-base">- {testimonials[currentIndex % images.length].name}</p>
          </div>
          <div className="flex space-x-2 md:flex-col">
            <button
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
              onClick={prevSlide}
            >
              <FaChevronLeft className="text-blue-500" />
            </button>
            <button
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
              onClick={nextSlide}
            >
              <FaChevronRight className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>

  {/* Image Slider */}
<div className="relative flex justify-center py-8">
  <div className="overflow-hidden w-full max-w-6xl">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${(currentIndex % images.length) * 20}%)`,
      }}
    >
      {loopedImages.map((img, index) => (
        <div
          key={index}
          // Apply Tailwind CSS classes for responsive widths
          className="flex-shrink-0 px-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  );
};

export default Slider;
