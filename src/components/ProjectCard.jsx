import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, github, live, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="neo-card p-6 h-full flex flex-col"
    >
      <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-neo-inset">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neo-light shadow-neo-sm rounded-lg text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-button flex items-center gap-2 flex-1 justify-center"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-button flex items-center gap-2 flex-1 justify-center text-indigo-600"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
