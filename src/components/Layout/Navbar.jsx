import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white bg-opacity-95 py-4'
    }`}>
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-start items-center">
            <img 
              src="/logo.png" 
              alt="Handcraft Marketplace" 
              className="h-10 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/40x40?text=HC";
              }}
            />
            <span className="ml-2 text-3xl font-bold flex flex-start text-indigo-700">CraftBazaar</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-m font-medium ${isActive('/') ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
              Home
            </Link>
            <Link to="/shop" className={`text-m font-medium ${isActive('/shop') ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
              Shop
            </Link>
            <Link to="/artisans" className={`text-m font-medium ${isActive('/artisans') ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
              Artisans
            </Link>
            <Link to="/about" className={`text-m font-medium ${isActive('/about') ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
              About
            </Link>
          </div>
          
          {/* Search, Cart, and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-full text-m border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-40 lg:w-56"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            </div>
            
            {/* Cart */}
            <Link to="/cart" className="relative p-1 rounded-full text-gray-500 hover:text-indigo-600">
              <FaShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Profile or Login */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
                  <FaUserCircle className="h-6 w-6 mr-1" />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</Link>
                  <div className="border-t border-gray-100"></div>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-m font-medium text-indigo-600 hover:text-indigo-800">
                Login / Register
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/shop') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Shop
          </Link>
          <Link 
            to="/artisans" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/artisans') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Artisans
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            About
          </Link>
          
          <div className="border-t border-gray-200 pt-4 pb-2">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search for products or artisans..."
                className="w-full pl-8 pr-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            </div>
            
            <Link 
              to="/cart" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              <FaShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cartCount > 0 && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FaUserCircle className="h-5 w-5 mr-2" />
                  Dashboard
                </Link>
                <button 
                  className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block text-center mt-2 w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block text-center mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;