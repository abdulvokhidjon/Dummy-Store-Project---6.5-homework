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
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
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
      <h1 className="text-3xl font-bold mb-4 text-center">{product.title}</h1>
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={product.title}
              className="w-full rounded-md"
            />
          </div>
        ))}
      </Slider>
      <div className="mt-4">
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-bold mt-4">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
