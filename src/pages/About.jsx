function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-center">
        Welcome to Dummy Store. We offer a wide range of high-quality products
        at unbeatable prices. Our mission is to provide the best shopping
        experience for our customers.
      </p>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
