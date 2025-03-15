import React, { useState, useEffect } from 'react';
import ProductListing from '../components/Product/ProductListing';

const Shop = () => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [sortBy, setSortBy] = useState('featured');


  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'weaving', name: 'Weaving' },
    { id: 'pottery', name: 'Pottery' },
    { id: 'bamboo', name: 'Bamboo Crafts' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'jewelry', name: 'Jewelry' }
  ];

  // Sample products data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const sampleProducts = [
        {
          id: 1,
          name: 'Hand-woven Basket',
          image: '/images/basket.jpg',
          price: 45.99,
          artisan: 'Maya Crafts',
          category: 'weaving',
          rating: 4.8,
          featured: true
        },
        {
          id: 2,
          name: 'Ceramic Vase Set',
          image: '/images/vase.jpg',
          price: 89.99,
          artisan: 'Pottery Masters',
          category: 'pottery',
          rating: 4.7,
          featured: true
        },
        {
          id: 3,
          name: 'Bamboo Tea Set',
          image: '/images/tea-set.jpg',
          price: 65.50,
          artisan: 'Green Bamboo',
          category: 'bamboo',
          rating: 4.5,
          featured: false
        },
        {
          id: 4,
          name: 'Handloom Scarf',
          image: '/images/scarf.jpg',
          price: 37.99,
          artisan: 'Textile Traditions',
          category: 'textiles',
          rating: 4.9,
          featured: true
        },
        {
          id: 5,
          name: 'Ceramic Dinner Plates (Set of 4)',
          image: '/images/plates.jpg',
          price: 120.00,
          artisan: 'Pottery Masters',
          category: 'pottery',
          rating: 4.6,
          featured: false
        },
        {
          id: 6,
          name: 'Bamboo Cutlery Set',
          image: '/images/cutlery.jpg',
          price: 28.50,
          artisan: 'Green Bamboo',
          category: 'bamboo',
          rating: 4.3,
          featured: false
        },
        {
          id: 7,
          name: 'Handcrafted Silver Earrings',
          image: '/images/earrings.jpg',
          price: 75.00,
          artisan: 'Silver Artisans',
          category: 'jewelry',
          rating: 4.8,
          featured: true
        },
        {
          id: 8,
          name: 'Woven Wall Hanging',
          image: '/images/wall-hanging.jpg',
          price: 59.99,
          artisan: 'Maya Crafts',
          category: 'weaving',
          rating: 4.7,
          featured: false
        },
        {
          id: 9,
          name: 'Bamboo Lampshade',
          image: '/images/lampshade.jpg',
          price: 42.00,
          artisan: 'Green Bamboo',
          category: 'bamboo',
          rating: 4.4,
          featured: false
        },
        {
          id: 10,
          name: 'Hand-painted Ceramic Mug',
          image: '/images/mug.jpg',
          price: 24.99,
          artisan: 'Pottery Masters',
          category: 'pottery',
          rating: 4.5,
          featured: false
        },
        {
          id: 11,
          name: 'Woven Table Runner',
          image: '/images/table-runner.jpg',
          price: 32.50,
          artisan: 'Textile Traditions',
          category: 'textiles',
          rating: 4.6,
          featured: false
        },
        {
          id: 12,
          name: 'Beaded Necklace',
          image: '/images/necklace.jpg',
          price: 85.00,
          artisan: 'Silver Artisans',
          category: 'jewelry',
          rating: 4.9,
          featured: true
        }
      ];
      
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy, products]);

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  return (
    
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop Our Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover unique handcrafted treasures made by skilled artisans from around the world, each with its own story and cultural heritage.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                      />
                      <label htmlFor={category.id} className="ml-2 text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">${priceRange.min}</span>
                  <span className="text-sm text-gray-600">${priceRange.max}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="min" className="block text-sm text-gray-600 mb-1">Min ($)</label>
                    <input
                      type="number"
                      id="min"
                      name="min"
                      value={priceRange.min}
                      onChange={handlePriceChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="max" className="block text-sm text-gray-600 mb-1">Max ($)</label>
                    <input
                      type="number"
                      id="max"
                      name="max"
                      value={priceRange.max}
                      onChange={handlePriceChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Apply Filters Button */}
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="w-full lg:w-3/4">
            {/* Sorting and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
              <p className="text-gray-600 mb-3 sm:mb-0">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-600 mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {/* Product Grid */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
              </div>
            ) : (
              <ProductListing products={filteredProducts} />
            )}
            
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center">
                <button className="px-3 py-1 border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 text-amber-600 font-medium bg-amber-50">
                  1
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 text-gray-600 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border-t border-b border-gray-300 text-gray-600 hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;