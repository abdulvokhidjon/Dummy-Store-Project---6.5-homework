import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-200 p-4 mt-8 text-center">
      <div className="container mx-auto">
        <p>
          &copy; 2024 Dummy Store. All rights reserved.
          <br />
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
