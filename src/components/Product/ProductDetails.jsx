import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API or dummy data
    const fetchProduct = async () => {
      const data = {
        id,
        name: "Handwoven Silk Scarf",
        price: "50 USD",
        image: "/product1.jpg",
        description: "A beautifully crafted silk scarf made by artisans from Assam.",
        artisan: "Rohit Das",
        location: "Assam, India",
      };
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-2">{product.description}</p>
          <p className="text-gray-800 font-semibold mt-4">Price: {product.price}</p>
          <p className="text-gray-500 mt-2">Artisan: {product.artisan} ({product.location})</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;