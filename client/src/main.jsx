import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { sendData } from "./services/api.service.js";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsPages from "./pages/ProjectsPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/ContactPage",
        element: <ContactPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          return sendData("api/contact", data);
        }
      },
      {
        path: "/ProjectsPage",
        element: <ProjectsPages />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          const response = await sendData("api/user", data);
          if (response.ok) return redirect("/LoginPage");
          return response;
        }
      },
      {
        path: "/LoginPage",
        element: <LoginPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          const response = await sendData("api/login", data);
          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            return redirect("/dashboard");
          }
          return response;
        }
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);