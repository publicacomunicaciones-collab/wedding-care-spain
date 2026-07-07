import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blogPostsMeta } from '../data/blogPosts';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface BlogPostText {
  title: string;
  excerpt: string;
  imageAlt: string;
  body: string;
}

const parseInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const renderBody = (body: string): React.ReactNode[] => {
  const blocks = body.split('\n\n').filter(Boolean);
  const elements: React.ReactNode[] = [];

  blocks.forEach((block, idx) => {
    const lines = block.split('\n').filter(Boolean);
    const isList = lines.length > 0 && lines.every((line) => line.trim().startsWith('- '));

    if (isList) {
      elements.push(
        <ul key={idx} className="list-disc pl-6 space-y-2 my-4">
          {lines.map((line, i) => (
            <li key={i}>{parseInline(line.trim().replace(/^- /, ''))}</li>
          ))}
        </ul>
      );
    } else if (block.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="text-xl font-bold text-stone-900 mt-8 mb-3">
          {block.replace('### ', '')}
        </h3>
      );
    } else if (block.startsWith('## ')) {
      elements.push(
        <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-stone-900 mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    } else {
      elements.push(
        <p key={idx} className="leading-relaxed mb-4">
          {parseInline(block)}
        </p>
      );
    }
  });

  return elements;
};

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(['blogArticle', 'blogPosts', 'common']);

  const translatedPosts = (i18n.getResourceBundle(i18n.language, 'blogPosts') ?? {}) as Record<string, BlogPostText>;
  const blogPosts = blogPostsMeta.map((meta) => ({
    ...meta,
    title: translatedPosts[meta.id].title,
    excerpt: translatedPosts[meta.id].excerpt,
    imageAlt: translatedPosts[meta.id].imageAlt,
    body: translatedPosts[meta.id].body,
  }));

  const article = slug ? blogPosts.find((post) => post.slug === slug) : null;

  useDocumentMeta(
    article ? `${article.title} | WeddingCare Barcelona` : t('blogArticle:notFoundTitle'),
    article ? article.excerpt : t('blogArticle:notFoundText'),
    article ? `/blog/${article.slug}` : '/blog'
  );

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // 404 Page
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-md"
        >
          <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
          <p className="text-2xl font-semibold text-stone-700 mb-4">
            {t('blogArticle:notFoundTitle')}
          </p>
          <p className="text-stone-600 mb-8">
            {t('blogArticle:notFoundText')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
          >
            {t('blogArticle:backToBlog')}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-stone-50 px-4 sm:px-6 lg:px-8 py-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.button
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t('blogArticle:backToBlog')}
          </motion.button>
        </div>
      </motion.div>

      {/* Article Hero Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-96 sm:h-[28rem] lg:h-[32rem] overflow-hidden bg-stone-200"
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </motion.section>

      {/* Article Content */}
      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6"
          >
            {article.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-stone-200 mb-8"
          >
            <span className="text-sm text-stone-600">
              {t('common:byAuthor', { author: article.author })}
            </span>
          </motion.div>

          {/* Article Body */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none text-stone-700"
          >
            {renderBody(article.body)}
          </motion.div>

          {/* Author Bio Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-stone-200"
          >
            <div className="bg-stone-50 rounded-lg p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-2">
                {t('blogArticle:aboutAuthor')}
              </h2>
              <p className="text-stone-600">
                {t('blogArticle:authorBioTemplate', { author: article.author })}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.article>

      {/* Back to Blog CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-stone-50 to-stone-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            {t('blogArticle:ctaHeading')}
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            {t('blogArticle:ctaParagraph')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors shadow-md"
          >
            {t('blogArticle:ctaButton')}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogArticlePage;