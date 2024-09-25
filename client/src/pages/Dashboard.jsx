import React, { useState, useContext, useEffect } from "react";
import DashboardProject from "../components/DashboardProject";
import DashboardModal from "../components/DashboardModal";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { deleteProject, fetchProjects } from "../services/api.service";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const [projects, setProjects] = useState([]);

  const refreshProjects = async () => {
    const fetchedProjects = await fetchProjects();
    setProjects(fetchedProjects);
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      await refreshProjects();
    } catch (error) {
      console.error("Erreur lors de la suppression du projet:", error);
    }
  };

  useEffect(() => {
    refreshProjects();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/LoginPage");
  };

  return (
    <main>
      <DashboardProject
        handleOpenModal={handleOpenModal}
        handleLogout={handleLogout}
        projects={projects}
        handleDeleteProject={handleDeleteProject}
      />
      <DashboardModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        refreshProjects={refreshProjects}
      />
    </main>
  );
}

export default Dashboard;
