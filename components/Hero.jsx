import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >Exploring the future of AI — building thoughtful systems.</motion.h1>

          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 max-w-xl"
          >I design and ship production-ready AI infrastructure and products that help teams make smarter decisions. This portfolio highlights select projects, writing, and talks.</motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a href="/resume.pdf" className="inline-block px-4 py-2 rounded-md glass soft-shadow text-sm font-medium">Download Resume</a>
            <a href="#projects" className="inline-block px-4 py-2 rounded-md text-sm font-medium border border-gray-200">View Projects</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="glass soft-shadow rounded-2xl p-6 h-72 md:h-56 flex items-center justify-center">
            {/* placeholder for hero visual: replace with an SVG or image */}
            <div className="text-center text-gray-500">Hero visual — AI network / diagram</div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
