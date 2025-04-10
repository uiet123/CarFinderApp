import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../context/ContextAPI';

const CarDetails = () => {
  const { id } = useParams();
  const { cars } = useContext(context);

  const selectedCar = cars.find(car => car.id === parseInt(id));


  if (!selectedCar) return <p className="text-center text-lg mt-10">Car not found.</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded shadow-lg mb-20">
      <img src={selectedCar.image} className="w-full h-64 object-cover rounded mb-6" alt={selectedCar.brand} />
      <h1 className="text-3xl text-gray-800 font-bold mb-4">{selectedCar.brand}</h1>
      <p className="mb-2 text-gray-700"><strong>Price:</strong> {selectedCar.priceRange}</p>
      <p className="mb-2 text-gray-700"><strong>Fuel Type:</strong> {selectedCar.fuelType}</p>
      <p className="mb-2 text-gray-700"><strong>Seating Capacity:</strong> {selectedCar.seatingCapacity}</p>
    </div>
  );
};

export default CarDetails;
