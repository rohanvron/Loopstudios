import React from 'react';
import hero from '../assets/desktop/image-hero.jpg';

const Home = () => {
  return (
    <section className="relative min-h-[66vh] bg-cover bg-center flex items-center" style={{backgroundImage: `url(${hero})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative w-full py-20 px-6 lg:px-24 xl:px-40 2xl:px-80">
        <div className="max-w-7xl w-full mx-auto font-josefin font-light">
          <h1 className="text-white text-4xl lg:text-7xl uppercase border-2 p-6 lg:p-8 max-w-lg lg:max-w-2xl">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;