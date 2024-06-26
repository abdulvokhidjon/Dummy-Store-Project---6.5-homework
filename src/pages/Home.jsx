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
      .catch((error) => console.error("Error fetching products:", error));
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
    <div className="bg-gradient-to-b from-primary to-accent-1 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome to Dummy Store
        </h1>
        {/* Display categories in separate rows */}
        {categories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Featured {category}
            </h2>
            {groupedProducts[category] ? (
              <ProductCarousel
                products={groupedProducts[category]}
                cardWidth={2/6}
                cardHeight={2/6}
              />
            ) : (
              <p className="text-center text-white">Loading products...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
