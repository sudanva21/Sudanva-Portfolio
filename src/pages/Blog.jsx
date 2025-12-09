import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blog'

const Blog = () => {
  return (
    <PageTransition>
      <SEO
        title="Web Development Blog | React, TypeScript, AI, Performance Optimization"
        description="Read expert articles on web development, React, TypeScript, AI-powered development, performance optimization, accessibility, and modern CSS techniques. Stay updated with latest trends."
        keywords="Web Development Blog, React Tutorial, TypeScript Guide, AI Development, Performance Optimization, CSS Techniques, Web Accessibility, Full-Stack Development, JavaScript"
        url="/blog"
      />
      <div className="page-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Blog
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="neo-card p-8 hover:shadow-neo-inset transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neo-light shadow-neo-sm rounded-lg text-sm text-indigo-600 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
              </Link>

              <div className="flex items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all duration-300"
              >
                Read More <FaArrowRight />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Blog
