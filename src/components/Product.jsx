import { Link } from "react-router-dom";

function Product({ id, title, thumbnail }) {
  return (
    <div className="card bg-base-100 shadow-md p-4   w-2/3 h-2/5 mb-4">
      <img src={thumbnail} alt={title} className="rounded-md mb-2" />
      <h3 className="text-lg font-bold">{title}</h3>
      <Link to={`/product/${id}`} className="btn btn-secondary mt-2">
        Read More...
      </Link>
    </div>
  );
}

export default Product;
