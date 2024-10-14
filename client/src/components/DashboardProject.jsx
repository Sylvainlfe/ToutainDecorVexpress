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
    <main className="flex bg-bg-dark-color flex-col">
      <article className="flex flex-col gap-4">
        <button
          onClick={handleLogout}
          id="linkButton"
          className="self-end bg-[#222630] px-4 py-3 outline-none text-white rounded-full border-2 mt-4 mr-4"
        >
          Déconnexion
        </button>
        <h2 className="self-start font-bold text-3xl text-white ml-4 border-l-4 border-gold-color pl-4">
          Mon tableau de bord
        </h2>
          <input
            type="text"
            aria-label="champ de recherche"
            placeholder="Rechercher"
            className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center"
          />
          <button
            type="button"
            id="linkButton"
            className="bg-[#222630] px-4 py-3 w-[280px] outline-none text-white rounded-full border-2 self-center mb-4"
            onClick={handleOpenModal}
          >
            Ajouter un projet
          </button>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={handleDeleteProject}
            onEdit={handleEditProject}
          />
        ))}
      </article>
    </main>
  );
}

export default DashboardProject;
