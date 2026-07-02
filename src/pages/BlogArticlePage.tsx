import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

const BlogArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tips for Keeping Children Entertained During Weddings',
      excerpt: 'Discover creative and fun activities to keep children engaged throughout the wedding ceremony and reception. From interactive games to thoughtful entertainment options, learn how to ensure every child has a memorable time at your celebration. We cover everything from pre-ceremony activities to reception entertainment that keeps kids smiling throughout the day. Creating a fun environment for children not only makes them happy but also allows parents to relax and enjoy the event. Our team has gathered the best practices from dozens of successful weddings to help you plan the perfect experience.',
      date: '2024-01-15',
      author: 'Sarah',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Creating a Child-Friendly Wedding Reception',
      excerpt: 'Learn how to design your reception space and schedule to make it comfortable and enjoyable for children. A child-friendly reception starts with thoughtful planning and attention to detail. Consider creating dedicated play areas, organizing interactive activities, and planning a menu that caters to younger guests. Lighting, noise levels, and rest areas are all important factors in creating a comfortable environment. Our experts share proven strategies for transforming your reception into a family-friendly celebration. Discover how small touches can make a big difference in the overall guest experience.',
      date: '2024-01-10',
      author: 'Maria',
      image: 'https://images.unsplash.com/photo-1765947383480-8c4e1e361679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwzfHxjaGlsZCUyMGZyaWVuZGx5JTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwwfDB8fHwxNzgyODUzODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Safety First: Childcare Best Practices at Events',
      excerpt: 'Essential safety tips and best practices for ensuring children are protected and cared for during your wedding. Safety should always be the top priority when planning an event with children. From supervision strategies to emergency protocols, we cover everything you need to know. Learn about proper staff-to-child ratios, safety checks for play areas, and how to communicate emergency procedures with all caregivers. Our guide includes checklists you can use to ensure nothing is overlooked. Professional childcare providers follow strict safety standards, and we share those best practices with you.',
      date: '2024-01-05',
      author: 'Elena',
      image: 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhhdmluZyUyMGZ1bnxlbnwwfDB8fHwxNzgyODU0MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'How Professional Childcare Enhances Your Wedding Day',
      excerpt: 'Explore the benefits of hiring professional childcare services and how it allows parents to fully enjoy their celebration. Professional childcare is more than just supervision—it\'s about creating an enriching experience for children while giving parents peace of mind. When you have trained professionals caring for the children, you can focus on the moments that matter. Learn about the specific benefits of professional services, from structured activities to expert supervision. Many couples report that having professional childcare was one of the best decisions they made for their wedding day.',
      date: '2023-12-28',
      author: 'Ana',
      image: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/8f54d34b-e905-4c6e-8280-10f06155cd4e/73449c5a-5d3e-470a-b419-4ba15e2b3d25/photo-1782854185709-jjo5.png',
    },
    {
      id: 5,
      title: 'Managing Different Age Groups: A Complete Guide',
      excerpt: 'Strategies for engaging and caring for children across various age groups at your wedding event. Different ages require different approaches to entertainment and care. Toddlers need different supervision than school-age children, who have different interests than teenagers. Our comprehensive guide breaks down effective strategies for each age group. Learn how to mix age groups appropriately, create activities that appeal to multiple ages, and set up areas that work for everyone. Understanding developmental stages helps you plan activities that will be genuinely engaging.',
      date: '2023-12-20',
      author: 'Sofia',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Parent Testimonials: Real Stories from Happy Couples',
      excerpt: 'Read heartwarming stories from couples who used our childcare services and how it transformed their weddings. Hearing from real couples who have experienced our services provides valuable insight. From small intimate weddings to large celebrations, our clients share how professional childcare made their day special. These testimonials highlight the peace of mind that comes with professional supervision and the joy of watching children have fun at the reception. Many couples return to share photos and stories months after their wedding, showing the lasting impact of well-planned childcare.',
      date: '2023-12-15',
      author: 'Laura',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const articleId = id ? parseInt(id, 10) : null;
  const article = articleId ? blogPosts.find((post) => post.id === articleId) : null;

  useEffect(() => {
    // Set meta description dynamically for article page
    if (article) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `${article.title}. ${article.excerpt.substring(0, 100)}...`);
      }
    }
  }, [article]);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
            Article Not Found
          </p>
          <p className="text-stone-600 mb-8">
            Sorry, we couldn't find the blog article you're looking for. It may have been moved or deleted.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
          >
            Back to Blog
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
            Back to Blog
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
          alt={article.title}
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
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-rose-500">
                {formatDate(article.date)}
              </span>
              <span className="text-sm text-stone-600">
                by {article.author}
              </span>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none text-stone-700 space-y-6"
          >
            {article.excerpt.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Author Bio Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-stone-200"
          >
            <div className="bg-stone-50 rounded-lg p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-2">
                About the Author
              </h2>
              <p className="text-stone-600">
                {article.author} is a wedding care expert with years of experience in childcare services and family event planning. Their insights help couples create memorable celebrations that work for everyone.
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
            Ready to Learn More?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Explore more articles and insights on our blog.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors shadow-md"
          >
            View All Articles
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogArticlePage;