import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LocaleSync from './components/LocaleSync';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <LocaleSync />
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Spanish (default, unprefixed) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nuestra-historia" element={<AboutPage />} />
          <Route path="/testimonios" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          {/* English */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/our-story" element={<AboutPage />} />
          <Route path="/en/testimonials" element={<TestimonialsPage />} />
          <Route path="/en/faq" element={<FaqPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/blog" element={<BlogPage />} />
          <Route path="/en/blog/:slug" element={<BlogArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
