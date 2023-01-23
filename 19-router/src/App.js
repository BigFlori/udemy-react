import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/welcome/new-user" />} />
          <Route path='/welcome/*' element={<Welcome />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
