// pages/projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import Link from "next/link";
import slugify from "../lib/slugify";
import knowledgeBase from "../data/knowledgeBase";

const projects = knowledgeBase.projects;

const categories = ["All", "AI", "Software Engineering", "Cloud", "Leadership"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const featuredProjects = projects.filter((p) => p.featured);

  let filteredProjects =
    activeCategory === "All"
      ? projects.filter((p) => !p.featured)
      : projects.filter(
          (p) => p.categories.includes(activeCategory) && !p.featured
        );

  filteredProjects = filteredProjects.sort((a, b) =>
    sortOrder === "Newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Nav />

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <section className="w-full max-w-6xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Featured
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition cursor-pointer flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 object-cover h-56 w-full"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter + Sort Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === cat
                    ? "bg-[#0071e3] text-white shadow-md"
                    : "bg-white/60 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex justify-center">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/60 text-gray-700 shadow-sm border border-gray-200 focus:outline-none"
            >
              <option value="Newest">Sort: Newest</option>
              <option value="Oldest">Sort: Oldest</option>
            </select>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-[1.02] transition transform cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 line-clamp-3 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-[#f1f5f9] rounded-full text-xs text-gray-700 shadow-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-4 rounded-lg w-full object-cover"
            />
            <p className="text-gray-700 mb-4">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-[#f1f5f9] rounded-full text-xs text-gray-700 shadow-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            {/* ✅ Styled Link as Button */}
            <Link
              href={`/projects/${selectedProject.slug}`}
              className="inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition text-center"
            >
              View Case Study
            </Link>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}