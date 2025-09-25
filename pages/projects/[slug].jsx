import { useRouter } from "next/router";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import knowledgeBase from "../../data/knowledgeBase";
import Link from "next/link";

const projects = knowledgeBase.projects;


export default function ProjectCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Nav />
        <p className="text-xl text-gray-600">❌ Project not found.</p>
        <Link
          href="/projects"
          className="mt-6 inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition"
        >
          Back to Projects
        </Link>
        <Footer />
      </main>
    );
  }

  // Dynamic content based on project
  const overviewText = `The project "${project.title}" was designed to address real-world challenges in ${project.categories.join(
    ", "
  )}. It builds on my expertise in AI and data engineering to solve problems such as efficiency, scalability, and usability.`;

  const challengesText = `One of the main challenges of "${project.title}" was ensuring reliability and scalability while aligning with business needs. Additional hurdles included integrating with existing systems and handling data quality issues.`;

  const solutionsText = `The solution leveraged modern AI techniques, automation pipelines, and thoughtful architecture to address these challenges. By combining innovation with practical execution, "${project.title}" delivered a solution that is robust and future-ready.`;

  const impactText = `The outcome of "${project.title}" was significant. It improved productivity, reduced costs, and enabled new capabilities in ${project.categories.join(
    ", "
  )}. The project demonstrates how AI and modern engineering can create measurable business impact.`;

  // Related projects (exclude current one, same category)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.categories.some((cat) => project.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Nav />

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      />

      <section className="w-full max-w-4xl px-6 py-20 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          {project.title}
        </motion.h1>

        <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg p-8">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-6 w-full object-cover"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-600">{overviewText}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Challenges</h2>
              <p className="text-gray-600">{challengesText}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Solutions</h2>
              <p className="text-gray-600">{solutionsText}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Impact</h2>
              <p className="text-gray-600">{impactText}</p>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Related Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedProjects.map((rel) => (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/80 rounded-xl shadow-md p-6 hover:shadow-xl transition"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="rounded-lg mb-4 h-40 w-full object-cover"
                    />
                    <h3 className="text-lg font-semibold mb-2">{rel.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {rel.description}
                    </p>
                    <Link
                      href={`/projects/${rel.slug}`}
                      className="inline-block bg-[#0071e3] text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-[#005bb5] transition"
                    >
                      View Case Study
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}