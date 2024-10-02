import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <main className="bg-marbre-gris bg-cover bg-no-repeat bg-[center_top_-7.5rem] lg:h-lvh bg-black bg-opacity-50 bg-blend-overlay flex items-center flex-col">
      <h2 className="font-bold text-3xl text-white border-r-4 border-gold-color my-4 ml-4 pr-2 self-start">Mes réalisations</h2>
      <article className="flex flex-col gap-4 flex-wrap lg:grid lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            showDeleteButton={false}
          />
        ))}
      </article>
    </main>
  );
}

export default ProjectsPage;