import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../components/about-us/AboutUs";
import Footer from "../components/footer/Footer";
import ProductDetailContainer from "../components/producto/ficha-de-producto/ProductDetailContainer";
import Cart from "../components/cart/Cart";
// import AboutUs from "../components/sobre-nosotros/AboutUs";
// import Footer from "../components/footer/Footer";
import Login from "../components/admin/login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/nosotras" element={<AboutUs />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
        <Route exact path="/cart" component={Cart} />
        <Route path="*" element={<Footer />} />
        {/* <Route exact path="/nosotras" element={<AboutUs />} /> */}
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="*" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
