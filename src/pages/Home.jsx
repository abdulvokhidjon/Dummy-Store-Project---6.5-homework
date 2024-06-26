import React, { useEffect, useState } from "react";
import ProductCarousel from "../components/ProductCarousel";

function Home() {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  let categoryIndex = 0;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        const grouped = data.products.reduce((acc, product) => {
          acc[product.category] = acc[product.category] || [];
          acc[product.category].push(product);
          return acc;
        }, {});
        setGroupedProducts(grouped);
        const categoryList = Object.keys(grouped);
        setCategories(categoryList);
        setCurrentCategory(categoryList[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const interval = setInterval(() => {
        categoryIndex = (categoryIndex + 1) % categories.length;
        setCurrentCategory(categories[categoryIndex]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [categories]);

  return (
    <div className="bg-gradient-to-b from-primary to-accent-1">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome to Dummy Store
        </h1>
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Featured {currentCategory}
        </h2>
        {groupedProducts[currentCategory] ? (
          <ProductCarousel products={groupedProducts[currentCategory]} />
        ) : (
          <p className="text-center text-white">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
