import type { Metadata, Viewport } from 'next';
import { Fira_Sans } from 'next/font/google';
import '../../public/brand/cores.css';
import './globals.css';

const fira = Fira_Sans({ subsets: ['latin'], weight: ['400', '500', '700', '800'], variable: '--font-fira', display: 'swap' });

export const metadata: Metadata = {
  title: 'Allê Ebrahim | Experiência em Vendas',
  description: 'Site oficial de Allê Ebrahim.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#002D3C' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={fira.variable}>{children}</body></html>;
}
