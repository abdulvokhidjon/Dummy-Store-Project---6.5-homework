import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-9xl font-extrabold text-gray-400 tracking-widest">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className=" btn btn-circle bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default NotFound;
