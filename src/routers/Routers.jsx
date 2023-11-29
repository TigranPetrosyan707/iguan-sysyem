import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import Layout from "../components/layout";
import Home from "../pages/home";
import AdminPanel from "../pages/admin";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to="/login" />;

  return children;
};

const AdminPanelRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser || currentUser.name !== "Tigran")
    return <Navigate to="/login" />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin-panel",
        element: (
          <AdminPanelRoute>
            <AdminPanel />
          </AdminPanelRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
