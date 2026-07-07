import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPostsMeta } from '../data/blogPosts';
import { unlockHeroScroll } from '../utils/heroScrollLock';

interface BlogPostText {
  title: string;
  excerpt: string;
  body: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(['blog', 'blogPosts', 'common']);

  const translatedPosts = (i18n.getResourceBundle(i18n.language, 'blogPosts') ?? {}) as Record<string, BlogPostText>;
  const blogPosts = blogPostsMeta.map((meta) => ({
    ...meta,
    title: translatedPosts[meta.id].title,
    excerpt: translatedPosts[meta.id].excerpt,
  }));

  useEffect(() => {
    // Set title and meta description dynamically for blog page
    document.title = t('blog:metaTitle');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('blog:metaDescription'));
    }
  }, [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const locale = i18n.language === 'es' ? 'es-ES' : 'en-US';
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  const handleGetQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
      unlockHeroScroll();
      const element = document.getElementById('contact-section-h1j2k3l4');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-stone-900 mb-6">
            <span className="text-rose-500">{t('blog:heroHeadingAccent')}</span> {t('blog:heroHeadingSuffix')}
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t('blog:heroSubtitle')}
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-stone-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2 hover:text-rose-500 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-stone-200">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-rose-500">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-xs text-stone-500">
                        {t('common:byAuthor', { author: post.author })}
                      </span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors"
                    >
                      {t('common:readMore')}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-rose-500 to-rose-600 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('blog:ctaHeading')}
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            {t('blog:ctaParagraph')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetQuoteClick}
            className="px-8 py-4 bg-white text-rose-500 font-bold rounded-lg hover:bg-stone-100 transition-colors shadow-lg"
          >
            {t('blog:ctaButton')}
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default BlogPage;