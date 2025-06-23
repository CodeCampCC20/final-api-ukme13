import { Routes, Route } from "react-router";
import Login from "../pages/auth/Login";
import Layout from "../layouts/layout";
import Register from "../pages/auth/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
