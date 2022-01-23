import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "../components/sobre-nosotros/AboutUs";
// import Footer from "../components/footer/Footer";
import Faqs from "../components/faqs/faqs";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/nosotras" element={<AboutUs />} /> */}
        <Route exact path="/FAQs" element={<Faqs />} />
        {/* <Route exact path="*" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
