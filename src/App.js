import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./Cart";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;