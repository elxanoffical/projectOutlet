import React, { useEffect, useState } from "react";
import { hero } from "../data/hero";

const Hero = () => {
  const [heroData, setHeroData] = useState(hero[0]);
  let counter = 1;

  const startAnimationHero = () => {
    setInterval(() => {
      setHeroData(hero[counter]);
      counter++;

      // Eğer counter, hero dizisinin uzunluğuna ulaştıysa sıfırla
      if (counter >= hero.length) {
        counter = 0;
      }
    }, 4000);
  };

  useEffect(() => {
    const interval = startAnimationHero();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 px-4 container mx-auto bg-indigo-600 rounded-2xl flex">
      <div className="flex-1">
        <h2 className="text-emerald-300 text-6xl max-w-xl leading-[110%] font-black tracking-wider">
          {heroData.title}
        </h2>
        <p className="text-purple-400 mt-4 font-light leading-[130%] max-w-3xl text-4xl tracking-wider">
          {heroData.subtitle}
        </p>
        <div className="flex gap-5 mt-4">
          <button className="py-2 px-6 hover:text-emerald-200">
            Shop now!
          </button>
          <button className="py-2 px-6 text-emerald-200 rounded-md font-semibold bg-white">
            more info..
          </button>
        </div>
      </div>
      <div className="flex-1 rounded-3xl overflow-hidden">
        <img
          className="w-full h-full max-h-96  transition duration-300 hover:scale-110"
          src={heroData.imgSrs}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
