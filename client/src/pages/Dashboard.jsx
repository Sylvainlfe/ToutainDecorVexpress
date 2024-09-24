import React, { useState, useContext } from "react";
import DashboardProject from "../components/DashboardProject";
import DashboardModal from "../components/DashboardModal";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleLogout = () => {
      logout();
      navigate('/LoginPage');
    };
  
    return (
      <main>
        <DashboardProject handleOpenModal={handleOpenModal} handleLogout={handleLogout}/>
        <DashboardModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      </main>
    );
  }

export default Dashboard;
