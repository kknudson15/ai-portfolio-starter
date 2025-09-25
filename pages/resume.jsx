// pages/resume.jsx
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Cloud, Database, Cpu, Code2, Users } from 'lucide-react';


const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
  }),
};

export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <Nav />

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <section className="w-full max-w-5xl px-6 py-20 z-10 space-y-16">
{/* Header */}
<div className="text-center">
  <h2 className="text-4xl font-bold mb-2">Kyle Knudson</h2>
  <p className="text-gray-700 mb-6">
    Minneapolis, MN |{" "}
    <a
      href="https://www.linkedin.com/in/kyle-knudson"
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>{" "}
    |{" "}
    <a
      href="mailto:kyle.knudson2015@gmail.com"
      className="text-blue-600 hover:underline"
    >
      Email
    </a>
  </p>

  {/* Download Resume Button */}
  <a
    href="/Kyle_Knudson_Resume.pdf" // put your PDF in public/ folder
    download
    className="inline-block bg-[#0071e3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#005bb5] transition"
  >
    Download Resume
  </a>
</div>

{/* Work Experience */}
<div>
  <h3 className="text-2xl font-semibold mb-12 text-center">Work Experience</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Life Time Fitness */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition transform"
    >
      <h4 className="text-xl font-semibold mb-1">Life Time Fitness</h4>
      <p className="italic text-gray-600 mb-4">
        Associate Director Data Engineering (2025 – Present)
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Lead 8 engineers transforming enterprise data architecture and Snowflake ingestions, boosting delivery 125%.</li>
        <li>Directed company-wide data governance and streamlined steward interactions.</li>
        <li>Optimized platform costs, saving $20K/month.</li>
        <li>Rolled out AI initiatives incl. DOMO AI, Snowflake Cortex, Agentic AI POCs.</li>
      </ul>
    </motion.div>

    {/* UnitedHealth Group / Optum */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition transform"
    >
      <h4 className="text-xl font-semibold mb-1">UnitedHealth Group / Optum</h4>
      <p className="italic text-gray-600 mb-4">Multiple Roles (2019 – 2025)</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Senior Software Engineering Manager – Automated data pipelines, saving $500M+ and migrated apps to Azure cloud.</li>
        <li>Software Engineering Manager – Led 12 engineers improving throughput 10x and achieving 11.2x ROI on automation.</li>
        <li>Software Engineer/Data Scientist – Consolidated 20+ tools, saving 400+ hours/year, and built predictive ML models.</li>
        <li>Intern – Developed claims processing components with Agile methodology.</li>
      </ul>
    </motion.div>
  </div>
</div>

        {/* Education */}
{/* Education */}
<div>
  <h3 className="text-2xl font-semibold mb-12 text-center">Education</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        school: 'Saint Cloud State University',
        degree: 'M.S. Computer Science – AI Specialization',
        years: '2018 – 2020',
        logo: '/images/scsu.png', // place logo in public/images/
      },
      {
        school: 'Montana State University',
        degree: 'B.S. Cell Biology & Neuroscience – Biomedical Specialization',
        years: '2011 – 2015',
        logo: '/images/msu.png', // place logo in public/images/
      },
    ].map((edu, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="backdrop-blur-lg bg-white/60 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition transform flex flex-col"
      >
        <div className="flex items-center gap-4 mb-4">
          <img src={edu.logo} alt={edu.school} className="w-12 h-12 object-contain rounded-md shadow-sm" />
          <div>
            <h4 className="text-lg font-semibold">{edu.school}</h4>
            <p className="text-gray-500 text-sm">{edu.years}</p>
          </div>
        </div>
        <p className="text-gray-700">{edu.degree}</p>
      </motion.div>
    ))}
  </div>
</div>

 {/* Certifications */}
<div>
  <h3 className="text-2xl font-semibold mb-12 text-center">Certifications & Engagements</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      { title: 'Optum AI Nano-degree Mentor', icon: '🤖' },
      { title: 'Ethics in AI, Carnegie Mellon', icon: '📘' },
      { title: 'UHG Emerging Leadership Program', icon: '🚀' },
      { title: 'Coursera Google Project Management', icon: '📊' },
      { title: 'Udacity Nano-degrees: Data Engineering, AI for Healthcare, NLP, Deep Learning', icon: '💡' },
    ].map((cert, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition transform"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{cert.icon}</span>
          <p className="text-gray-700 font-medium">{cert.title}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

{/* Skills */}
<div>
  <h3 className="text-2xl font-semibold mb-12 text-center">Skills</h3>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Technical */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Code2 className="w-5 h-5 text-[#0071e3]" /> Technical
      </h4>
      <div className="flex flex-wrap gap-2">
        {[
          'Python', 'JavaScript/TypeScript', 'React', 'Node.js',
          'Rust', 'C/C++', 'Java', 'R',
        ].map((skill, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-3 py-1 bg-[#f1f5f9] rounded-full text-sm text-gray-700 shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-4 flex items-center gap-2">
        <Database className="w-5 h-5 text-[#0071e3]" /> Databases
      </h4>
      <div className="flex flex-wrap gap-2">
        {['SQL', 'MongoDB', 'Cassandra', 'Snowflake', 'Teradata'].map((db, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-3 py-1 bg-[#f1f5f9] rounded-full text-sm text-gray-700 shadow-sm"
          >
            {db}
          </motion.span>
        ))}
      </div>
    </motion.div>

    {/* Professional */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Cloud className="w-5 h-5 text-[#0071e3]" /> Cloud & DevOps
      </h4>
      <div className="flex flex-wrap gap-2">
        {['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes'].map((tool, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-3 py-1 bg-[#f1f5f9] rounded-full text-sm text-gray-700 shadow-sm"
          >
            {tool}
          </motion.span>
        ))}
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-[#0071e3]" /> Leadership
      </h4>
      <div className="flex flex-wrap gap-2">
        {[
          'Agile (Scrum/Kanban)', 'Team Leadership', 'Mentorship',
          'Roadmap Ownership', 'Delivery Management', 'Problem Solving',
        ].map((skill, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-3 py-1 bg-[#f1f5f9] rounded-full text-sm text-gray-700 shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
</div>
      </section>

      <Footer />
    </main>
  );
}