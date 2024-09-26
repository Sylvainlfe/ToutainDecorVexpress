import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function ProjectPage() {
  const project = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Link to="/ProjectsPage" className="text-blue-500 hover:underline">Retour</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={`${import.meta.env.VITE_API_URL}/assets/images/${project.thumbnail_url}`}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-2"><strong>Lieu :</strong> {project.location}</p>
            <p>{project.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.photos_url.map((photo, index) => (
            <img
              key={index}
              src={`${import.meta.env.VITE_API_URL}/assets/images/${photo}`}
              alt={`${project.title} - Photo ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;