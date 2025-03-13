// Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'creditCard',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  // Cart summary (mock data)
  const cart = {
    items: [
      { id: 1, name: "Handwoven Bamboo Basket", price: 45.99, quantity: 1, artisan: "Maya Crafts" },
      { id: 2, name: "Blue Pottery Vase", price: 78.50, quantity: 2, artisan: "Ceramic Creations" }
    ],
    subtotal: 202.99,
    shipping: 12.99,
    tax: 14.21
  };

  const total = cart.subtotal + cart.shipping + cart.tax;

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the order
    console.log('Order submitted:', { formData, cart });
    
    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000);
    navigate(`/order-summary/${orderId}`, {
      state: {
        order: {
          id: orderId,
          date: new Date().toISOString(),
          items: cart.items,
          subtotal: cart.subtotal,
          shipping: cart.shipping,
          tax: cart.tax,
          total: total,
          shippingAddress: formData,
          paymentMethod: formData.paymentMethod === 'creditCard' ? 'Credit Card' : 'PayPal'
        }
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" className="input-box" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" className="input-box" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" className="input-box" onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Phone" className="input-box" onChange={handleChange} />
              <input type="text" name="address" placeholder="Street Address" className="input-box" onChange={handleChange} required />
              <input type="text" name="city" placeholder="City" className="input-box" onChange={handleChange} required />
              <input type="text" name="state" placeholder="State" className="input-box" onChange={handleChange} required />
              <input type="text" name="zipCode" placeholder="Zip Code" className="input-box" onChange={handleChange} required />
            </div>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Payment Method</h2>
            <div className="flex gap-4">
              <label className="cursor-pointer flex items-center">
                <input type="radio" name="paymentMethod" value="creditCard" checked={formData.paymentMethod === 'creditCard'} onChange={handleChange} />
                <span className="ml-2">Credit Card</span>
              </label>
              <label className="cursor-pointer flex items-center">
                <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleChange} />
                <span className="ml-2">PayPal</span>
              </label>
            </div>
            
            {formData.paymentMethod === 'creditCard' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input type="text" name="cardName" placeholder="Name on Card" className="input-box" onChange={handleChange} required />
                <input type="text" name="cardNumber" placeholder="Card Number" className="input-box" onChange={handleChange} required />
                <input type="text" name="cardExpiry" placeholder="MM/YY" className="input-box" onChange={handleChange} required />
                <input type="text" name="cardCvv" placeholder="CVV" className="input-box" onChange={handleChange} required />
              </div>
            )}
            
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg mt-6 transition duration-300 ease-in-out transform hover:scale-105">Place Order</button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.name} ({item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>${cart.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>${cart.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
