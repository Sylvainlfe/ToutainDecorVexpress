import React, { useEffect, useState } from "react";
import { fetchProjects } from "../services/api.service";
import ProjectCard from "./ProjectCard";

function NewsProjectsSection() {
  const [lastProject, setLastProject] = useState(null);
  console.log(lastProject);

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
    <main className="bg-light-color mt-4 h-lvh flex flex-col items-center lg:grid lg:grid-cols-3 lg:grid-rows-5 lg:gap-0">
      <h2 className="self-start ml-4 mb-4 font-bold text-3xl lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">Les nouveautés du moment</h2>
      {lastProject && (
        <article className="border-l-4 border-gold-color pl-2 mb-4 self-start ml-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-6 lg:mt-16">
          <h3 className=" font-bold text-2xl ">{lastProject.title}</h3>
          <p>Lieu : {lastProject.location}</p>
          <p>Description : {lastProject.description}</p>
        </article>
      )}
      <article
        id="NewsProjectsSection"
        className="flex justify-end items-center lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-6 lg:self-start lg:justify-center"
      >
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
