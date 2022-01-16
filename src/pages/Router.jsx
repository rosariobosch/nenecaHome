import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "../components/sobre-nosotros/AboutUs";
// import Footer from "../components/footer/Footer";
import Home from '../components/home/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/nosotras" element={<AboutUs />} /> */}
        {/* <Route exact path="*" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
