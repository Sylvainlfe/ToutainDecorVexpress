import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { fetchProjectById, fetchProjects, sendData, sendProjectData, updateProject } from "./services/api.service.js";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProjectsPages from "./pages/ProjectsPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext";
import ViewingPage from "./pages/ViewingPage.jsx";
import ProtectedDashboardRoute from "./components/ProtectedDashboardRoute.jsx";
import NewsProjectsSection from "./components/NewsProjectsSection.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"/#NewsProjectsSection",
        element:<NewsProjectsSection />
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
        loader: async () => {
          const projects = await fetchProjects();
          return projects;
        }
      },
      {
        path: "/dashboard",
        element: <ProtectedDashboardRoute><Dashboard /></ProtectedDashboardRoute>,
        loader: async () => {
          const token = localStorage.getItem('token');
          if (!token) {
            return redirect('/LoginPage');
          }
          const projects = await fetchProjects();
          return { projects };
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const response = await sendProjectData("api/project", formData);
          console.log("Réponse du serveur:", response);
          return response;
        }
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
          if (response.data && response.data.token) {
            localStorage.setItem('token', response.data.token);
            return redirect("/dashboard");
          }
          return response;
        }
      },
      {
        path: "/viewingPage/:id",
        element: <ViewingPage />,
        loader: async ({ params }) => {
          const project = await fetchProjectById(params.id);
          return  project;
        }
      },
      {
        path: "/dashboard/:id",
        action: async ({ params, request }) => {
          const formData = await request.formData();
          console.log("FormData content:", Object.fromEntries(formData));
          const response = await updateProject(params.id, formData);
          console.log("Réponse du serveur:", response);
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