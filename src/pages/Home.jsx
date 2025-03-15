import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Home/HeroSection';
import CategorySection from '../components/Home/CategorySection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
      <JoinArtisanSection />
    </div>
  );
};


const JoinArtisanSection = () => {
  return (
    <section className="bg-amber-50 py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community of Artisans</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you a craftsperson looking to share your unique creations with the world? 
            Join our marketplace and connect with customers who value handmade quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Start Selling Today
            </Link>
            <Link 
              to="/artisans" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition duration-300"
            >
              Meet Our Artisans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;