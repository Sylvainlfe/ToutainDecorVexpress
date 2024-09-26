import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, onDelete, showDeleteButton=true }) {
  const backgroundStyle = project.thumbnail_url
    ? {
        backgroundImage: `url(${import.meta.env.VITE_API_URL}/assets/images/${
          project.thumbnail_url
        })`,
      }
    : {};

  return (
    <Link to={`/viewingPage/${project.id}`}>
    <article
      className="border border-logo-color card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden bg-[#222630] cursor-pointer bg-cover bg-center"
      style={backgroundStyle}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <h2 className="text-white">{project.title}</h2>
        <p className="text-[1.2em] text-white">Lieu : {project.location}</p>
        <p className="font-nunito block text-white font-light h-[0em] group-hover:h-[10em] leading-[1.2em] duration-500 overflow-hidden">
          {project.description}
        </p>
        {showDeleteButton && (
          <button 
            onClick={() => onDelete(project.id)} 
            className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        )}
      </div>
    </article>
    </Link>
  );
}

export default ProjectCard;
