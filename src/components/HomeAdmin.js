import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/action";
import ManagerPro from "./ManagerPro";

const HomeAdmin = () => {
  const dispatch = useDispatch;
  return (
    <>
      <div
        className="d-flex position-fixed top-0 bottom-0 l-0 flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 200, left: 0 }}
      >
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width={40} height={32}></svg>
          <span className=" side-bar-item fs-2">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto side-bar-ul">
          <li>
            <NavLink
              className="text-white side-bar-item fs-3"
              to={"/admin"}
            >
              <i className="bi bi-person-circle"></i>
              User Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              className="= text-white side-bar-item fs-3"
              to={"/admin/managerpro"}
            >
              <i className="bi bi-pencil-square"></i>
              Product Manager
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <NavLink
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong className="fs-4">menu</strong>
          </NavLink>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a
                className="dropdown-item fs-4"
                href="/"
                onClick={() => dispatch(logout)}
              >
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
