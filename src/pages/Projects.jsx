import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter))

  return (
    <PageTransition>
      <SEO
        title="Web Development Projects | React, Node.js, Full-Stack Applications"
        description="Explore Sudanva Shilannavar's portfolio of web development projects. From modern React applications to full-stack solutions, automation tools, and AI-powered web apps. View live demos and case studies."
        keywords="Web Development Projects, React Projects, Full-Stack Portfolio, Node.js Applications, JavaScript Projects, TypeScript Projects, Web App Development, Portfolio"
        url="/projects"
      />
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`neo-button capitalize ${
                filter === tag ? 'text-indigo-600 shadow-neo-inset' : ''
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Projects
