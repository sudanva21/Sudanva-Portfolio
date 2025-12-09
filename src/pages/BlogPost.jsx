import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCalendar, FaClock } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blog'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <PageTransition>
        <SEO
          title="Blog Post Not Found - Sudanva Shilannavar"
          description="The requested blog post could not be found."
          url={`/blog/${slug}`}
        />
        <div className="page-container text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link to="/blog" className="neo-button inline-flex items-center gap-2">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </PageTransition>
    )
  }

  const publishedDate = new Date(post.date).toISOString()

  return (
    <PageTransition>
      <SEO
        title={`${post.title} | Sudanva Shilannavar`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, web development, programming, tutorial`}
        url={`/blog/${post.slug}`}
        type="article"
        article={true}
        publishedTime={publishedDate}
        section={post.tags[0]}
        tags={post.tags}
        author={post.author || 'Sudanva Shilannavar'}
      />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all duration-300"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </motion.div>

        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="neo-card p-8 md:p-12"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neo-light shadow-neo-sm rounded-lg text-sm text-indigo-600 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-lg">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-800">{children}</strong>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">{children}</code>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </div>
    </PageTransition>
  )
}

export default BlogPost
