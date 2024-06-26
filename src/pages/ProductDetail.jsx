// Updated ProductDetail component for a compact and beautiful display
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {product ? (
        <>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-lg mb-4">${product.price}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
