import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarDetails from "./components/CarDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars/:id" element={<CarDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
