import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-3xl font-bold text-center text-red-500 mb-6">
        Discover Your Perfect Ride with Car Finder
      </h3>
      <p className="text-lg text-gray-700 mb-6">
        Car Finder is your ultimate companion in discovering the perfect car tailored to your needs and preferences.
        Whether you're looking for a budget-friendly ride, a luxury sedan, or an eco-friendly electric vehicle,
        Car Finder makes the search seamless and efficient.
      </p>
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">✨ Features</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Smart Search:</span> Find cars by brand, fuel type, price range, or seating capacity.
        </li>
        <li>
          <span className="font-semibold">Wishlist:</span> Save your favorite cars and access them anytime.
        </li>
        <li>
          <span className="font-semibold">User-Friendly UI:</span> Clean and intuitive interface for a smooth browsing experience.
        </li>
        <li>
          <span className="font-semibold">Responsive Design:</span> Optimized for all devices — mobile, tablet, and desktop.
        </li>
      </ul>
    </div>
  );
};

export default About;
