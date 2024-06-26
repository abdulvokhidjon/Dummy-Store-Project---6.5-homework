import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto p-4 mt-10 text-center">Loading...</div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {product.title}
          </h1>
        </div>
        <div className="md:col-span-2">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={product.title}
                  className="w-400 h-450 rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="px-4 mt-4">
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-bold mt-4">Price: ${product.price}</p>
          {/* Add button or other interactive elements for user interaction */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
