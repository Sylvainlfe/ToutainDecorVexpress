import React, { useState, useContext, useEffect } from "react";
import DashboardProject from "../components/DashboardProject";
import DashboardModal from "../components/DashboardModal";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { deleteProject, fetchProjects } from "../services/api.service";
import { useFetcher } from "react-router-dom";
import { useRef } from "react";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    thumbnail_url: null,
    photos_url: [],
  });
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const fetcher = useFetcher();
  
  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject(projectId);
      await refreshProjects();
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la suppression du projet:", error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

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

  const refreshProjects = async () => {
    const fetchedProjects = await fetchProjects();
    setProjects(fetchedProjects);
  };

  useEffect(() => {
    refreshProjects();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "thumbnail_url") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (name === "photos_url") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(files),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "photos_url") {
        formData[key].forEach((file) =>
          formDataToSend.append("photos_url", file)
        );
      } else if (key === "thumbnail_url") {
        formDataToSend.append("thumbnail_url", formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Assurez-vous que le titre est inclus et non vide
    if (
      !formDataToSend.get("title") ||
      formDataToSend.get("title").trim() === ""
    ) {
      alert("Le titre du projet ne peut pas être vide");
      return;
    }

    if (editingProject) {
      fetcher.submit(formDataToSend, {
        method: "PUT",
        action: `/dashboard/${editingProject.id}`,
        encType: "multipart/form-data",
      });
    } else {
      fetcher.submit(formDataToSend, {
        method: "POST",
        action: "/dashboard",
        encType: "multipart/form-data",
      });
    }
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      console.log("Réponse du serveur:", fetcher.data);
      if (fetcher.data.ok) {
        console.log("Projet mis à jour avec succès:", fetcher.data.message);
        handleCloseModal();
        refreshProjects();
      } else {
        console.error(
          "Erreur lors de la mise à jour du projet:",
          fetcher.data.error
        );
      }
    }
  }, [fetcher]);

  useEffect(() => {
    const dialogElement = modalRef.current;
    if (isModalOpen) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [isModalOpen]);

  const handleBackdropClick = (e) => {
    const dialogDimensions = modalRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title,
        location: editingProject.location,
        description: editingProject.description,
        thumbnail_url: null,
        photos_url: [],
      });
    } else {
      setFormData({
        title: "",
        location: "",
        description: "",
        thumbnail_url: null,
        photos_url: [],
      });
    }
  }, [editingProject]);

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
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        formData={formData}
        modalRef={modalRef}
        handleBackdropClick={handleBackdropClick}
      />
    </main>
  );
}

export default Dashboard;
