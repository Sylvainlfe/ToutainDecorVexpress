import React, { useState, useContext, useEffect } from "react";
import DashboardProject from "../components/DashboardProject";
import DashboardModal from "../components/DashboardModal";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { deleteProject, fetchProjects } from "../services/api.service";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

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

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  useEffect(() => {
    refreshProjects();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setEditingProject(null);
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
        handleEditProject={handleEditProject}
      />
      <DashboardModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        refreshProjects={refreshProjects}
        editingProject={editingProject}
      />
    </main>
  );
}

export default Dashboard;
