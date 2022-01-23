import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../components/about-us/AboutUs";
import Footer from "../components/footer/Footer";
import ProductDetailContainer from "../components/producto/ficha-de-producto/ProductDetailContainer";
import Cart from "../components/cart/Cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/nosotras" element={<AboutUs />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
        <Route exact path="/cart" component={Cart} />
        <Route path="*" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
