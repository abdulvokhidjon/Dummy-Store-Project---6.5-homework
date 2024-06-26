// Updated Home component with colorful design and enhanced carousel
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary to-accent-1">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Welcome to Dummy Store
        </h1>
        <Carousel products={products ? products.slice(0, 6) : []} />
        <h2 className="text-3xl font-bold text-center text-white mt-8 mb-4">
          Featured Products
        </h2>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Home;
