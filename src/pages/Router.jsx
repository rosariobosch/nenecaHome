import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../components/about-us/AboutUs";
import ProductDetailContainer from "../components/producto/ficha-de-producto/ProductDetailContainer";
import Cart from "../components/cart/Cart";
import Login from "../components/admin/login/Login";
import Home from "../components/home/Home";
import Faqs from "../components/faqs/faqs";
import Contact from "../components/contact/Contact";
import OrdersContainer from "../components/orders/OrdersContainer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* FALTA NOT FOUND */}
        <Route exact path="/nosotras" element={<AboutUs />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
        <Route exact path="/cart" component={Cart} />
        {/* <Route path="*" element={<Footer />} /> */}
        <Route exact path="/pedidos" element={<OrdersContainer />} />
        {/* <Route exact path="/nosotras" element={<AboutUs />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/FAQs" element={<Faqs />} />
        <Route exact path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
