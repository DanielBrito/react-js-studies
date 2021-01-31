import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile/:id" element={<Profile />}>
        <Route path="/purchases" element={<h1>Compras</h1>} />
        <Route path="/password" element={<h1>Alterar senha</h1>} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
