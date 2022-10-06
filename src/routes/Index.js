import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import View from "../features/View";
import Nav from "../pages/Nav";
import AddAdmin from "../features/AddAdmin";

function Index() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
