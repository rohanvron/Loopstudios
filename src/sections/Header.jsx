import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ['About', 'Careers', 'Events', 'Products', 'Support'];

  return (
    <header className="absolute w-full px-6 py-8 lg:px-24 xl:px-40 2xl:px-80 z-20 font-josefin font-light pt-10">
      <div className="flex justify-between items-center relative z-30">
        <img src={logo} alt="Loopstudios" className="w-48" />
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-white">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="relative group">
                  {item}
                  <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:left-0 group-hover:right-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="lg:hidden z-30" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeIcon : hamburgerIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-20 lg:hidden">
          <nav className="flex flex-col justify-center h-full px-6">
            <ul className="space-y-6 text-white text-2xl uppercase">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-300">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;