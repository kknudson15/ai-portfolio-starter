import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Auto-Audit: Self Healing Data Pipeline', description: 'End-to-end automated pipeline leveraging AI for anomaly detection and data quality checks.', image: '/images/project1.png' },
  { id: 2, title: 'Data Insight Team', description: 'Convert raw data into actionable business insights via AI agents using langGraph to provide raw data to executive insights', image: '/images/project2.png' },
  { id: 3, title: 'Config Companion', description: 'Enable non-engineers to safely generate, review, and manage data pipeline configurations.', image: '/images/project3.png' },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 relative overflow-hidden">
      {/* Nav */}
      <Nav />

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Hero Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-white/20 w-${20 + i * 10} h-${20 + i * 10}`}
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
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Exploring AI with Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
        >
          A showcase of projects and ideas at the intersection of design and artificial intelligence.
        </motion.p>
        <Button size="lg" className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-6 py-3 shadow-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View Projects
        </Button>
        <div className="mt-12 animate-bounce text-gray-400">↓</div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
                className="h-48 bg-gray-200 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={project.image} alt={project.title} className="h-full w-full object-cover rounded-lg" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">Click to view details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 rounded-lg w-full object-cover" />
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <Button onClick={() => setSelectedProject(null)}>Close</Button>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}