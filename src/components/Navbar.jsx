import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-base-200 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">
          <Link to="/">Dummy Store</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
          <Link to="/about" className="btn btn-primary">
            About
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
