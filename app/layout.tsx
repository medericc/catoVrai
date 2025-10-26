// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Catholicisme vs Hérésie',
  description: 'Comprendre la foi catholique face aux objections',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-50 text-slate-800">
        <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center p-4">
              {/* Logo/Titre */}
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="bg-white text-blue-900 p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl font-serif font-bold">
                      Catholicisme vs Hérésie
                    </h1>
                    <p className="text-blue-200 text-xs hidden sm:block">
                      Vérité catholique à travers les siècles
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <Navigation />
            </div>
          </div>
        </header>
        <main className="flex-1">
        {children}</main> <Footer />
      </body>
    </html>
  );
}