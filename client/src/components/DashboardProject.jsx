import React from "react";
import ProjectCard from "./ProjectCard";

function DashboardProject( {handleOpenModal} ) {
  return (
    <>
      <article className="flex flex-col items-center h-lvh justify-center bg-bg-dark-color">
        <h2>Mon tableau de bord</h2>
        <label htmlFor="text" className="text-white mb-1">
          Rechercher
        </label>
        <input
          type="text"
          aria-label="champ de recherche"
          className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        />
        <button type="button" id="linkButton" className="my-5" onClick={handleOpenModal}>
          Ajouter un projet
        </button>
        <ProjectCard />
      </article>
    </>
  );
}

export default DashboardProject;
