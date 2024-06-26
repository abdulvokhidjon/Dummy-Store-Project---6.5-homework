import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        // Display a success message
      } else {
        console.error("Error sending message:", response.statusText);
        // Display an error message
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle network errors
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-accent-3 to-primary min-h-screen flex flex-col items-center bg-opacity-75" // Added transparency
    >
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Contact Us
      </h1>
      <div className="container mx-auto p-4 max-w-md">
        {" "}
        {/* Added max-w-md to make it more compact */}
        <form
          className="bg-white p-8 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary px-8 py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
