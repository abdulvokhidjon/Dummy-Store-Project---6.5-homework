import React from "react";

function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">
        Oops! The page you're looking for does not exist. Please check the URL
        or go back to the
        <a href="/" className="text-primary underline">
          {" "}
          homepage
        </a>
        .
      </p>
    </div>
  );
}

export default NotFound;
