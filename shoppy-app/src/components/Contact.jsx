import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
        }}
      >
        <div className="bg-gray-500 bg-opacity-50 p-4 rounded-md text-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-lg text-gray-300 mt-2">
            We’d love to hear from you! Drop us a message.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-4 md:px-16 lg:px-24">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have questions? Fill out the form below, and we’ll get back to you
            shortly.
          </p>
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
