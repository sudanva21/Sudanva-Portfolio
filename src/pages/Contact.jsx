import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        })

        const result = await response.json()
        
        if (result.success) {
          setSubmitted(true)
          setTimeout(() => {
            setFormData({ name: '', email: '', message: '' })
            setSubmitted(false)
          }, 3000)
        }
      } catch (error) {
        console.error('Form submission error:', error)
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      })
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope size={32} />,
      label: 'Email',
      value: 'sudanva7@gmail.com',
      href: 'mailto:sudanva7@gmail.com',
    },
    {
      icon: <FaWhatsapp size={32} />,
      label: 'WhatsApp',
      value: '+91 8310491208',
      href: 'https://wa.me/918310491208',
    },
    {
      icon: <FaGithub size={32} />,
      label: 'GitHub',
      value: '@sudanva21',
      href: 'https://github.com/sudanva21',
    },
    {
      icon: <FaLinkedin size={32} />,
      label: 'LinkedIn',
      value: 'Sudanva Shilannavar',
      href: 'https://www.linkedin.com/in/sudanva-shilannavar',
    },
  ]

  return (
    <PageTransition>
      <SEO
        title="Contact Sudanva Shilannavar | Hire Full-Stack Web Developer"
        description="Get in touch with Sudanva Shilannavar for web development projects, freelance opportunities, or collaborations. Available for React, Node.js, TypeScript, and full-stack development services."
        keywords="Contact Web Developer, Hire Full-Stack Developer, React Developer for Hire, Web Development Services, Freelance Developer, Software Development Contact"
        url="/contact"
      />
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Get In Touch
        </motion.h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="neo-card p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`neo-input ${errors.name ? 'border-2 border-red-500' : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`neo-input ${errors.email ? 'border-2 border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`neo-input resize-none ${errors.message ? 'border-2 border-red-500' : ''}`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="neo-button w-full flex items-center justify-center gap-3 text-lg text-indigo-600"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="neo-card p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 neo-card p-4 hover:shadow-neo-inset transition-all duration-300"
                    >
                      <div className="text-indigo-600">{info.icon}</div>
                      <div>
                        <p className="font-bold text-gray-800">{info.label}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="neo-card p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out
                  through any of the channels above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact
