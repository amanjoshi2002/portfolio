'use client';

import React from 'react';
import { Card } from "./card";
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, slug }) => {
  return (
    <Link href={`/projects/${slug}`} className="block w-full h-full">
      <Card>
        <article className="p-4 md:p-8 bg-zinc-900 rounded-lg"> {/* Added bg-zinc-900 and rounded-lg */}
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {title}
          </h2>
          <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
            {description}
          </p>
        </article>
      </Card>
    </Link>
  );
};

export default ProjectCard;