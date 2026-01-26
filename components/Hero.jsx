import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Exploring the future of AI — building thoughtful systems.
          </motion.h1>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl"
          >
            I design and ship production-ready AI infrastructure and products that help teams make smarter decisions. This portfolio highlights select projects, writing, and talks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="/Kyle_Knudson_Resume.pdf"
              className="inline-block px-4 py-2 rounded-md glass soft-shadow text-sm font-medium text-gray-900 dark:text-white"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-block px-4 py-2 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="glass soft-shadow rounded-2xl overflow-hidden">
            <img
              src="/images/hero-visual.png"
              alt="AI and data engineering visualization with flowing neural network patterns"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
