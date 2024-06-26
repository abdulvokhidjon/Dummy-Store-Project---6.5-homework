import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

function ProductList({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
            />
          </div>
        ))
      ) : (
        <div>No products available.</div>
      )}
    </Slider>
  );
}

export default ProductList;
