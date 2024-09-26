import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <main className="bg-light-color">
      <h2>Mes réalisations</h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
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