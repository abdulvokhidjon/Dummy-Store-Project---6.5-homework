// About component with unique design and store information
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          About Dummy Store
        </h1>
        <p className="text-lg mb-4">
          Welcome to Dummy Store, your one-stop destination for high-quality
          products.
        </p>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque libero dui, et sollicitudin ligula posuere at.
        </p>
        <p className="text-lg mb-4">
          Follow us on social media:
          <br />
          <a href="#" className="text-primary hover:underline">
            Facebook
          </a>{" "}
          |
          <a href="#" className="text-primary hover:underline">
            {" "}
            Twitter
          </a>{" "}
          |
          <a href="#" className="text-primary hover:underline">
            {" "}
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
