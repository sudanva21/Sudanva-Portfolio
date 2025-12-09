import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaPython,
  FaJs,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiVercel,
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs size={40} />, level: 90 },
        { name: 'Python', icon: <FaPython size={40} />, level: 85 },
        { name: 'Java', icon: <FaDatabase size={40} />, level: 80 },
        { name: 'TypeScript', icon: <FaJs size={40} />, level: 85 },
      ],
    },
    {
      name: 'Web Technologies',
      skills: [
        { name: 'React.js', icon: <FaReact size={40} />, level: 90 },
        { name: 'Node.js', icon: <FaNodeJs size={40} />, level: 85 },
        { name: 'Express.js', icon: <SiExpress size={40} />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, level: 95 },
        { name: 'Vite', icon: <SiVite size={40} />, level: 85 },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={40} />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, level: 80 },
        { name: 'MySQL', icon: <FaDatabase size={40} />, level: 80 },
        { name: 'Supabase', icon: <SiSupabase size={40} />, level: 80 },
      ],
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt size={40} />, level: 90 },
        { name: 'GitHub', icon: <FaGithub size={40} />, level: 90 },
        { name: 'Firebase', icon: <SiFirebase size={40} />, level: 85 },
        { name: 'Vercel', icon: <SiVercel size={40} />, level: 85 },
        { name: 'N8N', icon: <FaDatabase size={40} />, level: 75 },
      ],
    },
    {
      name: 'Core CS Concepts',
      skills: [
        { name: 'DSA', icon: <FaDatabase size={40} />, level: 85 },
        { name: 'OOP', icon: <FaJs size={40} />, level: 85 },
        { name: 'DBMS', icon: <FaDatabase size={40} />, level: 80 },
        { name: 'Operating Systems', icon: <FaDatabase size={40} />, level: 75 },
      ],
    },
  ]

  return (
    <PageTransition>
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="neo-card p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.name}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="neo-card p-6 text-center"
                  >
                    <div className="flex justify-center mb-4 text-indigo-600">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-4">{skill.name}</h3>

                    <div className="w-full bg-neo-light shadow-neo-inset rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Skills
