import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoutes = () => {
  const auth = useSelector((state) => state.auth.auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
