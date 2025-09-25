import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const publications = [
  {
    id: 1,
    title: "How I Built a Self-Healing Data Audit Pipeline with AI Agents",
    description:
      "A detailed case study of building Auto-Audit, a self-healing pipeline for enterprise data systems.",
    link: "https://medium.com/ai-in-plain-english/how-i-built-a-self-healing-data-audit-pipeline-with-ai-agents-6fcd5addf716",
  },
  {
    id: 2,
    title: "Democratizing Data Pipelines: Empowering Everyone to Generate Configs with AI",
    description:
      "AI empowers non-engineers to safely create, review, and manage data pipeline configs—democratizing data workflows for all teams.",
    link: "https://medium.com/ai-in-plain-english/democratizing-data-pipelines-empowering-everyone-to-generate-configs-with-ai-931b8d705da8",
  },
  {
    id: 3,
    title: "Building a Multi Agent AI Crew that Turns Data Into Decisions",
    description:
      "Discover how multi-agent crews powered by CrewAI can revolutionize data analysis. In this project, specialized agents handle ingestion, cleaning, analysis, insights, and presentation—working together like a collaborative team. By automating each step, businesses can transform raw data into executive-ready insights and presentations in minutes. Learn how this workflow not only streamlines analytics but also demonstrates the power of agentic AI in real-world scenarios",
    link: "https://medium.com/ai-in-plain-english/building-a-multi-agent-ai-crew-that-turns-data-into-decisions-eab08946678a",
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Nav />

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#c2e9fb] via-[#a1c4fd] to-[#d4fc79]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      />

      <section className="w-full max-w-6xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Publications
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="block backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600">{pub.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}