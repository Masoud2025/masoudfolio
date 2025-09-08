"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

const projectsData = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  description: "A professional project case study with details.",
  image: `/p${i + 1}.png`,
  difficulty: Math.floor(Math.random() * 5) + 1,
}));
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  difficulty: number;
};

type ProjectDrawerProps = {
  project: Project;
  onClose: () => void;
};
// ---------------- Drawer Component ----------------
const ProjectDrawer = ({ project, onClose }: ProjectDrawerProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        key="drawer"
        initial={{ y: "100%" }}
        animate={{ y: "5%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 h-[95%] bg-white rounded-t-3xl shadow-2xl z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200 z-20 flex justify-between items-center px-8 py-5">
          <div className="flex flex-col items-center w-full gap-2">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 text-center">
              {project.description}
            </p>
            {/* Action Buttons */}
            <div className="flex gap-3 mt-2">
              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                <Github className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                <ExternalLink className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-[92px] bg-white/90 backdrop-blur px-6 py-3 border-b border-gray-100 flex justify-center gap-4 overflow-x-auto z-10">
          {["overview", "difficulty", "screenshots", "colors", "fonts"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition whitespace-nowrap"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
        </div>

        {/* Content */}
        <div className="p-10 space-y-16 text-center max-w-4xl mx-auto">
          {/* Overview */}
          <section id="overview">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is a detailed case study of <b>{project.title}</b>. It shows
              the design process, technical stack, and visual identity.
            </p>
          </section>

          {/* Difficulty */}
          <section id="difficulty">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Difficulty
            </h3>
            <div className="w-2/3 mx-auto h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-yellow-400"
                style={{ width: `${(project.difficulty / 5) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Level {project.difficulty} of 5
            </p>
          </section>

          {/* Screenshots */}
          <section id="screenshots">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Screenshots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt="screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt="screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt="screenshot"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Colors */}
          <section id="colors">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Colors Used
            </h3>
            <div className="flex justify-center gap-10">
              {["#1E293B", "#F43F5E", "#FACC15"].map((c) => (
                <div key={c} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-full shadow border"
                    style={{ backgroundColor: c }}
                  />
                  <span className="text-xs text-gray-600">{c}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fonts */}
          <section id="fonts">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fonts</h3>
            <div className="space-y-4">
              <p className="text-lg font-sans">This is Inter (body text)</p>
              <p className="text-2xl font-serif">This is Roboto Serif</p>
              <p className="text-xl font-mono">This is Fira Code (mono)</p>
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ---------------- Cards Grid ----------------
const Cards = () => {
  // const [selected, setSelected] = useState<any>(null);

  const [selected, setSelected] = useState<Project | null>(null);

  // 🔒 Lock body scroll when drawer is open
  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selected]);

  return (
    <div className="min-h-screen bg-white p-10 mt-20 relative">
      <span className="inline-flex items-center gap-3 text-2xl tracking-wider text-gray-900 absolute left-[40px] top-[-10px]">
        <span className="uppercase text-gray-700">Projects</span>
        <span className="relative px-3 py-1 border border-gray-300 rounded-md text-gray-800 font-semibold">
          24
        </span>
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(project)}
            className="relative rounded-xl overflow-hidden group h-[287px] w-[379px] shadow-md cursor-pointer"
          >
            {/* cover image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* hover layer */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="text-white">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="flex gap-2 justify-end mt-3">
                <button className="p-2 bg-white/20 rounded-md hover:bg-white/40 transition">
                  <Github className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 bg-white/20 rounded-md hover:bg-white/40 transition">
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drawer */}
      {/* <ProjectDrawer project={selected} onClose={() => setSelected(null)} /> */}
      {selected && (
        <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Cards;
