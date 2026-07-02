import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tips for Keeping Children Entertained During Weddings',
      excerpt: 'Discover creative and fun activities to keep children engaged throughout the wedding ceremony and reception.',
      date: '2024-01-15',
      author: 'Sarah',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Creating a Child-Friendly Wedding Reception',
      excerpt: 'Learn how to design your reception space and schedule to make it comfortable and enjoyable for children.',
      date: '2024-01-10',
      author: 'Maria',
      image: 'https://images.unsplash.com/photo-1765947383480-8c4e1e361679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwzfHxjaGlsZCUyMGZyaWVuZGx5JTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwwfDB8fHwxNzgyODUzODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Safety First: Childcare Best Practices at Events',
      excerpt: 'Essential safety tips and best practices for ensuring children are protected and cared for during your wedding.',
      date: '2024-01-05',
      author: 'Elena',
      image: 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhhdmluZyUyMGZ1bnxlbnwwfDB8fHwxNzgyODU0MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'How Professional Childcare Enhances Your Wedding Day',
      excerpt: 'Explore the benefits of hiring professional childcare services and how it allows parents to fully enjoy their celebration.',
      date: '2023-12-28',
      author: 'Ana',
      image: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/8f54d34b-e905-4c6e-8280-10f06155cd4e/73449c5a-5d3e-470a-b419-4ba15e2b3d25/photo-1782854185709-jjo5.png',
    },
    {
      id: 5,
      title: 'Managing Different Age Groups: A Complete Guide',
      excerpt: 'Strategies for engaging and caring for children across various age groups at your wedding event.',
      date: '2023-12-20',
      author: 'Sofia',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Parent Testimonials: Real Stories from Happy Couples',
      excerpt: 'Read heartwarming stories from couples who used our childcare services and how it transformed their weddings.',
      date: '2023-12-15',
      author: 'Laura',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  useEffect(() => {
    // Set meta description dynamically for blog page
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Wedding childcare tips, safety practices, and parent testimonials. Expert advice on creating child-friendly celebrations in Barcelona.');
    }
  }, []);

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
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleGetQuoteClick = () => {
    navigate('/');
    setTimeout(() => {
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
            <span className="text-rose-500">Wedding</span> Care Blog
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Expert advice and insights on childcare services, wedding planning, and creating memorable celebrations for families.
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
                        by {post.author}
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
                      Read More
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
            Ready to Plan Your Wedding?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Let us handle the childcare so you can focus on celebrating with your loved ones.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetQuoteClick}
            className="px-8 py-4 bg-white text-rose-500 font-bold rounded-lg hover:bg-stone-100 transition-colors shadow-lg"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default BlogPage;