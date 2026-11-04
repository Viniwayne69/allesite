import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TrainingPage } from '@/components/TrainingPage';
import { findTraining, trainingPages } from '@/data/treinamentos';

// Só existem as páginas listadas em src/data/treinamentos.ts; qualquer outro endereço cai no 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return trainingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const training = findTraining(slug);
  if (!training) return {};
  const title = `${training.title[0].replace(/:$/, '')} | Allê Ebrahim`;
  return { title, description: training.subtitle, openGraph: { title, description: training.subtitle, locale: 'pt_BR', type: 'website' } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const training = findTraining(slug);
  if (!training) notFound();
  return <TrainingPage training={training} />;
}
