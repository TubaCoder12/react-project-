// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./component/Home/Home";
import SignIn from "./component/SignIn/SignIn";
import FavouritesItems from "./component/FavouriteItems/FavouriteItems";
import SelectedCart from "./component/SelectedCart/SelectedCart";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./component/Checkout/Checkout";

const App = () => {
  return (
    <Router>
      {/* ✅ Top-level ToastContainer */}
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/FavouritesItems" element={<FavouritesItems />} />
          <Route path="/cart" element={<SelectedCart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
