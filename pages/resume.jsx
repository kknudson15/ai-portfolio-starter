// pages/resume.jsx
import { motion } from 'framer-motion';
import Nav from '@/components/Nav';
import Footer from '@/components/footer';
import { Cloud, Cpu, Code2, Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';

// Timeline data
const timeline = [
  {
    year: '2025',
    role: 'Associate Director Data Engineering',
    company: 'Life Time Fitness',
    type: 'current',
    highlights: [
      'Lead 8 engineers transforming enterprise data architecture',
      'Boosted delivery 125%',
      'Saved $20K/month in platform costs',
      'Rolled out AI initiatives (DOMO AI, Snowflake Cortex, Agentic AI)',
    ],
  },
  {
    year: '2023',
    role: 'Senior Software Engineering Manager',
    company: 'UnitedHealth Group / Optum',
    type: 'past',
    highlights: [
      'Automated data pipelines saving $500M+',
      'Migrated apps to Azure cloud',
    ],
  },
  {
    year: '2021',
    role: 'Software Engineering Manager',
    company: 'UnitedHealth Group / Optum',
    type: 'past',
    highlights: [
      'Led 12 engineers, improved throughput 10x',
      'Achieved 11.2x ROI on automation',
    ],
  },
  {
    year: '2019',
    role: 'Software Engineer / Data Scientist',
    company: 'UnitedHealth Group / Optum',
    type: 'past',
    highlights: [
      'Consolidated 20+ tools, saving 400+ hrs/year',
      'Built predictive ML models',
    ],
  },
];

// Skills with proficiency
const skills = {
  technical: [
    { name: 'Python', level: 95 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Rust', level: 60 },
    { name: 'SQL', level: 90 },
  ],
  cloud: [
    { name: 'AWS', level: 85 },
    { name: 'Azure', level: 90 },
    { name: 'GCP', level: 70 },
    { name: 'Snowflake', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'Kubernetes', level: 70 },
  ],
};

// Animated skill bar component
function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs text-blue-500 font-black opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

// Timeline item component
function TimelineItem({ item, index, isLast }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 w-0.5 h-full bg-slate-300 dark:bg-white/10" />
      )}

      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center z-10 ${item.type === 'current'
          ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
          : 'bg-slate-300 dark:bg-slate-700'
          }`}
      >
        <div className={`w-3 h-3 rounded-full ${item.type === 'current' ? 'bg-white' : 'bg-slate-400'
          }`} />
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.01, x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 cursor-pointer hover:border-blue-500/50 border border-white/20 dark:border-white/10 transition-all duration-300"
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-black text-blue-500 uppercase tracking-widest">
              {item.year}
            </span>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 font-outfit">
              {item.role}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 font-semibold italic">
              {item.company}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-6 h-6 text-slate-400" />
          </motion.div>
        </div>

        {/* Expandable highlights */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-6 space-y-4">
            {item.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                transition={{ delay: i * 0.1 }}
                className="text-lg text-slate-600 dark:text-slate-400 flex items-start gap-3"
              >
                <span className="text-blue-500 mt-1.5">•</span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden bg-slate-50 dark:bg-[#0f172a]">
      <SEO
        title="Resume"
        description="Experience and skills of Kyle Knudson - Data Engineering Leader specialized in AI."
      />
      <Nav />
      <div className="noise-overlay" />

      <section className="w-full max-w-5xl px-6 py-32 z-10 space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-slate-900 dark:text-white font-outfit tracking-tight">Kyle Knudson</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium">
            Minneapolis, MN |{" "}
            <a
              href="https://www.linkedin.com/in/kyle-knudson/"
              className="text-blue-500 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="mailto:kyle.knudson2015@gmail.com"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </p>

          <motion.a
            href="/Kyle_Knudson_Resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-500 text-white px-12 py-5 rounded-full shadow-2xl shadow-blue-500/30 font-black uppercase tracking-widest text-sm hover:bg-blue-400 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Interactive Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3 font-outfit"
          >
            <Briefcase className="w-8 h-8 text-blue-500" />
            Work Experience
          </motion.h3>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Skills with Animated Bars */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3 font-outfit"
          >
            <Code2 className="w-8 h-8 text-blue-500" />
            Skills & Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/20 dark:border-white/10"
            >
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white font-outfit">
                <Cpu className="w-6 h-6 text-blue-500" /> Technical
              </h4>
              <div className="space-y-6">
                {skills.technical.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/20 dark:border-white/10"
            >
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white font-outfit">
                <Cloud className="w-6 h-6 text-blue-500" /> Cloud & DevOps
              </h4>
              <div className="space-y-6">
                {skills.cloud.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3 font-outfit"
          >
            <GraduationCap className="w-8 h-8 text-blue-500" />
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                school: 'Saint Cloud State University',
                degree: 'M.S. Computer Science – AI Specialization',
                years: '2018 – 2020',
                logo: '/images/scsu.png',
              },
              {
                school: 'Montana State University',
                degree: 'B.S. Cell Biology & Neuroscience – Biomedical Specialization',
                years: '2011 – 2015',
                logo: '/images/msu.png',
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/20 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6 mb-6">
                  <img src={edu.logo} alt={edu.school} className="w-16 h-16 object-contain rounded-2xl shadow-xl" />
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white font-outfit">{edu.school}</h4>
                    <p className="text-blue-500 font-bold text-sm tracking-widest">{edu.years}</p>
                  </div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{edu.degree}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white flex items-center justify-center gap-3 font-outfit"
          >
            <Award className="w-8 h-8 text-blue-500" />
            Certifications & Engagements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Optum AI Nano-degree Mentor', icon: '🤖' },
              { title: 'Ethics in AI, Carnegie Mellon', icon: '📘' },
              { title: 'UHG Emerging Leadership Program', icon: '🚀' },
              { title: 'Coursera Google Project Management', icon: '📊' },
              { title: 'Udacity Nano-degrees: AI, Deep Learning, NLP', icon: '💡' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <p className="text-slate-700 dark:text-slate-300 font-bold text-sm tracking-tight">{cert.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}