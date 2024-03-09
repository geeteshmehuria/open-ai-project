import React from "react";
import { Route, Router } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import JokeGenerator from "../pages/JokeGenerator";

const AllRouters = () => {
  return (
    <>
      <Router>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jokes" element={<JokeGenerator />} />
      </Router>
    </>
  );
};

export default AllRouters;
