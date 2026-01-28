import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Cpu, Database, Bot, Zap, Network, Sparkles } from "lucide-react";
import SEO from '@/components/SEO';

const publications = [
  {
    id: 1,
    title: "How I Built a Self-Healing Data Audit Pipeline with AI Agents",
    description:
      "A detailed case study of building Auto-Audit, a self-healing pipeline for enterprise data systems.",
    link: "https://medium.com/ai-in-plain-english/how-i-built-a-self-healing-data-audit-pipeline-with-ai-agents-6fcd5addf716",
    icon: Zap,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Democratizing Data Pipelines: Empowering Everyone to Generate Configs with AI",
    description:
      "AI empowers non-engineers to safely create, review, and manage data pipeline configs—democratizing data workflows for all teams.",
    link: "https://medium.com/ai-in-plain-english/democratizing-data-pipelines-empowering-everyone-to-generate-configs-with-ai-931b8d705da8",
    icon: Database,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    id: 3,
    title: "Building a Multi Agent AI Crew that Turns Data Into Decisions",
    description:
      "Discover how multi-agent crews powered by CrewAI can revolutionize data analysis with specialized agents handling ingestion, cleaning, analysis, insights, and presentation.",
    link: "https://medium.com/ai-in-plain-english/building-a-multi-agent-ai-crew-that-turns-data-into-decisions-eab08946678a",
    icon: Bot,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Agentic AI for Self-Healing Data Pipelines: Reducing On-Call Load for Engineers",
    description:
      "How autonomous agents can monitor, detect, and fix ETL failures before they escalate",
    link: "https://medium.com/ai-in-plain-english/agentic-ai-for-self-healing-data-pipelines-reducing-on-call-load-for-engineers-81a6146b4424",
    icon: Cpu,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Google's Agent2Agent Protocol: Unlocking Collaboration Between AI Agents",
    description:
      "Imagine a world where AI agents aren't isolated silos, but can seamlessly talk to one another, delegate tasks, and collaborate to solve complex problems.",
    link: "https://medium.com/@kyle.knudson2015/googles-agent2agent-protocol-unlocking-collaboration-between-ai-agents-a591bc6db8df",
    icon: Network,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "Building an Enterprise-Ready AI Assistant with FastAPI + Streamlit",
    description:
      "It's one thing to prototype an LLM-powered chatbot, it's another to design a system that handles ingestion, retrieval, memory, feedback, and streaming responses in a way that scales.",
    link: "https://medium.com/towards-artificial-intelligence/building-an-enterprise-ready-ai-assistant-with-fastapi-streamlit-cda4cd33f192",
    icon: Sparkles,
    gradient: "from-rose-500 via-fuchsia-500 to-purple-500",
  },
];

// Card tilt effect hook
const cardVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function Publications() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <SEO
        title="Publications"
        description="Technical articles and insights on AI, Data Engineering, and Enterprise Systems by Kyle Knudson."
      />
      <Nav />

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#c2e9fb] via-[#a1c4fd] to-[#d4fc79] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      />

      <section className="w-full max-w-6xl px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Publications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Technical articles on AI, data engineering, and enterprise systems
        </motion.p>

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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              className="group block glass rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Thumbnail with gradient and icon */}
              <div className={`h-40 bg-gradient-to-br ${pub.gradient} relative flex items-center justify-center overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <pub.icon className="w-16 h-16 text-white/80 group-hover:text-white transition-colors" />
                </motion.div>

                {/* Floating particles */}
                {[...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      top: `${20 + j * 25}%`,
                      left: `${15 + j * 30}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2 + j,
                      repeat: Infinity,
                      delay: j * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#0071e3] dark:group-hover:text-[#5ac8fa] transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {pub.description}
                </p>

                {/* Read more with underline animation */}
                <motion.span
                  className="inline-block mt-4 text-sm font-medium text-[#0071e3] dark:text-[#5ac8fa] relative"
                >
                  Read on Medium →
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0071e3] dark:bg-[#5ac8fa] group-hover:w-full transition-all duration-300"
                  />
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}