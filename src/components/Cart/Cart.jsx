// Cart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  // Sample cart data - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handwoven Bamboo Basket",
      price: 45.99,
      image: "/images/bamboo-basket.jpg",
      quantity: 1,
      artisan: "Maya Crafts"
    },
    {
      id: 2,
      name: "Blue Pottery Vase",
      price: 78.50,
      image: "/images/pottery-vase.jpg",
      quantity: 2,
      artisan: "Ceramic Creations"
    },
    {
      id: 3,
      name: "Hand-painted Silk Scarf",
      price: 34.99,
      image: "/images/silk-scarf.jpg",
      quantity: 1,
      artisan: "Silk Weavers Collective"
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 12.99;
  const taxRate = 0.07; // 7% tax
  
  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);

  // Calculate tax
  const tax = subtotal * taxRate;
  
  // Calculate total
  const total = subtotal + shippingCost + tax;

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      removeItem(itemId);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Calculate total number of items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Your Shopping Cart</h1>
      {cartItems.length > 0 && (
        <h2 className="text-lg text-gray-600 mb-6">{totalItems} {totalItems === 1 ? 'item' : 'items'} from {cartItems.length} {cartItems.length === 1 ? 'artisan' : 'artisans'}</h2>
      )}
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-6">Your cart is empty</p>
          <Link to="/shop" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Product</th>
                    <th className="py-4 hidden sm:table-cell">Price</th>
                    <th className="py-4">Quantity</th>
                    <th className="py-4 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/placeholder.jpg";
                            }}
                          />
                          <div className="ml-4">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-gray-500 text-sm">by {item.artisan}</p>
                            <p className="text-gray-700 sm:hidden">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 hidden sm:table-cell">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-700 p-1"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-4"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="flex justify-between mt-6">
                <Link to="/shop" className="text-yellow-600 hover:text-yellow-700">
                  Continue Shopping
                </Link>
                <button 
                  onClick={() => setCartItems([])}
                  className="text-red-500 hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="border-b pb-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between py-4 font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/checkout" 
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-md font-medium"
                >
                  Proceed to Checkout
                </Link>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">We accept:</p>
                <div className="flex gap-2">
                  <span className="border rounded px-2 py-1">Visa</span>
                  <span className="border rounded px-2 py-1">Mastercard</span>
                  <span className="border rounded px-2 py-1">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;