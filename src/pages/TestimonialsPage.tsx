import React from 'react';
import { useTranslation } from 'react-i18next';
import Testimonials from '../components/Testimonials';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function TestimonialsPage() {
  const { t } = useTranslation('testimonials');
  useDocumentMeta(t('metaTitle'), t('metaDescription'));

  return (
    <main className="min-h-screen">
      <Testimonials />
    </main>
  );
}
