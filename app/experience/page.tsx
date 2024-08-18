"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import { experiences } from "@/app/data/experience";

type ExperienceType = 'internship' | 'competition' | 'part-time' | 'all';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<ExperienceType>("all");

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter((exp) => exp.type === activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="h-24 md:h-28"></div> {/* Spacer for fixed navbar */}
      
      <div className="relative">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          staticity={50}
          ease={50}
        />
        
        <div className="px-4 pt-12 mx-auto space-y-6 max-w-5xl lg:px-6 md:space-y-12 md:pt-20 lg:pt-24">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Experience
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              My professional journey and achievements.
            </p>
          </div>

          <div className="flex justify-center space-x-4 flex-wrap">
            <button
              className={`px-4 py-2 rounded mb-2 ${
                activeTab === "all"
                  ? "bg-zinc-200 text-zinc-800"
                  : "bg-zinc-800 text-zinc-200"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded mb-2 ${
                activeTab === "internship"
                  ? "bg-zinc-200 text-zinc-800"
                  : "bg-zinc-800 text-zinc-200"
              }`}
              onClick={() => setActiveTab("internship")}
            >
              Internships
            </button>
            <button
              className={`px-4 py-2 rounded mb-2 ${
                activeTab === "part-time"
                  ? "bg-zinc-200 text-zinc-800"
                  : "bg-zinc-800 text-zinc-200"
              }`}
              onClick={() => setActiveTab("part-time")}
            >
              Part-time
            </button>
            <button
              className={`px-4 py-2 rounded mb-2 ${
                activeTab === "competition"
                  ? "bg-zinc-200 text-zinc-800"
                  : "bg-zinc-800 text-zinc-200"
              }`}
              onClick={() => setActiveTab("competition")}
            >
              Competitions
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredExperiences.map((experience) => (
              <Link href={`/experience/${experience.id}`} key={experience.id}>
                <Card>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-zinc-100">{experience.title}</h3>
                    <p className="text-zinc-400">{experience.company}</p>
                    <p className="text-zinc-500 text-sm mt-2">{experience.duration}</p>
                    <p className="text-zinc-300 mt-2">{experience.summary}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}