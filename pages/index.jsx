import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import knowledgeBase from '@/data/knowledgeBase';
import Link from 'next/link';
import Image from 'next/image';

// Get featured projects from the centralized knowledge base
const featuredProjects = knowledgeBase.projects.filter((p) => p.featured);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 relative overflow-hidden">
      {/* Nav */}
      <Nav />

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Hero Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-white/20 dark:bg-white/5 w-${20 + i * 10} h-${20 + i * 10}`}
          style={{ top: `${10 + i * 15}%`, left: `${15 + i * 12}%` }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
        />
      ))}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-gray-900 dark:text-white"
        >
          Exploring AI with Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        >
          A showcase of projects and ideas at the intersection of design and artificial intelligence.
        </motion.p>
        <Button
          size="lg"
          className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-6 py-3 shadow-lg"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
        <div className="mt-12 animate-bounce text-gray-400 dark:text-gray-500">↓</div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl px-6 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#0071e3] to-[#00c6fb] flex items-center justify-center shadow-xl">
                <span className="text-6xl font-bold text-white">KK</span>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2 space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              >
                About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 text-lg"
              >
                {knowledgeBase.about}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {knowledgeBase.leadership}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <Button
                  className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-6"
                  onClick={() => window.open('/Kyle_Knudson_Resume.pdf', '_blank')}
                >
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Projects
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.01] transition duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg"
                  loading="lazy"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-[#f1f5f9] dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-block bg-transparent border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white px-8 py-3 rounded-full transition-colors font-medium"
          >
            View All Projects →
          </Link>
        </motion.div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl mx-4"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 text-xl hover:text-gray-700 dark:hover:text-gray-200"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-4 rounded-lg w-full object-cover"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.about || selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.categories?.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-[#f1f5f9] dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                >
                  {cat}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${selectedProject.slug}`}
              className="inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition"
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