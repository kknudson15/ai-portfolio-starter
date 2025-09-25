import { motion } from 'framer-motion'

export default function ProjectCard({title,description,tech,link}){
  return (
    <motion.a
      href={link}
      className="group block glass rounded-2xl p-6 soft-shadow hover:scale-[1.01] transition-transform"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-md">{description}</p>
        </div>
        <div className="text-sm text-gray-400">→</div>
      </div>
      <div className="mt-4 text-xs text-gray-500">{tech.join(' • ')}</div>
    </motion.a>
  )
}