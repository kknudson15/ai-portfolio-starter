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
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0071e3] to-[#5856d6] rounded-full"
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
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 w-0.5 h-full bg-gradient-to-b from-[#0071e3] to-gray-300 dark:to-gray-600" />
      )}

      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${item.type === 'current'
          ? 'bg-gradient-to-r from-[#0071e3] to-[#5856d6]'
          : 'bg-gray-300 dark:bg-gray-600'
          }`}
      >
        <div className={`w-2 h-2 rounded-full ${item.type === 'current' ? 'bg-white' : 'bg-white dark:bg-gray-800'
          }`} />
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.01, x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="glass rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow"
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="text-sm font-bold text-[#0071e3] dark:text-[#5ac8fa]">
              {item.year}
            </span>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
              {item.role}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.company}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>

        {/* Expandable highlights */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {item.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
              >
                <span className="text-[#0071e3] mt-1">•</span>
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
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
      <SEO
        title="Resume"
        description="Experience and skills of Kyle Knudson - Data Engineering Leader specialized in AI."
      />
      <Nav />

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-[#ff9a9e] via-[#fad0c4] to-[#a1c4fd] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      <section className="w-full max-w-5xl px-6 py-20 z-10 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Kyle Knudson</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Minneapolis, MN |{" "}
            <a
              href="https://www.linkedin.com/in/kyle-knudson/"
              className="text-[#0071e3] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="mailto:kyle.knudson2015@gmail.com"
              className="text-[#0071e3] hover:underline"
            >
              Email
            </a>
          </p>

          {/* Download Resume Button with hover effect */}
          <motion.a
            href="/Kyle_Knudson_Resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,113,227,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white px-8 py-3 rounded-full shadow-md font-semibold"
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
            className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2"
          >
            <Briefcase className="w-6 h-6 text-[#0071e3]" />
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
            className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2"
          >
            <Code2 className="w-6 h-6 text-[#0071e3]" />
            Skills & Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Cpu className="w-5 h-5 text-[#0071e3]" /> Technical
              </h4>
              <div className="space-y-4">
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
              className="glass rounded-2xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Cloud className="w-5 h-5 text-[#0071e3]" /> Cloud & DevOps
              </h4>
              <div className="space-y-4">
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
            className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-6 h-6 text-[#0071e3]" />
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="glass rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={edu.logo} alt={edu.school} className="w-12 h-12 object-contain rounded-md shadow-sm" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.school}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.years}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
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
            className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2"
          >
            <Award className="w-6 h-6 text-[#0071e3]" />
            Certifications & Engagements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="glass rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">{cert.title}</p>
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