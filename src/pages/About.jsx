import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'

const About = () => {
  return (
    <PageTransition>
      <SEO
        title="About Sudanva Shilannavar | Full-Stack Developer Journey & Expertise"
        description="Learn about Sudanva Shilannavar, a passionate Full-Stack Web Developer with expertise in React, Node.js, TypeScript, and modern web technologies. Discover my journey, skills, and approach to building exceptional web applications."
        keywords="About Sudanva, Full-Stack Developer Bio, Web Developer Experience, React Expert, Node.js Developer, Programming Skills, Developer Portfolio"
        url="/about"
      />
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          About Me
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-card p-8 mb-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-neo flex-shrink-0">
              <img
                src="/images/sudanva-portrait.jpg"
                alt="Sudanva Shilannavar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hello, I'm Sudanva Shilannavar
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-2">
                A passionate Full-Stack Web Developer with a deep focus on creating
                innovative solutions that bridge technology and real-world problems.
              </p>
              <p className="text-gray-500 text-md">
                📍 Gokak, Belagavi, Karnataka
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="neo-card p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">My Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I am dedicated to building cutting-edge AI-powered applications, intelligent
              automations, and full-stack solutions that empower businesses and individuals
              to achieve more with less effort.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My goal is to combine modern technologies with creative problem-solving to
              deliver high-quality, performant, and scalable applications that make a
              lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="neo-card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What I Value</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 neo-card rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Quality</h4>
                <p className="text-gray-600">
                  Every line of code matters. I strive for excellence in everything I build.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 neo-card rounded-2xl flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Performance</h4>
                <p className="text-gray-600">
                  Speed and efficiency are not optional. I optimize for the best user experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 neo-card rounded-2xl flex items-center justify-center text-3xl">
                  💡
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600">
                  Constantly learning and implementing the latest technologies and best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default About
