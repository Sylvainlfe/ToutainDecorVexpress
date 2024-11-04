import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <main className="bg-fixed bg-bg-marbre bg-no-repeat bg-bottom bg-cover h-screen bg-black bg-opacity-50 bg-blend-overlay flex items-center flex-col justify-center">
      <h2 className="border-l-4 border-gold-500 pl-2 font-bold text-3xl my-4 text-white">Mes réalisations</h2>
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