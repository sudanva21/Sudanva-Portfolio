import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

const Certifications = () => {
  const certifications = [
    {
      title: 'AI Tools Workshop',
      provider: 'be10x',
      date: 'August 10th, 2025',
      description: 'AI tools and ChatGPT workshop covering: Create presentations using AI in under 5 min, Analyse data using AI in under 30 min, Code and Debug using AI in under 10 min',
      image: '/certificates/ai-tools-workshop.jpg',
      verify: 'https://www.linkedin.com/in/sudanva-shilannavar/details/certifications/',
    },
    {
      title: 'Certificate Course and Workshop on Back End Development and Github Copilot',
      provider: 'KLE Society\'s College of BCA Gokak (Seminarroom Education)',
      date: 'July 23-31, 2025',
      description: '54-hour comprehensive course on Backend Development and GitHub Copilot. Reg. No: U15EW24S0124',
      image: '/certificates/backend-development.jpg',
      verify: 'https://www.linkedin.com/in/sudanva-shilannavar/details/certifications/',
    },
    {
      title: 'Certificate Course on Front End Development',
      provider: 'KLE Society\'s College of BCA Gokak (Seminarroom Education)',
      date: 'Academic Year 2024-2025',
      description: '42-hour comprehensive course on Front End Development. Reg. No: U15EW24S0124',
      image: '/certificates/frontend-development.jpg',
      verify: 'https://www.linkedin.com/in/sudanva-shilannavar/details/certifications/',
    },
    {
      title: 'Certificate Course in UI/UX Design',
      provider: 'KLE Society\'s College of BCA Gokak (Seminarroom Education)',
      date: 'Academic Year 2024-2025',
      description: '42-hour course covering UI/UX Design principles and best practices. Reg. No: U9EW24S0124',
      image: '/certificates/uiux-design.jpg',
      verify: 'https://www.linkedin.com/in/sudanva-shilannavar/details/certifications/',
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
          Certifications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Professional certifications and continuous learning achievements
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="neo-card p-6"
            >
              <div className="mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover rounded-xl shadow-neo mb-4"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="text-indigo-600 flex-shrink-0">
                  <FaAward size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-1">
                    {cert.provider}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{cert.date}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={cert.image}
                  download
                  className="neo-button flex items-center gap-2 flex-1 justify-center text-sm"
                >
                  <FaDownload /> Download
                </a>
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button flex items-center gap-2 flex-1 justify-center text-sm text-indigo-600"
                >
                  <FaExternalLinkAlt /> Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Certifications
