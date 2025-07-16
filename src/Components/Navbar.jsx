import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode, faServer, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({ pages: false, blog: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenuOpen({ pages: false, blog: false });
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } p-4 flex justify-between items-center`}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center bg-blue-500 h-10 w-10 rounded-full">
        <FontAwesomeIcon icon={faLaptopCode} className="text-white text-xl" />
        </div>
        <span
          className={`font-bold text-lg md:text-xl ml-2 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          UQA Softs
        </span>
      </div>

      <div
        className={`md:hidden cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}
        onClick={toggleMenu}
      >
        ☰
      </div>

      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:items-center md:gap-6 absolute md:relative top-full left-0 bg-white md:bg-transparent w-full md:w-auto p-4 md:p-0 md:shadow-none shadow-md`}
      >
        <li>
          <Link
            to="/" // Home link should point to the root path
            onClick={closeMenu}
            className={`${
              (scrolled || menuOpen) ? 'text-black' : 'text-white'
            } hover:text-blue-500 
              sm:text-lg md:text-base lg:text-xl`}
          >
            Home
          </Link>
        </li>
        {['InternShips', 'about'].map((link, index) => (
          <li key={index}>
            <Link
              to={`/${link}`} // Use Link instead of a tag and update href to to
              onClick={closeMenu}
              className={`${
                (scrolled || menuOpen) ? 'text-black' : 'text-white'
              } hover:text-blue-500 
                sm:text-lg md:text-base lg:text-xl`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}

        {/* Dropdown for Pages */}
        <li className="relative">
          <span
            onClick={() => toggleSubMenu('pages')}
            className={`cursor-pointer ${
              (scrolled || menuOpen) ? 'text-black' : 'text-white'
            } hover:text-blue-500 sm:text-lg md:text-base lg:text-xl`}
          >
            Pages
          </span>
          {subMenuOpen.pages && (
            <ul className="absolute left-0 mt-1 w-40 bg-white shadow-lg z-20 flex flex-col">
              <li>
                <Link
                  to="/ApplyService" // Update to Link
                  onClick={closeMenu}
                  className="block px-4 py-2 text-black hover:bg-blue-500 hover:text-white"
                >
                  Apply For IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/elements" // Update to Link
                  onClick={closeMenu}
                  className="block px-4 py-2 text-black hover:bg-blue-500 hover:text-white"
                >
                  Elements
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Dropdown for Blog */}
        <li className="relative">
          <span
            onClick={() => toggleSubMenu('blog')}
            className={`cursor-pointer ${
              (scrolled || menuOpen) ? 'text-black' : 'text-white'
            } hover:text-blue-500 sm:text-lg md:text-base lg:text-xl`}
          >
            Blog
          </span>
          {subMenuOpen.blog && (
            <ul className="absolute left-0 mt-1 w-40 bg-white shadow-lg z-20 flex flex-col">
              <li>
                <Link
                  to="/blog1" // Update to Link
                  onClick={closeMenu}
                  className="block px-4 py-2 text-black hover:bg-blue-500 hover:text-white"
                >
                  Blog 1
                </Link>
              </li>
              <li>
                <Link
                  to="/blog2" // Update to Link
                  onClick={closeMenu}
                  className="block px-4 py-2 text-black hover:bg-blue-500 hover:text-white"
                >
                  Blog 2
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/faq" // Update to Link
            onClick={closeMenu}
            className={`${
              (scrolled || menuOpen) ? 'text-black' : 'text-white'
            } hover:text-blue-500 
              sm:text-lg md:text-base lg:text-xl`}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/contact" // Update to Link
            onClick={closeMenu}
            className={`${
              (scrolled || menuOpen) ? 'text-black' : 'text-white'
            } hover:text-blue-500 
              sm:text-lg md:text-base lg:text-xl`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <span className={`font-bold ${scrolled || menuOpen ? 'text-black' : 'text-white'}`}>
          <i className="fa fa-phone"></i> +123456789
        </span>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Apply for Services
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
