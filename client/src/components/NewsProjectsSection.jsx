import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api.service";
import ProjectCard from "./ProjectCard";

function NewsProjectsSection() {
  const [lastProject, setLastProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const projects = await fetchProjects();
      if (projects.length > 0) {
        setLastProject(projects[projects.length - 1]);
      }
    };
    getProject();
  }, []);

  return (
    <main
      className="bg-light-color flex flex-col items-center h-screen md:flex-row md:justify-evenly md:my-4 md:items-start"
      id="NewsProjectsSection"
    >
      <section className="">
        <h2 className="border-l-4 border-gold-color pl-2 text-balance font-bold text-3xl my-4">
          Mon dernier chantier
        </h2>
        {lastProject && (
          <article className="hidden border-l-4 border-gold-color pl-2 mb-4 md:flex md:flex-col">
            <h3 className=" font-bold text-2xl ">{lastProject.title}</h3>
            <p>Lieu : {lastProject.location}</p>
            <p>Description : {lastProject.description}</p>
          </article>
        )}
      </section>
      <article className="flex ">
        {lastProject ? (
          <ProjectCard project={lastProject} showDeleteButton={false} />
        ) : (
          <p>Acun projet dispo</p>
        )}
      </article>
    </main>
  );
}

export default NewsProjectsSection;
