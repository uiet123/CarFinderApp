// Wishlist.jsx
import React, { useContext } from "react";
import { context } from "../context/ContextAPI";

const Wishlist = () => {
  const { wishlist } = useContext(context);

  return (
    <div className="p-6">
      <h1 className="text-2xl flex justify-center font-bold mb-4">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map((car) => (
            <div key={car.id} className="bg-white p-4 rounded shadow">
              <img src={car.image} alt={car.brand} className="w-full h-48 object-cover"/>
              <h2 className="text-xl font-bold mt-2">{car.brand}</h2>
              <p>{car.model}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
