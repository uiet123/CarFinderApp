import React, { createContext, useEffect, useState } from "react";
export const context = createContext();

const ContextAPI = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse wishlist", err);
      return [];
    }
  });
  

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  // ✅ Fetch car data
  async function getCar() {
    try {
      const response = await fetch("./cars.json");
      const data = await response.json();
      setCars(data);
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCar();
  }, []);

  // ✅ Toggle wishlist item
  const wishlistHandle = (car) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === car.id);

    if (isAlreadyInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== car.id);
      setWishlist(updatedWishlist);
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  return (
    <context.Provider value={{ cars, loading, wishlist, wishlistHandle }}>
      {children}
    </context.Provider>
  );
};

export default ContextAPI;
