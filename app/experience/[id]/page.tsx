"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { experiences } from "@/app/data/experience";
import { ArrowLeft } from "lucide-react";
import Particles from "@/app/components/particles";

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

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
          <Link href="/experience" className="flex items-center text-zinc-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to experiences
          </Link>
          <h1 className="text-5xl font-bold mb-4">{experience.title}</h1>
          <p className="text-xl text-zinc-300 mb-2">{experience.company}</p>
          <p className="text-lg text-zinc-400 mb-8">{experience.duration}</p>
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: experience.detailedContent }}
          />
          
          {experience.certificates && experience.certificates.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Certificates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.certificates.map((cert, index) => (
                  <div key={index} className="relative h-64 w-full">
                    <Image src={cert} alt={`Certificate ${index + 1}`} layout="fill" objectFit="contain" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {experience.photos && experience.photos.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.photos.map((photo, index) => (
                  <div key={index} className="relative h-64 w-full">
                    <Image src={photo} alt={`Photo ${index + 1}`} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}