import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, onDelete, showDeleteButton = true, onEdit }) {
  const backgroundStyle = project.thumbnail_url
    ? {
        backgroundImage: `url(${import.meta.env.VITE_API_URL}/assets/images/${
          project.thumbnail_url
        })`,
      }
    : {};

    const buttonStyle = "flex justify-center items-center w-32 border-2 border-transparent text-xl font-bold py-2 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300"


  return (
    <Link
      to={`/viewingPage/${project.id}`}
      className="h-96 w-64 relative overflow-hidden bg-cover bg-center cursor-pointer group rounded-xl"
      style={backgroundStyle}
    >
      <article className="absolute inset-0 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-start p-4 translate-y-1/3 group-hover:translate-y-0 transition-transform duration-300 lg:translate-y-full">
        <h2 className="text-white text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-white mb-2">Lieu : {project.location}</p>
        <p className="text-white mb-4">{project.description}</p>
        {showDeleteButton && (
          <section className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete(project.id);
              }}
              className={`bg-black text-white ${buttonStyle}`}
            >
              Supprimer
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onEdit(project);
              }}
              className={`bg-gold-500 text-[#0f1011] ${buttonStyle}`}
            >
              Modifier
            </button>
          </section>
        )}
      </article>
    </Link>
  );
}

export default ProjectCard;
