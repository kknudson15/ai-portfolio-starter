import { motion, useReducedMotion } from 'framer-motion';
import SEO from '@/components/SEO';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import knowledgeBase from '@/data/knowledgeBase';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Avatar from '@/components/ui/Avatar';
import { ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

// Dynamic imports to prevent SSR issues with Canvas and Workers
const AIPlayground = dynamic(() => import('@/components/AIPlayground'), { ssr: false });

// Get featured projects from the centralized knowledge base
const featuredProjects = knowledgeBase.projects.filter((p) => p.featured);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsRef = useRef([]);
  const shouldReduceMotion = useReducedMotion();

  // Spotlight Effect Logic - DISABLE if reduced motion
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.getElementById('projects-grid')?.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.getElementById('projects-grid')?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [shouldReduceMotion]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300 overflow-hidden relative selection:bg-blue-500/30">
      <SEO />
      <div className="noise-overlay" />

      {/* Nav */}
      <Nav />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[90vh] pt-32 px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" />
          <span className="relative inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-blue-600 dark:text-blue-300">
            ✨ Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white"
        >
          Designing the <br className="hidden md:block" />
          <span className="text-gradient">Future of AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Crafting intelligent interfaces and seamless experiences at the intersection of design and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4"
        >
          <Button
            size="lg"
            className="bg-[#0071e3] hover:bg-[#005bb5] text-white rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(0,113,227,0.4)] hover:shadow-[0_0_30px_rgba(0,113,227,0.6)] transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </Button>
        </motion.div>
      </section>

      {/* AI Playground Section - NEW */}
      <AIPlayground />

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl px-6 py-24 z-10 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative">
                <Avatar size="lg" className="border-4 border-white/50 dark:border-white/10 shadow-2xl" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2 space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
              >
                About Me <span className="text-2xl">👋</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <p>{knowledgeBase.about}</p>
                <p>{knowledgeBase.leadership}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <button
                  className="group flex items-center gap-2 text-[#0071e3] dark:text-[#5ac8fa] font-medium hover:underline decoration-2 underline-offset-4"
                  onClick={() => window.open('/Kyle_Knudson_Resume.pdf', '_blank')}
                >
                  Download Resume
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-7xl px-6 py-24 z-10 mx-auto relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            A collection of projects showcasing AI innovation and design.
          </motion.p>
        </div>

        <div id="projects-grid" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const Content = (
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="group spotlight-card rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 cursor-pointer h-full flex flex-col hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="h-64 bg-slate-100 dark:bg-slate-900/50 overflow-hidden relative rounded-t-3xl">
                  <motion.img
                    layoutId={`project-image-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#0071e3] transition-colors font-outfit">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{project.date}</span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  {!shouldReduceMotion ? (
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      scale={1.02}
                      transitionSpeed={2000}
                      glareEnable={true}
                      glareMaxOpacity={0.15}
                      glareColor="#ffffff"
                      glarePosition="all"
                      glareBorderRadius="24px"
                      className="h-full"
                    >
                      {Content}
                    </Tilt>
                  ) : (
                    Content
                  )}
                </motion.div>
              </Link>
            );
          })}</div>

        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-[#0071e3] hover:bg-[#005bb5] text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-[#1a2234] rounded-3xl p-0 max-w-2xl w-full relative shadow-2xl overflow-hidden z-10 mx-auto max-h-[90vh] flex flex-col"
          >
            <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white font-outfit">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.categories?.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-8">
                <p className="text-lg leading-relaxed">
                  {selectedProject.about || selectedProject.description}
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  className="px-6 py-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  className="px-6 py-3 rounded-full bg-[#0071e3] text-white hover:bg-[#005bb5] transition-all shadow-lg shadow-blue-500/30 font-medium"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}