import React from 'react';
import { useTranslation } from 'react-i18next';
import About from '../components/About';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function AboutPage() {
  const { t } = useTranslation('about');
  useDocumentMeta(t('metaTitle'), t('metaDescription'));

  return (
    <main className="min-h-screen">
      <About />
    </main>
  );
}
