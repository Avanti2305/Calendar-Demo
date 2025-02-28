import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h1 className="text-primary fw-bold mb-4">Weekly Calendar</h1>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm rounded p-3 mb-4 w-50 text-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/SignIn" className="nav-link text-primary fw-semibold">
              Sign In
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/SignUp" className="nav-link text-primary fw-semibold">
              Sign Up
            </Link>
          </li> */}
        </ul>
      </nav>

      {/* Content Wrapper */}
      <div className="card shadow-lg p-4 w-50">
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Home;
