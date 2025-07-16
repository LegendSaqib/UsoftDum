import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterIcon from '../assets/logo.webp';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white ml-2 lg:mx-28 pt-32 pb-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Contact Section */}
        <div className="flex flex-col items-start">
          <img src={FooterIcon} alt="Finloans" className="h-10 mb-4" />
          <p className="text-gray-600 pt-4">www.uqasofts@gmail.com</p>
          <p className="text-gray-600">+10 873 672 6782</p>
          <p className="text-gray-600">TF-06 Deans Trade Center Peshawar</p>

          <div className="flex space-x-4 mt-10">
            {/* Social Media Icons with Size and Hover Effects */}
            <a href="#" className="text-gray-500 hover:text-white bg-gray-200 hover:bg-blue-500 rounded-full p-2 transition duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white bg-gray-200 hover:bg-blue-500 rounded-full p-2 transition duration-200">
              <FaGooglePlusG size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white bg-gray-200 hover:bg-blue-500 rounded-full p-2 transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white bg-gray-200 hover:bg-blue-500 rounded-full p-2 transition duration-200">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="text-gray-600 space-y-4 pt-5">
            <li>SEO/SEM</li>
            <li>Web Design</li>
            <li>Ecommerce</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
        <ul>
          <Link> <li>About</li>  </Link> 
          <Link>  <li>Blog</li> </Link>   
          <Link> <li>Contact</li>  </Link>   
          <Link> <li>Support</li>  </Link>   
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <div className="flex pt-5 space-x-4">
            <input
              type="email"
              placeholder="Enter your mail"
              className="border border-gray-300 text-sm p-2 rounded-md w-full"
            />
            <button className="bg-blue-500 text-sm text-white px-4 py-4 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Esteem spirit temper too say adieus who direct esteem esteems
            luckily.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 pt-14 mt-20">
  <p>Copyright ©2024 All rights reserved | This website is powered by 💻 UQA Softs</p>
</div>

    </footer>
  );
}
