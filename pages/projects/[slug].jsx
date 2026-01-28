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

export default function ProjectCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Nav />
        <div className="text-center p-8">
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">❌ Project not found.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition"
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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-x-hidden selection:bg-[#0071e3] selection:text-white">
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
      />
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900" />

        {/* Animated Background */}
        <motion.div
          className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-10 w-[600px] h-[600px] bg-gradient-to-br from-[#0071e3] to-purple-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#0071e3] dark:hover:text-[#0071e3] mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0071e3] text-white px-6 py-3.5 rounded-full font-medium shadow-lg shadow-blue-500/20 hover:bg-[#005bb5] hover:scale-105 transition-all">
                    View Live Demo <ExternalLink size={18} />
                  </a>
                )}
                {/* Placeholder for future code link */}
                <button disabled className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-6 py-3.5 rounded-full font-medium cursor-not-allowed">
                  Private Repository <Github size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 aspect-video group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20 -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      {project.impact && (
        <section className="py-12 bg-white dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {project.impact.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 border-r last:border-0 border-gray-100 dark:border-gray-700/50"
                >
                  <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] to-purple-600 mb-2">
                    {stat.metric}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide text-sm">
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
          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="text-[#0071e3]" /> The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                {project.challenge || "Detailed challenge description coming soon."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Zap className="text-[#0071e3]" /> The Solution
              </h2>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p>{project.solution || "Detailed technical solution breakdown coming soon."}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-[#0071e3]" /> The Impact
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.about}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Layers className="text-[#0071e3]" /> Tech Stack
              </h3>

              <div className="flex flex-col gap-3">
                {project.techStack?.map((tech, i) => (
                  <div key={i} className="flex items-center justify-between group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#0071e3] transition-colors">
                      {tech}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#0071e3] transition-colors" />
                  </div>
                ))}

                {!project.techStack && (
                  <p className="text-gray-500 italic">Tech stack details loading...</p>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Project Date</p>
                <p className="font-medium text-gray-900 dark:text-white">{project.date}</p>
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