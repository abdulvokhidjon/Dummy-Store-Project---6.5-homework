import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-secondary to-accent-2 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        About Dummy Store
      </h1>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <img
          src="https://dummyimage.com/250x250/000/fff&text=Logo"
          alt="Dummy Store Logo"
          className="w-48 h-48 rounded-full mb-4"
        />
        <p className="text-lg text-white mb-4 text-center">
          Our story is about [Tell a brief story about your store]. We are
          passionate about [Highlight the store's mission or values].
        </p>
        <ul className="list-disc text-lg text-white mb-4 text-center">
          <li>Value 1</li>
          <li>Value 2</li>
          <li>Value 3</li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            className="btn btn-info"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
