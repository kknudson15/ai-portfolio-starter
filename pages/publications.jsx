import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Cpu, Database, Bot, Zap, Network, Sparkles } from "lucide-react";
import SEO from '@/components/SEO';
import dynamic from 'next/dynamic';

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), { ssr: false });

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

export default function Publications() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
      <SEO
        title="Publications"
        description="Technical articles and insights on AI, Data Engineering, and Enterprise Systems by Kyle Knudson."
      />
      <Nav />
      <div className="noise-overlay" />
      <NeuralNetwork3D />

      <section className="w-full max-w-6xl px-6 py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 font-outfit text-slate-900 dark:text-white tracking-tight">
            Publications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Technical articles on AI, data engineering, and enterprise systems
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
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
              whileHover={{ y: -10 }}
              className="group block bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${pub.gradient} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <pub.icon className="w-20 h-20 text-white shadow-2xl" />
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 font-outfit text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                  {pub.description}
                </p>

                <div className="flex items-center text-blue-500 font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform duration-300">
                  Read on Medium <span className="ml-2">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}