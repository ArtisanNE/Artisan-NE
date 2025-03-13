import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';

const FeaturedProducts = () => {
  // This would come from an API in a real application
  const featuredProducts = [
    {
      id: 1,
      name: 'Hand-thrown Ceramic Bowl',
      price: 45.99,
      artisan: 'Maria Gonzalez',
      artisanId: 12,
      image: '/images/product-ceramic-bowl.jpg',
      rating: 4.8,
      reviewCount: 32
    },
    {
      id: 2,
      name: 'Woven Wall Hanging',
      price: 89.99,
      artisan: 'Leila Johnson',
      artisanId: 5,
      image: '/images/product-wall-hanging.jpg',
      rating: 4.9,
      reviewCount: 17
    },
    {
      id: 3,
      name: 'Handcrafted Wooden Spoons (Set of 3)',
      price: 35.50,
      artisan: 'Thomas Wilson',
      artisanId: 8,
      image: '/images/product-wooden-spoons.jpg',
      rating: 4.7,
      reviewCount: 24
    },
    {
      id: 4,
      name: 'Hand-forged Copper Earrings',
      price: 29.99,
      artisan: 'Amara Patel',
      artisanId: 3,
      image: '/images/product-copper-earrings.jpg',
      rating: 5.0,
      reviewCount: 11
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked treasures from our talented artisans</p>
          </div>
          <Link 
            to="/shop" 
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
          >
            View all products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;