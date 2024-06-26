import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track mounted state

    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }

        const data = await response.json();
        if (isMounted) {
          // Update state only if component is still mounted
          setProduct(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProduct();

    // Cleanup function to prevent state updates on unmounted components
    return () => {
      isMounted = false;
    };
  }, [id]); // Only re-fetch when 'id' changes

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

  if (!product) {
    return (
      <div className="container mx-auto p-4 mt-10 text-center text-red-500">
        Product not found!
      </div>
    );
  }

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        <div className="shrink-0 w-full md:w-1/2 lg:w-1/3">
          <Carousel
            showThumbs={true}
            autoPlay={true}
            infiniteLoop={true}
            dynamicHeight={true}
            // Add more accessibility and user experience features:
            showStatus={false} // Hide image counter
            showIndicators={true} // Show navigation dots
            useKeyboardArrows={true} // Allow keyboard navigation
            emulateTouch={true} // Improve touch experience
          >
            {(product.images || [product.thumbnail]).map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${product.title} - Image ${index + 1}`}
                  style={{ height: 400, width: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="card-body w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg mb-4">{product.description}</p>

          <div className="mb-4">
            <span className="text-lg line-through opacity-50 mr-4">
              Old Price: ${product.price}
            </span>
            <span className="text-4xl bg-yellow-400 text-white py-1 px-3 rounded-full">
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
            {/* Use useNavigate for better navigation */}
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline px-10 text-3xl"
            >
              Back to the Store 🧺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
