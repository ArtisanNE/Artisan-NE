// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Artisan Marketplace</h3>
            <p className="text-gray-300 mb-4">
              Connecting artisans with customers worldwide, preserving traditional crafts
              while creating sustainable livelihoods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
              <li><Link to="/artisans" className="text-gray-300 hover:text-white">Artisans</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-2">Email: contact@artisanmarket.com</p>
            <p className="text-gray-300 mb-4">Phone: +1 (555) 123-4567</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" className="text-gray-300 hover:text-white">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-medium mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-300">Stay updated with new artisans, products, and discounts</p>
            </div>
            <div className="flex">
              <input 
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-r text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Artisan Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;