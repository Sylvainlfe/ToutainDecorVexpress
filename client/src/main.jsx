import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { sendContactData } from "./services/api.service.js"
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx"
import ProjectsPages from "./pages/ProjectsPage.jsx"
import Dashboard from "./pages/Dashboard.jsx"

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
          return sendContactData("api/contact", data);
        }
      },
      {
        path: "/ProjectsPage",
        element: <ProjectsPages />,
      },
      {
        path: "/admin",
        element: <Dashboard />,
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
