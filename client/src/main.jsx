import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { sendData } from "./services/api.service.js"
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx"
import ProjectsPages from "./pages/ProjectsPage.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

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
          if (formData.status === 201) return redirect("/login");
          return sendData("api/user", data);
        }
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
