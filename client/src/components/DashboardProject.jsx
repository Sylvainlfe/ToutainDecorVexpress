import React from "react";
import ProjectCard from "./ProjectCard";

function DashboardProject({
  handleOpenModal,
  handleLogout,
  handleDeleteProject,
  projects,
  handleEditProject,
}) {
  return (
    <>
      <article className="flex flex-col items-center justify-center bg-bg-dark-color">
        <button onClick={handleLogout} id="linkButton">
          Déconnexion
        </button>
        <h2>Mon tableau de bord</h2>
        <label htmlFor="text" className="text-white mb-1">
          Rechercher
        </label>
        <input
          type="text"
          aria-label="champ de recherche"
          className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        />
        <button
          type="button"
          id="linkButton"
          className="my-5"
          onClick={handleOpenModal}
        >
          Ajouter un projet
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDeleteProject}
              onEdit={handleEditProject}
            />
          ))}
        </div>
      </article>
    </>
  );
}

export default DashboardProject;
