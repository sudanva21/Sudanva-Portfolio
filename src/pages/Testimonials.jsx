import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aamir Yaligar',
      role: 'Founder, Akadmix',
      image: '/images/akadmix-logo.png',
      quote: 'Sudanva transformed our online presence with a responsive and elegant website. He also improved our content ranking through SEO, and the results were visible within weeks. We highly appreciate his consistency, communication, and fast delivery.',
      rating: 5,
    },
    {
      name: 'Sumedh M.',
      role: '',
      image: 'https://ui-avatars.com/api/?name=Sumedh+M&background=6366f1&color=fff&size=150&bold=true',
      quote: 'We needed workflow automation to reduce manual tasks in our business. Sudanva created a seamless solution using n8n and API integrations. Today, our reporting, email follow-ups, and onboarding run automatically. The time and cost savings have been huge for us.',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      role: '',
      image: 'https://ui-avatars.com/api/?name=Neha+Sharma&background=f59e0b&color=fff&size=150&bold=true',
      quote: 'Sudanva built our portfolio website with a clean design, fast performance, and great SEO. The website now brings regular inquiries and has helped us get new clients. His technical knowledge, patience, and support after delivery were excellent.',
      rating: 5,
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
          Testimonials
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Here's what clients and collaborators have to say about working with me
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="neo-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full shadow-neo"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Testimonials
