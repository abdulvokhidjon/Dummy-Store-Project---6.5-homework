import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto p-4">
      {" "}
      <h1 className="text-3xl font-bold mb-4 text-center">
        404 - Not Found
      </h1>{" "}
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-4 block mx-auto">
        Go to Home
      </Link>{" "}
    </div>
  );
}

export default NotFound;
