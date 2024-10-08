import React from "react";
import DeepEarthDesktop from "../assets/desktop/image-deep-earth.jpg";
import NightArcadeDesktop from "../assets/desktop/image-night-arcade.jpg";
import SoccerTeamDesktop from "../assets/desktop/image-soccer-team.jpg";
import TheGridDesktop from "../assets/desktop/image-grid.jpg";
import FromUpAboveDesktop from "../assets/desktop/image-from-above.jpg";
import PocketBorealisDesktop from "../assets/desktop/image-pocket-borealis.jpg";
import TheCuriosityDesktop from "../assets/desktop/image-curiosity.jpg";
import MakeItFisheyeDesktop from "../assets/desktop/image-fisheye.jpg";

import DeepEarthMobile from "../assets/mobile/image-deep-earth.jpg";
import NightArcadeMobile from "../assets/mobile/image-night-arcade.jpg";
import SoccerTeamMobile from "../assets/mobile/image-soccer-team.jpg";
import TheGridMobile from "../assets/mobile/image-grid.jpg";
import FromUpAboveMobile from "../assets/mobile/image-from-above.jpg";
import PocketBorealisMobile from "../assets/mobile/image-pocket-borealis.jpg";
import TheCuriosityMobile from "../assets/mobile/image-curiosity.jpg";
import MakeItFisheyeMobile from "../assets/mobile/image-fisheye.jpg";

const creations = [
  {
    title: "Deep Earth",
    desktopImage: DeepEarthDesktop,
    mobileImage: DeepEarthMobile,
  },
  {
    title: "Night Arcade",
    desktopImage: NightArcadeDesktop,
    mobileImage: NightArcadeMobile,
  },
  {
    title: "Soccer Team VR",
    desktopImage: SoccerTeamDesktop,
    mobileImage: SoccerTeamMobile,
  },
  {
    title: "The Grid",
    desktopImage: TheGridDesktop,
    mobileImage: TheGridMobile,
  },
  {
    title: "From Up Above VR",
    desktopImage: FromUpAboveDesktop,
    mobileImage: FromUpAboveMobile,
  },
  {
    title: "Pocket Borealis",
    desktopImage: PocketBorealisDesktop,
    mobileImage: PocketBorealisMobile,
  },
  {
    title: "The Curiosity",
    desktopImage: TheCuriosityDesktop,
    mobileImage: TheCuriosityMobile,
  },
  {
    title: "Make It Fisheye",
    desktopImage: MakeItFisheyeDesktop,
    mobileImage: MakeItFisheyeMobile,
  },
];

const Creations = () => {
  return (
    <section className="px-6 py-8 md:px-12 lg:px-24 xl:px-40 2xl:px-80 mb-24 font-josefin font-light">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl lg:text-5xl uppercase mb-10 md:mb-0">
          Our Creations
        </h2>
        <button className="hidden md:block border-2 border-black px-10 py-2 uppercase hover:bg-black hover:text-white transition-colors">
          See All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creations.map((item) => (
          <div key={item.title} className="relative group cursor-pointer">
            <picture>
              <source media="(min-width: 768px)" srcSet={item.desktopImage} />
              <img src={item.mobileImage} alt={item.title} className="w-full" />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-0 transition-opacity"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-2xl uppercase group-hover:text-black transition-colors">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <button className="md:hidden mt-12 w-full border-2 border-black px-10 py-2 uppercase hover:bg-black hover:text-white transition-colors">
        See All
      </button>
    </section>
  );
};

export default Creations;
