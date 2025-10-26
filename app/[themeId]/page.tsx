import { notFound } from 'next/navigation';
import { themes } from '@/lib/data';
import Link from 'next/link'

export default async function ThemePage({ params }: { params: Promise<{ themeId: string }> }) {
  // ✅ On "unwrap" la promesse
  const { themeId } = await params;

  // ✅ On cherche le thème correspondant
  const theme = themes.find((t) => t.id === themeId);

  // Si non trouvé → 404
  if (!theme) return notFound();

   return (
    <main className="min-h-screen bg-slate-50">
      {/* En-tête */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">{theme.titre}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">{theme.description}</p>
        </div>
      </div>

      {/* Liste des domaines */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {theme.domaines.map((domaine) => (
          <Link
            key={domaine.id}
            href={`/${themeId}/${domaine.id}`}
            className="bg-white rounded-lg border border-blue-200 shadow hover:shadow-lg hover:bg-blue-50 transition p-6 flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{domaine.titre}</h2>
            <p className="text-slate-600 text-sm">{domaine.questions.length} question{domaine.questions.length > 1 ? 's' : ''}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
