import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/hero-bg.jpg')", 
          opacity: 0.2 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Unique <span className="text-indigo-600">Handcrafted</span> Treasures
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Supporting local artisans and celebrating traditional craftsmanship. 
            Each purchase helps preserve cultural heritage and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              Shop Collection
            </Link>
            <Link 
              to="/artisans" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-300 transition duration-300"
            >
              Meet Artisans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;