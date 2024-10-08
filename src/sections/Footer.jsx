import React from 'react';
import logo from '../assets/logo.svg';

// Social media icons
import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';
import instagram from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 lg:px-24 xl:px-40 2xl:px-80 font-alata">
      <div className="lg:flex lg:justify-between">
        <div className="text-center lg:text-left">
          <img src={logo} alt="Loopstudios" className="w-48 mb-8 items-center mx-auto lg:mx-0" />
          <nav className="lg:mt-6">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 ">
              {['About', 'Careers', 'Events', 'Products', 'Support'].map((item) => (
                <li key={item}><a href="" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="flex justify-center lg:justify-end space-x-4 mb-4">
            <a href="#" className="hover:opacity-75">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src={pinterest} alt="Pinterest" />
            </a>
            <a href="#" className="hover:opacity-75">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <p className="text-gray-500 text-center lg:text-right">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;