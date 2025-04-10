import React, { useContext, useState, useEffect } from "react";
import { context } from "../context/ContextAPI";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { cars, wishlist, wishlistHandle } = useContext(context);
  const [currentpage, setCurrentPage] = useState(1);
  const [input, setInput] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  const pageItems = 10;
  const lastIndex = currentpage * pageItems;
  const firstIndex = lastIndex - pageItems;
  const sliceCars = filteredCars.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredCars.length / pageItems);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const searchClick = () => {
    const result = cars.filter(
      (item) =>
        item.brand.toLowerCase().includes(input.toLowerCase()) ||
        item.fuelType.toLowerCase().includes(input.toLowerCase()) ||
        item.priceRange.toLowerCase().includes(input.toLowerCase()) ||
        String(item.seatingCapacity).toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCars(result);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (input.trim() === "") {
      setFilteredCars(cars);
    }
  }, [input, cars]);

  return (
    <>
      <div className="flex gap-5 justify-center mt-6 mb-6">
        <input
          className="p-2 border border-gray-300 rounded-md w-1/2"
          type="text"
          value={input}
          placeholder="Search by brand, fuel, price or seats"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchClick()}
        />
        <button
          onClick={searchClick}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Search
        </button>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {sliceCars.map((car) => {
          const isInWishlist = wishlist.some((item) => item.id === car.id);
          return (
            <div
              key={car.id}
              className="bg-amber-50 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 relative"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  wishlistHandle(car);
                }}
                className="absolute top-3 right-3 text-5xl z-10"
              >
                {isInWishlist ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <CiHeart className="text-black" />
                )}
              </button>
              <Link to={`/cars/${car.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={car.image}
                  alt={car.brand}
                />
                <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">
                  {car.brand}
                </h2>
                <div className="flex md:flex-row flex-col justify-evenly p-5 items-center">
                  <p className="text-gray-700 font-bold">
                    Price - {car.priceRange}
                  </p>
                  <p className="text-gray-700 font-bold">
                    Fuel - {car.fuelType}
                  </p>
                  <p className="text-gray-700 font-bold">
                    Seats - {car.seatingCapacity}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-3 my-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <div
            key={number}
            onClick={() => handleClick(number)}
            className={`px-4 py-2 rounded cursor-pointer ${
              currentpage === number
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black hover:bg-red-300"
            }`}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
