import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 mt-10 text-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 mt-10 text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        <figure className="shrink-0">
          <img
            className="h-[300px] w-full md:h-[400px] md:w-[400px] object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </figure>
        <div className="card-body w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg mb-4">{product.description}</p>

          {/* Price Section */}
          <div className="mb-4">
            <span className="text-lg line-through opacity-50 mr-4">
              Old Price: ${product.price}
            </span>
            <span className="text-lg bg-red-400 text-white py-1 px-3 rounded-full">
              Sale: {product.discountPercentage}%
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start mb-4">
            <span className="text-lg mr-4">
              New Price: 💰 ${discountedPrice}
            </span>
            <span className="text-lg flex items-center">
              <i className="fa-solid fa-star text-yellow-300 mr-2"></i>
              {product.rating}
            </span>
          </div>

          <div className="card-actions justify-center">
            <Link to="/products" className="btn btn-outline px-10 text-lg">
              Back to Store 🧺
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
