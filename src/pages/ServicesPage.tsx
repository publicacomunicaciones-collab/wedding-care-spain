import React from 'react';
import { useTranslation } from 'react-i18next';
import Services from '../components/Services';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ServicesPage() {
  const { t } = useTranslation('services');
  useDocumentMeta(t('metaTitle'), t('metaDescription'), '/servicios');

  return (
    <main className="min-h-screen">
      <Services />
    </main>
  );
}
