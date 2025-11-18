import { notFound } from 'next/navigation';
import { themes } from '@/lib/data';
import Link from 'next/link';

export default async function ThemePage({ params }: { params: Promise<{ themeId: string }> }) {
  const { themeId } = await params;

  const theme = themes.find((t) => t.id === themeId);

  if (!theme) return notFound();

  const mot = theme.titre.toLowerCase().includes('catholique') ? 'réponse' : 'objection';

  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- HEADER --- */}
      <div className="bg-ex text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">{theme.titre}</h1>
          <p className="text-accent-light text-lg max-w-2xl mx-auto">{theme.description}</p>
        </div>
      </div>

      {/* --- DOMAINES --- */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(theme.domaines ?? []).map((domaine) => (
          <Link
            key={domaine.id}
            href={`/${themeId}/${domaine.id}`}
            className="
              bg-white 
              rounded-lg 
              border border-card-border 
              shadow 
              hover:shadow-lg 
              hover:bg-accent-light 
              transition
              p-6 
              flex 
              flex-col 
              items-center 
              text-center
            "
          >
            <h2 className="text-xl font-semibold text-neufcent mb-2">
              {domaine.titre}
            </h2>

            <p className="text-neufcent  text-sm">
              {(domaine.questions?.length ?? 0)} {mot}
              {(domaine.questions?.length ?? 0) > 1 ? 's' : ''}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
