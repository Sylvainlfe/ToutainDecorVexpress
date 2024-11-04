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
    <main className="flex bg-gradient-to-r from-gray-700 via-gray-900 to-[#0f1011] flex-col">
      <article className="flex flex-col items-center gap-4 mb-4">
        <button
          onClick={handleLogout}
          id="linkButton"
          className="self-end m-2 flex justify-center items-center border-2 border-transparent text-xl font-bold w-36 py-2 text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300"
        >
          Déconnexion
        </button>
        <h2 className="border-l-4 border-gold-500 pl-2 text-balance font-bold text-3xl text-white lg:self-start lg:ml-4">
          Mon tableau de bord
        </h2>
          <input
            type="text"
            aria-label="champ de recherche"
            placeholder="Rechercher"
            className="bg-[#0f1011] px-4 py-3 outline-none w-80 text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-gold-400 border-gold-500 lg:self-start lg:ml-4"
          />
          <button
            type="button"
            id="linkButton"
            className="flex justify-center items-center border-2 border-transparent text-xl font-bold w-80 py-2 text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300 lg:self-start lg:ml-4"
            onClick={handleOpenModal}
          >
            Ajouter un projet
          </button>
      </article>
      <article className="grid grid-cols-1 self-center mb-4 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:self-start lg:ml-4">
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
