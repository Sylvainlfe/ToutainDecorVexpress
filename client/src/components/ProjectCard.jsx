import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, onDelete, showDeleteButton = true }) {
  const backgroundStyle = project.thumbnail_url
    ? {
        backgroundImage: `url(${import.meta.env.VITE_API_URL}/assets/images/${
          project.thumbnail_url
        })`,
      }
    : {};

  return (
    <Link
      to={`/viewingPage/${project.id}`}
      className="border border-logo-color h-[400px] w-[280px] relative overflow-hidden bg-cover bg-center cursor-pointer group"
      style={backgroundStyle}
    >
      <article className="absolute inset-0 bg-gold-color bg-opacity-50 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-white text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-white mb-2">Lieu : {project.location}</p>
        <p className="text-white mb-4">{project.description}</p>
        {showDeleteButton && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onDelete(project.id);
            }}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 self-start"
          >
            Supprimer
          </button>
        )}
      </article>
    </Link>
  );
}

export default ProjectCard;
