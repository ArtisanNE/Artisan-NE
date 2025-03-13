// const testimonials = [
//     { id: 1, name: "satyam", feedback: "Amazing craftsmanship! Highly recommend buying from this platform." },
//     { id: 2, name: "rahul", feedback: "The quality of the handmade products is incredible." },
//   ];
  
//   const Testimonials = () => {
//     return (
//       <section className="py-10 text-center bg-gray-100">
//         <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="p-4 border rounded-lg shadow-lg bg-white">
//               <p className="text-gray-700">"{testimonial.feedback}"</p>
//               <h3 className="text-lg font-semibold mt-2">- {testimonial.name}</h3>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default Testimonials;
  

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: '/images/testimonial1.jpg',
      text: 'I absolutely love the handwoven basket I purchased! The craftsmanship is incredible, and it\'s clear that a lot of care went into making it. It\'s not just a beautiful piece but also supports traditional artisans.', // ✅ Add a comma
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      image: '/images/testimonial2.jpg',
      text: 'The ceramic vase set exceeded my expectations. Each piece is unique with its own character, and the quality is outstanding. I appreciate being able to connect with the artisan through the platform.', // ✅ Add a comma
      rating: 5
    },
    {
      id: 3,
      name: 'Priya Patel',
      location: 'London, UK',
      image: '/images/testimonial3.jpg',
      text: 'I\'ve been looking for authentic handcrafted items for my home, and this platform has been a revelation. The bamboo tea set I ordered is not only beautiful but also sustainable. Great customer service too!', // ✅ Add a comma
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;