import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaRocket, FaHeadset, FaClock, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const Services = () => {
  const portfolioPackages = [
    {
      name: 'Starter Portfolio',
      price: 'Contact for Pricing',
      description: 'Perfect for individuals starting their professional journey',
      features: [
        'Single-page responsive design',
        'About, Projects, and Contact sections',
        'Mobile-friendly layout',
        'Basic SEO optimization',
        'Hosting setup on Vercel',
        '2 rounds of revisions',
        'Fast delivery',
      ],
      popular: false,
    },
    {
      name: 'Professional Portfolio',
      price: 'Contact for Pricing',
      description: 'Comprehensive portfolio for established professionals',
      features: [
        'Multi-page website with React',
        'Blog with CMS integration',
        'Project showcase with filters',
        'Contact form with validation',
        'Advanced animations',
        'Full SEO optimization',
        'Performance optimization',
        'Analytics integration',
        'Support after delivery',
        'Clear timeline',
      ],
      popular: true,
    },
    {
      name: 'Custom Web App Portfolio',
      price: 'Contact for Pricing',
      description: 'Full-stack portfolio with custom functionality',
      features: [
        'Custom functionality',
        'Database integration',
        'User authentication',
        'Admin dashboard',
        'API development',
        'Third-party integrations',
        'Scalable architecture',
        'Documentation included',
        'Ongoing support available',
      ],
      popular: false,
    },
  ]

  const mainServices = [
    {
      title: 'Full-Stack Web Applications',
      description: 'Custom web applications built with modern technologies',
      icon: '🚀',
      features: [
        'Dashboard systems',
        'Custom business logic',
        'Role-based authentication',
        'Payment integration',
        'Data analytics & reporting',
        'REST API development',
        'MongoDB, Express, React, Node.js',
        'Scalable architecture',
      ],
    },
    {
      title: 'Automation Workflows',
      description: 'Connect apps, remove manual work, and boost productivity',
      icon: '🤖',
      features: [
        'Lead capturing automation',
        'Email follow-up flows',
        'WhatsApp notifications',
        'Spreadsheet automation',
        'n8n workflow builder',
        'API integrations',
        'AI-powered automations',
        'Custom triggers & actions',
      ],
    },
    {
      title: 'Landing Pages & Event Websites',
      description: 'High-converting pages for events, festivals, and campaigns',
      icon: '🪧',
      features: [
        'Event registration systems',
        'Leaderboards & scoring',
        'Ticketing & booking pages',
        'Festival websites',
        'Hackathon platforms',
        'Responsive design',
        'SEO optimized',
        'Analytics integration',
      ],
    },
    {
      title: 'Tournament Platforms',
      description: 'Complete tournament management solutions',
      icon: '🎯',
      features: [
        'Tournament registration',
        'Bracket systems',
        'Scheduling & management',
        'Live scoreboards',
        'Real-time results',
        'Player management',
        'Admin controls',
        'Mobile responsive',
      ],
    },
    {
      title: 'Admin Dashboards',
      description: 'Powerful admin panels for data management',
      icon: '🔐',
      features: [
        'User management systems',
        'Role-based access control',
        'CRUD operations',
        'Data visualization',
        'Export & reporting',
        'Activity logs',
        'Analytics dashboard',
        'Secure authentication',
      ],
    },
    {
      title: 'SEO & Performance Optimization',
      description: 'Improve rankings, speed, and user experience',
      icon: '📊',
      features: [
        'On-page SEO optimization',
        'Website content optimization',
        'Page speed optimization',
        'Core Web Vitals improvement',
        'Social media integration',
        'Meta tags & schema markup',
        'Mobile optimization',
        'Performance auditing',
      ],
    },
  ]

  const guarantees = [
    {
      icon: <FaRocket size={32} />,
      title: 'Fast Delivery',
      description: 'Clear timelines with on-time project delivery',
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: '2 Rounds of Revisions',
      description: 'Refinements included to ensure satisfaction',
    },
    {
      icon: <FaHeadset size={32} />,
      title: 'Support After Delivery',
      description: 'Ongoing assistance to keep your project running smoothly',
    },
    {
      icon: <FaClock size={32} />,
      title: 'Quality Guaranteed',
      description: 'Clean code, best practices, and performance optimized',
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
          Services & Packages
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Portfolio Website Packages
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioPackages.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`neo-card p-8 flex flex-col ${
                  service.popular ? 'ring-4 ring-indigo-600' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-lg mb-4 text-center">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <div className="text-2xl font-bold text-indigo-600 mb-4">
                  {service.price}
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`neo-button w-full flex items-center justify-center gap-2 ${
                    service.popular ? 'text-indigo-600' : ''
                  }`}
                >
                  Get Started <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Professional Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Complete solutions for your business needs. Contact me for custom pricing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + 0.1 * index }}
                className="neo-card p-6"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + 0.1 * index }}
                className="neo-card p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-indigo-600">
                  {guarantee.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center neo-card p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Every business is unique. Let's discuss your specific needs and create
            a tailored solution that perfectly fits your requirements.
          </p>
          <Link
            to="/contact"
            className="neo-button inline-flex items-center gap-2 text-indigo-600"
          >
            Schedule a Consultation <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default Services
