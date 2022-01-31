import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/HomePage/homePage.component.jsx";
import ShopPage from "./pages/shopPage/shopPage.component.jsx";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
