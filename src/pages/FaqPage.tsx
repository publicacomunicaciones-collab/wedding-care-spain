import React from 'react';
import { useTranslation } from 'react-i18next';
import FAQ from '../components/FAQ';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function FaqPage() {
  const { t } = useTranslation('faq');
  useDocumentMeta(t('metaTitle'), t('metaDescription'));

  return (
    <main className="min-h-screen">
      <FAQ />
    </main>
  );
}
