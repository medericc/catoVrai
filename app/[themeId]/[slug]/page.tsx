import { notFound } from 'next/navigation';
import { themes } from '@/lib/data';
import ExpandableQuestion from '@/components/ExpandableText';
import Link from 'next/link';

interface Props {
  params: Promise<{ themeId: string; slug: string }>;
}

export default async function DomainePage({ params }: Props) {
  const { themeId, slug } = await params;

  const theme = themes.find((t) => t.id === themeId);
  if (!theme) return notFound();

 const domaine = theme.domaines?.find((d) => d.id === slug);
if (!domaine) return notFound();


  // Texte d’introduction selon le thème parent
  const getContextText = (themeId: string) => {
    switch (themeId) {
      case 'protestants':
        return "Au XVIe siècle, la Réforme protestante a remis en question certains aspects de la doctrine catholique. Explorez les réponses aux objections les plus courantes, fondées sur l'Écriture et la Tradition.";
      case 'catholique':
        return "Approfondissez votre compréhension de la foi catholique à travers ses doctrines, ses sacrements et sa riche tradition spirituelle.";
      case 'paiens':
        return "Dialogue avec les chercheurs de vérité et réponse aux questions fondamentales sur Dieu, l'Église et la raison.";
      default:
        return "Explorez les réponses aux questions sur la foi catholique.";
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">

      {/* Lien retour */}
      <nav className="mb-8">
        <Link 
          href={`/${themeId}`} 
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à {theme.titre}
        </Link>
      </nav>

      {/* Titre et description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-blue-900 mb-4">
          {domaine.titre}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {getContextText(theme.id)}
        </p>
      </div>

     {/* Liste des questions */}
<div className="space-y-6">
  {(domaine.questions ?? []).map((question) => (
    <ExpandableQuestion
      key={question.id}
      question={question.question}
      reponse={question.reponse}
      scripture={question.scripture}
    />
  ))}
</div>

{/* Pied de page */}
<div className="mt-12 text-center">
  <p className="text-slate-500 text-sm">
    {(domaine.questions?.length ?? 0)} question
    {(domaine.questions?.length ?? 0) > 1 ? 's' : ''} dans ce domaine
  </p>
</div>

    </main>
  );
}



export function generateStaticParams() {
  // Génère les routes statiques pour chaque domaine (si présents)
  return themes.flatMap((theme) =>
    (theme.domaines ?? []).map((domaine) => ({
      themeId: theme.id,
      slug: domaine.id,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { themeId, slug } = await params;
  const theme = themes.find((t) => t.id === themeId);
  const domaine = theme?.domaines?.find((d) => d.id === slug);

  return {
    title: domaine
      ? `${domaine.titre} - ${theme?.titre} | Catholicisme vs Objections`
      : 'Domaine non trouvé',
  };
}

