import React from "react";
import { Outlet } from "react-router-dom";
import HomeAdmin from "./HomeAdmin";

const Admins = () => {
  return (
    <div
      className="w-100 h-100 d-flex"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <HomeAdmin />
      <div className="w-100 h-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Admins;
