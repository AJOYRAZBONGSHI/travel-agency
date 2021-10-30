import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const {user,logOut}= useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
        <div className="container-fluid">
          <img
            className="ms-xl-5"
            src="https://i.ibb.co/xFcq3Pp/Pngtree-an-airplane-airport-pilot-flight-3823863-1.png"
            alt=""
          />
          <span className="ms-xl-3 fs-4 fw-bold text-white">Travel Agency</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="ms-auto">
              <NavLink
                className="text-decoration-none text-white fw-bold mx-3 fs-5"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none text-white fw-bold mx-3 fs-5"
                to="/servicesbox"
              >
                Services
              </NavLink>
              <NavLink
                className="text-decoration-none text-white fw-bold mx-3 fs-5"
                to="/add-place"
              >
                Add Service
              </NavLink>
              <NavLink
                className="text-decoration-none text-white fw-bold mx-3 fs-5"
                to="/contract"
              >
                Contract us
              </NavLink>
              {user.email ? (
                <button className="btn btn-danger" onClick={logOut}>
                  Logout
                </button>
              ) : (
                <NavLink
                  className="text-decoration-none text-white fw-bold mx-3 fs-5"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              <span className="text-white ms-2">{user?.displayName}</span>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
