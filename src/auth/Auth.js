import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../global";

export const PrivateRoute = () => {
  const { token } = getUser();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  const { token } = getUser();

  return !token ? <Outlet /> : <Navigate to="/" />;
};
