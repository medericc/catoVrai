// app/page.tsx
import { themes } from '@/lib/data';
import ResponsiveGrid from '@/components/ResponsiveGrid';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* En-tête simple */}
      <div className="bg-ex text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Tous les Thèmes
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Explorez les sujets du Catholicisme face aux objections
            </p>
            <div className="text-blue-200 text-sm">
              {themes.length} thèmes disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <ResponsiveGrid themes={themes} />
      </div>
    </main>
  );
}
