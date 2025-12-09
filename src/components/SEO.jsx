import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Sudanva Shilannavar - Full-Stack Web Developer',
  description = 'Full-Stack Web Developer specializing in modern web applications, automations, and AI-powered solutions. Expert in React, Node.js, TypeScript, and cloud technologies.',
  keywords = 'Full-Stack Developer, Web Developer, React Developer, Node.js, TypeScript, JavaScript, Automation Expert, AI Development, Cloud Computing, Web Development Services',
  author = 'Sudanva Shilannavar',
  image = 'https://sudanva.vercel.app/favicon.png',
  url = 'https://sudanva.vercel.app',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  article = false
}) => {
  const siteUrl = 'https://sudanva.vercel.app'
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': article ? 'Article' : 'WebPage',
    headline: title,
    description: description,
    image: fullImage,
    url: fullUrl,
    author: {
      '@type': 'Person',
      name: author,
      url: siteUrl,
      jobTitle: 'Full-Stack Web Developer',
      knowsAbout: ['Web Development', 'React', 'Node.js', 'TypeScript', 'Automation', 'AI'],
      sameAs: [
        'https://github.com/sudanva',
        'https://linkedin.com/in/sudanva'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    }
  }

  if (article && tags.length > 0) {
    structuredData.keywords = tags.join(', ')
    structuredData.articleSection = section || tags[0]
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sudanva Shilannavar',
    url: siteUrl,
    image: fullImage,
    jobTitle: 'Full-Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    description: description,
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Web Development',
      'Automation',
      'AI Development',
      'Cloud Computing'
    ],
    sameAs: [
      'https://github.com/sudanva',
      'https://linkedin.com/in/sudanva'
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sudanva Shilannavar - Portfolio',
    url: siteUrl,
    description: 'Professional portfolio showcasing web development projects, blog posts, and services',
    author: {
      '@type': 'Person',
      name: 'Sudanva Shilannavar'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Sudanva Shilannavar" />
      <meta property="og:locale" content="en_US" />

      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && section && (
        <meta property="article:section" content={section} />
      )}
      {article && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@sudanva" />
      <meta name="twitter:site" content="@sudanva" />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {!article && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(personSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
        </>
      )}
    </Helmet>
  )
}

export default SEO
