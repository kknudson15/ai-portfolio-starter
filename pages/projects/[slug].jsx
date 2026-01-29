import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import knowledgeBase from "../../data/knowledgeBase";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Layers, Target, Zap, TrendingUp } from "lucide-react";
import SEO from '@/components/SEO';

const projects = knowledgeBase.projects;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

import dynamic from 'next/dynamic';

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), { ssr: false });

export default function ProjectCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    // ... (keep as is or update bg)
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] transition-colors">
        <Nav />
        <div className="text-center p-8">
          <p className="text-2xl text-slate-600 dark:text-slate-400 mb-6 font-outfit">❌ Project not found.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition font-medium"
          >
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Related projects (exclude current one, match category)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.categories.some((cat) => project.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] relative overflow-x-hidden selection:bg-[#0071e3]/30 selection:text-white transition-colors duration-300">
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
      />
      <div className="noise-overlay" />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        {/* Background Canvas (Subdued) */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <NeuralNetwork3D />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#0071e3] transition-colors mb-12 font-medium"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.categories.map(cat => (
                  <span key={cat} className="px-4 py-1.5 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-500/20">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1] font-outfit tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0071e3] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-500/25 hover:bg-[#005bb5] hover:scale-105 transition-all">
                    Launch Project <ExternalLink size={18} />
                  </a>
                )}
                {/* Placeholder for future code link */}
                <button disabled className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold cursor-not-allowed transition-all opacity-60">
                  Github Repo <Github size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                layoutId={`project-image-${project.id}`}
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 bg-slate-100 dark:bg-slate-800 aspect-video group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      {project.impact && (
        <section className="py-16 bg-slate-900/50 backdrop-blur-sm border-y border-white/5 dark:border-white/10 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {project.impact.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <p className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-3 font-outfit">
                    {stat.metric}
                  </p>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-4 font-outfit">
                <Target className="text-blue-500 w-8 h-8" /> The Challenge
              </h2>
              <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/40 backdrop-blur-md p-10 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl">
                {project.challenge || "Detailed challenge description coming soon."}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-4 font-outfit">
                <Zap className="text-blue-500 w-8 h-8" /> The Solution
              </h2>
              <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/40 backdrop-blur-md p-10 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl">
                <p>{project.solution || "Detailed technical solution breakdown coming soon."}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-4 font-outfit">
                <TrendingUp className="text-blue-500 w-8 h-8" /> The Impact
              </h2>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-10 rounded-[2rem] border border-blue-500/20 shadow-xl">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.about}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-slate-800/60 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-white/10 sticky top-32"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 font-outfit">
                <Layers className="text-blue-500" /> Tech Stack
              </h3>

              <div className="flex flex-col gap-4">
                {project.techStack?.map((tech, i) => (
                  <div key={i} className="flex items-center justify-between group p-3 rounded-xl hover:bg-blue-500/5 transition-all">
                    <span className="font-semibold text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                      {tech}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500 transition-all group-hover:scale-125" />
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-200 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Release Date</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-outfit">{project.date}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              More {project.categories[0]} Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((rel) => (
                <Link key={rel.id} href={`/projects/${rel.slug}`} className="group">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0071e3] transition-colors line-clamp-1">
                        {rel.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}