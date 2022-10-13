import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../pages/Nav";
import AddAdmin from "../features/admin/AddAdmin";
import Edit from "../features/admin/Edit";
import ViewAdmin from "../features/admin/ViewAdmin";

function Index() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Staff-Management-System" element={<Home />} />
        <Route path="/delete/:id" element={<Home />} />
        <Route path="/view/:id" element={<ViewAdmin />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
