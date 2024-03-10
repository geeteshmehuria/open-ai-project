import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import JokeGenerator from "../pages/JokeGenerator";
import { PrivateRoutes } from "./PrivateRoutes";

const AllRouters = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<JokeGenerator />} />
      </Route>
    </Routes>
  );
};

export default AllRouters;
