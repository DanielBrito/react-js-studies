import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile Id = {id}</h1>
      <button onClick={() => navigate("/")}>Painel</button>
      <Outlet />
    </div>
  );
}
