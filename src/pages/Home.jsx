import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import useTypewriter from '../hooks/useTypewriter'

const Home = () => {
  const typewriterText = useTypewriter([
    'Full-Stack Web Developer',
    'Digital Marketing Intern',
    'Automation Expert',
    'Freelancer',
    'AI Enthusiast'
  ], 100, 50, 2000)

  return (
    <PageTransition>
      <SEO
        title="Sudanva Shilannavar - Full-Stack Web Developer | React, Node.js, TypeScript Expert"
        description="Professional Full-Stack Web Developer specializing in modern web applications, React, Node.js, TypeScript, automation, and AI-powered solutions. Building scalable, high-performance web applications."
        keywords="Full-Stack Developer, Web Developer, React Developer, Node.js Developer, TypeScript, JavaScript, Python, Automation, AI Development, Web Applications, Cloud Computing, API Development"
        url="/"
      />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl"
          />
        </div>

        <div className="page-container relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
                Sudanva Shilannavar
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <div className="h-20 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl text-indigo-600 font-semibold">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/projects"
                className="neo-button flex items-center gap-3 text-lg"
              >
                View Projects <FaArrowRight />
              </Link>
              <Link
                to="/resume"
                className="neo-button flex items-center gap-3 text-lg text-indigo-600"
              >
                <FaDownload /> Download Resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-16"
            >
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Building modern web applications with cutting-edge technologies,
                creating intelligent automations, and delivering exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Home
