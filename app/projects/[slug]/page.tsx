import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Particles from "@/app/components/particles"; // Import your Particles component

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <div className="bg-zinc-900 text-white relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={100}
          staticity={50}
          ease={50}
        />
        <div className="max-w-3xl mx-auto px-6 py-16 relative z-10">
          <Link href="/projects" className="flex items-center text-zinc-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to projects
          </Link>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-zinc-300 mb-8">{project.description}</p>
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-zinc-200 transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Mdx code={project.body.code} />
        </div>
      </div>
    </div>
  );
}