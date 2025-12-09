import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

const Resume = () => {
  const resumeUrl = '/Sudanva-Shilannavar.pdf'

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'KLE Society\'s College of BCA, Gokak',
      year: '2024 - Present',
      description: 'Currently in 3rd Semester',
    },
  ]

  const experience = [
    {
      title: 'Digital Marketing Intern',
      company: 'AKADMIX',
      period: 'April 2025 - December 2025',
      location: 'Remote | Gokak',
      description: [
        'Managed social campaigns, optimized page performance, and contributed to marketing growth',
        'Implemented SEO strategies improving content ranking and engagement',
        'Designed visual promotional assets for campaigns',
        'Evaluated analytics to measure digital performance and optimize strategy',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'AKADMIX',
      period: 'April 2025 - December 2025',
      location: 'Remote | Gokak',
      description: [
        'Maintained and updated the official website with UI/UX enhancements',
        'Optimized user experience and accessibility for smooth functionality',
        'Performance updates: bug fixes, and cross-platform responsiveness',
        'Collaborated with developers to align business goals with application development',
      ],
    },
  ]

  const achievements = [
    '1st Place - 24-Hour Hackathon, KLE BCA Gokak (2025)',
    'General Championship Winner - Inter-KLE College of BCA IT Fest (2025)',
    'Special Achievement Award - KLE BCA Gokak (2025)',
    '1st Place at KLE Code Fest - Advanced AI Hackathon 2025, held on 1st & 2nd December, 2025',
    '1st Place at our College Hackathon (precursor to Smart India Hackathon) competing against 29 highly talented teams at KLE BCA College, Gokak',
  ]

  return (
    <PageTransition>
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Resume
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <a
            href={resumeUrl}
            download
            className="neo-button inline-flex items-center gap-3 text-lg text-indigo-600"
          >
            <FaDownload size={24} />
            Download Resume PDF
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="neo-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap size={32} className="text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold">{edu.institution}</p>
                  <p className="text-gray-600">{edu.year}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="neo-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase size={32} className="text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-600">{exp.period} | {exp.location}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="neo-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaAward size={32} className="text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">Achievements</h2>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-600 text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Resume
