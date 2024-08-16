import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import ProjectCard from "../components/ProjectCard";
import Particles from "../components/particles";

export default function ProjectsPage() {
  const projects = allProjects.filter(p => p.published);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Particles
              className="absolute inset-0"
              quantity={100}
              staticity={50}
              ease={50}
            />
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl relative z-10">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 relative z-10">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}