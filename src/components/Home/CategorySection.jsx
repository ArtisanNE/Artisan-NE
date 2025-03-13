

import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Weaving',
      image: '/images/weaving.jpg',
      description: 'Traditional handwoven textiles and fabrics'
    },
    {
      id: 2,
      name: 'Pottery',
      image: '/images/pottery.jpg',
      description: 'Handcrafted ceramic art and functional pottery'
    },
    {
      id: 3,
      name: 'Bamboo Crafts',
      image: '/images/bamboo.jpg',
      description: 'Sustainable bamboo products and decorative items'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Explore By Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                  View Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;