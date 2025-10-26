import Link from 'next/link'; // 👈 N'oubliez pas l'importation

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          {/* Citation */}
          <div className="flex items-center justify-center space-x-3">
            <h3 className="text-lg font-serif font-bold text-blue-100">
              &quot;La vérité vous rendra libres&quot; - Jean 8:32
            </h3>
          </div>

          {/* Liens obligatoires */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-sm text-blue-200">
            <Link // 👈 Remplacement de <a> par Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors duration-200"
            >
              Politique de confidentialité
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/mentions-legales"
              className="hover:text-white transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/cookies"
              className="hover:text-white transition-colors duration-200"
            >
              Gestion des cookies
            </Link>
            <Link // 👈 Remplacement de <a> par Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-blue-800">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} Catholicisme vs Hérésie - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}