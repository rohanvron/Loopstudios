import React from 'react';
import mobileImage from '../assets/mobile/image-interactive.jpg';
import desktopImage from '../assets/desktop/image-interactive.jpg';

const VR = () => {
  return (
    <section className="mt-[5.875rem] mb-[6.875rem] max-w-[72.375rem] px-6 md:relative md:mx-auto md:mt-[10rem]">
      <div
        className="h-[14rem] w-full bg-cover bg-top bg-no-repeat md:h-[31.3rem] md:max-w-[65.8%]"
        style={{ backgroundImage: `url(${mobileImage})` }}
      >
        <picture>
          <source media="(min-width: 640px)" srcSet={desktopImage} />
          <img src={mobileImage} alt="Interactive VR" className="hidden" />
        </picture>
      </div>

      <div className="mt-[3.125rem] bg-white text-center md:absolute md:-bottom-6 md:right-0 md:mt-0 md:w-[48.8%] md:pl-10 md:pt-[94px] md:text-left lg:pl-[96px]">
        <h2 className="text-[2rem] uppercase leading-[0.98] text-black md:mt-1 md:pr-5 md:text-[2.5rem] lg:text-[3em] font-josefin font-light">
          The leader in interactive VR
        </h2>
        <p className="mx-auto mt-[1.125rem] max-w-[17.5rem] leading-[1.66] text-ls-very-dark-gray md:mx-0 sm:max-w-full md:pb-6 md:pr-5 md:pt-2 md:tracking-[0.010em] font-alata">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default VR;
