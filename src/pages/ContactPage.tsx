import React from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ContactPage() {
  const { t } = useTranslation('contact');
  useDocumentMeta(t('metaTitle'), t('metaDescription'));

  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}
