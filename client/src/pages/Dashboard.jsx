import React, { useState } from "react";
import DashboardProject from "../components/DashboardProject";
import DashboardModal from "../components/DashboardModal";

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <main>
        <DashboardProject handleOpenModal={handleOpenModal} />
        <DashboardModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      </main>
    );
  }

export default Dashboard;
